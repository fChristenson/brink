import xmlformat from "xml-formatter";

export interface IRootNode {
  id: string;
  title: string;
  xmlCode: string;
  x: number;
  y: number;
}

const initXml = "<Page><CenterContainer>Hello world!</CenterContainer></Page>";

export const RootNode = (
  x: number,
  y: number,
  id: string = Math.random().toString()
): IRootNode => {
  return {
    id,
    title: "Page",
    xmlCode: xmlformat(initXml),
    x,
    y
  };
};
