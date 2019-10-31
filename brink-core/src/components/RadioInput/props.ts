import { IMargin } from "../../libs/interfaces/margin";
import { IContext } from "../../store";
import { IIcon } from "../../libs/interfaces/icon";
import { IName } from "../../libs/interfaces/name";
import { IDisabled } from "../../libs/interfaces/disabled";

export interface IProps extends IContext, IMargin, IIcon, IName, IDisabled {
  value: string;
}
