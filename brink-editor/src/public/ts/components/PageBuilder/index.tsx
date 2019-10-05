import { compose } from "redux";
import { connect } from "react-redux";
import { PageBuilder as Component } from "./component";
import { IState } from "../../store/state";

const mapStateToProps = (state: IState) => {
  return {
    nodeTree: state.pageBuilder.nodeTree
  };
};

export const PageBuilder = compose(connect(mapStateToProps))(Component);
