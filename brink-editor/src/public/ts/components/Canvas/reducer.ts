import { IAction } from "../../store/action";
import { CanvasEvents } from "./events";
import { initState, ICanvasState } from "./state";

export const reducer = (state: ICanvasState = initState, action: IAction) => {
  switch (action.type) {
    case CanvasEvents.ADD_ROOT_NODE:
      return { ...state, rootNodes: state.rootNodes.concat([action.payload]) };

    case CanvasEvents.REMOVE_ROOT_NODE:
      return {
        ...state,
        rootNodes: state.rootNodes.filter(n => n.id !== action.payload.id)
      };

    case CanvasEvents.MOVE_ROOT_NODE:
      return {
        ...state,
        rootNodes: state.rootNodes.map(n => {
          if (n.id === action.payload.id) {
            n.x = action.payload.x;
            n.y = action.payload.y;
          }

          return n;
        })
      };

    default:
      return state;
  }
};
