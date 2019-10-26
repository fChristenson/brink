import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";
import { IPadding } from "../../libs/interfaces/padding";
import { ColorNames } from "../../configs/colors/colors";

export interface IProps extends IMargin, IMaxWidth, IPadding {
  height?: string;
  background?: string;
  backgroundColor?: ColorNames;
}
