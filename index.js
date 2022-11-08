const plugin = require('tailwindcss/plugin');
const shades = require('./shades');

/**
 *
 * @param {*} colors Object (name and color pairs) or Array of colors, automatic naming in case of using Array
 * @returns An Object of shades of colors.
 */
module.exports = function (colors) {
  return plugin(function ({ theme }) {}, {
    theme: {
      extend: {
        colors: () => ({ ...shades(colors) })
      }
    }
  });
};
