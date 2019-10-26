import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { IProps } from "./props";

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
