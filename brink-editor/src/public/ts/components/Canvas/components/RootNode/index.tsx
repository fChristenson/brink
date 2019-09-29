import { compose } from "redux";
import { connect } from "react-redux";
import { RootNode as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../../../store/action";
import { SetRootNodeTitle } from "../../actions";
import { IRootNode } from "./RootNode";
import { IState } from "../../../../store/state";

interface IProps {
  rootNode: IRootNode;
}

const mapStateToProps = (_: IState, { rootNode }: IProps) => {
  return {
    rootNode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
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
