import { contentClassName } from "../Content";
import domtoimage from "dom-to-image";
import { IRootNode } from "../Canvas/components/RootNode/RootNode";

export const takeScreenshot = (
  rootNode: IRootNode,
  onScreenShot: (rootNode: IRootNode, dataUrl: string) => void
) => {
  const node = document.querySelector(`.${contentClassName} > main`);
  if (!node) throw new Error(`Could not find ${contentClassName} > main node`);

  return domtoimage.toPng(node).then(imgData => {
    onScreenShot(rootNode, imgData);
  });
};
