import { compose } from "redux";
import { connect } from "react-redux";
import { EditMenu as Component } from "./component";
import { IState } from "../../../../../../store/state";
import { Dispatch } from "react";
import { IRootNode } from "../../RootNode";
import {
  RemoveRootNode,
  SelectFromRootNode,
  DeleteConnection,
  DeleteAllConnections,
  IAction
} from "../../../../actions";
import { withRouter, RouteComponentProps } from "react-router";
import { IConnection } from "../../Connection";
import { downloadTsxCode } from "../../../../../../../libs/export/api";

interface IProps extends RouteComponentProps {
  rootNode: IRootNode;
  children: any;
}

const mapStateToProps = (state: IState, { rootNode }: IProps) => {
  return {
    rootNode,
    rootNodes: state.canvas.rootNodes,
    connections: state.canvas.connections
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<IAction>,
  { history }: IProps
) => {
  return {
    onEdit: (rootNode: IRootNode) => history.push(`/page/${rootNode.id}`),
    onConnect: (rootNode: IRootNode) => dispatch(SelectFromRootNode(rootNode)),
    onExport: async (rootNode: IRootNode) => {
      await downloadTsxCode(rootNode.title, rootNode.xmlCode);
    },
    onDelete: (rootNode: IRootNode) => {
      dispatch(DeleteAllConnections(rootNode));
      dispatch(RemoveRootNode(rootNode));
    },
    onDeleteConnection: (connection: IConnection) =>
      dispatch(DeleteConnection(connection)),
    onDeleteAllConnections: (rootNode: IRootNode) =>
      dispatch(DeleteAllConnections(rootNode))
  };
};

export const EditMenu = compose<any>(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
