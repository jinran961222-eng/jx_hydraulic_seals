const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('D:/JX_Hydraulic_Seals/src/scripts/raw/bs1806.html', 'utf8');
const table = html.match(/<table[\s\S]*?<\/table>/g)[0];
const trs = table.match(/<tr[\s\S]*?<\/tr>/g) || [];
console.log('trs:', trs.length);
for (let i = 0; i < Math.min(3, trs.length); i++) {
  const ths = trs[i].match(/<th[^>]*>[\s\S]*?<\/th>/g);
  if (ths) {
    console.log('tr[' + i + '] has ths:', ths.length);
    console.log(ths.slice(0, 8).map(h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()));
  } else {
    const tds = trs[i].match(/<td[^>]*>[\s\S]*?<\/td>/g) || [];
    console.log('tr[' + i + '] tds:', tds.length, tds.slice(0, 3).map(h => h.replace(/<[^>]+>/g, '').trim()));
  }
}
