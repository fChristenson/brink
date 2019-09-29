import React from "react";
import { RootNode } from "./components/RootNode";
import { IRootNode } from "./components/RootNode/RootNode";

interface IProps {
  rootNodes: IRootNode[];
}

export const Canvas: React.FunctionComponent<IProps> = ({ rootNodes }) => {
  return (
    <div className="canvas">
      {rootNodes.map(node => (
        <RootNode key={node.id} rootNode={node} />
      ))}
    </div>
  );
};
