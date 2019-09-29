import { IRootNode } from "./components/RootNode/RootNode";

export interface ICanvasState {
  zoom: number;
  rootNodes: IRootNode[];
}

export const initState: ICanvasState = {
  zoom: 1.0,
  rootNodes: []
};
