import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";

interface IProps {
  maxWidth?: string;
  height?: string;
  margin?: string;
  background?: string;
}

export const Paper: React.FunctionComponent<IProps> = ({
  children,
  maxWidth,
  height,
  margin,
  background
}) => {
  const style = applyStyles(styles, {
    height,
    maxWidth,
    margin,
    background
  });
  return <div style={style}>{children}</div>;
};
