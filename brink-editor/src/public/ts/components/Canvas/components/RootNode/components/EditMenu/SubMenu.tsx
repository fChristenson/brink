import React from "react";
import { Menu, MenuItem, MenuDivider, Text } from "@blueprintjs/core";
import { IRootNode } from "../../RootNode";
import { hasOutgoingConnection } from "../../utils";
import { IConnection } from "../../Connection";
import { exportConfig } from "../../../../../../../libs/export/exportPageConfig";

interface IProps {
  rootNode: IRootNode;
  connections: IConnection[];
  onEdit(node: IRootNode): void;
  onConnect(node: IRootNode, fromRootNode?: IRootNode): void;
  onExport(node: IRootNode): void;
  onDelete(node: IRootNode): void;
  onDeleteAllConnections(node: IRootNode): void;
  onDeleteConnection(connection: IConnection): void;
}

export const SubMenu: React.FunctionComponent<IProps> = ({
  rootNode,
  connections,
  onEdit,
  onConnect,
  onExport,
  onDelete,
  onDeleteConnection,
  onDeleteAllConnections
}) => {
  const hasConnections = connections.some(hasOutgoingConnection(rootNode));

  return (
    <Menu>
      <MenuItem text="Edit page" icon="edit" onClick={() => onEdit(rootNode)} />
      <MenuItem
        text="Connect to flow"
        icon="social-media"
        onClick={() => onConnect(rootNode)}
      />
      <MenuItem
        text={exportConfig.text}
        icon={exportConfig.icon}
        onClick={() => onExport(rootNode)}
      />
      <MenuDivider />
      <MenuItem
        intent="danger"
        icon="delete"
        text="Delete page"
        onClick={() => onDelete(rootNode)}
      />
      {hasConnections && <MenuDivider />}
      {hasConnections &&
        connections
          .filter(hasOutgoingConnection(rootNode))
          .map((c, i) => (
            <MenuItem
              key={i}
              intent="danger"
              icon="delete"
              text={<Text ellipsize>{`Delete ${c.name}`}</Text>}
              onClick={() => onDeleteConnection(c)}
            />
          ))}
      {hasConnections && <MenuDivider />}
      {hasConnections && (
        <MenuItem
          intent="danger"
          icon="delete"
          text="Delete all connections"
          onClick={() => onDeleteAllConnections(rootNode)}
        />
      )}
    </Menu>
  );
};
