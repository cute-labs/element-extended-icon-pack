import camelCase from "camelcase";
import { join } from "node:path";
import { writeFile } from "node:fs/promises";
import { readSvgDirectory } from "../../../scripts/helpers.mjs";
import { SVG_DIRECTORY } from "../../../scripts/paths.mjs";
import generateIconNodes from "./generate-icon-nodes.mjs";
import svgToBase64 from "./svg-to-base64.mjs";

const generateIconFiles = ({ iconsOutputDirectory, templateFn, fileExtension }) => {
  const svgs = readSvgDirectory();
  const iconsNodes = generateIconNodes(svgs, SVG_DIRECTORY);
  const base64Maps = svgToBase64(svgs, SVG_DIRECTORY);

  const writeIconFiles = Object.keys(iconsNodes).map(async (iconName) => {
    let { children } = iconsNodes[iconName];
    const iconNode = children.map(({ name, attributes }) => {
      return [name, attributes];
    });

    const componentName = camelCase(iconName, { pascalCase: true });
    const base64 = base64Maps[iconName];
    const outputContent = templateFn({ componentName, iconNode: JSON.stringify(iconNode), base64 });
    writeFile(join(iconsOutputDirectory, `${iconName}${fileExtension}`), outputContent, "utf-8");
  });

  Promise.all(writeIconFiles)
    .then(() => {})
    .catch((error) => {
      throw new Error("create icon file failed, \n", error);
    });
};

export default generateIconFiles;
