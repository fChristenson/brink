import React from "react";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { IRootNode } from "../../RootNode";

interface IProps {
  rootNode: IRootNode;
  hasConnection?: boolean;
  onEdit(node: IRootNode): void;
  onConnect(node: IRootNode, fromRootNode?: IRootNode): void;
  onExport(node: IRootNode): void;
  onDelete(node: IRootNode): void;
  onConnectionDelete(node: IRootNode): void;
}

export const SubMenu: React.FunctionComponent<IProps> = ({
  rootNode,
  hasConnection,
  onEdit,
  onConnect,
  onExport,
  onDelete,
  onConnectionDelete
}) => {
  return (
    <Menu>
      <MenuItem text="Edit page" icon="edit" onClick={() => onEdit(rootNode)} />
      <MenuItem
        text="Connect to flow"
        icon="social-media"
        onClick={() => onConnect(rootNode)}
      />
      <MenuItem
        text="Export page"
        icon="export"
        onClick={() => onExport(rootNode)}
      />
      <MenuDivider />
      <MenuItem
        intent="danger"
        icon="delete"
        text="Delete"
        onClick={() => onDelete(rootNode)}
      />
      {hasConnection && (
        <MenuItem
          intent="danger"
          icon="delete"
          text="Delete connection"
          onClick={() => onConnectionDelete(rootNode)}
        />
      )}
    </Menu>
  );
};
