import React from "react";
import docs from "brink-core/docs.json";
import { IPanelProps, Tree, ITreeNode } from "@blueprintjs/core";
import { ComponentPropsPanel } from "../ComponentPropsPanel";
import { TreeNode } from "./TreeNode";
import { ColorPanel } from "../ColorPanel";

const colorNodes: ITreeNode[] = [TreeNode(0, "Colors", "tint")];

const componentNodes: ITreeNode[] = docs
  .map(d => d.name)
  .sort()
  .map((k, i) => TreeNode(i, k, "code-block"));

export const ComponentListPanel: React.FunctionComponent<IPanelProps> = ({
  openPanel
}) => {
  const onColorClick = (node: ITreeNode) =>
    openPanel({
      component: props => <ColorPanel {...props} />,
      props: { enabled: true },
      title: node.label
    });

  const onComponentClick = (node: ITreeNode) =>
    openPanel({
      component: props => <ComponentPropsPanel {...props} node={node} />,
      props: { enabled: true },
      title: node.label
    });

  return (
    <div>
      <h3 className="documentation__h3">General</h3>
      <Tree
        className="documentation__tree"
        onNodeClick={onColorClick}
        contents={colorNodes}
      />
      <h3 className="documentation__h3">Components</h3>
      <Tree
        className="documentation__tree"
        onNodeClick={onComponentClick}
        contents={componentNodes}
      />
    </div>
  );
};
