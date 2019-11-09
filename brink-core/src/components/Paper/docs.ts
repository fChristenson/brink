import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";
import { ColorNames } from "../../configs/colors";

export const docs: IDocs<keyof IProps> = {
  margin: sharedDocs.margin,
  padding: sharedDocs.padding,
  maxWidth: {
    description: "The max width of the element",
    exampleValues: ["100px", "100%", "50px", "50%"]
  },
  height: {
    description: "The height of the element",
    exampleValues: ["100px", "100%", "50px", "50%"]
  },
  backgroundColor: sharedDocs.backgroundColor,
  background: {
    description: "The background value",
    exampleValues: Object.values(ColorNames)
      .map(n => n.toString())
      .concat(["url(/foo.png)"])
  }
};
