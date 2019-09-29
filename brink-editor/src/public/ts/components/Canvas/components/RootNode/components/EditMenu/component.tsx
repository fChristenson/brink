import React from "react";
import { Popover } from "@blueprintjs/core";
import { SubMenu } from "./SubMenu";
import { IRootNode } from "../../RootNode";

interface IProps {
  rootNode: IRootNode;
  onEdit(node: IRootNode): void;
  onConnect(node: IRootNode): void;
  onExport(node: IRootNode): void;
  onDelete(node: IRootNode): void;
}

export const EditMenu: React.FunctionComponent<IProps> = ({
  children,
  rootNode,
  onEdit,
  onConnect,
  onExport,
  onDelete
}) => {
  return (
    <Popover
      content={
        <SubMenu
          rootNode={rootNode}
          onEdit={onEdit}
          onConnect={onConnect}
          onExport={onExport}
          onDelete={onDelete}
        />
      }
    >
      {children}
    </Popover>
  );
};
