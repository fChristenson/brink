import { ITreeNode } from "@blueprintjs/core";

export const TreeNode = (
  id: number,
  label: string,
  icon: "code-block" | "tint"
): ITreeNode => {
  return {
    id,
    label,
    icon
  };
};
