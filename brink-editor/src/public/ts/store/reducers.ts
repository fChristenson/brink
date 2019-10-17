import { combineReducers } from "redux";
import { reducer as codeEditor } from "../components/CodeEditor/reducer";
import { reducer as documentation } from "../components/Documentation/reducer";
import { reducer as canvas } from "../components/Canvas/reducer";

export const reducers = combineReducers({
  codeEditor,
  documentation,
  canvas
});

export type IState = ReturnType<typeof reducers>;
