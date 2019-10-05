import { IAction } from "../../store/action";
import { CodeEditorEvent } from "./events";
import { initState, ICodeEditorState } from "./state";

export const reducer = (
  state: ICodeEditorState = initState,
  action: IAction
): ICodeEditorState => {
  switch (action.type) {
    case CodeEditorEvent.OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};
