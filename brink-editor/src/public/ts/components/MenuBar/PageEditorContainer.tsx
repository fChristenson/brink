import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { OpenCodeEditor } from "../CodeEditor/actions";
import { IAction } from "../../store/action";
import { OpenComponentEditor } from "../ComponentEditor/actions";
import { IState } from "../../store/state";

const mapStateToProps = (state: IState) => {
  return {
    title: "Brink page editor",
    codeEditorOpen: state.codeEditor.open,
    componentEditorOpen: state.componentEditor.open
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    openCodeEditor: (open: boolean) => {
      dispatch(OpenCodeEditor(open));
    },
    openComponentEditor: (open: boolean) => {
      dispatch(OpenComponentEditor(open));
    }
  };
};

export const PageEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
