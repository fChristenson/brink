import { compose } from "redux";
import { connect } from "react-redux";
import { ContainerMenu as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../../../store/action";
import { AddRootNode } from "../../../Canvas/actions";
import { RootNode } from "../../../Canvas/components/RootNode/RootNode";

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    addPage: () => dispatch(AddRootNode(RootNode(0, 0)))
  };
};

export const ContainerMenu = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
