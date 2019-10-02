export interface IAction {
  type: string;
  payload: any;
}

export const makeAction = <T>(type: string) => (payload: T): IAction => {
  return {
    type,
    payload
  };
};
