import { compose } from "redux";
import { connect } from "react-redux";
import { ComponentEditor as Component } from "./component";
import { IState } from "../../store/state";
import { OpenComponentEditor } from "./actions";
import { Dispatch } from "react";
import { IAction } from "../../store/action";

const mapStateToProps = (state: IState) => {
  return {
    open: state.componentEditor.open
  };
};

const mapDispatchProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClose: () => {
      return dispatch(OpenComponentEditor(false));
    }
  };
};

export const ComponentEditor = compose(
  connect(
    mapStateToProps,
    mapDispatchProps
  )
)(Component);
