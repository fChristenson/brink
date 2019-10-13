import xmlformat from "xml-formatter";
import { xml2json } from "xml-js";

export interface ICodeEditorState {
  xmlCode: string;
  nodeTree?: any;
  open: boolean;
}

const initXml = "<Page><CenterContainer>Hello world!</CenterContainer></Page>";
const xmlStr = xml2json(initXml);
const xml = JSON.parse(xmlStr);

export const initState: ICodeEditorState = {
  xmlCode: xmlformat(initXml),
  nodeTree: xml,
  open: false
};
