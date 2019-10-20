import { combineReducers } from "redux";
import { reducer as codeEditor } from "../app/components/CodeEditor/reducer";
import { reducer as documentation } from "../app/components/Documentation/reducer";
import { reducer as canvas } from "../app/components/Canvas/reducer";
import { reducer as app } from "../app/reducer";

export const reducers = combineReducers({
  app,
  codeEditor,
  documentation,
  canvas
});

export type IState = ReturnType<typeof reducers>;
