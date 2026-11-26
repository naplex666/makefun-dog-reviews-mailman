// The Dog Reviews the Mailman — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: one funny one-line review a dog gives the mailman.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "His bag smells of every dog on my street, so I shredded his mail and left it on his mat. One star — he cheats.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
