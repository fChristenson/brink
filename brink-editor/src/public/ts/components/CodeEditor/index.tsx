import { compose } from "redux";
import { connect } from "react-redux";
import { CodeEditor as Component } from "./component";
import { IState } from "../../store/state";
import { Dispatch } from "react";
import { OpenCodeEditor, IAction, SetCode, SetNodeTree } from "./actions";
import { xml2json } from "xml-js";

const mapStateToProps = (state: IState) => {
  return {
    open: state.codeEditor.open,
    xmlCode: state.codeEditor.xmlCode
  };
};

const mapDispatchProps = (dispatch: Dispatch<IAction>) => {
  return {
    onChange: (code: string) => {
      try {
        const xmlStr = xml2json(code);
        const xml = JSON.parse(xmlStr);
        dispatch(SetNodeTree(xml));
      } catch (e) {
        //TODO: syntax error?
        console.log(e.message);
      }
      dispatch(SetCode(code));
    },
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
