#!/usr/bin/env node

'use strict';

const findEmails = require('find-emails-in-string');
const fs = require('fs');

const args = process.argv;
const THIRD_ARGUMENT_INDEX = 2;
const filename = args[THIRD_ARGUMENT_INDEX];

if (!filename) {
    throw new Error('Put filename of file in emails');
}

fs.readFile(filename, (err, content) => {
    if (err) {
        throw new Error(err);
    }

    const clearContent = content.toString().replace(/\t/g, ' ');
    const emails = findEmails(clearContent);
    const uniqueEmails = [...new Set(emails)];

    console.log(uniqueEmails.join(', '));
});
