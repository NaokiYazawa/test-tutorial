/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
};

// https://exerror.com/error-test-environment-jest-environment-jsdom-cannot-be-found-make-sure-the-testenvironment-configuration-option-points-to-an-existing-node-module/
