import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom", // Use JSDOM for a browser-like environment
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Optional: for setup files
  transformIgnorePatterns: [
    "node_modules/(?!cheerio|@?cheerio/dist/browser/index.js)",
  ],
};

export default config;
