import { IOnSubmit } from "../../store/context";

export const noop = () => {
  return undefined;
};

export const submitNoop: IOnSubmit = (_: any) => {
  return false;
};
