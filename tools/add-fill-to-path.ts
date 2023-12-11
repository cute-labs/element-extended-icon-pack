import { readFileSync, writeFileSync } from "node:fs";
import { parseSync, stringify } from "svgson";

export default async function addFillToPath(svgPath: string) {
  const svg = readFileSync(svgPath, "utf-8");
  const pasedSvg = parseSync(svg);
  pasedSvg.children.forEach(element => {
    if (element.name === "path") {
      element.attributes["fill"] = "currentColor";
    }
  });
  writeFileSync(svgPath, stringify(pasedSvg));
}
