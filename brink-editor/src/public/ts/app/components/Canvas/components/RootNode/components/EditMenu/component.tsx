import React from "react";
import { Popover } from "@blueprintjs/core";
import { SubMenu } from "./SubMenu";
import { IRootNode } from "../../RootNode";
import { IConnection } from "../../Connection";

interface IProps {
  rootNode: IRootNode;
  connections: IConnection[];
  onEdit(node: IRootNode): void;
  onConnect(node: IRootNode, fromRootNode?: IRootNode): void;
  onExport(node: IRootNode): void;
  onDelete(node: IRootNode): void;
  onDeleteConnection(connection: IConnection): void;
  onDeleteAllConnections(node: IRootNode): void;
}

export const EditMenu: React.FunctionComponent<IProps> = ({
  children,
  rootNode,
  connections,
  onEdit,
  onConnect,
  onExport,
  onDelete,
  onDeleteConnection,
  onDeleteAllConnections
}) => {
  return (
    <Popover
      content={
        <SubMenu
          rootNode={rootNode}
          connections={connections}
          onEdit={onEdit}
          onConnect={onConnect}
          onExport={onExport}
          onDelete={onDelete}
          onDeleteConnection={onDeleteConnection}
          onDeleteAllConnections={onDeleteAllConnections}
        />
      }
    >
      {children}
    </Popover>
  );
};
