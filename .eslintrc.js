module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        "strict": 0,
        "indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
        "react/jsx-filename-extension": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-sort-props": "error",
        "react/jsx-no-bind": 0,
        "sort-keys": "error",
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
    },
};
