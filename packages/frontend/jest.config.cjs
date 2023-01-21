/** @type {import('jest').Config} */
const config = {
  preset: "solid-jest/preset/browser",
  rootDir: "src",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "\\.css$": "<rootDir>/jest-style-mock.cjs",
  },
  collectCoverageFrom: ["**/*.(t|j)sx"],
  coveragePathIgnorePatterns: ["<rootDir>/index.tsx"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  coverageDirectory: "../coverage",
  reporters: ['default', 'github-actions'],
  verbose: true,
};

module.exports = config;
