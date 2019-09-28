import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";

interface IProps {
  codeEditorOpen: boolean;
  componentEditorOpen: boolean;
  zoom: number;
  openCodeEditor(open: boolean): void;
  openComponentEditor(open: boolean): void;
  zoomIn(zoom: number): void;
  zoomOut(zoom: number): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  openCodeEditor,
  openComponentEditor,
  codeEditorOpen,
  componentEditorOpen,
  zoom,
  zoomIn,
  zoomOut
}) => {
  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Brink editor</Navbar.Heading>
        <Navbar.Divider />
        <Button
          className="bp3-minimal"
          icon="zoom-in"
          text="Zoom in"
          onClick={() => zoomIn(zoom)}
        />
        <Button
          className="bp3-minimal"
          icon="zoom-out"
          text="Zoom out"
          onClick={() => zoomOut(zoom)}
        />
        <Button
          className="bp3-minimal"
          icon="code"
          text={codeConfig.title}
          onClick={() => openCodeEditor(!codeEditorOpen)}
        />
        <Button
          className="bp3-minimal"
          icon="settings"
          text={componentConfig.title}
          onClick={() => openComponentEditor(!componentEditorOpen)}
        />
      </Navbar.Group>
    </Navbar>
  );
};
