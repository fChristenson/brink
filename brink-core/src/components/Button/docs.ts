import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  padding: sharedDocs.padding,
  onClick: sharedDocs.onClick,
  rightIcon: sharedDocs.icon,
  leftIcon: sharedDocs.icon
};
