export interface IRootNode {
  id: string;
  title: string;
  x: number;
  y: number;
}

export const RootNode = (
  x: number,
  y: number,
  id: string = Math.random().toString()
) => {
  return {
    id,
    title: "Page",
    x,
    y
  };
};

export interface IConnection {
  from: string;
  to: string;
  getRootNodeById(id: string, rootNodes: IRootNode[]): IRootNode;
}

export const Connection = (from: string, to: string): IConnection => {
  return {
    from,
    to,
    getRootNodeById: (nodeId: string, rootNodes: IRootNode[]) => {
      const result = rootNodes.find(n => n.id === nodeId);

      if (!result) throw new Error(`No RootNode found for id: ${nodeId}`);

      return result;
    }
  };
};
