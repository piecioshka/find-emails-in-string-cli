"use strict";

import path from "path";
import { fileURLToPath } from "url";
import { describe, it, expect } from "vitest";

import finder from "../src/index";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const FILE_WITH_SOME_EMAILS_PATH = path.join(
    currentDir,
    "fixtures",
    "file-with-some-emails.txt"
);

const FILE_WITHOUT_ANY_EMAILS_PATH = path.join(
    currentDir,
    "fixtures",
    "file-without-emails.txt"
);

describe("find-emails-in-string-cli", () => {
    it("finds emails in a plain text file", async () => {
        const output = ["befogiraj@simpleemail.info", "reruz@hostguru.info"].join(
            ", "
        );
        expect(await finder(FILE_WITH_SOME_EMAILS_PATH)).toEqual(output);
    });

    it("returns an empty string when there are no emails", async () => {
        expect(await finder(FILE_WITHOUT_ANY_EMAILS_PATH)).toEqual("");
    });
});
