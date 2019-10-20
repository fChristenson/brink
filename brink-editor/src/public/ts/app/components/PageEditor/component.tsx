import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { Documentation } from "../Documentation";
import { PageBuilder } from "brink-core";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";
import { Toaster, Toast } from "@blueprintjs/core";
import { IToast, TOAST_DISMISS_TIME } from "../../toasts";

interface IProps {
  xml: any;
  rootNode: IRootNode;
  toasts: IToast[];
  onToastEnd(toast: IToast): void;
}

export const PageEditor: React.FunctionComponent<IProps> = ({
  rootNode,
  onToastEnd,
  xml,
  toasts
}) => {
  return (
    <Body>
      <PageEditorMenuBar id={rootNode.id} />
      <Content>
        <CodeEditor id={rootNode.id} />
        {xml && <PageBuilder xml={xml} props={{}} />}
        <Documentation />
      </Content>
      <Toaster>
        {toasts.map((t, i) => (
          <Toast
            key={i}
            icon={t.icon}
            intent={t.intent}
            timeout={TOAST_DISMISS_TIME}
            message={t.message}
            onDismiss={() => onToastEnd(t)}
          />
        ))}
      </Toaster>
    </Body>
  );
};
