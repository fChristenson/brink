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

    case CanvasEvents.SET_ROOT_NODE_TITLE:
      return {
        ...state,
        rootNodes: state.rootNodes.map(n => {
          if (n.id === action.payload.id) {
            const { title } = action.payload;
            return { ...n, title };
          }

          return n;
        })
      };

    case CanvasEvents.MOVE_ROOT_NODE:
      return {
        ...state,
        rootNodes: state.rootNodes.map(n => {
          if (n.id === action.payload.id) {
            const { x, y } = action.payload;
            return { ...n, x, y };
          }

          return n;
        })
      };

    default:
      return state;
  }
};
