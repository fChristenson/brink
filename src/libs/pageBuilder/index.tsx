import React from "react";
import * as components from "../../components";
import { Provider, IProivderProps } from "../../store";
import { isValidTag, getValidTagNames } from "../validation/validateTag";

interface IPageBuilderProps {
  xml: any;
  props: IProivderProps;
}

export const PageBuilder = ({ xml, props }: IPageBuilderProps) => (
  <Provider {...props}>{parseXml(xml.elements)}</Provider>
);

const parseXml = (children: any[]): React.ReactNode => {
  validateChildren(children);

  const nodes = [];
  for (let i = 0; i < children.length; i++) {
    const component = children[i];
    // @ts-ignore
    const Component = components[component.name];
    const attributes = component.attributes || {};

    if (component.elements && component.elements.length > 0) {
      const childNodes = parseXml(component.elements);
      nodes.push(
        <Component key={i} {...attributes}>
          {childNodes}
        </Component>
      );
    } else if (component.type === "element") {
      nodes.push(<Component key={i} {...attributes}></Component>);
    } else {
      nodes.push(component.text); // assume text node
    }
  }

  return <>{...nodes}</>;
};

const validateChildren = (children: any[]) => {
  for (const child of children) {
    if (child.type === "element" && !isValidTag(child.name)) {
      throw new Error(
        `${
          child.name
        } is not a valid tag, please use one of the following tags:\n${getValidTagNames().join(
          ",\n"
        )}`
      );
    }
  }
};
