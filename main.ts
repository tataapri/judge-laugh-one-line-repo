import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My calendar reminded me to relax, so I scheduled a meeting with my anxiety for 3 p.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
