import * as components from "../../components";

const names = Object.keys(components).sort();

export const isValidTag = (tagName: any) => {
  return names.indexOf(tagName) !== -1;
};
