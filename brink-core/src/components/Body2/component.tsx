import * as React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { toUpper } from "../../libs/utils/toUpper";
import { Color } from "../../configs/colors/colors";
import { IProps } from "./props";

export const Body2: React.FunctionComponent<IProps> = ({
  children,
  textAlign,
  margin,
  padding,
  textColor,
  noWrap
}) => {
  // @ts-ignore
  const color = textColor && Color[toUpper(textColor)];
  const style = applyStyles(styles, {
    textAlign,
    margin,
    padding,
    color,
    whiteSpace: noWrap ? "nowrap" : undefined,
    display: textAlign ? "block" : undefined
  });
  return <span style={style}>{children}</span>;
};

Body2.displayName = "Body2";
