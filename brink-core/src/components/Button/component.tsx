import React from "react";
import { styles, textStyles } from "./styles";
import { noop } from "../../libs/utils/noop";
import { withAppContext } from "../../store";
import { Icon } from "../Icon";
import { IconName } from "../Icon/IconNames";
import { ColorNames } from "../../configs/colors/colors";
import { IOnClick } from "../../libs/interfaces/onClick";
import { IPadding } from "../../libs/interfaces/padding";

interface IProps extends IPadding, IOnClick {
  rightIcon?: IconName;
  leftIcon?: IconName;
}

export const ButtonComponent: React.FunctionComponent<IProps> = ({
  children,
  onClicks = {},
  onClick,
  rightIcon,
  leftIcon
}) => {
  const onClickFn = (onClick && onClicks[onClick]) || noop;
  return (
    <button onClick={onClickFn} style={styles}>
      {leftIcon && (
        <Icon color={ColorNames.WHITE1} padding="0" variant={leftIcon} />
      )}
      <span style={textStyles}>{children}</span>
      {rightIcon && (
        <Icon color={ColorNames.WHITE1} padding="0" variant={rightIcon} />
      )}
    </button>
  );
};

ButtonComponent.displayName = "Button";

export const Button = withAppContext(ButtonComponent);
