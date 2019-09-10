import React from "react";
import * as components from "../../components";

export const buildPage = (children: any[]): React.ReactNode => {
  for (const component of children) {
    // @ts-ignore
    const Component = components[component.name];
    const attributes = component.attributes || {};

    if (component.elements && component.elements.length > 0) {
      const child = buildPage(component.elements);
      return <Component {...attributes}>{child}</Component>;
    } else {
      return <Component {...attributes}></Component>;
    }
  }

  return null;
};
