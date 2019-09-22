import * as components from "../../components";

export const isValidTag = (tagName: any) => {
  return Object.keys(components).indexOf(tagName) !== -1;
};

export const getValidTagNames = () => {
  return Object.keys(components).sort();
};
