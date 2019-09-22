import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color, ColorNames } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";
import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";
import { IPadding } from "../../libs/interfaces/padding";

interface IProps extends IMargin, IMaxWidth, IPadding {
  height?: string;
  background?: string;
  backgroundColor?: ColorNames;
}

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
    backgroundColor && Color[toUpper(backgroundColor)];
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
