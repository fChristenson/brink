import React from "react";
import { withAppContext } from "../../store/context";
import { styles, errorStyles, errorMessageStyles } from "./styles";

const noop = () => {
  return undefined;
};

type IValidate = (val: any) => string | undefined;

const TextInputComponent: React.FunctionComponent<any> = ({
  onUpdate,
  name,
  invalid,
  validator,
  validators
}) => {
  const [error, setError] = React.useState();
  const validate: IValidate = validators[validator] || noop;
  const onChange = (e: any) => {
    setError(validate(e.target.value));
    onUpdate(name, e.target.value);
  };

  return (
    <div>
      <input
        style={invalid || error ? { ...styles, ...errorStyles } : styles}
        type="text"
        onChange={name && onChange}
      />
      {(invalid || error) && (
        <span style={errorMessageStyles}>{invalid || error}</span>
      )}
    </div>
  );
};

export const TextInput = withAppContext(TextInputComponent);
