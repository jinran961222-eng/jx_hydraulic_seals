const fs = require('fs');
const path = require('path');
const dir = 'D:/JX_Hydraulic_Seals/src/scripts/raw';
const file = process.argv[2] || 'iso6149.html';
const html = fs.readFileSync(path.join(dir, file), 'utf8');
console.log('file:', file, 'len:', html.length);

// Count tables and thead
const tables = html.match(/<table[\s\S]*?<\/table>/g) || [];
console.log('tables:', tables.length);
for (let i = 0; i < tables.length; i++) {
  const t = tables[i];
  const heads = t.match(/<th[^>]*>([\s\S]*?)<\/th>/g) || [];
  const rows = t.match(/<tr/g) || [];
  console.log(`table[${i}]: rows=${rows.length}, ths=${heads.length}`);
  const thTexts = heads.slice(0, 12).map(h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  console.log('  head:', JSON.stringify(thTexts));
}
