import React from "react";
import { styles } from "./styles";

export const ListContainer: React.FunctionComponent = ({ children }) => {
  return <ul style={styles}>{children}</ul>;
};
