import { IAction } from "../../store/action";
import { ComponentEditor } from "./events";
import { initState, IComponentEditorState } from "./state";

export const reducer = (
  state: IComponentEditorState = initState,
  action: IAction
) => {
  switch (action.type) {
    case ComponentEditor.OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};
