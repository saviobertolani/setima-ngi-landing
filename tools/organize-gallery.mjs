// Organiza assets de src/assets/gallery/_incoming em big/ e thumbs/
// Regras:
// - Seleciona 8 imagens PNG da _incoming por ordem de lista manual
// - Copia para big/01.png..08.png e thumbs/01.png..08.png (mesmas imagens por enquanto)
// - Faz backup das pastas big/ e thumbs em build/_backup-gallery-<timestamp>

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const incomingDir = path.join(root, 'src/assets/gallery/_incoming');
const bigDir = path.join(root, 'src/assets/gallery/big');
const thumbsDir = path.join(root, 'src/assets/gallery/thumbs');
const backupDir = path.join(root, `build/_backup-gallery-${Date.now()}`);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copy(src, dest) {
  fs.copyFileSync(src, dest);
  console.log('copied', path.relative(root, src), '->', path.relative(root, dest));
}

// Ordem sugerida (ajuste conforme necessidade):
const preferred = [
  '852d9db4de8815dea07e1105f35112b09b7e8b4a.png', // 01
  'c12553fcff2b6d6d82de7e0e3ada90deb8f613c1.png', // 02
  'e55a414f773c0b8e453a139cfae7eca314b50232.png', // 03
  '1b031a92b121f416ad605a9f67998f8598bd7132.png', // 04
  'cc3f744f6a59fed51ea1e28cab48928c13b63562.png', // 05
  '039ca8dccca9877ef9287352a34844bfbda182bd.png', // 06
  'aec13132a6492dd4365d9508378c518e8d999545.png', // 07
  'da4846fe88fa76f1d86dd5de82b15f5f02e951a2.png', // 08
];

function main() {
  ensureDir(backupDir);
  // Backup
  if (fs.existsSync(bigDir)) {
    fs.cpSync(bigDir, path.join(backupDir, 'big'), { recursive: true });
  }
  if (fs.existsSync(thumbsDir)) {
    fs.cpSync(thumbsDir, path.join(backupDir, 'thumbs'), { recursive: true });
  }

  ensureDir(bigDir);
  ensureDir(thumbsDir);

  // Limpa atuais 01..08
  for (let i = 1; i <= 8; i++) {
    const n = String(i).padStart(2, '0') + '.png';
    for (const dir of [bigDir, thumbsDir]) {
      const p = path.join(dir, n);
      if (fs.existsSync(p)) fs.rmSync(p);
    }
  }

  const existing = new Set(fs.readdirSync(incomingDir));
  const picked = preferred.filter((f) => existing.has(f));
  if (picked.length < 8) {
    // completa com quaisquer pngs restantes
    const rest = [...existing].filter((f) => f.endsWith('.png') && !picked.includes(f));
    picked.push(...rest.slice(0, 8 - picked.length));
  }
  if (picked.length < 8) {
    console.error('Não há imagens PNG suficientes em _incoming para preencher 8 itens. Encontradas:', picked.length);
    process.exit(1);
  }

  picked.slice(0, 8).forEach((file, idx) => {
    const n = String(idx + 1).padStart(2, '0') + '.png';
    const src = path.join(incomingDir, file);
    copy(src, path.join(bigDir, n));
    copy(src, path.join(thumbsDir, n));
  });

  console.log('Galeria organizada com sucesso. Backup em', path.relative(root, backupDir));
}

main();
