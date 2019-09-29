export interface IRootNode {
  id: number;
}

export const RootNode = () => {
  return {
    id: Math.random()
  };
};
