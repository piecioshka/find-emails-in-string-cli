#!/usr/bin/env node

'use strict';

const args = process.argv;
const THIRD_ARGUMENT_INDEX = 2;
const filename = args[THIRD_ARGUMENT_INDEX];

if (!filename) {
    throw new Error('Put filename of file in emails');
}

const finder = require('../src');

(async () => {

    const emails = await finder(filename);
    console.log(emails);

})();
