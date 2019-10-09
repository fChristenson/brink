import { IAction } from "../../store/action";
import { initState, IPageBuilderState } from "./state";
import { PageBuilderEvents } from "./events";
import { replaceNode } from "./replaceNode";
import { highlightBlocks } from "./components/Block/utils";

export const reducer = (
  state: IPageBuilderState = initState,
  action: IAction
): IPageBuilderState => {
  switch (action.type) {
    case PageBuilderEvents.SET_NODE_TO_PLACE:
      return {
        ...state,
        nodeToPlace: action.payload
      };

    case PageBuilderEvents.ADD_NODE:
      const tmp = { ...state.nodeTree };
      replaceNode(tmp, action.payload);
      highlightBlocks(false);
      return {
        ...state,
        nodeTree: tmp
      };

    default:
      return state;
  }
};
