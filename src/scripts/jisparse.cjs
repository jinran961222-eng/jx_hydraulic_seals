const fs = require('fs');
const path = require('path');
const raw = 'D:/JX_Hydraulic_Seals/src/scripts/raw/jis2401.html';
const out = 'D:/JX_Hydraulic_Seals/src/data/jis2401Data.js';
const html = fs.readFileSync(raw, 'utf8');

function cellText(cell) {
  return cell.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
}
const tables = [];
const re = /<table[\s\S]*?<\/table>/g;
for (let m = re.exec(html); m; m = re.exec(html)) {
  const trs = m[0].match(/<tr[\s\S]*?<\/tr>/g) || [];
  let headers = null;
  const data = [];
  for (const tr of trs) {
    const ths = tr.match(/<th[^>]*>[\s\S]*?<\/th>/g);
    if (ths) { if (headers === null) headers = ths.map(cellText); continue; }
    const tds = tr.match(/<td[^>]*>[\s\S]*?<\/td>/g) || [];
    if (!tds.length) continue;
    data.push(tds.map(cellText));
  }
  const keepIdx = headers.map((h, i) => h.toLowerCase() === 'search' ? -1 : i).filter(i => i >= 0);
  tables.push({
    cols: keepIdx.map(i => headers[i]),
    rows: data.map(r => keepIdx.map(i => (r[i] !== undefined ? r[i] : ''))),
  });
}
const titles = [
  'All JIS Sizes – Sorted by Size',
  'JIS – P Series',
  'JIS – G Series',
  'JIS – S Series',
  'JIS – V Series',
];
const merged = titles.map((t, i) => ({ title: t, ...tables[i] }));
let s = '// JIS B 2401 tables — auto-generated\n';
s += 'export const jis2401Tables = ' + JSON.stringify(merged, null, 1) + ';\n';
fs.writeFileSync(out, s);
console.log('jis2401Tables:', merged.map(t => t.title + '(' + t.rows.length + ')').join(' | '));
