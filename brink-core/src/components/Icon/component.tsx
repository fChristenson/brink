import React from "react";
import { styles } from "./styles";
import * as Icons from "./icons";
import { applyStyles } from "../../libs/utils/applyStyles";
import { noop } from "../../libs/utils/noop";
import { withAppContext } from "../../store";
import { IProps } from "./props";

const lowerCaseIcons = Object.keys(Icons).reduce((acc, key) => {
  // @ts-ignore
  acc[key.toLowerCase()] = Icons[key];
  return acc;
}, {});

export const IconComponent: React.FunctionComponent<IProps> = ({
  variant,
  onClicks = {},
  onClick,
  color,
  padding
}) => {
  const onClickFn = (onClick && onClicks[onClick]) || noop;
  // @ts-ignore
  const Component = lowerCaseIcons[variant.toLowerCase()];
  const style = applyStyles(styles, { padding });
  return (
    <span role={onClickFn && "button"} onClick={onClickFn} style={style}>
      <Component color={color} style={styles} />
    </span>
  );
};

export const Icon = withAppContext(IconComponent);
