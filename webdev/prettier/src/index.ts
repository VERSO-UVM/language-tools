import { PrettierConfig } from "@ianvs/prettier-plugin-sort-imports";

type Options = {
  enableSvelte: boolean;
  enableVue: boolean;
  enableReact: boolean;
  importSortTSVersion: string;
};

export default function generatePrettierConfig(
  options: Options,
  extraConfig: PrettierConfig
): PrettierConfig {
  return { ...extraConfig };
}
