import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";

interface IProps {
  title: string;
  codeEditorOpen?: boolean;
  componentEditorOpen?: boolean;
  openCodeEditor?(open: boolean): void;
  openComponentEditor?(open: boolean): void;
  addPage?(): void;
  exportFlow?(): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  title,
  openCodeEditor,
  openComponentEditor,
  codeEditorOpen,
  componentEditorOpen,
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
            icon="code"
            text={codeConfig.title}
            onClick={() => openCodeEditor(!codeEditorOpen)}
          />
        )}
        {openComponentEditor && (
          <Button
            className="bp3-minimal"
            icon="settings"
            text={componentConfig.title}
            onClick={() => openComponentEditor(!componentEditorOpen)}
          />
        )}
      </Navbar.Group>
    </Navbar>
  );
};
