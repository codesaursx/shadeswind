const ntcjs = require('ntcjs');
const chroma = require('chroma-js');

const shadeNames = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

module.exports = function (colors) {
  let initialColors = {};
  let shades = {};

  if (Array.isArray(colors)) {
    colors.forEach(color => {
      const name = ntcjs(color);
      initialColors[name] = color;
    });
  } else initialColors = colors;

  Object.entries(initialColors).forEach(([name, color]) => {
    const leftShade = chroma
      .scale(['#000', color])
      .correctLightness()
      .colors(7);
    const rightShade = chroma
      .scale([color, '#fff'])
      .correctLightness()
      .colors(7);

    const shade = [
      ...rightShade.slice(0, 6).reverse(),
      ...leftShade.slice(1, 5).reverse()
    ];

    let namedShades = {};
    shade.forEach((color, i) => {
      namedShades[shadeNames[i]] = color;
    });

    shades[name] = namedShades;
  });

  return shades;
};
