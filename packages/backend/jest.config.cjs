/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coveragePathIgnorePatterns: ["<rootDir>/main.ts", ".*\\.module\\.ts$"],
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
