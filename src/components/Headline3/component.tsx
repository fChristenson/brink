import React from "react";
import { styles } from "./styles";
import { ITextAlign } from "../../libs/interfaces/textAlign";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";
import { IMargin } from "../../libs/interfaces/margin";

interface IProps extends IMargin, ITextAlign {
  textColor?: Color;
}

export const Headline3: React.FunctionComponent<IProps> = ({
  children,
  textAlign,
  margin = "0",
  textColor
}) => {
  // @ts-ignore
  const color = textColor && Color[toUpper(textColor)];
  const style = applyStyles(styles, { textAlign, margin, color });
  return <h3 style={style}>{children}</h3>;
};
