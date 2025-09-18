#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS_DIR = path.resolve(process.cwd(), 'src/assets');

/**
 * For each .png/.jpg in src/assets, create .webp and .avif siblings if missing.
 * Quality tuned for good balance; adjust if needed.
 */
async function convertImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const base = file.slice(0, -ext.length);
  const webp = base + '.webp';
  const avif = base + '.avif';

  const buf = await fs.readFile(file);
  const img = sharp(buf, { limitInputPixels: false });

  // Skip if alpha is required and AVIF/WEBP would break transparency? Both support alpha, so OK.
  const tasks = [];
  try {
    await fs.access(webp);
  } catch {
    tasks.push(img.webp({ quality: 82 }).toFile(webp));
  }
  try {
    await fs.access(avif);
  } catch {
    tasks.push(img.avif({ quality: 55 }).toFile(avif));
  }
  await Promise.all(tasks);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
    } else {
      await convertImage(p);
    }
  }
}

(async () => {
  try {
    await walk(ASSETS_DIR);
    console.log('✅ Otimização concluída.');
  } catch (err) {
    console.error('❌ Falha na otimização:', err);
    process.exit(1);
  }
})();
