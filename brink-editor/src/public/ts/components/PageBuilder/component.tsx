import React from "react";
import * as Brink from "brink-core";
import { PageNode } from "./components/PageNode";
import { IVnode } from "./Vnode";
import { Block } from "./components/Block";

interface IProps {
  nodeTree: IVnode;
}

export const PageBuilder: React.FunctionComponent<IProps> = ({ nodeTree }) => {
  return <PageNode>{buildTree(nodeTree)}</PageNode>;
};

const buildTree = (vnode: IVnode | string) => {
  if (typeof vnode === "string") return vnode;
  if (vnode.name === "Block") return <Block name="Page" fullHeight />;

  const { name, props, children } = vnode;
  // @ts-ignore
  const Component = Brink[name];
  const childNodes = children.map(buildTree);

  return (
    <Component key={vnode.id} {...props}>
      {childNodes}
    </Component>
  );
};
