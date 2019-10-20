import { compose } from "redux";
import { connect } from "react-redux";
import { CodeEditor as Component } from "./component";
import { IState } from "../../../store/state";
import { Dispatch } from "react";
import {
  OpenCodeEditor,
  IAction as CodeEditorAction,
  SetCode,
  SetNodeTree
} from "./actions";
import { parseXml, isValidXml, findRootNode } from "./utils";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";
import { IAction as CanvasAction, SetRootNodeCode } from "../Canvas/actions";

export interface IProps {
  id: string;
}

const mapStateToProps = (state: IState, { id }: IProps) => {
  const rootNode = findRootNode(state.canvas.rootNodes, id);

  return {
    rootNode,
    connections: state.canvas.connections,
    open: state.codeEditor.open,
    xmlCode: state.codeEditor.xmlCode || rootNode.xmlCode
  };
};

const mapDispatchProps = (
  dispatch: Dispatch<CodeEditorAction | CanvasAction>
) => {
  return {
    onChange: (code: string, rootNode: IRootNode) => {
      if (!code) return;
      try {
        const xml = parseXml(code);
        if (isValidXml(xml)) dispatch(SetNodeTree(xml));
      } catch (_) {}
      dispatch(SetCode(code));
      dispatch(SetRootNodeCode({ rootNode, code }));
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
