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

    case CodeEditorEvent.SET_NODE_TREE:
      return { ...state, nodeTree: action.payload };

    case CodeEditorEvent.SET_CODE:
      return { ...state, xmlCode: action.payload };

    default:
      return state;
  }
};
