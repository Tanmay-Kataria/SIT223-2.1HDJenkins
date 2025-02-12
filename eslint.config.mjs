import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended, // ✅ Core JS rules
  ...tseslint.configs.recommended, // ✅ TypeScript rules
  pluginReact.configs.recommended, // ✅ React rules
  {
    plugins: {
      react: pluginReact, // ✅ Correctly importing React plugin
    },
    settings: {
      react: {
        version: "detect", // ✅ Automatically detect React version
      },
    },
  },
];
