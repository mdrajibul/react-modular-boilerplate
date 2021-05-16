module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
    rules: {
        'jsx-quotes': ['warn', 'prefer-double'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/display-name': 'off'
    },
    settings: {
        react: {
            version: 'detect',
            pragma: 'React'
        }
    }
};