#!/usr/bin/node
import fs from "fs";
import path from "path";
import { cli } from "./cli";
import { run } from "./run";

(() => {
  const rootFilePath = path.resolve(cli.args[0]);
  const stats = fs.statSync(rootFilePath);

  if (!stats.isDirectory()) {
    const name = path.basename(rootFilePath).split(".")[0];
    const str = run(name, rootFilePath);
    return process.stdout.write(str);
  }

  const filePaths: string[] = fs
    .readdirSync(rootFilePath, "utf8")
    .filter(p => path.extname(p) === ".xml")
    .map(p => path.join(rootFilePath, p));

  for (const filePath of filePaths) {
    const name = path.basename(filePath).split(".")[0];
    const str = run(name, filePath);
    if (cli.output) {
      const dirPath = path.resolve(cli.output);

      if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

      fs.writeFileSync(path.resolve(cli.output, `${name}.brink.tsx`), str);
    } else {
      fs.writeFileSync(path.join(rootFilePath, `${name}.brink.tsx`), str);
    }
  }

  return;
})();
