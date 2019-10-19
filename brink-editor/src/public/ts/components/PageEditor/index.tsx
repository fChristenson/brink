import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";
import { parseXml, findRootNode } from "../CodeEditor/utils";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  // @ts-ignore
  const rootNode = findRootNode(state.canvas.rootNodes, match.params.id);
  let xml;

  try {
    xml = parseXml(rootNode.xmlCode);
  } catch (_) {}
  return {
    // @ts-ignore
    id: match.params.id,
    xml
  };
};

export const PageEditor = compose(connect(mapStateToProps))(Component);
