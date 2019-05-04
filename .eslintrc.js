module.exports = {
    extends: 'piecioshka',

    parser: 'babel-eslint',

    // http://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        es6: true,
        // browser: true,
        node: true,
        commonjs: true,
        // amd: true,
        // jquery: true,
        jasmine: true
    },

    // http://eslint.org/docs/rules/
    rules: {
        "no-console": ["off"]
    },

    // List of global variables.
    globals: {}
};
