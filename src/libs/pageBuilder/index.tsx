import React from "react";
import * as components from "../../components";
import { Provider } from "../../store/context";

export const buildPage = (xml: any, validators: any) => (
  <Provider validators={validators}>{parseXml(xml.elements)}</Provider>
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
    } else {
      nodes.push(<Component key={i} {...attributes}></Component>);
    }
  }

  return <>{...nodes}</>;
};
