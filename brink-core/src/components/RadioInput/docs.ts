import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  name: sharedDocs.name,
  margin: sharedDocs.margin,
  icon: sharedDocs.icon,
  disabled: sharedDocs.disabled,
  value: {
    description: "The value of th element",
    exampleValues: []
  }
};
