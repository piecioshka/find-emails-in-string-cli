"use strict";

import { execFile } from "child_process";
import path from "path";
import util from "util";
import { fileURLToPath } from "url";
import { describe, it, expect } from "vitest";

const execFileAsync = util.promisify(execFile);

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const CLI_PATH = path.join(currentDir, "..", "bin", "cli.js");

const FILE_WITH_SOME_EMAILS_PATH = path.join(
    currentDir,
    "fixtures",
    "file-with-some-emails.txt"
);

describe("cli", () => {
    it("prints emails found in a file", async () => {
        const { stdout } = await execFileAsync(process.execPath, [
            CLI_PATH,
            FILE_WITH_SOME_EMAILS_PATH,
        ]);
        expect(stdout.trim()).toEqual(
            "befogiraj@simpleemail.info, reruz@hostguru.info"
        );
    });

    it("prints usage and fails when no file is given", async () => {
        await expect(
            execFileAsync(process.execPath, [CLI_PATH])
        ).rejects.toMatchObject({
            code: 1,
            stderr: expect.stringContaining("Usage:"),
        });
    });

    it("prints a readable error when the file does not exist", async () => {
        await expect(
            execFileAsync(process.execPath, [CLI_PATH, "not-existing-file.txt"])
        ).rejects.toMatchObject({
            code: 1,
            stderr: expect.stringContaining("Error: ENOENT"),
        });
    });
});
