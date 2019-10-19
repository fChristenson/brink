export interface IConnection {
  id: string;
  name: string;
  from: string;
  to: string;
}

export const Connection = (
  from: string,
  to: string,
  name: string,
  id?: string
): IConnection => {
  return {
    id: id || Math.random().toString(),
    name,
    from,
    to
  };
};
