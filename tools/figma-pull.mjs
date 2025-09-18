#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const manifestPath = path.join(root, 'src', 'figma', 'manifest.json');
const outAssets = path.join(root, 'src', 'assets', 'figma');
const outCode = path.join(root, 'src', 'components', 'figma');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error('Missing FIGMA_TOKEN env var. Create a personal access token in Figma and re-run.');
  process.exit(1);
}

if (!fs.existsSync(manifestPath)) {
  console.error('Missing manifest at src/figma/manifest.json');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const fileKey = manifest.file || process.env.FIGMA_FILE_KEY;
if (!fileKey) {
  console.error('Missing file key in manifest.file or FIGMA_FILE_KEY.');
  process.exit(1);
}

fs.mkdirSync(outAssets, { recursive: true });
fs.mkdirSync(outCode, { recursive: true });

const api = async (url, opts = {}) => {
  const res = await fetch(url, {
    ...opts,
    headers: {
      'X-FIGMA-TOKEN': FIGMA_TOKEN,
      ...(opts.headers || {})
    }
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res;
};

const getNode = async (nodeId) => {
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;
  const res = await api(url);
  return res.json();
};

const getFile = async () => {
  const url = `https://api.figma.com/v1/files/${fileKey}`;
  const res = await api(url);
  return res.json();
};

const getImages = async (ids, opts = {}) => {
  const params = new URLSearchParams({
    ids: ids.join(','),
    format: 'png',
    use_absolute_bounds: 'true',
    ...opts,
  });
  const url = `https://api.figma.com/v1/images/${fileKey}?${params.toString()}`;
  const res = await api(url);
  return res.json();
};

const sanitize = (s) => s.replace(/[^a-z0-9-_]/gi, '-');

// Walk the whole document tree
const walkAll = (root, visit) => {
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    if (!n) continue;
    visit(n);
    if (n.children) stack.push(...n.children);
  }
};

const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });

const download = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image download failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return buf;
};

const main = async () => {
  const file = await getFile();
  const doc = file?.document;
  if (!doc) throw new Error('File document not found');

  // Build index by name for easy lookup
  const byName = new Map();
  walkAll(doc, (n) => {
    if (n.name) {
      const arr = byName.get(n.name) || [];
      arr.push(n);
      byName.set(n.name, arr);
    }
  });

  // Fill missing nodeIds by name
  for (const item of manifest.items || []) {
    if (!item.nodeId && item.name) {
      const match = byName.get(item.name)?.[0];
      if (match?.id) item.nodeId = match.id;
    }
  }

  // Process each item: export PNG via /images, scale to target size, save file
  for (const item of manifest.items || []) {
    const { name, nodeId } = item;
    if (!nodeId) {
      console.warn(`Skipping ${name}: missing nodeId`);
      continue;
    }
    const safe = sanitize(name || nodeId);
    console.log(`Exporting ${safe} (${nodeId})...`);

    // Determine target folders and sizes
    const isBig = /^imagens=/i.test(name || '');
    const isThumb = /^thumbs=/i.test(name || '');
    const outDir = isBig ? path.join(root, 'src', 'assets', 'figma', 'big') : isThumb ? path.join(root, 'src', 'assets', 'figma', 'thumbs') : outAssets;
    ensureDir(outDir);

    const idx = (name.match(/(\d+)/)?.[1] || '').padStart(2, '0');
    const outPng = path.join(outDir, `${idx || safe}.png`);

    // Get node to compute scale based on desired width
    const data = await getNode(nodeId);
    const node = data?.nodes?.[nodeId]?.document;
    if (!node) {
      console.warn(`Node not found: ${nodeId}`);
      continue;
    }

    // Save raw for reference
    fs.writeFileSync(path.join(outCode, `${safe}.node.json`), JSON.stringify(node, null, 2));

    // Target widths from requisitos
    const targetW = isBig ? 1440 : isThumb ? 98 : 1440;
    const targetH = isBig ? 970 : isThumb ? 78 : undefined;
    const abs = node.absoluteBoundingBox || { width: targetW };
    const scale = abs?.width ? Math.max(1, targetW / abs.width) : 1;

    // Get image URL and download
    const imgRes = await getImages([nodeId], { format: 'png', scale: String(scale) });
    const url = imgRes?.images?.[nodeId];
    if (!url) {
      console.warn(`No image URL for ${name} (${nodeId})`);
      continue;
    }
    const buf = await download(url);

    // Resize to exact target size if specified
    let final = buf;
    if (targetW && targetH) {
      final = await sharp(buf).resize(targetW, targetH, { fit: 'cover' }).png({ quality: 90 }).toBuffer();
    } else if (targetW) {
      final = await sharp(buf).resize(targetW, null, { fit: 'inside' }).png({ quality: 90 }).toBuffer();
    }
    fs.writeFileSync(outPng, final);

    // Basic TSX scaffold (kept for reference)
    const tsx = `import React from 'react';
// Auto-generated scaffold from Figma node ${nodeId}
export default function ${safe.replace(/^[^a-zA-Z_$]|[^\w$]/g, '_')}() {
  return <div data-figma-node="${nodeId}" />;
}
`;
    fs.writeFileSync(path.join(outCode, `${safe}.tsx`), tsx);
  }

  console.log('Done. Assets in src/assets/figma (big, thumbs) and scaffolds in src/components/figma');
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
