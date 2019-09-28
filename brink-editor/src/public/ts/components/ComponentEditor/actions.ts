import { makeAction } from "../../store/action";
import { ComponentEditor } from "./events";

export const OpenComponentEditor = makeAction(ComponentEditor.OPEN);
