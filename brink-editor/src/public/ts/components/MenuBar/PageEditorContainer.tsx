import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { OpenCodeEditor } from "../CodeEditor/actions";
import { IAction } from "../../store/action";
import { OpenComponentEditor } from "../ComponentEditor/actions";
import { IState } from "../../store/state";
import { SetNodeToPlace } from "../PageBuilder/actions";

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
    nodeToPlace: state.pageBuilder.nodeToPlace,
    componentEditorOpen: state.componentEditor.open
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    startPlaceNode: (nodeToPlace: string) => {
      document.body.style.setProperty("--highlight-containers-opacity", "1");
      document.body.style.setProperty(
        "--highlight-containers-pointer",
        "pointer"
      );
      dispatch(SetNodeToPlace(nodeToPlace));
    },
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
