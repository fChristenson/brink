import { Documentation } from "./events";
import { initState, IDocumentationState } from "./state";
import { IAction } from "./actions";

export const reducer = (
  state: IDocumentationState = initState,
  action: IAction
): IDocumentationState => {
  switch (action.type) {
    case Documentation.OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};
