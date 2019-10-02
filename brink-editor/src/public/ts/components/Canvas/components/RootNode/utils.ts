import { IConnection, IRootNode } from "./RootNode";

export const getTransform = (x: number, y: number) =>
  `translate(${x}px, ${y}px)`;

export const hasConnection = (rootNode: IRootNode) => (c: IConnection) =>
  c.from === rootNode.id || c.to === rootNode.id;

export const hasOutgoingConnection = (rootNode: IRootNode) => (
  c: IConnection
) => c.from === rootNode.id;
