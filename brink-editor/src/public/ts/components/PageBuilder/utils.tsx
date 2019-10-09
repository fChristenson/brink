import React from "react";
import * as Brink from "brink-core";
import { IVnode } from "./Vnode";
import { Block } from "./components/Block";

export const buildTree = (vnode: IVnode | string) => {
  if (typeof vnode === "string") return vnode;
  if (vnode.name === "Block")
    return <Block key={vnode.id} id={vnode.id} name="Page" fullHeight />;

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
