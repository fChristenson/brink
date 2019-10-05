import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { ComponentEditor } from "../ComponentEditor";
import { RouteComponentProps } from "react-router";
import { PageBuilder } from "../PageBuilder";

export const PageEditor: React.FunctionComponent<RouteComponentProps> = ({
  match
}) => {
  // @ts-ignore
  const { id } = match.params;

  return (
    <Body>
      <PageEditorMenuBar id={id} />
      <Content>
        <CodeEditor />
        <PageBuilder />
        <ComponentEditor />
      </Content>
    </Body>
  );
};
