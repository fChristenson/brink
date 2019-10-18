import { CanvasEvents } from "./events";
import { initState, ICanvasState } from "./state";
import {
  hasConnection,
  hasOutgoingConnection
} from "./components/RootNode/utils";
import { IAction } from "./actions";
import { IRootNode } from "./components/RootNode/RootNode";

export const reducer = (
  state: ICanvasState = initState,
  action: IAction
): ICanvasState => {
  switch (action.type) {
    case CanvasEvents.SELECT_FROM_ROOT_NODE:
      return {
        ...state,
        fromRootNode: action.payload
      };

    case CanvasEvents.ADD_TAG:
      return {
        ...state,
        tags: state.tags
          .filter(t => t.toLowerCase() !== action.payload.toLowerCase())
          .concat([action.payload])
      };

    case CanvasEvents.CREATE_CONNECTION:
      return {
        ...state,
        fromRootNode: undefined,
        connectionToName: undefined,
        connections: state.connections.concat([action.payload])
      };

    case CanvasEvents.CONNECT_ROOT_NODES:
      return {
        ...state,
        fromRootNode: undefined,
        connectionToName: action.payload
      };

    case CanvasEvents.DELETE_ALL_CONNECTIONS:
      return {
        ...state,
        connections: state.connections.filter(
          c => !hasOutgoingConnection(action.payload)(c)
        )
      };

    case CanvasEvents.DELETE_CONNECTION:
      return {
        ...state,
        connections: state.connections.filter(c => c.id !== action.payload.id)
      };

    case CanvasEvents.ADD_ROOT_NODE:
      return { ...state, rootNodes: state.rootNodes.concat([action.payload]) };

    case CanvasEvents.REMOVE_ROOT_NODE:
      return {
        ...state,
        rootNodes: state.rootNodes.filter(n => n.id !== action.payload.id),
        connections: state.connections.filter(
          c => !hasConnection(action.payload)(c)
        )
      };

    case CanvasEvents.SET_ROOT_NODE_TITLE: {
      const { id, title } = action.payload;
      const mapFunc = mapNode(id, n => ({ ...n, title }));
      const rootNodes = state.rootNodes.map(mapFunc);
      return {
        ...state,
        rootNodes
      };
    }

    case CanvasEvents.MOVE_ROOT_NODE: {
      const { x, y, id } = action.payload;
      const mapFunc = mapNode(id, n => ({ ...n, x, y }));
      const rootNodes = state.rootNodes.map(mapFunc);
      return {
        ...state,
        rootNodes
      };
    }

    case CanvasEvents.SET_ROOT_NODE_CODE: {
      const id = action.payload.rootNode.id;
      const mapFunc = mapNode(id, n => ({
        ...n,
        xmlCode: action.payload.code
      }));
      const rootNodes = state.rootNodes.map(mapFunc);
      return { ...state, rootNodes };
    }

    default:
      return state;
  }
};

const mapNode = (id: string, fn: (n: IRootNode) => IRootNode) => (
  n: IRootNode
) => {
  if (n.id !== id) return n;
  return fn(n);
};
