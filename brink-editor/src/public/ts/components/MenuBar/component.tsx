import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as documentationConfig } from "../Documentation/config";
import { exportConfig } from "../../../libs/export/exportPageConfig";

interface IProps {
  title: string;
  codeEditorOpen?: boolean;
  documentationOpen?: boolean;
  onExportPage?(): void;
  openCodeEditor?(open: boolean): void;
  openDocumentation?(open: boolean): void;
  addPage?(): void;
  exportFlow?(): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  title,
  openCodeEditor,
  openDocumentation,
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
        {exportFlow && (
          <Button
            className="bp3-minimal"
            icon="export"
            text="Export flow"
            onClick={exportFlow}
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
        {onExportPage && (
          <Button
            className="bp3-minimal"
            icon={exportConfig.icon}
            text={exportConfig.text}
            onClick={onExportPage}
          />
        )}
      </Navbar.Group>
    </Navbar>
  );
};
