import { IProps } from "./props";
import { IDocs, sharedDocs } from "../../libs/docs/docs";

export const docs: IDocs<keyof IProps> = {
  name: sharedDocs.name,
  invalid: {
    description:
      "Element can be set as invalid to show how it will look when in error state",
    exampleValues: [true, false]
  }
};
