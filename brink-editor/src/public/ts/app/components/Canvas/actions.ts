import { makeAction, IActionUnion } from "../../../store/action";
import { CanvasEvents } from "./events";
import { IRootNode } from "./components/RootNode/RootNode";
import { IConnection } from "./components/RootNode/Connection";

export const AddRootNode = makeAction<CanvasEvents.ADD_ROOT_NODE, IRootNode>(
  CanvasEvents.ADD_ROOT_NODE
);

export const RemoveRootNode = makeAction<
  CanvasEvents.REMOVE_ROOT_NODE,
  IRootNode
>(CanvasEvents.REMOVE_ROOT_NODE);

export const MoveRootNode = makeAction<CanvasEvents.MOVE_ROOT_NODE, IRootNode>(
  CanvasEvents.MOVE_ROOT_NODE
);

export const SetRootNodeTitle = makeAction<
  CanvasEvents.SET_ROOT_NODE_TITLE,
  IRootNode
>(CanvasEvents.SET_ROOT_NODE_TITLE);

export const SelectFromRootNode = makeAction<
  CanvasEvents.SELECT_FROM_ROOT_NODE,
  IRootNode | undefined
>(CanvasEvents.SELECT_FROM_ROOT_NODE);

export const ConnectRootNodes = makeAction<
  CanvasEvents.CONNECT_ROOT_NODES,
  IConnection | undefined
>(CanvasEvents.CONNECT_ROOT_NODES);

export const CreateConnection = makeAction<
  CanvasEvents.CREATE_CONNECTION,
  IConnection
>(CanvasEvents.CREATE_CONNECTION);

export const DeleteConnection = makeAction<
  CanvasEvents.DELETE_CONNECTION,
  IConnection
>(CanvasEvents.DELETE_CONNECTION);

export const DeleteAllConnections = makeAction<
  CanvasEvents.DELETE_ALL_CONNECTIONS,
  IRootNode
>(CanvasEvents.DELETE_ALL_CONNECTIONS);

export const AddTag = makeAction<CanvasEvents.ADD_TAG, string>(
  CanvasEvents.ADD_TAG
);

interface ISetRootNodeCodeProps {
  rootNode: IRootNode;
  code: string;
}

export const SetRootNodeCode = makeAction<
  CanvasEvents.SET_ROOT_NODE_CODE,
  ISetRootNodeCodeProps
>(CanvasEvents.SET_ROOT_NODE_CODE);

interface ISetRootNodeImageProps {
  id: string;
  dataUrl: string;
}

export const SetRootNodeImage = makeAction<
  CanvasEvents.SET_ROOT_NODE_IMAGE,
  ISetRootNodeImageProps
>(CanvasEvents.SET_ROOT_NODE_IMAGE);

const actions = {
  AddRootNode,
  RemoveRootNode,
  MoveRootNode,
  SetRootNodeTitle,
  SelectFromRootNode,
  ConnectRootNodes,
  CreateConnection,
  DeleteConnection,
  DeleteAllConnections,
  AddTag,
  SetRootNodeCode,
  SetRootNodeImage
};

export type IAction = IActionUnion<typeof actions>;
