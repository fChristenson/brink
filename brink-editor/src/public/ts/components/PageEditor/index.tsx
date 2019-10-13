import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  return {
    // @ts-ignore
    id: match.params.id,
    code: state.codeEditor.code
  };
};

export const PageEditor = compose(connect(mapStateToProps))(Component);
