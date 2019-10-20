import { makeAction, IActionUnion } from "../store/action";
import { AppEvents } from "./events";
import { IToast } from "./toasts";

export const AddToast = makeAction<AppEvents.ADD_TOAST, IToast>(
  AppEvents.ADD_TOAST
);

export const RemoveToast = makeAction<AppEvents.REMOVE_TOAST, IToast>(
  AppEvents.REMOVE_TOAST
);

const actions = {
  AddToast,
  RemoveToast
};

export type IAction = IActionUnion<typeof actions>;
