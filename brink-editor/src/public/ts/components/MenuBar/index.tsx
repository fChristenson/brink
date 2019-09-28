import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { config as codeConfig } from "../CodeEditor/config";
import { config as componentConfig } from "../ComponentEditor/config";

export const MenuBar = () => {
  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Brink editor</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="code" text={codeConfig.title} />
        <Button
          className="bp3-minimal"
          icon="settings"
          text={componentConfig.title}
        />
      </Navbar.Group>
    </Navbar>
  );
};
