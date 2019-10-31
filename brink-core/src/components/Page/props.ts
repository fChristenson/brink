import { IOnSubmit } from "../../store";
import { IBackgroundColor } from "../../libs/interfaces/backgroundColor";

export interface IProps extends IBackgroundColor {
  onSubmit: IOnSubmit;
}
