import { compose } from "redux";
import { connect } from "react-redux";
import { Preview as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";
import { buildRootNode } from "../../../libs/rootNodes";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  // @ts-ignore
  const xml = buildRootNode(state.canvas.rootNodes, match.params.id);

  return {
    xml
  };
};

export const Preview = compose(connect(mapStateToProps))(Component);
