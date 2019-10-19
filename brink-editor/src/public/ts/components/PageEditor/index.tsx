import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";
import { buildRootNode } from "../../../libs/rootNodes";
import { Dispatch } from "react";
import { IAction, SetRootNodeImage } from "../Canvas/actions";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";
import { findRootNode } from "../CodeEditor/utils";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  // @ts-ignore
  const { id } = match.params;
  const xml = buildRootNode(state.canvas.rootNodes, id);
  const rootNode = findRootNode(state.canvas.rootNodes, id);

  return {
    rootNode,
    xml
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onScreenShot: (node: IRootNode, dataUrl: string) => {
      if (node.image !== dataUrl && /data:image\/png\;base64/.test(dataUrl))
        dispatch(SetRootNodeImage({ id: node.id, dataUrl }));
    }
  };
};

export const PageEditor = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
