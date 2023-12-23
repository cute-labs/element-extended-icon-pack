import camelCase from "camelcase";
import { join } from "node:path";
import { writeFile } from "node:fs/promises";
import { readSvgDirectory } from "../../../scripts/helpers.mjs";
import { SVG_DIRECTORY } from "../../../scripts/paths.mjs";
import generateIconNodes from "./generate-icon-nodes.mjs";

const generateIconFiles = ({ iconsOutputDirectory, templateFn, filenameExtention }) => {
  const svgs = readSvgDirectory();
  const iconsNodes = generateIconNodes(svgs, SVG_DIRECTORY);

  const writeIconFiles = Object.keys(iconsNodes).map(async (iconName) => {
    let { children } = iconsNodes[iconName];
    const iconNode = children.map(({ name, attributes }) => {
      return [name, attributes];
    });

    const componentName = camelCase(iconName, { pascalCase: true });
    const outputContent = templateFn({ componentName, iconNode: JSON.stringify(iconNode) });
    writeFile(
      join(iconsOutputDirectory, `${iconName}${filenameExtention}`),
      outputContent,
      "utf-8"
    );
  });

  Promise.all(writeIconFiles)
    .then(() => {})
    .catch((error) => {
      throw new Error("create icon file failed, \n", error);
    });
};

export default generateIconFiles;
