import camelcase from "camelcase";
import { basename } from "node:path";

export default function getFileWithCamelCase(filePath: string) {
  const filename = basename(filePath).replace(".svg", "");
  const componentName = camelcase(filename, { pascalCase: true });
  return {
    filename,
    componentName
  } as { filename: string; componentName: string };
}
