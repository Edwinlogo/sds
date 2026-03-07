const fs = require('fs');

let html = fs.readFileSync('C:/Users/Admin/Documents/sds/sds/index.html.bak', 'utf8');

const mapCSS = `
  /* COVERAGE MAP */
  #coverage{background:var(--bg);position:relative;overflow:hidden;}
  .map-wrap{max-width:900px;margin:0 auto;padding:40px 20px;}
  #us-map{width:100%;height:auto;filter:drop-shadow(var(--sh));max-height:550px;}
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
`;

const mapJS = `
<script>
const stateData = {
  "Florida": { manager: "Carlos Diaz", routes: 45 },
  "Arizona": { manager: "Sarah Connor", routes: 12 },
  "California": { manager: "Michael Chen", routes: 38 },
  "Texas": { manager: "Elena Rodriguez", routes: 56 },
  "Alaska": { manager: "John Smith", routes: 8 },
  "Colorado": { manager: "David Miller", routes: 19 }
};

const mapTooltip = document.getElementById('map-tooltip');
const states = document.querySelectorAll('.state.active');

states.forEach(state => {
  state.addEventListener('mousemove', (e) => {
    const stateName = state.getAttribute('data-name');
    const data = stateData[stateName];
    if (data) {
      document.getElementById('tt-state').textContent = stateName;
      document.getElementById('tt-routes').textContent = data.routes;
      document.getElementById('tt-manager').textContent = data.manager;
      mapTooltip.style.opacity = 1;
      mapTooltip.style.transform = \`translate(\${e.pageX + 15}px, \${e.pageY + 15}px)\`;
    }
  });

  state.addEventListener('mouseout', () => {
    mapTooltip.style.opacity = 0;
  });
});
</script>
</body>
`;

const mapHTML = `
<!-- COVERAGE -->
<section class="sec" id="coverage">
  <div class="sec-hdr rv">
    <div class="eyebrow" data-i18n="cov_eyebrow">National Reach</div>
    <h2 class="sec-title" data-i18n="cov_title">Our Active States</h2>
    <p class="sec-sub" data-i18n="cov_sub">Safe Drive provides structured transportation across multiple states. Hover over an active state below to view operations data.</p>
  </div>
  <div class="map-wrap rv d1">
    ` + fs.readFileSync('C:/Users/Admin/Documents/sds/sds/us-map-rendered.svg', 'utf8') + `
  </div>
</section>
<div id="map-tooltip" class="map-tooltip">
  <div class="tt-hdr" id="tt-state">State Name</div>
  <div class="tt-row"><span>Active Routes:</span><span class="tt-val" id="tt-routes">0</span></div>
  <div class="tt-row"><span>Op. Manager:</span><span class="tt-val" id="tt-manager">-</span></div>
</div>

<!-- CONTACT -->
`;

html = html.replace('  /* CONTACT */', mapCSS + '\n\n  /* CONTACT */');
html = html.replace('</body>', mapJS);
html = html.replace('<!-- CONTACT -->', mapHTML);

let enTarget = 'chk3_h:"Controlled, Strategic Expansion",chk3_p:"We grow within real operational capacity. No commitments beyond our ability to execute with full compliance.",';
let enRepl = 'chk3_h:"Controlled, Strategic Expansion",chk3_p:"We grow within real operational capacity. No commitments beyond our ability to execute with full compliance.",\n    cov_eyebrow:"National Reach",cov_title:"Our Active States",cov_sub:"Safe Drive provides structured transportation across multiple states. Hover over an active state below to view operations data.",';

let esTarget = 'chk3_h:"Expansión Controlada y Estratégica",chk3_p:"Crecemos dentro de la capacidad operativa real. Sin compromisos más allá de nuestra capacidad de ejecutar con total cumplimiento.",';
let esRepl = 'chk3_h:"Expansión Controlada y Estratégica",chk3_p:"Crecemos dentro de la capacidad operativa real. Sin compromisos más allá de nuestra capacidad de ejecutar con total cumplimiento.",\n    cov_eyebrow:"Alcance Nacional",cov_title:"Nuestros Estados Activos",cov_sub:"Safe Drive ofrece transporte estructurado en múltiples estados. Pasa el cursor sobre un estado activo a continuación para ver los datos de operaciones.",';

html = html.replace(enTarget, enRepl);
html = html.replace(esTarget, esRepl);

fs.writeFileSync('C:/Users/Admin/Documents/sds/sds/index.html', html, 'utf8');
console.log("Encoding fully preserved.");
