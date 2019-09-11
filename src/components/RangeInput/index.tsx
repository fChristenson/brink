import React from "react";
import { withAppContext, IContext } from "../../store/context";

const RangeInputComponent: React.FunctionComponent<IContext & any> = ({
  onUpdate,
  name
}) => {
  const onChange = (e: any) => onUpdate(name, e.target.value);
  return <input type="range" min="0" max="10" onChange={name && onChange} />;
};

export const RangeInput = withAppContext(RangeInputComponent);
