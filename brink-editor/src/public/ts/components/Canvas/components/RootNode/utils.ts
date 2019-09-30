import { IConnection, IRootNode } from "./RootNode";

export const getTransform = (x: number, y: number) =>
  `translate(${x}px, ${y}px)`;

export const hasConnection = (rootNode: IRootNode) => (c: IConnection) =>
  c.from.id === rootNode.id || c.to.id === rootNode.id;
