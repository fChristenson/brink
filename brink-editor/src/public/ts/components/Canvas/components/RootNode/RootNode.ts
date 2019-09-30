export interface IRootNode {
  id: string;
  title: string;
  x: number;
  y: number;
}

export const RootNode = (x: number, y: number) => {
  return {
    id: Math.random().toString(),
    title: "Page",
    x,
    y
  };
};

export interface IConnection {
  from: IRootNode;
  to: IRootNode;
}
