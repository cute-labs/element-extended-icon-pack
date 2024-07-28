import { parseSync } from "svgson";
import { basename } from "node:path";
import { readSvg } from "../../../scripts/helpers.mjs";
import { svg64 } from "svg64";

/** @typedef {import('svgson').INode} INode */

/**
 *
 * @param {string[]} svgFiles
 * @param {string} svgDirectory
 * @returns {Array<{[key: string]: INode}>} An array of objects, each containing a 'key' property with an INode value.
 */
const generateIconNodes = (svgFiles, svgDirectory) =>
  svgFiles
    .map((file) => {
      const name = basename(file, ".svg");
      const contents = parseSync(readSvg(file, svgDirectory));

      if (!contents.children && contents.children.length === 0) {
        throw new Error(`${name}.svg has no children!`);
      }

      return { name, contents };
    })
    .reduce((acc, icon) => {
      acc[icon.name] = icon.contents;
      return acc;
    }, {});

export default generateIconNodes;
