export interface IRootNode {
  id: string;
  x: number;
  y: number;
}

export const RootNode = (x: number, y: number) => {
  return {
    id: Math.random().toString(),
    x,
    y
  };
};
