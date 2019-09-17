import React from "react";
import { styles } from "./styles";

export const Button: React.FunctionComponent = ({ children }) => {
  return <button style={styles}>{children}</button>;
};
