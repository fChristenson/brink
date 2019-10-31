import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color, getColor } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";
import { IProps } from "./props";

export const Paper: React.FunctionComponent<IProps> = ({
  children,
  maxWidth,
  height,
  padding,
  margin,
  background,
  backgroundColor
}) => {
  const backgroundColorValue =
    // @ts-ignore
    backgroundColor && getColor(backgroundColor);
  const style = applyStyles(styles, {
    height,
    maxWidth,
    margin,
    padding,
    background: background || backgroundColorValue
  });
  return <div style={style}>{children}</div>;
};

Paper.displayName = "Paper";
