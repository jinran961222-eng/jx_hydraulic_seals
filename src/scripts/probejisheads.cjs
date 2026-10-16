const fs = require('fs');
const html = fs.readFileSync('D:/JX_Hydraulic_Seals/src/scripts/raw/jis2401.html', 'utf8');
const hs = html.match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/g) || [];
hs.forEach(h => console.log(h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()));
