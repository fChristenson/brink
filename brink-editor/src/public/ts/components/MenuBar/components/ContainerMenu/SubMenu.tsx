import React from "react";
import { Menu } from "@blueprintjs/core";

interface IProps {
  onAddPage(): void;
}

export const ContainerSubMenu: React.FunctionComponent<IProps> = ({
  onAddPage
}) => {
  return (
    <Menu>
      <Menu.Item icon="document" text="New page" onClick={onAddPage} />
    </Menu>
  );
};
