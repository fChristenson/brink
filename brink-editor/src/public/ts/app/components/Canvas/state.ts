import { IRootNode } from "./components/RootNode/RootNode";
import { IConnection } from "./components/RootNode/Connection";

export interface ICanvasState {
  tags: string[];
  rootNodes: IRootNode[];
  connections: IConnection[];
  connectionToName?: IConnection;
  fromRootNode?: IRootNode;
}

export const initState: ICanvasState = {
  tags: [],
  rootNodes: [],
  connections: []
};
