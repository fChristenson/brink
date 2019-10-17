import convert from "xml-js";
import { getTemplate } from "./run";

export const compile = (name: string, xmlString: string) => {
  const xmlJsonString = convert.xml2json(xmlString, { spaces: 2 });
  return getTemplate(name, xmlJsonString);
};
