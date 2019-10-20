import { IToast } from "./toasts";

export interface IAppState {
  toasts: IToast[];
}

export const initState: IAppState = {
  toasts: []
};
