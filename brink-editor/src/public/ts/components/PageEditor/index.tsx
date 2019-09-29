import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { ComponentEditor } from "../ComponentEditor";

export const PageEditor = () => {
  return (
    <Body>
      <PageEditorMenuBar />
      <Content>
        <CodeEditor />
        <ComponentEditor />
      </Content>
    </Body>
  );
};
