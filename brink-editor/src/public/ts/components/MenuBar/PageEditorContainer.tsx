import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import {
  OpenCodeEditor,
  IAction as ICodeEditorAction
} from "../CodeEditor/actions";
import {
  OpenDocumentation,
  IAction as IDocumentationAction
} from "../Documentation/actions";
import { IState } from "../../store/state";
import { getCompiledExportPage } from "../../../libs/export/api";

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
    documentationOpen: state.documentation.open,
    xmlCode: state.codeEditor.xmlCode
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ICodeEditorAction | IDocumentationAction>
) => {
  return {
    openCodeEditor: (open: boolean) => {
      dispatch(OpenCodeEditor(open));
    },
    openDocumentation: (open: boolean) => {
      dispatch(OpenDocumentation(open));
    },
    onExportPage: async (name: string, xml?: string) => {
      if (!xml) return;
      await getCompiledExportPage(name, xml);
    }
  };
};

export const PageEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
