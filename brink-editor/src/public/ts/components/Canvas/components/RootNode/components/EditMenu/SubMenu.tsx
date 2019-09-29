import React from "react";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { IRootNode } from "../../RootNode";

interface IProps {
  rootNode: IRootNode;
  onEdit(node: IRootNode): void;
  onConnect(node: IRootNode): void;
  onExport(node: IRootNode): void;
  onDelete(node: IRootNode): void;
}

export const SubMenu: React.FunctionComponent<IProps> = ({
  rootNode,
  onEdit,
  onConnect,
  onExport,
  onDelete
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
    </Menu>
  );
};
