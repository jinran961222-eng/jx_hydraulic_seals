const fs = require('fs');
const html = fs.readFileSync('D:/JX_Hydraulic_Seals/src/scripts/raw/jis2401.html', 'utf8');
const tables = html.match(/<table[\s\S]*?<\/table>/g) || [];
const re = /<table[\s\S]*?<\/table>/g;
let lastMatchEnd = 0, idx = 0;
for (let m = re.exec(html); m; m = re.exec(html)) {
  const before = html.slice(lastMatchEnd, m.index);
  // find last heading (h2-h4) before this table
  const hs = before.match(/<(h[234])[^>]*>([\s\S]*?)<\/\1>/g) || [];
  const lastH = hs.length ? hs[hs.length - 1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '(none)';
  const ths = (m[0].match(/<th[^>]*>([\s\S]*?)<\/th>/g) || []).map(h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  const trs = (m[0].match(/<tr/g) || []).length;
  console.log('table#' + idx + ' rows=' + trs + ' heading="' + lastH + '"');
  console.log('  heads=' + JSON.stringify(ths.slice(0, 8)));
  lastMatchEnd = re.lastIndex; idx++;
}
