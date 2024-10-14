#!/usr/bin/env node

"use strict";

const finder = require("../src");
const filename = process.argv[2];

(async () => {
    if (!filename) {
        console.log("Usage: find-emails-in-string path/to/file.md");
        return;
    }

    const emails = await finder(filename);

    if (emails) {
        console.log(emails);
    }
})();
