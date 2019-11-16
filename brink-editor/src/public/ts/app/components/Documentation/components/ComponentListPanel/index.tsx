import React from "react";
import * as components from "brink-core/out/src/components";
import { IPanelProps, Tree, ITreeNode } from "@blueprintjs/core";
import { ComponentPropsPanel } from "../ComponentPropsPanel";
import { TreeNode } from "./TreeNode";

const nodes: ITreeNode[] = Object.keys(components)
  .sort()
  .map((k, i) => TreeNode(i, k));

export const ComponentListPanel: React.FunctionComponent<IPanelProps> = ({
  openPanel
}) => {
  const onClick = (node: ITreeNode) =>
    openPanel({
      component: props => <ComponentPropsPanel {...props} node={node} />,
      props: { enabled: true },
      title: node.label
    });
  return (
    <div>
      <Tree
        className="documentation__tree"
        onNodeClick={onClick}
        contents={nodes}
      />
    </div>
  );
};
