module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    preset: 'ts-jest/presets/js-with-babel',
    moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!public', '!tests', '!__mocks__', '!src/typings/*.{ts,tsx}'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    setupFiles: ['<rootDir>/__mocks__/setup.js'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};