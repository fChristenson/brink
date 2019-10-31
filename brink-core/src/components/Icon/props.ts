import { ColorNames } from "../../configs/colors/colors";
import { IOnClick } from "../../libs/interfaces/onClick";
import { IPadding } from "../../libs/interfaces/padding";
import { IIcon } from "../../libs/interfaces/icon";

export interface IProps extends IOnClick, IPadding, IIcon {
  color?: ColorNames;
}
