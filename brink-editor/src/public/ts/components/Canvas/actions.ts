import { makeAction } from "../../store/action";
import { CanvasEvents } from "./events";

export const AddRootNode = makeAction(CanvasEvents.ADD_ROOT_NODE);
export const RemoveRootNode = makeAction(CanvasEvents.REMOVE_ROOT_NODE);
export const MoveRootNode = makeAction(CanvasEvents.MOVE_ROOT_NODE);
