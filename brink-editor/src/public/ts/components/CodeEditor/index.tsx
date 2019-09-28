import { compose } from "redux";
import { connect } from "react-redux";
import { CodeEditor as Component } from "./component";
import { IState } from "../../store/state";

const mapStateToProps = (state: IState) => {
  return {
    open: state.codeEditor.open
  };
};

export const CodeEditor = compose(connect(mapStateToProps))(Component);
