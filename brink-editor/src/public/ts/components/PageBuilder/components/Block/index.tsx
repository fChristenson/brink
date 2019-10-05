import { compose } from "redux";
import { connect } from "react-redux";
import { Block as Component } from "./component";
import { Dispatch } from "react";
import { AddNode } from "../../actions";
import { Vnode } from "../../Vnode";
import { IAction } from "../../../../store/action";

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    addNode: (name: string, targetId: string) => {
      const node = Vnode(name, {});
      dispatch(AddNode({ node, targetId }));
    }
  };
};

export const Block = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
