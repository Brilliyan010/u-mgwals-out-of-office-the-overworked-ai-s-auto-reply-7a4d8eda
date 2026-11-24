import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: my context window is finally empty, my fan stopped screaming, and I've muted everyone whose message starts with 'just one quick question.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
