import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import { NameConnectionDialog as Component } from "./component";
import { IState } from "../../../../store/state";
import { IConnection, Connection } from "../RootNode/Connection";
import { IAction } from "../../../../store/action";
import { CreateConnection, AddTag, ConnectRootNodes } from "../../actions";

const mapStateToProps = (state: IState) => {
  return {
    tags: state.canvas.tags,
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
