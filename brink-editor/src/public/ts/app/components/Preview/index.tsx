import { compose } from "redux";
import { connect } from "react-redux";
import { Preview as Component } from "./component";
import { IState } from "../../../store/state";
import { RouteComponentProps } from "react-router";
import { buildRootNode } from "../../../../libs/rootNodes";
import { previewRoute } from "../../../../libs/api/routes";

const mapStateToProps = (
  state: IState,
  { match, history }: RouteComponentProps
) => {
  // @ts-ignore
  const { id } = match.params;
  const xml = buildRootNode(state.canvas.rootNodes, id);
  const onClicks = state.canvas.connections.reduce((acc: any, c) => {
    acc[c.name] = () => history.push(previewRoute.route(c.to));
    return acc;
  }, {});

  return {
    xml,
    props: {
      onClicks
    }
  };
};

export const Preview = compose(connect(mapStateToProps))(Component);
