import React from "react";
import { styles } from "./styles";
import { IProps } from "./props";

export const SubmitInput: React.FunctionComponent<IProps> = ({ disabled }) => {
  return <input disabled={disabled} style={styles} type="submit" />;
};
