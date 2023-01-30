/** @type {import("eslint").ESLint.ConfigData} */
const configuration = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "prettier", "jest"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-explicit-any": "off",
  },
};

module.exports = configuration;
