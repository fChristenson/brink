import React from "react";
import { Button, Popover, IconName } from "@blueprintjs/core";
import { SubMenu } from "./Submenu";
import { IMenuConfig } from "./config";

interface IProps {
  items: IMenuConfig[];
  text: string;
  icon: IconName;
  startPlaceNode(nodeToPlace: string): void;
}

export const ComponentMenu: React.FunctionComponent<IProps> = ({
  items,
  startPlaceNode,
  text,
  icon
}) => {
  return (
    <Popover
      content={<SubMenu startPlaceNode={startPlaceNode} items={items} />}
    >
      <Button className="bp3-minimal" icon={icon} text={text} />
    </Popover>
  );
};
