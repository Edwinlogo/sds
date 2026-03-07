const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Admin/Documents/sds/sds';
const htmlPath = path.join(baseDir, 'index.html');
const cssDir = path.join(baseDir, 'css');
const jsDir = path.join(baseDir, 'js');

if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir);
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir);

// Backup original before messing with it further
fs.copyFileSync(htmlPath, htmlPath + '.refactor_bak');

let html = fs.readFileSync(htmlPath, 'utf8');

// Extract CSS
let cssContent = '';
html = html.replace(/<style>([\s\S]*?)<\/style>/gi, (match, p1) => {
    cssContent += p1.trim() + '\n';
    return '<link rel="stylesheet" href="css/style.css">';
});

// Extract JS
let jsContent = '';
html = html.replace(/<script>([\s\S]*?)<\/script>/gi, (match, p1) => {
    jsContent += p1 + '\n\n';
    return ''; // Remove inline scripts completely
});

// Remove duplicate multiple links if any (though replace might only happen once if there's only one <style>)
// but just to be safe:
let firstLinkReplaced = false;
html = html.replace(/<link rel="stylesheet" href="css\/style\.css">/gi, (match) => {
    if(!firstLinkReplaced) {
        firstLinkReplaced = true;
        return match;
    }
    return '';
});

// Insert JS link before </body>
html = html.replace('</body>', '<script src="js/app.js"></script>\n</body>');

if (cssContent) fs.writeFileSync(path.join(cssDir, 'style.css'), cssContent, 'utf8');
if (jsContent) fs.writeFileSync(path.join(jsDir, 'app.js'), jsContent, 'utf8');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('Refactoring complete: created css/style.css and js/app.js');
