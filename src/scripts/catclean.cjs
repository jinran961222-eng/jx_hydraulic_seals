const fs = require('fs');
const path = require('path');
const txt = 'D:/JX_Hydraulic_Seals/src/scripts/text';
const files = ['bs1806', 'bs4518', 'din3771', 'nft47501', 'sms1586', 'generic', 'cross-ref'];
for (const f of files) {
  const lines = fs.readFileSync(path.join(txt, f + '.txt'), 'utf8').split('\n');
  const filtered = lines.filter(l => l.startsWith('H| ') || l.startsWith('P| '));
  // drop CSS-like long lines
  const clean = filtered.filter(l => l.length < 1600);
  console.log('\n########## ' + f + ' ##########');
  clean.forEach(l => console.log(l));
}
