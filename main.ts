// The Dog Reviews the Mailman — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: one funny one-line review a dog gives the mailman.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "He brings paper every day and never once brings the ball, so I shredded today's delivery and left the pieces on his doormat as my review. One star, would shred again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
