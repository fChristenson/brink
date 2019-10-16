import { xml2json } from "xml-js";
import { isValidTag } from "brink-core";

export const parseXml = (xml: string) => {
  const xmlStr = xml2json(xml);
  return JSON.parse(xmlStr);
};

export const isValidXml = (xml: any): boolean => {
  if (!xml) return false;
  if (xml.type === "text") return true;

  const result = [];

  if (xml.type === "element") {
    result.push(isValidTag(xml.name));
  }

  for (const element of xml.elements || []) {
    result.push(isValidXml(element));
  }

  return result.every(bool => bool === true);
};
