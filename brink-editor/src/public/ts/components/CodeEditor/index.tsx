import { compose } from "redux";
import { connect } from "react-redux";
import { CodeEditor as Component } from "./component";
import { IState } from "../../store/state";
import { Dispatch } from "react";
import { OpenCodeEditor, IAction } from "./actions";
import xmlformat from "xml-formatter";

const mapStateToProps = (state: IState) => {
  return {
    open: state.codeEditor.open,
    xmlCode: xmlformat(state.codeEditor.xmlCode)
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
