import { IVnode } from "./Vnode";

export const replaceNode = (
  vnode: IVnode | string,
  payload: any
): undefined => {
  if (typeof vnode === "string") return;
  const foundParent = vnode.children.some(
    n => typeof n !== "string" && n.id === payload.targetId
  );

  if (foundParent) {
    const newChildArray = vnode.children.map(n => {
      if (typeof n !== "string" && n.id === payload.targetId)
        return payload.node;

      return n;
    });

    vnode.children = newChildArray;
  } else {
    vnode.children.forEach(n => replaceNode(n, payload));
  }

  return;
};
