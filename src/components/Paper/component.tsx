import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Color } from "../../configs/colors/colors";
import { toUpper } from "../../libs/utils/toUpper";
import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";

interface IProps extends IMargin, IMaxWidth {
  height?: string;
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
