import React from "react";
import { FlowEditorMenuBar } from "../MenuBar/FlowEditorContainer";
import { Canvas } from "../Canvas";
import { Content } from "../Content";
import { Body } from "../Body";
import { NameConnectionDialog } from "../Canvas/components/NameConnectionDialog";

export const FlowEditor = () => {
  return (
    <Body>
      <FlowEditorMenuBar />
      <Content>
        <Canvas />
        <NameConnectionDialog />
      </Content>
    </Body>
  );
};
