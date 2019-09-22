import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { IMargin } from "../../libs/interfaces/margin";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";

interface IProps extends IMargin, IMaxWidth {
  justifyContent?: string;
  alignItems?: string;
}

export const DivContainer: React.FunctionComponent<IProps> = ({
  children,
  margin,
  alignItems,
  justifyContent,
  maxWidth
}) => {
  const style = applyStyles(styles, {
    margin,
    maxWidth,
    alignItems,
    justifyContent,
    display: justifyContent ? "flex" : undefined
  });
  return <div style={style}>{children}</div>;
};
