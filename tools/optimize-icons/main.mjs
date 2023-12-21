import { readSvgDirectory, readSvg, writeSvgFile } from "../../scripts/helpers.mjs";
import { processSvg } from "../../scripts/process-svg.mjs";
import { SVG_DIRECTORY } from "../../scripts/paths.mjs";

const svgs = readSvgDirectory();

const optimizeIcons = () => {
  svgs.forEach((fileName) => {
    const content = processSvg(readSvg(fileName, SVG_DIRECTORY));
    writeSvgFile(fileName, content, SVG_DIRECTORY);
  });
};

optimizeIcons();
