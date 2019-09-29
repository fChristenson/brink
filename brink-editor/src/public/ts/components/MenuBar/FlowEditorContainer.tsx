import { compose } from "redux";
import { connect } from "react-redux";
import { MenuBar as Component } from "./component";
import { Dispatch } from "react";
import { IAction } from "../../store/action";
import { IState } from "../../store/state";

const mapStateToProps = (_: IState) => {
  return {};
};

const mapDispatchToProps = (_: Dispatch<IAction>) => {
  return {};
};

export const FlowEditorMenuBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
