import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  padding: sharedDocs.padding,
  margin: sharedDocs.margin,
  textColor: sharedDocs.textColor,
  textAlign: sharedDocs.textAlign,
  noWrap: {
    description: "Force text to stay on one line and not wrap if it overflows",
    exampleValues: [true, false]
  }
};
