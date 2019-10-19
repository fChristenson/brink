import React from "react";
import { PageEditorMenuBar } from "../MenuBar/PageEditorContainer";
import { Content, contentClassName } from "../Content";
import { Body } from "../Body";
import { CodeEditor } from "../CodeEditor";
import { Documentation } from "../Documentation";
import { PageBuilder } from "brink-core";
import domtoimage from "dom-to-image";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";

interface IProps {
  xml: any;
  rootNode: IRootNode;
  onScreenShot(rootNode: IRootNode, dataUrl: string): void;
}

export class PageEditor extends React.Component<IProps> {
  public componentDidMount() {
    const { rootNode, onScreenShot } = this.props;
    const node = document.querySelector(`.${contentClassName}`);
    if (!node) throw new Error(`Could not find ${contentClassName} node`);

    domtoimage.toPng(node).then(imgData => {
      onScreenShot(rootNode, imgData);
    });
  }

  public render() {
    const { rootNode, xml } = this.props;
    return (
      <Body>
        <PageEditorMenuBar id={rootNode.id} />
        <Content>
          <CodeEditor id={rootNode.id} />
          {xml && <PageBuilder xml={xml} props={{}} />}
          <Documentation />
        </Content>
      </Body>
    );
  }
}
