import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import { NameConnectionDialog as Component } from "./component";
import { IState } from "../../../../store/state";
import { IConnection, Connection } from "../RootNode/Connection";
import {
  CreateConnection,
  AddTag,
  ConnectRootNodes,
  IAction
} from "../../actions";
import { capitalize } from "../RootNode/utils";

const mapStateToProps = (state: IState) => {
  const { connectionToName, rootNodes } = state.canvas;

  const name = connectionToName
    ? capitalize(
        connectionToName.getRootNodeById(connectionToName.to, rootNodes).title
      )
    : "";

  return {
    tags: state.canvas.tags,
    defaultName: name ? `goTo${name}` : "",
    connectionToName: state.canvas.connectionToName
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onCancel: () => {
      dispatch(ConnectRootNodes(undefined));
    },
    onSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      connectionToName?: IConnection
    ) => {
      event.preventDefault();
      event.stopPropagation();
      if (!connectionToName) return;
      // @ts-ignore
      const name = event.target.name.value;
      const conn = Connection(
        connectionToName.from,
        connectionToName.to,
        name,
        connectionToName.id
      );
      dispatch(CreateConnection(conn));
      dispatch(AddTag(name));
      return false;
    }
  };
};

export const NameConnectionDialog = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
