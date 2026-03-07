const fs = require('fs');

let html = fs.readFileSync('C:/Users/Admin/Documents/sds/sds/index.html', 'utf8');

// Create a mapping of wrong encodings back to their intended strings
const fixes = {
  "â†’": "→",
  "â€”": "—",
  "â€“": "–",
  "Â": "",
  "Ã±": "ñ",
  "Ã³": "ó",
  "Ã¡": "á",
  "Ã©": "é",
  "Ã­": "í", // i with acute
  "Ãº": "ú",
  "Ã‘": "Ñ",
  "Ã“": "Ó",
  "Ã\x81": "Á",
  "Ã\x89": "É",
  "Ã\x8D": "Í",
  "Ã\x93": "Ó",
  "Ã\x9A": "Ú"
};

for (const [bad, good] of Object.entries(fixes)) {
  const regex = new RegExp(bad, 'g');
  html = html.replace(regex, good);
}

fs.writeFileSync('C:/Users/Admin/Documents/sds/sds/index.html', html, 'utf8');
console.log('Fixed encoding in index.html');
