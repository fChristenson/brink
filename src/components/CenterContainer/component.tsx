import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";

interface IProps {
  maxWidth?: string;
}

export const CenterContainer: React.FunctionComponent<IProps> = ({
  children,
  maxWidth
}) => {
  const style = applyStyles(styles, { maxWidth });
  return <div style={style}>{children}</div>;
};
