import { ColorNames } from "../../configs/colors/colors";
import { IOnClick } from "../../libs/interfaces/onClick";
import { IPadding } from "../../libs/interfaces/padding";
import { IIconVariant } from "../../libs/interfaces/iconVariant";

export interface IProps extends IOnClick, IPadding, IIconVariant {
  color?: ColorNames;
}
