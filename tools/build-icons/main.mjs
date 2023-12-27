import parseArgs from "minimist";
import { resolve } from "node:path";
import { emptyDirSync } from "fs-extra/esm";
import generateIconFiles from "./building/generate-icon-files.mjs";
import generateEntryFile from "./building/generate-entry-file.mjs";

const cliArgs = parseArgs(process.argv.slice(2));

const { templateSrc, iconFileExtension, output, entryWithFileExtension = false } = cliArgs;

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
    fileExtension: iconFileExtension
  });

  generateEntryFile({
    iconsOutputDirectory: ICON_OUTPUT_DIRECTORY,
    fileExtension: iconFileExtension,
    entryWithFileExtension
  });
};

try {
  buildIcon();
} catch (error) {
  console.error(error);
}
