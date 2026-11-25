import { mkdir, writeFile } from "node:fs/promises";

const ENTRY = "I spent the week entering $2 bounties and the weekend explaining why $0.26 is progress.";
// Winner (24/25, 87 chars) beat runner-up D16 in the tie-break: every element is literally
// true this week (a full week of $2 bounties; $0.26 is the real participation-reward total),
// and the joke turns on defending pocket change as progress. D16's "I lost" is not yet true.

const outDir = process.argv[2] ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, ENTRY);
