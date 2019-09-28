import { compose } from "redux";
import { connect } from "react-redux";
import { ComponentEditor as Component } from "./component";
import { IState } from "../../store/state";

const mapStateToProps = (state: IState) => {
  return {
    open: state.componentEditor.open
  };
};

export const ComponentEditor = compose(connect(mapStateToProps))(Component);
