import { makeAction, IActionUnion } from "../../store/action";
import { CodeEditorEvent } from "./events";

export const OpenCodeEditor = makeAction<CodeEditorEvent.OPEN, boolean>(
  CodeEditorEvent.OPEN
);

export const SetCode = makeAction<CodeEditorEvent.SET_CODE, string>(
  CodeEditorEvent.SET_CODE
);

export const SetNodeTree = makeAction<CodeEditorEvent.SET_NODE_TREE, any>(
  CodeEditorEvent.SET_NODE_TREE
);

const actions = {
  OpenCodeEditor,
  SetCode,
  SetNodeTree
};

export type IAction = IActionUnion<typeof actions>;
