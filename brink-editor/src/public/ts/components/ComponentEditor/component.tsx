import React from "react";
import { Drawer } from "@blueprintjs/core";
import { config } from "./config";

interface IProps {
  open: boolean;
  onClose(): void;
}

export const ComponentEditor: React.FunctionComponent<IProps> = ({
  open,
  onClose
}) => {
  return (
    <Drawer
      position="right"
      icon={config.icon}
      size={Drawer.SIZE_SMALL}
      isOpen={open}
      hasBackdrop={false}
      title={config.title}
      onClose={onClose}
      className="bp3-dark"
    ></Drawer>
  );
};
