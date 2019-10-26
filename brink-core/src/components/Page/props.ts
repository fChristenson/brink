import { Color } from "../../configs/colors/colors";
import { IOnSubmit } from "../../store";

export interface IProps {
  backgroundColor?: Color;
  onSubmit: IOnSubmit;
}
