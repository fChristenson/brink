import { IAction } from "../../store/action";
import { CanvasEvents } from "./events";
import { initState, ICanvasState } from "./state";

export const reducer = (state: ICanvasState = initState, action: IAction) => {
  switch (action.type) {
    case CanvasEvents.ADD_ROOT_NODE:
      return { ...state, rootNodes: state.rootNodes.concat([action.payload]) };

    case CanvasEvents.ZOOM:
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
