import React from "react";
import Highlight from "react-highlight.js";
import { Drawer } from "@blueprintjs/core";
import { config } from "./config";
import AceEditor from "react-ace";

import "brace/mode/xml";
import "brace/theme/monokai";

interface IProps {
  open: boolean;
  xmlCode: string;
  onChange(code: string): void;
  onClose(): void;
}

export const CodeEditor: React.FunctionComponent<IProps> = ({
  open,
  onClose,
  onChange,
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
      <AceEditor
        editorProps={{ $blockScrolling: Infinity }}
        width="100%"
        onChange={code => onChange(code)}
        mode="xml"
        theme="monokai"
        value={xmlCode}
      />
    </Drawer>
  );
};
