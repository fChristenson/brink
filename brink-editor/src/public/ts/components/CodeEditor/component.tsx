import React from "react";
import Highlight from "react-highlight.js";
import { Drawer } from "@blueprintjs/core";
import { config } from "./config";

interface IProps {
  open: boolean;
  xmlCode: string;
  onClose(): void;
}

export const CodeEditor: React.FunctionComponent<IProps> = ({
  open,
  onClose,
  xmlCode
}) => {
  return (
    <Drawer
      position="left"
      icon={config.icon}
      size={Drawer.SIZE_SMALL}
      isOpen={open}
      hasBackdrop={false}
      title={config.title}
      onClose={onClose}
      className="bp3-dark"
    >
      <Highlight language="xml">{xmlCode}</Highlight>
    </Drawer>
  );
};
