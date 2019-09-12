import React from "react";
import { withAppContext } from "../../store/context";
import { styles } from "./styles";

const RangeInputComponent: React.FunctionComponent<any> = ({
  onUpdate,
  name
}) => {
  const onChange = (e: any) => onUpdate(name, e.target.value);
  return (
    <input
      style={styles}
      type="range"
      min="0"
      max="10"
      onChange={name && onChange}
    />
  );
};

export const RangeInput = withAppContext(RangeInputComponent);
