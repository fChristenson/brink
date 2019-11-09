import React from "react";
import { styles, textStyles } from "./styles";
import { noop } from "../../libs/utils/noop";
import { withAppContext } from "../../store";
import { Icon } from "../Icon";
import { ColorNames } from "../../configs/colors/colors";
import { IProps } from "./props";

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
        <Icon color={ColorNames.WHITE1} padding="0" icon={leftIcon} />
      )}
      <span style={textStyles}>{children}</span>
      {rightIcon && (
        <Icon color={ColorNames.WHITE1} padding="0" icon={rightIcon} />
      )}
    </button>
  );
};

ButtonComponent.displayName = "Button";

export const Button = withAppContext<IProps>(ButtonComponent);
