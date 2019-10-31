import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";
import { ColorNames } from "../../configs/colors";

export const docs: IDocs<keyof IProps> = {
  onClick: sharedDocs.onClick,
  padding: sharedDocs.padding,
  icon: sharedDocs.icon,
  color: {
    description: "Color of the element",
    exampleValues: Object.values(ColorNames)
  }
};
