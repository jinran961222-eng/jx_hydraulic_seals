const fs = require('fs');
const path = require('path');
const raw = 'D:/JX_Hydraulic_Seals/src/scripts/raw';
const txt = 'D:/JX_Hydraulic_Seals/src/scripts/text';
fs.mkdirSync(txt, { recursive: true });

const files = fs.readdirSync(raw).filter(x => x.endsWith('.html'));
for (const f of files) {
  const html = fs.readFileSync(path.join(raw, f), 'utf8');
  const tableMatch = html.match(/<table[\s\S]*?<\/table>/);
  let body = html;
  let beforeTxt = '', afterTxt = '';
  if (tableMatch) {
    const ti = tableMatch.index;
    beforeTxt = html.slice(0, ti);
    afterTxt = html.slice(ti + tableMatch[0].length);
  }
  function paras(seg) {
    const res = [];
    const hs = seg.match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/g) || [];
    hs.forEach(h => res.push('H| ' + h.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/\s+/g, ' ').trim()));
    const ps = seg.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];
    ps.forEach(p => {
      const t = p.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&ldquo;|&rdquo;/g, '"').replace(/&rsquo;|&lsquo;/g, "'").replace(/&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
      if (t) res.push('P| ' + t);
    });
    return res;
  }
  let out = '===== ' + f + ' =====\n--- BEFORE TABLE ---\n' + paras(beforeTxt).join('\n') + '\n--- AFTER TABLE ---\n' + paras(afterTxt).join('\n');
  fs.writeFileSync(path.join(txt, f.replace('.html', '.txt')), out);
  console.log(f, 'ok');
}
