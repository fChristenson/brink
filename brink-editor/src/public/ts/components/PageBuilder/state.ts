import { IVnode, Vnode } from "./Vnode";

export interface IPageBuilderState {
  nodeToPlace: string;
  nodeTree: IVnode;
}

export const initState: IPageBuilderState = {
  nodeToPlace: "",
  nodeTree: Vnode("Page", {}, [Vnode("Block")])
};
