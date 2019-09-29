import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { OpenCodeEditor } from "../CodeEditor/actions";
import { IAction } from "../../store/action";
import { OpenComponentEditor } from "../ComponentEditor/actions";
import { IState } from "../../store/state";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";

const mapStateToProps = (state: IState) => {
  return {
    codeEditorOpen: state.codeEditor.open,
    componentEditorOpen: state.componentEditor.open
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    openCodeEditor: (open: boolean) => {
      window.localStorage.setItem(codeConfig.localStorageKey, open.toString());
      dispatch(OpenCodeEditor(open));
    },
    openComponentEditor: (open: boolean) => {
      window.localStorage.setItem(
        componentConfig.localStorageKey,
        open.toString()
      );
      dispatch(OpenComponentEditor(open));
    }
  };
};

export const MenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
