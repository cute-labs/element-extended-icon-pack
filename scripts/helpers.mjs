import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";
import { SVG_DIRECTORY } from "./paths.mjs";

/**
 * Reads the icon directory
 *
 * @returns {string[]} An array of paths to SVG files in the SVG directory.
 */
export const readSvgDirectory = () =>
  readdirSync(SVG_DIRECTORY).reduce((acc, file) => {
    if (extname(file) === ".svg") {
      acc.push(join(SVG_DIRECTORY, file));
    }
    return acc;
  }, []);

/**
 * Reads file
 *
 * @param {string} fileName
 * @param {string} directory
 * @returns {string}
 */
export const readFile = (fileName, directory) => readFileSync(join(directory, fileName), "utf-8");

/**
 * Reads SVG file
 *
 * @param {string} fileName
 * @returns {string} SVG file contents
 */
export const readSvg = (fileName) => readFileSync(fileName, "utf-8");

/**
 * Writes SVG content to a file
 *
 * @param {string} fileName
 * @param {string} contents
 * @param {string} outputDirectory
 */
export const writeSvgFile = (fileName, content, outputDirectory) => {
  writeFileSync(join(outputDirectory, fileName), content, "utf-8");
};
