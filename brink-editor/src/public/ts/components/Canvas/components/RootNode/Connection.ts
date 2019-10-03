import { IRootNode } from "./RootNode";

export interface IConnection {
  id: string;
  name?: string;
  from: string;
  to: string;
  getRootNodeById(id: string, rootNodes: IRootNode[]): IRootNode;
}

export const Connection = (
  from: string,
  to: string,
  name?: string,
  id?: string
): IConnection => {
  return {
    id: id || Math.random().toString(),
    name,
    from,
    to,
    getRootNodeById: (nodeId: string, rootNodes: IRootNode[]) => {
      const result = rootNodes.find(n => n.id === nodeId);

      if (!result) throw new Error(`No RootNode found for id: ${nodeId}`);

      return result;
    }
  };
};
