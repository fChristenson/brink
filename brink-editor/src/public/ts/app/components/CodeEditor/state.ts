export interface ICodeEditorState {
  xmlCode?: string;
  nodeTree?: any;
  open: boolean;
}

export const initState: ICodeEditorState = {
  open: false
};
