import { AppEvents } from "./events";
import { initState, IAppState } from "./state";
import { IAction } from "./actions";

export const reducer = (
  state: IAppState = initState,
  action: IAction
): IAppState => {
  switch (action.type) {
    case AppEvents.ADD_TOAST:
      return {
        ...state,
        toasts: state.toasts.concat([action.payload])
      };

    case AppEvents.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(t => t.message !== action.payload.message)
      };

    default:
      return state;
  }
};
