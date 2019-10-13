export const makeAction = <T extends string, P>(type: T) => (payload: P) => {
  return {
    type,
    payload
  };
};

interface IStringMap<T> {
  [key: string]: T;
}
type IFunc = (...args: any[]) => any;
export type IActionUnion<T extends IStringMap<IFunc>> = ReturnType<T[keyof T]>;
