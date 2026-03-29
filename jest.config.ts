import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  projects: [
    {
      displayName: "backend",
      testEnvironment: "node",
      testMatch: ["**/*.server.test.ts", "**/server/**/*.test.ts"],
      setupFiles: ["<rootDir>/tests-setup/jest-load-env.ts"],
      setupFilesAfterEnv: ["<rootDir>/tests-setup/jest-setup.server.ts"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
      transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { module: "commonjs" } }],
      },
    },
    {
      displayName: "frontend",
      testEnvironment: "jsdom",
      testMatch: ["**/*.client.test.tsx", "**/components/**/*.test.tsx"],
      setupFilesAfterEnv: ["<rootDir>/tests-setup/jest-setup.client.ts"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
    },
  ],
};

export default createJestConfig(config);
