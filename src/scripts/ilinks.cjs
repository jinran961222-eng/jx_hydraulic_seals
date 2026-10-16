const fs = require('fs');
const h = fs.readFileSync('D:/JX_Hydraulic_Seals/src/scripts/raw/elastomers-preview.html', 'utf8');
const m = h.match(/href="([^"]*industries[^"]*)"/g) || [];
console.log([...new Set(m)].join('\n'));
