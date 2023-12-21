import { join } from "node:path";
import { copyFileSync } from "node:fs";
import parseArgs from "minimist";
import { WORKSPACE_ROOT } from "../../scripts/paths.mjs";

const cliArgs = parseArgs(process.argv.slice(2));
const { packageName } = cliArgs;

const copyLicense = () => {
  if (!packageName) {
    throw new Error("No package name provided");
  }
  const license = join(WORKSPACE_ROOT, "LICENSE");
  const outputDirectory = join(WORKSPACE_ROOT, "packages", packageName, "LICENSE");
  copyFileSync(license, outputDirectory);
};

copyLicense();
