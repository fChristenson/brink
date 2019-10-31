import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";
import { IPadding } from "../../libs/interfaces/padding";
import { IBackgroundColor } from "../../libs/interfaces/backgroundColor";

export interface IProps extends IMargin, IMaxWidth, IPadding, IBackgroundColor {
  height?: string;
  background?: string;
}
