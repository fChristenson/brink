import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../store/action";
import { IState } from "../../store/state";
import { AddRootNode } from "../Canvas/actions";
import { RootNode } from "../Canvas/components/RootNode/RootNode";

const mapStateToProps = (_: IState) => {
  return {
    title: "Brink"
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    addPage: () => dispatch(AddRootNode(RootNode(0, 0))),
    exportFlow: () => alert("export")
  };
};

export const FlowEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
