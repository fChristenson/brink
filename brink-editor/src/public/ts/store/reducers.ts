import { combineReducers } from "redux";
import { reducer as codeEditor } from "../components/CodeEditor/reducer";
import { reducer as componentEditor } from "../components/ComponentEditor/reducer";
import { reducer as canvas } from "../components/Canvas/reducer";
import { reducer as pageBuilder } from "../components/PageBuilder/reducer";

export const reducers = combineReducers({
  codeEditor,
  componentEditor,
  canvas,
  pageBuilder
});
