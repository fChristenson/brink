import React from "react";
import { Drawer } from "@blueprintjs/core";
import { config } from "./config";
import AceEditor from "react-ace";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";
import "brace/ext/language_tools";
import "brace/mode/xml";
import "brace/theme/monokai";
import { componentNameCompleter, propertyNameCompleter } from "./completers";

interface IProps {
  rootNode: IRootNode;
  open: boolean;
  xmlCode: string;
  onChange(code: string, rootNode: IRootNode): void;
  onClose(): void;
}

export const CodeEditor: React.FunctionComponent<IProps> = ({
  open,
  rootNode,
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
        // @ts-ignore, type seems to be wrong
        enableLiveAutocompletion={[
          componentNameCompleter,
          propertyNameCompleter
        ]}
        tabSize={2}
        editorProps={{ $blockScrolling: Infinity }}
        width="100%"
        onChange={code => onChange(code, rootNode)}
        mode="xml"
        theme="monokai"
        value={xmlCode}
      />
    </Drawer>
  );
};
