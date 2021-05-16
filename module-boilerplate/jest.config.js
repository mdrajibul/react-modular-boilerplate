module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    preset: 'ts-jest/presets/js-with-babel',
    moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
        "^@mocks(.*)$": "<rootDir>/__mocks__s$1",
        "^@assets(.*)$": "<rootDir>/src/assets$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@contexts(.*)$": "<rootDir>/src/contexts$1",
        "^@exceptions(.*)$": "<rootDir>/src/exceptions$1",
        "^@services(.*)$": "<rootDir>/src/services$1",
        "^@typings(.*)$": "<rootDir>/src/typings$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1",
        "^@config$": "<rootDir>/src/config.ts",
        "^@constants$": "<rootDir>/src/constants.ts",
        "^@routes$": "<rootDir>/src/routes.ts",
        "^@router$": "<rootDir>/src/router.ts",
    },
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!public', '!__tests__', '!__mocks__', '!src/typings/*.{ts,tsx}'],
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