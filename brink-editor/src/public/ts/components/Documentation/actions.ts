import { makeAction, IActionUnion } from "../../store/action";
import { Documentation } from "./events";

export const OpenDocumentation = makeAction<Documentation.OPEN, boolean>(
  Documentation.OPEN
);

const actions = {
  OpenDocumentation
};

export type IAction = IActionUnion<typeof actions>;
