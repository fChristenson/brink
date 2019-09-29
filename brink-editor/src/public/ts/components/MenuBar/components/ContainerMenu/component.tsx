import React from "react";
import { ContainerSubMenu } from "./SubMenu";
import { Popover, Position, Button } from "@blueprintjs/core";

interface IProps {
  addPage(): void;
}

export const ContainerMenu: React.FunctionComponent<IProps> = ({ addPage }) => {
  return (
    <Popover
      position={Position.TOP_LEFT}
      minimal
      content={<ContainerSubMenu onAddPage={addPage} />}
    >
      <Button className="bp3-minimal" icon="box" text="Containers" />
    </Popover>
  );
};
