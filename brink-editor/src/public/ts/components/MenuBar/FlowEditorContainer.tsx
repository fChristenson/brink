import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { IState } from "../../store/state";
import { AddRootNode, IAction } from "../Canvas/actions";
import { RootNode, IRootNode } from "../Canvas/components/RootNode/RootNode";
import { downloadFlow } from "../../../libs/export/api";
import { withRouter, RouteComponentProps } from "react-router";
import { previewRoute } from "../../../libs/api/routes";

const mapStateToProps = (state: IState) => {
  return {
    title: "Brink",
    rootNodes: state.canvas.rootNodes
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<IAction>,
  { history }: RouteComponentProps
) => {
  return {
    addPage: () => dispatch(AddRootNode(RootNode(0, 0))),
    exportFlow: (rootNodes: IRootNode[]) => downloadFlow("flow", rootNodes),
    previewFlow: (rootNodes: IRootNode[]) => {
      const first = rootNodes[0];
      if (!first) throw new Error("No root nodes found");
      history.push(previewRoute.route(first.id));
    }
  };
};

export const FlowEditorMenuBar = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
