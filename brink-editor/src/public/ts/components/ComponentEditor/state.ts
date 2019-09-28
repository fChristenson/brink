import { config } from "./config";

export interface IComponentEditorState {
  open: boolean;
}

export const initState: IComponentEditorState = {
  open: window.localStorage.getItem(config.localStorageKey) === "true"
};
