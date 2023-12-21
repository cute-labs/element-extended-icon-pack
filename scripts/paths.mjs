import { fileURLToPath } from "node:url";
import { join } from "node:path";

export const WORKSPACE_ROOT = fileURLToPath(new URL("../", import.meta.url));
export const SVG_DIRECTORY = join(WORKSPACE_ROOT, "icons");
