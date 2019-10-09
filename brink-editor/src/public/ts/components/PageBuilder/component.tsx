import React from "react";
import { PageNode } from "./components/PageNode";
import { IVnode } from "./Vnode";
import { buildTree } from "./utils";
import { Provider } from "brink-core";

interface IProps {
  nodeTree: IVnode;
}

export const PageBuilder: React.FunctionComponent<IProps> = ({ nodeTree }) => {
  return (
    <Provider>
      <PageNode>{buildTree(nodeTree)}</PageNode>
    </Provider>
  );
};
