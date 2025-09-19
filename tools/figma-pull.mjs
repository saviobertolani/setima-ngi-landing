#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

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

const sanitize = (s) => s.replace(/[^a-z0-9-_]/gi, '-');

const main = async () => {
  for (const item of manifest.items || []) {
    const { name, nodeId } = item;
    if (!nodeId) continue;
    const safe = sanitize(name || nodeId);
    console.log(`Pulling ${safe} (${nodeId})...`);

    const data = await getNode(nodeId);
    const node = data?.nodes?.[nodeId]?.document;
    if (!node) {
      console.warn(`Node not found: ${nodeId}`);
      continue;
    }

    // Save raw node JSON for inspection
    fs.writeFileSync(path.join(outCode, `${safe}.node.json`), JSON.stringify(node, null, 2));

    // Basic text styles extraction
    const texts = [];
    const walk = (n) => {
      if (!n) return;
      if (n.type === 'TEXT') {
        texts.push({ name: n.name, characters: n.characters, style: n.style });
      }
      if (n.children) n.children.forEach(walk);
    };
    walk(node);
    fs.writeFileSync(path.join(outCode, `${safe}.texts.json`), JSON.stringify(texts, null, 2));

    // Very simple TSX scaffold (developer will refine)
    const tsx = `import React from 'react';
// Auto-generated scaffold from Figma node ${nodeId}
// Raw node saved aside for reference.
export default function ${safe.replace(/^[^a-zA-Z_$]|[^\w$]/g, '_')}() {
  return (
    <div data-figma-node="${nodeId}">
      {/* TODO: Map layers to JSX; see ${safe}.node.json and ${safe}.texts.json */}
    </div>
  );
}
`;
    fs.writeFileSync(path.join(outCode, `${safe}.tsx`), tsx);
  }

  console.log('Done. Files in src/components/figma and assets in src/assets/figma');
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
