import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";
import { buildRootNode } from "../../../libs/rootNodes";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  // @ts-ignore
  const { id } = match.params;
  const xml = buildRootNode(state.canvas.rootNodes, id);

  return {
    id,
    xml
  };
};

export const PageEditor = compose(connect(mapStateToProps))(Component);
