const path = require("path");
const finder = require("../src");

const FILE_WITH_SOME_EMAILS_PATH = path.join(
    __dirname,
    "fixtures",
    "file-with-some-emails.txt"
);

const FILE_WITHOUT_ANY_EMAILS_PATH = path.join(
    __dirname,
    "fixtures",
    "file-without-emails.txt"
);

it("find some emails in plain text file", async () => {
    const output = ["befogiraj@simpleemail.info", "reruz@hostguru.info"].join(
        ", "
    );
    expect(await finder(FILE_WITH_SOME_EMAILS_PATH)).toEqual(output);
});

it("should not found any email in file without mails", async () => {
    const output = "";
    expect(await finder(FILE_WITHOUT_ANY_EMAILS_PATH)).toEqual(output);
});
