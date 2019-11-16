import React from "react";
import { Drawer, PanelStack } from "@blueprintjs/core";
import { config } from "./config";
import { ComponentListPanel } from "./components/ComponentListPanel";

interface IProps {
  open: boolean;
  onClose(): void;
}

export const Documentation: React.FunctionComponent<IProps> = ({
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
    >
      <PanelStack
        className="documentation__panel"
        initialPanel={{ component: ComponentListPanel, title: "Index" }}
      />
    </Drawer>
  );
};
