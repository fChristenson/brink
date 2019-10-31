import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  margin: sharedDocs.margin,
  maxWidth: sharedDocs.maxWidth,
  alignItems: {
    description: "The alignment of elements on the y axis",
    exampleValues: ["center"]
  },
  justifyContent: {
    description: "Justify content on the x axis",
    exampleValues: ["space-between", "flex-start", "flex-end", "center"]
  }
};
