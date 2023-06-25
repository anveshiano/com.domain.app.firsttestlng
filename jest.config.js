module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
  },
  setupFiles: ["jest-webgl-canvas-mock"],
  moduleNameMapper: {
    "^src(.*)": "<rootDir>/src$1",
    "^test(.*)": "<rootDir>/test$1",
  },
  transform: {
    "^.+\\.[m|t]?js$": "babel-jest",
  },
  transformIgnorePatterns: [],
};
