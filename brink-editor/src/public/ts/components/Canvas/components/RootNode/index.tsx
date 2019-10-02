import { compose } from "redux";
import { connect } from "react-redux";
import { RootNode as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../../../store/action";
import {
  SetRootNodeTitle,
  ConnectRootNodes,
  SelectFromRootNode
} from "../../actions";
import { IRootNode, IConnection, Connection } from "./RootNode";
import { IState } from "../../../../store/state";

interface IProps {
  rootNode: IRootNode;
  fromOutline?: boolean;
  toOutline?: boolean;
}

const mapStateToProps = (
  state: IState,
  { rootNode, fromOutline, toOutline }: IProps
) => {
  return {
    fromRootNode: state.canvas.fromRootNode,
    connections: state.canvas.connections,
    fromOutline,
    toOutline,
    rootNode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClick: (
      rootNode: IRootNode,
      connections: IConnection[],
      fromRootNode?: IRootNode
    ) => {
      if (fromRootNode && rootNode.id === fromRootNode.id)
        return dispatch(SelectFromRootNode(undefined));

      if (fromRootNode && connections.some(isConnected(fromRootNode, rootNode)))
        return dispatch(SelectFromRootNode(undefined));

      if (!fromRootNode) return;

      return dispatch(
        ConnectRootNodes(Connection(fromRootNode.id, rootNode.id))
      );
    },
    onChange: (rootNode: IRootNode, title: string) =>
      dispatch(SetRootNodeTitle({ ...rootNode, title }))
  };
};

const isConnected = (fromRootNode: IRootNode, rootNode: IRootNode) => (
  c: IConnection
) => c.from === fromRootNode.id && c.to === rootNode.id;

export const RootNode = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
