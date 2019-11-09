import React from "react";
import { styles, selectedStyles, inputStyles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Icon } from "../Icon";
import { Body2 } from "../Body2";
import { withAppContext } from "../../store";
import { ColorNames, Color } from "../../configs/colors/colors";
import { IProps } from "./props";

export const RadioInputComponent: React.FunctionComponent<IProps> = ({
  state,
  onUpdate,
  value,
  name,
  icon,
  margin,
  disabled,
  children
}) => {
  const isSelected = state[name] === value;
  const maybeSelectedStyles = isSelected || disabled ? selectedStyles : {};
  const color = isSelected || disabled ? ColorNames.WHITE1 : undefined;
  const style = applyStyles(maybeSelectedStyles, styles, {
    margin,
    background: disabled ? Color.GRAY3 : undefined
  });
  const id = Math.random().toString();

  return (
    <label htmlFor={id} style={style}>
      <Icon color={color} icon={icon} />
      <Body2 textColor={color} noWrap>
        {children}
      </Body2>
      <input
        disabled={disabled}
        value={value}
        onClick={() => onUpdate(name, value)}
        id={id}
        name={name}
        style={inputStyles}
        type="radio"
      />
    </label>
  );
};

export const RadioInput = withAppContext<IProps>(RadioInputComponent);
