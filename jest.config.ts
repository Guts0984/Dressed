import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  // We define "projects" instead of a single top-level environment
  projects: [
    {
      displayName: "backend",
      testEnvironment: "node",
      // Look for files ending in .server.test.ts or inside a /server/ folder
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
      // Look for files ending in .client.test.tsx or inside a /components/ folder
      testMatch: ["**/*.client.test.tsx", "**/components/**/*.test.tsx"],
      setupFilesAfterEnv: ["<rootDir>/tests-setup/jest-setup.client.ts"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
    },
  ],
};

export default createJestConfig(config);
