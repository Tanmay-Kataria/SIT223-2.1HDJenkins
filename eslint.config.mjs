import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import babelEslintParser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Apply to all JavaScript/JSX files
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    languageOptions: {
      // Use the Babel parser to understand JSX and modern JS syntax
      parser: babelEslintParser,
      parserOptions: {
        requireConfigFile: false, // Allow parsing without a Babel config file
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      // Define plugins as an object
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      // Disable the rule for react-in-jsx-scope if using React 17+
      "react/react-in-jsx-scope": "off",
    },
  },
  // Include the recommended core rules from @eslint/js
  js.configs.recommended,
];
