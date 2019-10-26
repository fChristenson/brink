import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";

export interface IProps extends IMargin, IMaxWidth {
  justifyContent?: string;
  alignItems?: string;
}
