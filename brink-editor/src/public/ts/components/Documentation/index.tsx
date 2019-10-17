import { compose } from "redux";
import { connect } from "react-redux";
import { Documentation as Component } from "./component";
import { IState } from "../../store/state";
import { OpenDocumentation, IAction } from "./actions";
import { Dispatch } from "react";

const mapStateToProps = (state: IState) => {
  return {
    open: state.documentation.open
  };
};

const mapDispatchProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClose: () => {
      return dispatch(OpenDocumentation(false));
    }
  };
};

export const Documentation = compose(
  connect(
    mapStateToProps,
    mapDispatchProps
  )
)(Component);
