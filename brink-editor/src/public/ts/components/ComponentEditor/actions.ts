import { makeAction, IActionUnion } from "../../store/action";
import { ComponentEditor } from "./events";

export const OpenComponentEditor = makeAction<ComponentEditor.OPEN, boolean>(
  ComponentEditor.OPEN
);

const actions = {
  OpenComponentEditor
};

export type IAction = IActionUnion<typeof actions>;
