import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";

interface IProps {
  maxWidth?: string;
  height?: string;
  margin?: string;
  background?: string;
  backgroundColor?: string;
}

export const Paper: React.FunctionComponent<IProps> = ({
  children,
  maxWidth,
  height,
  margin,
  background,
  backgroundColor
}) => {
  const backgroundColorValue =
    // @ts-ignore
    backgroundColor && Color[toUpper(backgroundColor)];
  const style = applyStyles(styles, {
    height,
    maxWidth,
    margin,
    background: background || backgroundColorValue
  });
  return <div style={style}>{children}</div>;
};
