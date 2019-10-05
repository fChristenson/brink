import React from "react";
import { MenuItem, Menu } from "@blueprintjs/core";
import { IMenuConfig } from "./config";

interface IProps {
  items: IMenuConfig[];
  startPlaceNode(nodeToPlace: string): void;
}

export const SubMenu: React.FunctionComponent<IProps> = ({
  startPlaceNode,
  items
}) => {
  return (
    <Menu>
      {items.map((c, i) => (
        <MenuItem
          key={i}
          className="bp3-minimal"
          icon={c.icon}
          text={c.text}
          onClick={() => startPlaceNode(c.text)}
        />
      ))}
    </Menu>
  );
};
