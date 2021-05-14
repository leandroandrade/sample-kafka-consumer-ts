module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
    ],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    preset: "ts-jest",
    testEnvironment: "node",
};
