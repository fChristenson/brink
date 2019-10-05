import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";
import { ComponentMenu } from "./components/ComponentMenu";
import {
  containerMenuItems,
  inputMenuItems
} from "./components/ComponentMenu/config";

interface IProps {
  title: string;
  codeEditorOpen?: boolean;
  componentEditorOpen?: boolean;
  placeNode?: boolean;
  startPlaceNode(nodeToPlace: string): void;
  openCodeEditor?(open: boolean): void;
  openComponentEditor?(open: boolean): void;
  addPage?(): void;
  exportFlow?(): void;
}

export const MenuBar: React.FunctionComponent<IProps> = ({
  title,
  openCodeEditor,
  startPlaceNode,
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
        {startPlaceNode && (
          <ComponentMenu
            items={containerMenuItems}
            text="Containers"
            icon="box"
            startPlaceNode={startPlaceNode}
          />
        )}
        {startPlaceNode && (
          <ComponentMenu
            items={inputMenuItems}
            icon="manually-entered-data"
            text="Inputs"
            startPlaceNode={startPlaceNode}
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
        {openComponentEditor && (
          <Button
            className="bp3-minimal"
            icon={componentConfig.icon}
            text={componentConfig.title}
            onClick={() => openComponentEditor(!componentEditorOpen)}
          />
        )}
      </Navbar.Group>
    </Navbar>
  );
};
