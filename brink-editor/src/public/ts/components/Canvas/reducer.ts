import { IAction } from "../../store/action";
import { CanvasEvents } from "./events";
import { initState, ICanvasState } from "./state";

export const reducer = (state: ICanvasState = initState, action: IAction) => {
  switch (action.type) {
    case CanvasEvents.ZOOM:
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
