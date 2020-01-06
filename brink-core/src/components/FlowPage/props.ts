import { IOnSubmit } from "../../store";
import { IBackgroundColor } from "../../libs/interfaces/backgroundColor";
import { ColorNames } from "../../configs/colors";

export interface IProps extends IBackgroundColor {
  onSubmit: IOnSubmit;
  headerIconColor?: ColorNames;
}
