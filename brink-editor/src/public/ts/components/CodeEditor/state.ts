import xmlformat from "xml-formatter";
import { parseXml } from "./utils";

export interface ICodeEditorState {
  xmlCode: string;
  nodeTree?: any;
  open: boolean;
}

const initXml = "<Page><CenterContainer>Hello world!</CenterContainer></Page>";
const xml = parseXml(initXml);

export const initState: ICodeEditorState = {
  xmlCode: xmlformat(initXml),
  nodeTree: xml,
  open: false
};
