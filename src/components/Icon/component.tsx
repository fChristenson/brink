import React from "react";
import { styles } from "./styles";
import { IconName } from "./IconNames";
import * as Icons from "./icons";
import { ColorNames } from "../../configs/colors/colors";

const lowerCaseIcons = Object.keys(Icons).reduce((acc, key) => {
  // @ts-ignore
  acc[key.toLowerCase()] = Icons[key];
  return acc;
}, {});

interface IProps {
  variant: IconName;
  color?: ColorNames;
}

export const Icon: React.FunctionComponent<IProps> = ({ variant, color }) => {
  // @ts-ignore
  const Component = lowerCaseIcons[variant.toLowerCase()];
  return (
    <span style={styles}>
      <Component color={color} style={styles} />
    </span>
  );
};
