export interface IAction {
  type: string;
  payload: any;
}

export const makeAction = (type: string) => (payload: any): IAction => {
  return {
    type,
    payload
  };
};
