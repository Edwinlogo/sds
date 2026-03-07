const fs = require('fs');
import('d3-geo').then(d3 => {
  const data = JSON.parse(fs.readFileSync('C:/Users/Admin/Documents/sds/sds/us-states.json', 'utf8'));
  const projection = d3.geoAlbersUsa().scale(800).translate([400, 250]);
  const path = d3.geoPath().projection(projection);
  let svg = '<svg id="us-map" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">\n';
  svg += '  <g id="states">\n';
  data.features.forEach(f => {
    const id = f.properties.name.replace(/\s+/g, '-').toLowerCase();
    const active = ['florida','arizona','california','texas','alaska','colorado'].includes(id) ? ' active' : '';
    const d = path(f);
    if(d) svg += '    <path id="st-' + id + '" class="state' + active + '" data-name="' + f.properties.name + '" d="' + d + '" />\n';
  });
  svg += '  </g>\n</svg>';
  fs.writeFileSync('C:/Users/Admin/Documents/sds/sds/us-map-rendered.svg', svg);
  console.log('SVG Rendered');
}).catch(console.error);
