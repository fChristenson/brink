import { cli } from "./cli";
import convert from "xml-js";
import fs from "fs";

export const run = (name: string, filePath: string) => {
  const xmlString = fs.readFileSync(filePath, "utf8");
  const xmlJsonString = convert.xml2json(xmlString, { spaces: 2 });

  if (cli.json) return xmlJsonString;

  const xmlJson = JSON.parse(xmlJsonString);
  // @ts-ignore
  const componentImports = getComponentImports(xmlJson.elements as any[]);
  // @ts-ignore
  const reactTreeString = getComponentBody(xmlJson.elements as any[]);

  // @ts-ignore
  return fileTemplate(capitalize(name), componentImports, reactTreeString);
};
