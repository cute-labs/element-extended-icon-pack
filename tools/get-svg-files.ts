import { findWorkspacePackages } from "@pnpm/find-workspace-packages";
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import fastGlob from "fast-glob";

export default async function getSvgFiles() {
  const workspaceRoot = await findWorkspaceDir(process.cwd());
  const pkgs = await findWorkspacePackages(workspaceRoot!);
  const pkg = pkgs.find((pkg) => pkg.manifest.name === "@element-extended-icon-pack/svg");
  if (!pkg) {
    throw new Error("Could not find @element-extended-icon-pack/svg");
  }
  return fastGlob("*.svg", { cwd: pkg.dir, absolute: true });
}
