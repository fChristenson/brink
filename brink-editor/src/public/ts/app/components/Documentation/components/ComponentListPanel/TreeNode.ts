import { ITreeNode } from "@blueprintjs/core";

export const TreeNode = (id: number, label: string): ITreeNode => {
  return {
    id,
    label,
    icon: "code-block"
  };
};
