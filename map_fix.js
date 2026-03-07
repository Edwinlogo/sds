const fs = require('fs');

let content = fs.readFileSync('C:/Users/Admin/Documents/sds/sds/index.html', 'utf8');

const updatedCss = `  /* COVERAGE MAP */
  #coverage{background:var(--bg);position:relative;overflow:hidden;padding:40px 8%;}
  .map-wrap{max-width:1200px;margin:0 auto;padding:10px 0;}
  #us-map{width:100%;height:auto;filter:drop-shadow(var(--sh));max-height:75vh;}
  .state{fill:var(--surface);stroke:var(--border);stroke-width:1;}
  [data-theme="dark"] .state{fill:#222C42;}
  
  .state.active{fill:#A9CFFF;cursor:pointer;transition:all var(--ease);stroke:var(--accent);stroke-width:1.5;}
  .state.active:hover{fill:#387EE3;transform:translateY(-2px);}
  
  .map-tooltip{
    position:absolute;top:0;left:0;
    pointer-events:none;opacity:0;
    background:var(--surface);border:1px solid var(--border);
    padding:12px 16px;border-radius:12px;box-shadow:var(--sh-lg);
    z-index:999;transition:opacity .2s ease;font-family:'Source Sans 3',sans-serif;
  }
  .tt-hdr{font-size:1.1rem;font-weight:700;font-family:'Raleway',sans-serif;margin-bottom:4px;color:var(--text);}
  .tt-row{font-size:.85rem;color:var(--text-muted);display:flex;justify-content:space-between;gap:12px;}
  .tt-val{font-weight:600;color:var(--accent);}

  @media(max-width:680px){
    #coverage{padding:30px 0 40px;}
    #coverage .sec-hdr{padding:0 8%;}
    #us-map{max-height:none;}
  }`;

// Replace multiple bad css blocks with one
// Due to previous errors we have duplicate CSS
content = content.replace(/\/\*\s*COVERAGE MAP\s*\*\/[\s\S]*?(?=\/\*\s*CONTACT\s*\*\/)/, updatedCss + "\n\n  /* CONTACT */");


// Remove duplicate HTML block if it exists
let covIndex1 = content.indexOf('<!-- COVERAGE -->');
let covIndex2 = content.lastIndexOf('<!-- COVERAGE -->');
let contIndex = content.indexOf('<!-- CONTACT -->');

// if there is more than one coverage block AND the second coverage block is before CONTACT
if(covIndex1 !== covIndex2 && covIndex2 !== -1 && contIndex > covIndex2) {
    content = content.substring(0, covIndex2) + content.substring(contIndex);
}

fs.writeFileSync('C:/Users/Admin/Documents/sds/sds/index.html', content, 'utf8');
console.log("Applied map fix");
