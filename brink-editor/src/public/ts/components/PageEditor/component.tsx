import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { ComponentEditor } from "../ComponentEditor";

interface IProps {
  id: string;
  code: string;
}

export const PageEditor: React.FunctionComponent<IProps> = ({ id, code }) => {
  return (
    <Body>
      <PageEditorMenuBar id={id} />
      <Content>
        <CodeEditor />
        <Content>{code}</Content>
        <ComponentEditor />
      </Content>
    </Body>
  );
};
