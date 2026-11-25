import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "You shall soon be promoted to a larger pot, provided you stop dropping leaves every time someone looks at you wrong.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 116 || content.includes("\n") || content.includes("\r") || content !== "You shall soon be promoted to a larger pot, provided you stop dropping leaves every time someone looks at you wrong.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
