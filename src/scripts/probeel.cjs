const fs = require('fs');
const h = fs.readFileSync('D:/JX_Hydraulic_Seals/src/scripts/raw/el-silicone.html', 'utf8');
// find likely content wrappers
const re = /<(main|article)[^>]*>|class="([^"]*(?:content|entry|post|elastomer|material|body)[^"]*)"|id="([^"]*(?:content|post)[^"]*)"/gi;
let m, set = new Set();
while ((m = re.exec(h)) !== null) { set.add((m[1]||'class:'+m[2]||'id:'+m[3])); }
console.log([...set].slice(0, 30).join('\n'));
