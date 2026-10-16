const fs = require('fs');
const path = require('path');
const raw = 'D:/JX_Hydraulic_Seals/src/scripts/raw';
const out = 'D:/JX_Hydraulic_Seals/src/data';

function cellText(cell) {
  return cell.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
}
function extractTable(tableHtml) {
  const trs = tableHtml.match(/<tr[\s\S]*?<\/tr>/g) || [];
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
  const cols = keepIdx.map(i => headers[i]);
  const rows = data.map(r => keepIdx.map(i => (r[i] !== undefined ? r[i] : '')));
  return { cols, rows };
}
function dumpVar(file, name, cols, rows) {
  let s = `// ${name} — auto-generated from ${file}\n`;
  s += `export const ${name}Cols = ${JSON.stringify(cols)};\n`;
  s += `export const ${name}Data = ${JSON.stringify(rows)};\n`;
  fs.writeFileSync(path.join(out, name + '.js'), s);
  console.log(name + '.js -> cols=' + cols.length + ' rows=' + rows.length);
}

const map = {
  'cross-ref.html': 'crossRef',
  'iso6149.html': 'iso6149',
  'bs1806.html': 'bs1806',
  'bs4518.html': 'bs4518',
  'din3771.html': 'din3771',
  'nft47501.html': 'nft47501',
  'sms1586.html': 'sms1586',
  'generic.html': 'generic',
};
for (const [file, name] of Object.entries(map)) {
  const html = fs.readFileSync(path.join(raw, file), 'utf8');
  const tables = html.match(/<table[\s\S]*?<\/table>/g) || [];
  const big = tables.map(t => extractTable(t)).sort((a, b) => b.rows.length - a.rows.length)[0];
  dumpVar(file, name, big.cols, big.rows);
}
