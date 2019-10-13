import { compose } from "redux";
import { connect } from "react-redux";
import { CodeEditor as Component } from "./component";
import { IState } from "../../store/state";
import { Dispatch } from "react";
import { OpenCodeEditor, IAction } from "./actions";

const mapStateToProps = (state: IState) => {
  return {
    open: state.codeEditor.open
  };
};

const mapDispatchProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClose: () => {
      return dispatch(OpenCodeEditor(false));
    }
  };
};

export const CodeEditor = compose(
  connect(
    mapStateToProps,
    mapDispatchProps
  )
)(Component);
