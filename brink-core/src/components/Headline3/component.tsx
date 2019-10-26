import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";
import { IProps } from "./props";

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

Headline3.displayName = "Headline3";
