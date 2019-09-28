import { config } from "./config";

export interface ICodeEditorState {
  open: boolean;
}

export const initState: ICodeEditorState = {
  open: window.localStorage.getItem(config.localStorageKey) === "true"
};
