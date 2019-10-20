import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../../store/state";
import { RouteComponentProps } from "react-router";
import { buildRootNode } from "../../../../libs/rootNodes";
import { findRootNode } from "../CodeEditor/utils";
import { Dispatch } from "react";
import { IAction, RemoveToast } from "../../actions";
import { IToast } from "../../toasts";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  // @ts-ignore
  const { id } = match.params;
  const xml = buildRootNode(state.canvas.rootNodes, id);
  const rootNode = findRootNode(state.canvas.rootNodes, id);

  return {
    toasts: state.app.toasts,
    rootNode,
    xml
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onToastEnd: (toast: IToast) => dispatch(RemoveToast(toast))
  };
};

export const PageEditor = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
