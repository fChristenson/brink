import React from "react";
import { styles } from "./styles";
import { noop } from "../../libs/utils/noop";
import { withAppContext } from "../../store";

interface IProps {
  onClicks?: any;
  onClick: string;
}

export const ButtonComponent: React.FunctionComponent<IProps> = ({
  children,
  onClicks = {},
  onClick
}) => {
  const onClickFn = (onClick && onClicks[onClick]) || noop;
  return (
    <button onClick={onClickFn} style={styles}>
      {children}
    </button>
  );
};

export const Button = withAppContext(ButtonComponent);
