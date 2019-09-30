import { compose } from "redux";
import { connect } from "react-redux";
import { RootNode as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../../../store/action";
import { SetRootNodeTitle, ConnectRootNodes } from "../../actions";
import { IRootNode } from "./RootNode";
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
    fromOutline,
    toOutline,
    rootNode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClick: (rootNode: IRootNode, fromRootNode?: IRootNode) => {
      if (fromRootNode && rootNode.id !== fromRootNode.id)
        return dispatch(ConnectRootNodes({ from: fromRootNode, to: rootNode }));
    },
    onChange: (rootNode: IRootNode, title: string) =>
      dispatch(SetRootNodeTitle({ id: rootNode.id, title }))
  };
};

export const RootNode = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
