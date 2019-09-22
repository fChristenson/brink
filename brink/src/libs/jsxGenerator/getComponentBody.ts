import { ColorNames } from "../../configs/colors";

export const getComponentBody = (xml: any[]): string => {
  const result: string[] = [];

  for (const node of xml) {
    const attributes = getAttributeString(node.attributes);

    if (node.type === "element" && node.elements && node.elements.length > 0) {
      const children = getComponentBody(node.elements);

      const nodeString = [
        `<${node.name} ${attributes}>`,
        children,
        `</${node.name}>`
      ].join("\n");

      result.push(nodeString);
    } else if (node.type === "element") {
      result.push(`<${node.name} ${attributes} />`);
    } else if (node.type === "text") {
      result.push(node.text);
    }
  }

  return result.join("\n");
};

const getAttributeString = (attr: any) => {
  const keys = Object.keys(attr || {});
  const result: string[] = [];

  for (const key of keys) {
    const str = `${key}=${parseAttributeValue(attr[key])}`;
    result.push(str);
  }

  return result.join(" ");
};

const parseAttributeValue = (value: any) => {
  const colors = Object.keys(ColorNames);
  const name = value.toUpperCase();

  if (colors.includes(name)) {
    return `{ColorNames.${name}}`;
  }

  return `"${value}"`;
};
