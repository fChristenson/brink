import React from "react";
import Highlight from "react-highlight.js";
import { Drawer } from "@blueprintjs/core";
import { config } from "./config";

interface IProps {
  open: boolean;
  onClose(): void;
}

export const CodeEditor: React.FunctionComponent<IProps> = ({
  open,
  onClose
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
      <Highlight language="xml">
        {[
          "<Page>",
          '<Headline3 margin="12px">Test</Headline3>',
          "<Body2>Test</Body2>",
          "</Page>"
        ].join("\n")}
      </Highlight>
    </Drawer>
  );
};
