import React from "react";
import * as components from "../../components";

export const buildPage = (children: any[]): React.ReactNode => {
  const nodes = [];
  for (let i = 0; i < children.length; i++) {
    const component = children[i];
    // @ts-ignore
    const Component = components[component.name];
    const attributes = component.attributes || {};
    if (component.elements && component.elements.length > 0) {
      const childNodes = buildPage(component.elements);
      nodes.push(
        <Component key={i} {...attributes}>
          {childNodes}
        </Component>
      );
    } else {
      nodes.push(<Component key={i} {...attributes}></Component>);
    }
  }

  return <>{nodes}</>;
};
