import { CodeEditorEvent } from "./events";
import { initState, ICodeEditorState } from "./state";
import { IAction } from "./actions";

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
