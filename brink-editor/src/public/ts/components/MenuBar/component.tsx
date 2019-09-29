import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { NewPageButton } from "./components/NewPageButton";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";

interface IProps {
  codeEditorOpen?: boolean;
  componentEditorOpen?: boolean;
  openCodeEditor?(open: boolean): void;
  openComponentEditor?(open: boolean): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  openCodeEditor,
  openComponentEditor,
  codeEditorOpen,
  componentEditorOpen
}) => {
  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Brink editor</Navbar.Heading>
        <Navbar.Divider />
        <NewPageButton />
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
