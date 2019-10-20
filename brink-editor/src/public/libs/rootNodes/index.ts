import { IRootNode } from "../../ts/app/components/Canvas/components/RootNode/RootNode";
import {
  findRootNode,
  parseXml,
  isValidXml
} from "../../ts/app/components/CodeEditor/utils";

export const buildRootNode = (rootNodes: IRootNode[], id: string): any => {
  const rootNode = findRootNode(rootNodes, id);
  let xml;

  try {
    xml = parseXml(rootNode.xmlCode);
  } catch (_) {}

  return isValidXml(xml) && xml;
};
