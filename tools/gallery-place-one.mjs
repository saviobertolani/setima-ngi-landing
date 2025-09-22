// Uso: node tools/gallery-place-one.mjs <sourcePath> <index>
// Converte <sourcePath> em PNG e salva em:
//  - src/assets/gallery/big/NN.png (mesmo tamanho)
//  - src/assets/gallery/thumbs/NN.png (largura 320px aprox)

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [,, sourcePathArg, indexArg] = process.argv;
if (!sourcePathArg || !indexArg) {
  console.error('Uso: node tools/gallery-place-one.mjs <sourcePath> <index 1-8>');
  process.exit(1);
}

const root = process.cwd();
const srcAbs = path.isAbsolute(sourcePathArg) ? sourcePathArg : path.resolve(root, sourcePathArg);
const idx = String(parseInt(indexArg, 10)).padStart(2, '0');
const bigOut = path.resolve(root, `src/assets/gallery/big/${idx}.png`);
const thumbOut = path.resolve(root, `src/assets/gallery/thumbs/${idx}.png`);

async function main() {
  if (!fs.existsSync(srcAbs)) {
    console.error('Arquivo fonte não encontrado:', srcAbs);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(bigOut), { recursive: true });
  fs.mkdirSync(path.dirname(thumbOut), { recursive: true });

  // BIG: apenas converte para PNG mantendo resolução
  await sharp(srcAbs)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(bigOut);
  console.log('BIG ->', path.relative(root, bigOut));

  // THUMB: redimensiona pela largura, mantém proporção
  await sharp(srcAbs)
    .resize({ width: 320, withoutEnlargement: true })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(thumbOut);
  console.log('THUMB ->', path.relative(root, thumbOut));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
