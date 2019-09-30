import { IRootNode, IConnection } from "./components/RootNode/RootNode";

export interface ICanvasState {
  rootNodes: IRootNode[];
  connections: IConnection[];
  fromRootNode?: IRootNode;
}

export const initState: ICanvasState = {
  rootNodes: [],
  connections: []
};
