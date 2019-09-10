import React from "react";
import { styles } from "./styles";

export const ListItem: React.FunctionComponent = ({ children }) => {
  return <li style={styles}>{children}</li>;
};
