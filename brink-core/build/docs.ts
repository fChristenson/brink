import { readdirSync, statSync, writeFileSync } from "fs";
import { join, resolve } from "path";

const componentsDir = resolve(__dirname, "..", "src", "components");
const files = readdirSync(componentsDir);

const componentDocs = files
  .map(f => ({ name: f, path: join(componentsDir, f) }))
  .filter(d => statSync(d.path).isDirectory())
  .map(d => ({ name: d.name, docs: require(join(d.path, "docs")).docs }));

writeFileSync(
  resolve(__dirname, "..", "docs.json"),
  JSON.stringify(componentDocs, null, 2),
  "utf8"
);
