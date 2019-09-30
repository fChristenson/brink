import { makeAction } from "../../store/action";
import { CanvasEvents } from "./events";

export const AddRootNode = makeAction(CanvasEvents.ADD_ROOT_NODE);
export const RemoveRootNode = makeAction(CanvasEvents.REMOVE_ROOT_NODE);
export const MoveRootNode = makeAction(CanvasEvents.MOVE_ROOT_NODE);
export const SetRootNodeTitle = makeAction(CanvasEvents.SET_ROOT_NODE_TITLE);
export const SelectFromRootNode = makeAction(
  CanvasEvents.SELECT_FROM_ROOT_NODE
);
export const ConnectRootNodes = makeAction(CanvasEvents.CONNECT_ROOT_NODES);
export const DeleteConnection = makeAction(CanvasEvents.DELETE_CONNECTION);
