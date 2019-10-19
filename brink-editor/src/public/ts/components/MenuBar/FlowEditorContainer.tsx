import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { IState } from "../../store/state";
import { AddRootNode, IAction } from "../Canvas/actions";
import { RootNode, IRootNode } from "../Canvas/components/RootNode/RootNode";
import { downloadFlow } from "../../../libs/export/api";

const mapStateToProps = (state: IState) => {
  return {
    title: "Brink",
    rootNodes: state.canvas.rootNodes
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    addPage: () => dispatch(AddRootNode(RootNode(0, 0))),
    exportFlow: (rootNodes: IRootNode[]) => downloadFlow("flow", rootNodes)
  };
};

export const FlowEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
