import React from "react";
import { EditableText, Icon } from "@blueprintjs/core";
import { EditMenu } from "./components/EditMenu";
import { IRootNode } from "./RootNode";

interface IProps {
  rootNode: IRootNode;
}

export const RootNode: React.FunctionComponent<IProps> = ({ rootNode }) => {
  return (
    <div className="root_node">
      <EditableText defaultValue="Page" intent="primary" maxLength={50} />
      <div className="root_node__body">
        <EditMenu rootNode={rootNode}>
          <Icon className="root_node__cog" intent="primary" icon="cog" />
        </EditMenu>
      </div>
    </div>
  );
};
