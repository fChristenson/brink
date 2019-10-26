import { ITextAlign } from "../../libs/interfaces/textAlign";
import { IPadding } from "../../libs/interfaces/padding";
import { IMargin } from "../../libs/interfaces/margin";
import { ITextColor } from "../../libs/interfaces/textColor";

export interface IProps extends IPadding, IMargin, ITextAlign, ITextColor {
  noWrap?: boolean;
}
