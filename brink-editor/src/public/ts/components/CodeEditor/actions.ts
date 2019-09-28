import { makeAction } from "../../store/action";
import { CodeEditorEvent } from "./events";

export const OpenCodeEditor = makeAction(CodeEditorEvent.OPEN);
