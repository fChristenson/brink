export interface ICodeEditorState {
  xmlCode: string;
  open: boolean;
}

export const initState: ICodeEditorState = {
  xmlCode: "<Page><CenterContainer>Hello world!</CenterContainer></Page>",
  open: false
};
