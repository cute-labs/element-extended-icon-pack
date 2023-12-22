import parseArgs from "minimist";
import { resolve } from "node:path";
import generateIconFiles from "./building/generate-icon-files.mjs";

const cliArgs = parseArgs(process.argv.slice(2));

const { templateSrc, iconFilenameExtention, output } = cliArgs;

const ICON_OUTPUT_DIRECTORY = resolve(process.cwd(), output);

const buildIcon = async () => {
  if (!templateSrc) {
    throw new Error("`templateSrc` arg is required.");
  }

  const { default: iconFileTemplateFn } = await import(resolve(process.cwd(), templateSrc));

  generateIconFiles({
    iconsOutputDirectory: ICON_OUTPUT_DIRECTORY,
    templateFn: iconFileTemplateFn,
    filenameExtention: iconFilenameExtention
  });
};

try {
  buildIcon();
} catch (error) {
  console.error(error);
}
