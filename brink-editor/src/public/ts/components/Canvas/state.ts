import { IRootNode } from "./components/RootNode/RootNode";

export interface ICanvasState {
  rootNodes: IRootNode[];
}

export const initState: ICanvasState = {
  rootNodes: []
};
