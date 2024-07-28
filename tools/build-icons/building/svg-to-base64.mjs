import svg64 from "svg64";
import { basename } from "path";
import { readSvg } from "../../../scripts/helpers.mjs";

/**
 *
 * @param {string[]} svgFiles
 * @param {string} svgDirectory
 */
export default function svgToBase64(svgFiles, svgDirectory) {
  return svgFiles
    .map((file) => {
      const name = basename(file, ".svg");
      const content = readSvg(file, svgDirectory);
      const base64 = svg64(content);
      return { name, base64 };
    })
    .reduce((acc, icon) => {
      acc[icon.name] = icon.base64;
      return acc;
    }, {});
}
