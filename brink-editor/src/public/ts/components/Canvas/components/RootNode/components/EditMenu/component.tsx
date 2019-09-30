import React from "react";
import { Popover } from "@blueprintjs/core";
import { SubMenu } from "./SubMenu";
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

export const EditMenu: React.FunctionComponent<IProps> = ({
  children,
  rootNode,
  hasConnection,
  onEdit,
  onConnect,
  onExport,
  onDelete,
  onConnectionDelete
}) => {
  return (
    <Popover
      content={
        <SubMenu
          rootNode={rootNode}
          hasConnection={hasConnection}
          onEdit={onEdit}
          onConnect={onConnect}
          onExport={onExport}
          onDelete={onDelete}
          onConnectionDelete={onConnectionDelete}
        />
      }
    >
      {children}
    </Popover>
  );
};
