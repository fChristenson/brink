import { makeAction, IActionUnion } from "../../store/action";
import { CodeEditorEvent } from "./events";

export const OpenCodeEditor = makeAction<CodeEditorEvent.OPEN, boolean>(
  CodeEditorEvent.OPEN
);

const actions = {
  OpenCodeEditor
};

export type IAction = IActionUnion<typeof actions>;
