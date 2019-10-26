import { IMargin } from "../../libs/interfaces/margin";
import { IContext } from "../../store";
import { IIconVariant } from "../../libs/interfaces/iconVariant";
import { IName } from "../../libs/interfaces/name";
import { IDisabled } from "../../libs/interfaces/disabled";

export interface IProps
  extends IContext,
    IMargin,
    IIconVariant,
    IName,
    IDisabled {
  value: string;
}
