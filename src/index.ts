"use strict";

import fs from "fs";
import util from "util";

import findEmails from "find-emails-in-string";

const readFile = util.promisify(fs.readFile);

const findEmailsInFile = async (filename: string): Promise<string> => {
    const content = await readFile(filename);

    const clearContent = content
        .toString()
        .replace(/\t/g, " ")
        .replace(/\n/g, " ");
    const emails = findEmails(clearContent);
    const uniqueEmails = [...new Set(emails)];

    return uniqueEmails.join(", ");
};

export = findEmailsInFile;
