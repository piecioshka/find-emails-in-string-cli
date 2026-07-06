#!/usr/bin/env node

"use strict";

const finder = require("../dist/index");
const filename = process.argv[2];

(async () => {
    if (!filename) {
        console.error("Usage: find-emails-in-string path/to/file.md");
        process.exitCode = 1;
        return;
    }

    try {
        const emails = await finder(filename);

        if (emails) {
            console.log(emails);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exitCode = 1;
    }
})();
