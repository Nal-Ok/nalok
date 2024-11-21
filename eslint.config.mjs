import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  rules:{
    "no-console" : "error",
    "no-unused-vars" : "warn",
    "no-undef": "errors",
    "eqeqeq" : "errors",
    "no-debugger" :  "error",
    "semi" : ["error", "always"],
    "quotes" : ["error", "single"],
    "indent" : ["error",2],
    "comma-dangle": ["error", "always-muliline"],
    "react/jsx-users-react": "off",
    "react/prop-types": "off",
    "react/jsx-key" : "error",
    "@typescript-eslint/explicit-function-return-type" : "warn",
    "@typescript-eslint/no-explicit-any" : "warn",
    "prettier/prettier" : 'off'
  },
  extends: [
    "plugin:prettier/recommended"
  ]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];