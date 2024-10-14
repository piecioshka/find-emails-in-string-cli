module.exports = {
    extends: "piecioshka",

    parser: "@babel/eslint-parser",

    parserOptions: {
        requireConfigFile: false,
    },

    // https://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        es6: true,
        // browser: true,
        node: true,
        commonjs: true,
        // amd: true,
        // jquery: true,
        jasmine: true,
    },

    // https://eslint.org/docs/rules/
    rules: {
        "no-console": ["off"],
        quotes: ["error", "double"],
        "arrow-parens": ["error", "always"],
    },

    // List of global variables.
    globals: {},
};
