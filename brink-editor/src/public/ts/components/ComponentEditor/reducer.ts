import { ComponentEditor } from "./events";
import { initState, IComponentEditorState } from "./state";
import { IAction } from "./actions";

export const reducer = (
  state: IComponentEditorState = initState,
  action: IAction
): IComponentEditorState => {
  switch (action.type) {
    case ComponentEditor.OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};
