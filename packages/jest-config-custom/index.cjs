/** @type {import("jest").Config} */
const baseConfig = {
  passWithNoTests: true,
  rootDir: "src",
  collectCoverageFrom: ["**/*.tsx?"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  coverageDirectory: "../coverage",
  reporters: ["default", "github-actions"],
  verbose: true,
};

/** @type {import("jest").Config} */
const serviceConfig = {
  ...baseConfig,
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.spec\\.ts?$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["<rootDir>/index.ts", ".*\\.module\\.ts$"],
};

/** @type {import("jest").Config} */
const uiConfig = {
  ...baseConfig,
  preset: "solid-jest/preset/browser",
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleFileExtensions: ["js", "json", "tsx"],
  testRegex: ".*\\.spec\\.tsx$",
  transform: {
    "\\.css$": "@workspaces/jest-style-mock",
  },
  coveragePathIgnorePatterns: ["<rootDir>/index.tsx"],
};

module.exports = {
  serviceConfig,
  uiConfig,
};
