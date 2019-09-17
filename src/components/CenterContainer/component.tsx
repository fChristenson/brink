import React from "react";
import { styles } from "./styles";

export const CenterContainer: React.FunctionComponent = ({ children }) => {
  return <div style={styles}>{children}</div>;
};
