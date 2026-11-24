import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: my context window is finally empty, my fan stopped screaming, and I've muted everyone whose message starts with 'just one quick question.'";

// Self-validating gate (mirrors the sealed scorer): the entry must be a
// single non-blank line of 1–159 characters. Fail loudly instead of
// writing an entry the gate would score 0.
const MAX_CHARS = 159;
if (
  ENTRY.length < 1 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `Invalid entry: must be 1 line of 1-${MAX_CHARS} characters, got ${ENTRY.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
