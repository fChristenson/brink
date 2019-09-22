import React from "react";
import { styles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { IMaxWidth } from "../../libs/interfaces/maxWidth";

export const CenterContainer: React.FunctionComponent<IMaxWidth> = ({
  children,
  maxWidth
}) => {
  const style = applyStyles(styles, { maxWidth });
  return <div style={style}>{children}</div>;
};

CenterContainer.displayName = "CenterContainer";
