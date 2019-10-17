import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { Documentation } from "../Documentation";
import { PageBuilder } from "brink-core";

interface IProps {
  id: string;
  xml: any;
}

export const PageEditor: React.FunctionComponent<IProps> = ({ id, xml }) => {
  return (
    <Body>
      <PageEditorMenuBar id={id} />
      <Content>
        <CodeEditor />
        {xml && <PageBuilder xml={xml} props={{}} />}
        <Documentation />
      </Content>
    </Body>
  );
};
