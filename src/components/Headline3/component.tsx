import React from "react";
import { styles } from "./styles";
import { TextAlign } from "../../libs/utils/textAlign";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";

interface IProps {
  textAlign?: TextAlign;
  textColor?: Color;
  margin?: string;
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
