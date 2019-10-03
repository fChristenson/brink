import { makeAction } from "../../store/action";
import { CanvasEvents } from "./events";
import { IRootNode } from "./components/RootNode/RootNode";
import { IConnection } from "./components/RootNode/Connection";

export const AddRootNode = makeAction<IRootNode>(CanvasEvents.ADD_ROOT_NODE);
export const RemoveRootNode = makeAction<IRootNode>(
  CanvasEvents.REMOVE_ROOT_NODE
);
export const MoveRootNode = makeAction<IRootNode>(CanvasEvents.MOVE_ROOT_NODE);
export const SetRootNodeTitle = makeAction<IRootNode>(
  CanvasEvents.SET_ROOT_NODE_TITLE
);
export const SelectFromRootNode = makeAction<IRootNode | undefined>(
  CanvasEvents.SELECT_FROM_ROOT_NODE
);
export const ConnectRootNodes = makeAction<IConnection | undefined>(
  CanvasEvents.CONNECT_ROOT_NODES
);
export const CreateConnection = makeAction<IConnection>(
  CanvasEvents.CREATE_CONNECTION
);
export const DeleteConnection = makeAction<IConnection>(
  CanvasEvents.DELETE_CONNECTION
);
export const DeleteAllConnections = makeAction<IRootNode>(
  CanvasEvents.DELETE_ALL_CONNECTIONS
);
export const AddTag = makeAction<string>(CanvasEvents.ADD_TAG);
