import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');

const inputs = [
  'samsung-v6-4d-imaging.png',
  'samsung-v6-color-doppler.png',
  'samsung-v6-hd-display.png',
  'samsung-v6-measurement-tools.png',
  'samsung-v6-transvaginal.png',
  'samsung-v6-follicular-monitoring.png',
  'samsung-v6-3d-volume.png',
  'samsung-v6-multi-frequency.png',
  'samsung-v6-safety-features.png',
  'samsung-v6-digital-connectivity.png',
];

function toTitleAndDesc(raw) {
  const text = (raw || '').replace(/\s+/g, ' ').trim();
  if (!text) return { title: '', description: '' };
  // Split on punctuation or line breaks
  const parts = text.split(/\.|\n|\r/).map(s => s.trim()).filter(Boolean);
  const title = (parts[0] || '').slice(0, 80);
  const description = parts.slice(1).join(' ').slice(0, 240);
  return { title, description };
}

async function main() {
  const worker = await createWorker('eng');
  const out = {};
  for (const file of inputs) {
    const full = path.join(publicDir, file);
    const { data } = await worker.recognize(full, 'eng');
    out['/' + file] = toTitleAndDesc(data?.text || '');
    console.log(`OCR: ${file}`);
  }
  await worker.terminate();
  fs.writeFileSync(path.join(root, 'ocr-results.json'), JSON.stringify(out, null, 2));
  console.log('Wrote ocr-results.json');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


