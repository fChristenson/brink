import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import {
  OpenCodeEditor,
  IAction as ICodeEditorAction
} from "../CodeEditor/actions";
import {
  OpenComponentEditor,
  IAction as IComponentEditorAction
} from "../ComponentEditor/actions";
import { IState } from "../../store/state";

export interface IProps {
  id: string;
}

const mapStateToProps = (state: IState, { id }: IProps) => {
  //const rootNode = state.canvas.rootNodes.find(n => n.id === id);
  //if (!rootNode) throw new Error(`Could not find ${id}`);

  return {
    //title: `Brink - ${rootNode.title}`,
    title: id,
    codeEditorOpen: state.codeEditor.open,
    componentEditorOpen: state.componentEditor.open
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ICodeEditorAction | IComponentEditorAction>
) => {
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
