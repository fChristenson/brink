export interface IRootNode {
  id: number;
  x: number;
  y: number;
}

export const RootNode = (x: number, y: number) => {
  return {
    id: Math.random(),
    x,
    y
  };
};
