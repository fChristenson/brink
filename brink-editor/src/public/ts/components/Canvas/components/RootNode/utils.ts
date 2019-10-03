import { IRootNode } from "./RootNode";
import { IConnection } from "./Connection";

export const getTransform = (x: number, y: number) =>
  `translate(${x}px, ${y}px)`;

export const hasConnection = (rootNode: IRootNode) => (c: IConnection) =>
  c.from === rootNode.id || c.to === rootNode.id;

export const hasOutgoingConnection = (rootNode: IRootNode) => (
  c: IConnection
) => c.from === rootNode.id;

export const capitalize = (str: string) => {
  if (str.length <= 1) return str;
  const [first, ...rest] = str.split("");

  return first.toUpperCase() + rest.join("");
};
