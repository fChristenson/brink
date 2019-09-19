import React from "react";
import { styles, selectedStyles, inputStyles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Icon } from "../Icon";
import { Body2 } from "../Body2";
import { withAppContext, IContext } from "../../store";
import { ColorNames, Color } from "../../configs/colors/colors";
import { IMargin } from "../../libs/interfaces/margin";
import { IIconVariant } from "../../libs/interfaces/iconVariant";
import { IName } from "../../libs/interfaces/name";
import { IDisabled } from "../../libs/interfaces/disabled";

interface IProps extends IContext, IMargin, IIconVariant, IName, IDisabled {
  value: string;
}

export const RadioInputComponent: React.FunctionComponent<IProps> = ({
  state,
  onUpdate,
  value,
  name,
  variant,
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
      <Icon color={color} variant={variant} />
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

export const RadioInput = withAppContext(RadioInputComponent);
