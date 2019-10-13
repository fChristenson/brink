export interface ICodeEditorState {
  code: string;
  open: boolean;
}

export const initState: ICodeEditorState = {
  code: "</>",
  open: false
};
