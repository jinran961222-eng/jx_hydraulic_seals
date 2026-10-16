const fs = require('fs');
const path = require('path');
const dir = 'D:/JX_Hydraulic_Seals/src/scripts/raw';
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const tables = html.match(/<table[\s\S]*?<\/table>/g) || [];
  let info = [];
  for (let i = 0; i < tables.length; i++) {
    const t = tables[i];
    const rows = (t.match(/<tr/g) || []).length;
    const heads = (t.match(/<th[^>]*>([\s\S]*?)<\/th>/g) || []).map(h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    info.push({ i, rows, heads: heads.slice(0, 16) });
  }
  console.log('\n==== ' + f + ' (tables=' + tables.length + ') ====');
  for (const inf of info) console.log('t[' + inf.i + '] rows=' + inf.rows + ' heads=' + JSON.stringify(inf.heads));
}
