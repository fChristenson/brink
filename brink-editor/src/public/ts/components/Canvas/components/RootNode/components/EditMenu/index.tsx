import { compose } from "redux";
import { connect } from "react-redux";
import { EditMenu as Component } from "./component";
import { IState } from "../../../../../../store/state";
import { Dispatch } from "react";
import { IAction } from "../../../../../../store/action";
import { IRootNode } from "../../RootNode";
import { RemoveRootNode } from "../../../../actions";

interface IProps {
  rootNode: IRootNode;
  children: any;
}

const mapStateToProps = (_: IState, { rootNode }: IProps) => {
  return {
    rootNode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onEdit: (rootNode: IRootNode) => alert(rootNode),
    onConnect: (rootNode: IRootNode) => alert(rootNode),
    onExport: (rootNode: IRootNode) => alert(rootNode),
    onDelete: (rootNode: IRootNode) => dispatch(RemoveRootNode(rootNode))
  };
};

export const EditMenu = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
