import React from "react";
import { styles } from "./styles";
import { IconName } from "./IconNames";
import * as Icons from "./icons";
import { ColorNames } from "../../configs/colors/colors";
import { applyStyles } from "../../libs/utils/applyStyles";
import { noop } from "../../libs/utils/noop";
import { IOnClick } from "../../libs/interfaces/onClick";
import { withAppContext } from "../../store";
import { IPadding } from "../../libs/interfaces/padding";
import { IIconVariant } from "../../libs/interfaces/iconVariant";

const lowerCaseIcons = Object.keys(Icons).reduce((acc, key) => {
  // @ts-ignore
  acc[key.toLowerCase()] = Icons[key];
  return acc;
}, {});

interface IProps extends IOnClick, IPadding, IIconVariant {
  color?: ColorNames;
}

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
