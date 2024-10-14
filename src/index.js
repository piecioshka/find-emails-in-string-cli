const fs = require("fs");
const util = require("util");

const findEmails = require("find-emails-in-string");
const readFile = util.promisify(fs.readFile);

module.exports = async (filename) => {
    const content = await readFile(filename);

    const clearContent = content
        .toString()
        .replace(/\t/g, " ")
        .replace(/\n/g, " ");
    const emails = findEmails(clearContent);
    const uniqueEmails = [...new Set(emails)];

    return uniqueEmails.join(", ");
};
