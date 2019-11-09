import React from "react";
import { withAppContext } from "../../store";
import { styles, errorStyles, errorMessageStyles } from "./styles";
import { noop } from "../../libs/utils/noop";
import { IValidate } from "../../libs/interfaces/validate";
import { IProps } from "./props";

export const TextInputComponent: React.FunctionComponent<IProps> = ({
  onUpdate,
  name,
  invalid,
  validator,
  validators = {}
}) => {
  const [error, setError] = React.useState();
  const validate: IValidate = (validator && validators[validator]) || noop;
  const onChange = (e: any) => {
    setError(validate(e.target.value));
    onUpdate(name, e.target.value);
  };

  return (
    <div>
      <input
        style={invalid || error ? { ...styles, ...errorStyles } : styles}
        type="text"
        onChange={onChange}
      />
      {(invalid || error) && (
        <span style={errorMessageStyles}>{invalid || error}</span>
      )}
    </div>
  );
};

export const TextInput = withAppContext<IProps>(TextInputComponent);
