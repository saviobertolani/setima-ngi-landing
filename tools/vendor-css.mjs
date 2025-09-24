#!/usr/bin/env node
// Copia o CSS utilitário (Tailwind + Figma) de setima-ngi-landing/src/index.css
// para src/styles/tailwind.generated.css garantindo paridade com o localhost.

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcPath = path.resolve(root, 'setima-ngi-landing', 'src', 'index.css');
const destPath = path.resolve(root, 'src', 'styles', 'tailwind.generated.css');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function copyCss() {
  if (!fs.existsSync(srcPath)) {
    console.warn('[vendor-css] Arquivo de origem não encontrado:', srcPath);
    console.warn('[vendor-css] Pulando cópia. Verifique se o diretório setima-ngi-landing existe.');
    return;
  }

  const banner = `/*
  AUTO-GERADO: NÃO EDITAR MANUALMENTE
  Fonte: setima-ngi-landing/src/index.css
  Geração: tools/vendor-css.mjs
*/\n\n`;

  const content = fs.readFileSync(srcPath, 'utf8');
  ensureDir(destPath);
  fs.writeFileSync(destPath, banner + content, 'utf8');
  const bytes = Buffer.byteLength(content, 'utf8');
  console.log(`[vendor-css] Copiado ${bytes.toLocaleString('en-US')} bytes para ${path.relative(root, destPath)}`);
}

try {
  copyCss();
} catch (err) {
  console.error('[vendor-css] Falha ao copiar CSS:', err);
  process.exitCode = 1;
}
