module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        // 启用新jsx规则
        'plugin:react/jsx-runtime',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            // 启用JSX
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-uses-react': 'off', // 关闭旧模式校验
        'react/react-in-jsx-scope': 'off', // 关闭旧模式校验
    },
};
