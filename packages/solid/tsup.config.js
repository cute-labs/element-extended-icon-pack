import { defineConfig } from "tsup";
import * as preset from "tsup-preset-solid";

/** @type {import('tsup-preset-solid').PresetOptions} */
const presetOptions = {
  entries: [
    {
      entry: "src/index.ts",
      server_entry: true
    }
  ],
  drop_console: true,
  cjs: true
};

export default defineConfig((config) => {
  const watching = !!config.watch;

  const parseData = preset.parsePresetOptions(presetOptions, watching);

  if (!watching) {
    const packageFields = preset.generatePackageExports(parseData);

    console.log(`package.json: \n\n${JSON.stringify(packageFields, null, 2)}\n\n`);

    /*
        will update ./package.json with the correct export fields
    */
    preset.writePackageJson(packageFields);
  }

  return preset.generateTsupOptions(parseData);
});
