import parseArgs from "minimist";
import { resolve } from "node:path";
import { emptyDirSync } from "fs-extra/esm";
import generateIconFiles from "./building/generate-icon-files.mjs";
import generateEntryFile from "./building/generate-entry-file.mjs";

const cliArgs = parseArgs(process.argv.slice(2));

const { templateSrc, iconFilenameExtention, output, entryWithFilenameExtention = false } = cliArgs;

const ICON_OUTPUT_DIRECTORY = resolve(process.cwd(), output);

const buildIcon = async () => {
  if (!templateSrc) {
    throw new Error("`templateSrc` arg is required.");
  }

  emptyDirSync(ICON_OUTPUT_DIRECTORY);

  const { default: iconFileTemplateFn } = await import(resolve(process.cwd(), templateSrc));

  generateIconFiles({
    iconsOutputDirectory: ICON_OUTPUT_DIRECTORY,
    templateFn: iconFileTemplateFn,
    filenameExtention: iconFilenameExtention
  });

  generateEntryFile({
    iconsOutputDirectory: ICON_OUTPUT_DIRECTORY,
    filenameExtention: iconFilenameExtention,
    entryWithFilenameExtention
  });
};

try {
  buildIcon();
} catch (error) {
  console.error(error);
}
