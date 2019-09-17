import React from "react";
import { styles } from "./styles";
import { IconName } from "./IconNames";
import { toUpper } from "../../libs/utils/toUpper";

interface IProps {
  variant?: IconName;
}

export const Icon: React.FunctionComponent<IProps> = ({ variant }) => {
  const name = toUpper(variant);
  // @ts-ignore
  const img = name ? IconName[name] : undefined;
  return <img style={styles} src={`/${img}`} />;
};
