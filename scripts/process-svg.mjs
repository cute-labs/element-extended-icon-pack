import { optimize } from "svgo";

function optimizeSvg(svg) {
  const result = optimize(svg, {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      {
        name: "removeAttrs",
        params: {
          attrs: ["width", "height", "fill-rule"]
        }
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attribute: 'fill="currentColor"'
        }
      }
    ]
  });
  return result.data;
}

/**
 * Process SVG string
 *
 * @param {string} svg svg contents
 * @returns {string} Optimized SVG file contents
 */
export const processSvg = (svg) => {
  return optimizeSvg(svg);
};
