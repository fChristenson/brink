import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as documentationConfig } from "../Documentation/config";
import { exportConfig } from "../../../libs/export/exportPageConfig";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";

interface IProps {
  title: string;
  rootNode?: IRootNode;
  rootNodes?: IRootNode[];
  xmlCode?: string;
  codeEditorOpen?: boolean;
  documentationOpen?: boolean;
  onExportPage?(name: string, xml?: string): void;
  openCodeEditor?(open: boolean): void;
  openDocumentation?(open: boolean): void;
  addPage?(): void;
  exportFlow?(rootNodes: IRootNode[]): void;
  previewFlow?(rootNodes: IRootNode[]): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  title,
  rootNode,
  rootNodes,
  xmlCode,
  openCodeEditor,
  openDocumentation,
  previewFlow,
  codeEditorOpen,
  documentationOpen,
  onExportPage,
  addPage,
  exportFlow
}) => {
  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>{title}</Navbar.Heading>
        <Navbar.Divider />
        {addPage && (
          <Button
            className="bp3-minimal"
            icon="document"
            text="New page"
            onClick={addPage}
          />
        )}
        {previewFlow && rootNodes && (
          <Button
            className="bp3-minimal"
            icon="layout"
            text="Preview flow"
            disabled={rootNodes.length <= 0}
            onClick={() => previewFlow(rootNodes)}
          />
        )}
        {exportFlow && rootNodes && (
          <Button
            className="bp3-minimal"
            icon="export"
            text="Export flow"
            disabled={rootNodes.length <= 0}
            onClick={() => exportFlow(rootNodes)}
          />
        )}
        {openCodeEditor && (
          <Button
            className="bp3-minimal"
            icon={codeConfig.icon}
            text={codeConfig.title}
            onClick={() => openCodeEditor(!codeEditorOpen)}
          />
        )}
        {openDocumentation && (
          <Button
            className="bp3-minimal"
            icon={documentationConfig.icon}
            text={documentationConfig.title}
            onClick={() => openDocumentation(!documentationOpen)}
          />
        )}
        {onExportPage && rootNode && (
          <Button
            className="bp3-minimal"
            icon={exportConfig.icon}
            text={exportConfig.text}
            onClick={() => onExportPage(rootNode.title, xmlCode)}
          />
        )}
      </Navbar.Group>
    </Navbar>
  );
};
