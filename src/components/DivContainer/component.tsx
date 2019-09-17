import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";

interface IProps {
  margin?: string;
  justifyContent?: string;
}

export const DivContainer: React.FunctionComponent<IProps> = ({
  children,
  margin,
  justifyContent
}) => {
  const style = applyStyles(styles, {
    margin,
    justifyContent,
    display: justifyContent ? "flex" : undefined
  });
  return <div style={style}>{children}</div>;
};
