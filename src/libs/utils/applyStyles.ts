import { CSSProperties } from "react";

export const applyStyles = (styles: CSSProperties, props: any) => {
  const style = { ...styles };
  const keys = Object.keys(props);
  return keys.reduce((acc: any, key) => {
    const prop = props[key];
    if (prop) {
      acc[key] = prop;
    }
    return acc;
  }, style);
};
