import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  return {
    // @ts-ignore
    id: match.params.id,
    xml: state.codeEditor.nodeTree
  };
};

export const PageEditor = compose(connect(mapStateToProps))(Component);
