#!/usr/bin/env node
import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE_URL = process.env.SITE_URL || 'https://ngi.setima.cc';
const OUT_DIR = path.resolve('docs/evidencias');

async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }

async function capture(page, suffix, hash = '#bloco4') {
  const url = `${BASE_URL}/${suffix || ''}${hash}`;
  console.log('Navegando para', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('body');
  // rolar um pouco para estabilizar lazy/parallax
  await page.evaluate(() => window.scrollTo(0, 2600));
  await sleep(1000);
  const file = path.join(OUT_DIR, `bloco4${suffix ? '-' + suffix.replace(/\W+/g,'_') : '-default'}.png`);
  console.log('Salvando screenshot em', file);
  await page.screenshot({ path: file, fullPage: true });
  return file;
}

async function main() {
  await ensureDir(OUT_DIR);
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  try {
    const page = await browser.newPage();
  const f1 = await capture(page, '');
  const f2 = await capture(page, '?thumbs=1');
    console.log('Saved:', f1);
    console.log('Saved:', f2);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
