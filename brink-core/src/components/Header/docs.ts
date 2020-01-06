import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  margin: sharedDocs.margin,
  textAlign: sharedDocs.textAlign,
  textColor: sharedDocs.textColor
};
