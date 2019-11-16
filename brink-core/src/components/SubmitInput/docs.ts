import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  disabled: sharedDocs.disabled
};
