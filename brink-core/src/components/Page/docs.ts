import { IProps } from "./props";
import { IDocs } from "../../libs/docs/docs";
import { ColorNames } from "../../configs/colors";

export const docs: IDocs<keyof IProps> = {
  backgroundColor: {
    description: "The background color",
    exampleValues: Object.values(ColorNames)
  }
};
