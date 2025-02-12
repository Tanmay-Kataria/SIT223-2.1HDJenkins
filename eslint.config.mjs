import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended, // ✅ Now correctly defined
  ...tseslint.configs.recommended, // ✅ Spread operator is fine here
  pluginReact.configs.recommended, // ✅ Correct way to include React rules
  {
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: "detect", // ✅ Automatically detect React version
      },
    },
  },
];
