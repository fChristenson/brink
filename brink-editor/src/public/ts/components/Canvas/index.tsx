import { compose } from "redux";
import { connect } from "react-redux";
import { Canvas as Component } from "./component";
import { IState } from "../../store/state";

const mapStateToProps = (state: IState) => {
  return {
    rootNodes: state.canvas.rootNodes
  };
};

export const Canvas = compose(connect(mapStateToProps))(Component);
