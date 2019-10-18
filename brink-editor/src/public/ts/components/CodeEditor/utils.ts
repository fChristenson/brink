import { xml2json } from "xml-js";
import { isValidTag } from "brink-core";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";

export const findRootNode = (rootNodes: IRootNode[], id: string): IRootNode => {
  const rootNode = rootNodes.find(n => n.id === id);
  if (!rootNode) throw new Error(`Could not find ${id}`);

  return rootNode;
};

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
