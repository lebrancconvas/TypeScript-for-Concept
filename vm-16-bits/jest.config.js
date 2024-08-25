/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "./src",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["<rootDir>/**/*.ts"],
  testPathIgnorePatterns: ["node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: ["<rootDir>/tests/*.test.ts"]
};
