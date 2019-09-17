import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { TextAlign } from "../../libs/utils/textAlign";

interface IProps {
  textAlign?: TextAlign;
  margin?: string;
}

export const Body2: React.FunctionComponent<IProps> = ({
  children,
  textAlign,
  margin
}) => {
  const style = applyStyles(styles, {
    textAlign,
    margin,
    display: textAlign ? "block" : undefined
  });
  return <span style={style}>{children}</span>;
};
