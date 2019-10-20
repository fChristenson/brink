import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import {
  OpenCodeEditor,
  IAction as ICodeEditorAction,
  SetCode
} from "../CodeEditor/actions";
import {
  OpenDocumentation,
  IAction as IDocumentationAction
} from "../Documentation/actions";
import { IAction as ICanvasAction } from "../Canvas/actions";
import { IAction as IAppAction } from "../../actions";
import { IState } from "../../../store/state";
import { downloadTsxCode } from "../../../../libs/export/api";
import { findRootNode } from "../CodeEditor/utils";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";
import { SetRootNodeImage } from "../Canvas/actions";
import { AddToast } from "../../actions";
import { SuccessToast } from "../../toasts";

export interface IProps {
  id: string;
}

const mapStateToProps = (state: IState, { id }: IProps) => {
  const rootNode = findRootNode(state.canvas.rootNodes, id);

  return {
    title: `Brink - ${rootNode.title}`,
    rootNode,
    codeEditorOpen: state.codeEditor.open,
    documentationOpen: state.documentation.open,
    xmlCode: state.codeEditor.xmlCode || rootNode.xmlCode
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    ICodeEditorAction | IDocumentationAction | ICanvasAction | IAppAction
  >
) => {
  return {
    openCodeEditor: (open: boolean, rootNode: IRootNode) => {
      dispatch(OpenCodeEditor(open));
      if (open) dispatch(SetCode(rootNode.xmlCode));
    },
    openDocumentation: (open: boolean) => {
      dispatch(OpenDocumentation(open));
    },
    onExportPage: async (name: string, xml?: string) => {
      if (!xml) return;
      await downloadTsxCode(name, xml);
    },
    onSavePage: (node: IRootNode, dataUrl: string) => {
      if (node.image !== dataUrl && /data:image\/png\;base64/.test(dataUrl))
        dispatch(SetRootNodeImage({ id: node.id, dataUrl }));
      dispatch(AddToast(SuccessToast("Page saved")));
    }
  };
};

export const PageEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
