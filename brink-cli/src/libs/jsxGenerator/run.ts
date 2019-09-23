import { cli } from "./cli";
import convert from "xml-js";
import fs from "fs";
import { getComponentImports } from "./getComponentImports";
import { getComponentBody } from "./getComponentBody";
import { fileTemplate } from "./fileTemplate";
import { capitalize } from "../utils/capitalize";

export const run = (name: string, filePath: string) => {
  const xmlString = fs.readFileSync(filePath, "utf8");
  const xmlJsonString = convert.xml2json(xmlString, { spaces: 2 });

  if (cli.json) return xmlJsonString;

  const xmlJson = JSON.parse(xmlJsonString);
  const componentImports = getComponentImports(xmlJson.elements as any[]);
  const reactTreeString = getComponentBody(xmlJson.elements as any[]);

  return fileTemplate(capitalize(name), componentImports, reactTreeString);
};
