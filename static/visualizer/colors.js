/**
 * Helper functions for color generation and manipulation
 */

function getColorGenerator(colorTheme) {
    /**
     * A simple color class built for interpolation
     */
    if (colorTheme == 0) {
        return perceptuallyLinearRainbow;
    } else if (colorTheme == 1) {
        return perceptuallyLinearPurpleToOrange;
    } else if (colorTheme == 2) {
        return alternatingPurpleOrange;
    } else {
        throw new Error("color theme was not in range")
    }
}

/*
 * Some helper functions courtesy of https://codepen.io/hnq90/pen/YvoxMJ
 */

var h2r = function(hex) {
    // Converts a #ffffff hex string into an [r,g,b] array
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

var r2h = function(rgb) {
    // Inverse of the above
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};

function _interpolateColor(color1, color2, factor) {
  const result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};


// c/o https://github.com/antimatter15/rgb-lab/blob/master/color.js
function lab2rgb(lab) {
  var y = (lab[0] + 16) / 116,
      x = lab[1] / 500 + y,
      z = y - lab[2] / 200,
      r, g, b;

  x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
  y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
  z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

  r = x *  3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y *  1.8758 + z *  0.0415;
  b = x *  0.0557 + y * -0.2040 + z *  1.0570;

  r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
  g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
  b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

  return [Math.round(Math.max(0, Math.min(1, r)) * 255), 
          Math.round(Math.max(0, Math.min(1, g)) * 255), 
          Math.round(Math.max(0, Math.min(1, b)) * 255)]
}

function rgb2lab(rgb){
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      x, y, z;

  r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

  return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
}

function lab2hex(lab) {
  return r2h(lab2rgb(lab));
}

/**
 * Colorscheme implementations
 */

function* perceptuallyLinearRainbow(total) {
    /**
     * Generates perceptually-spaced colors
     */
    for (let i = 0; i < total; ++i) {
        // c/o https://stackoverflow.com/a/30296361/1057105
        const alpha = i / total;
        const r = 60;
        const a = r * Math.sin(2 * Math.PI * alpha);
        const b = r * Math.cos(2 * Math.PI * alpha);
        const lab = [80, a, b];
        yield lab2hex(lab);
    }
}

function* perceptuallyLinearPurpleToOrange(total) {
    /**
     * Generates perceptually-spaced colors
     */
    const start = [85, 14, -38]
    const end = [85, 13.5, 40]
    for (let i = 0; i < total; ++i) {
        const alpha = i / total;
        const lab = _interpolateColor(start, end, alpha);
        yield lab2hex(lab)
    }
}

function* alternatingPurpleOrange(total) {
    /**
     * Generates perceptually-spaced colors
     */
    for (let i = 0; i < total; ++i) {
      if (i % 2 == 0)
          yield lab2hex([85, 14, -40])
      else
          yield lab2hex([85, 14, 40])
    }
}
