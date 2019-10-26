import { IconName } from "../Icon/IconNames";
import { IOnClick } from "../../libs/interfaces/onClick";
import { IPadding } from "../../libs/interfaces/padding";

export interface IProps extends IPadding, IOnClick {
  rightIcon?: IconName;
  leftIcon?: IconName;
}
