import React from "react";
import { styles, selectedStyles, inputStyles } from "./styles";
import { applyStyles } from "../../libs/utils/applyStyles";
import { Icon } from "../Icon";
import { Body2 } from "../Body2";
import { withAppContext, IContext } from "../../store";
import { ColorNames } from "../../configs/colors/colors";
import { IMargin } from "../../libs/interfaces/margin";
import { IIconVariant } from "../../libs/interfaces/iconVariant";
import { IName } from "../../libs/interfaces/name";

interface IProps extends IContext, IMargin, IIconVariant, IName {
  value: string;
}

export const RadioInputComponent: React.FunctionComponent<IProps> = ({
  state,
  onUpdate,
  value,
  name,
  variant,
  margin,
  children
}) => {
  const isSelected = state[name] === value;
  const maybeSelectedStyles = isSelected ? selectedStyles : {};
  const style = applyStyles(maybeSelectedStyles, styles, { margin });
  const id = Math.random().toString();
  return (
    <label htmlFor={id} style={style}>
      <Icon
        color={isSelected ? ColorNames.WHITE1 : undefined}
        variant={variant}
      />
      <Body2 textColor={isSelected ? ColorNames.WHITE1 : ""} noWrap>
        {children}
      </Body2>
      <input
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
