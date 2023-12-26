/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
// import type { Config } from "jest";
// const config: Config = {
//   setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
// };

// export default config;
