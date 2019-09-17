import React from "react";
import { styles } from "./styles";
import { TextAlign } from "../../libs/utils/textAlign";
import { applyStyles } from "../../libs/utils/applyStyles";

interface IProps {
  textAlign?: TextAlign;
  margin?: string;
}

export const Headline3: React.FunctionComponent<IProps> = ({
  children,
  textAlign,
  margin
}) => {
  const style = applyStyles(styles, { textAlign, margin });
  return <h3 style={style}>{children}</h3>;
};
