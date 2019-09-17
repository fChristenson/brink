import React from "react";
import * as components from "../../components";
import { Provider, IProivderProps } from "../../store";

interface IPageBuilderProps {
  xml: any;
  props: IProivderProps;
}

export const PageBuilder = ({ xml, props }: IPageBuilderProps) => (
  <Provider {...props}>{parseXml(xml.elements)}</Provider>
);

const parseXml = (children: any[]): React.ReactNode => {
  const nodes = [];
  for (let i = 0; i < children.length; i++) {
    const component = children[i];
    // @ts-ignore
    const Component = components[component.name];
    const attributes = component.attributes || {};
    //TODO: validate input
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
