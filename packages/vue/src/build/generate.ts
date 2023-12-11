import {
  getSvgFiles,
  addFillToPath,
  getFileWithCamelCase
} from "@element-extended-icon-pack/tools";
import { consola } from "consola";
import chalk from "chalk";
import { format, type BuiltInParserName } from "prettier";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pathComponents = fileURLToPath(new URL("../components", import.meta.url));

consola.start(chalk.blue("start..."));
const svgs = await getSvgFiles();

for (const svg of svgs) {
  await addFillToPath(svg);
}

function formatCode(code: string, parser: BuiltInParserName = "typescript") {
  return format(code, {
    parser
  });
}

async function transform2VueComponent(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const { filename, componentName } = getFileWithCamelCase(filePath);

  const component = await formatCode(
    `
    <template>${content}</template>
    <script lang="ts" setup>
      defineOptions({
        name: "${componentName}"
      })
    </script>
  `,
    "vue"
  );

  writeFileSync(`${pathComponents}/${filename}.vue`, component, "utf-8");
}

for (const svg of svgs) {
  await transform2VueComponent(svg);
}

const entryCode = await formatCode(
  svgs
    .map((path) => {
      const { filename, componentName } = getFileWithCamelCase(path);
      return `export { default as ${componentName} } from "./${filename}.vue";`;
    })
    .join("\n")
);
await writeFileSync(`${pathComponents}/index.ts`, entryCode, "utf-8");

consola.success(chalk.green("complete"));
