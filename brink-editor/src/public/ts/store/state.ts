import { ICodeEditorState } from "../components/CodeEditor/state";
import { IComponentEditorState } from "../components/ComponentEditor/state";
import { ICanvasState } from "../components/Canvas/state";
import { IPageBuilderState } from "../components/PageBuilder/state";

export interface IState {
  codeEditor: ICodeEditorState;
  componentEditor: IComponentEditorState;
  canvas: ICanvasState;
  pageBuilder: IPageBuilderState;
}
