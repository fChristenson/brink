import { CSSProperties } from "react";

export const applyStyles = (...styles: CSSProperties[]) => {
  return styles.reduce((acc: any, styleObj) => {
    // @ts-ignore
    const props = Object.keys(styleObj).filter(key => !!styleObj[key]);

    for (const prop of props) {
      // @ts-ignore
      acc[prop] = styleObj[prop];
    }

    return acc;
  }, {});
};
