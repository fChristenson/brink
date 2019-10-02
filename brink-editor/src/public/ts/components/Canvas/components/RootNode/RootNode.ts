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
