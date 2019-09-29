import React from "react";
import { RootNode } from "./components/RootNode";
import { IRootNode } from "./components/RootNode/RootNode";

interface IProps {
  rootNodes: IRootNode[];
  zoom: number;
}

export const Canvas: React.FunctionComponent<IProps> = ({
  rootNodes,
  zoom
}) => {
  return (
    <div className="canvas">
      <div className="canvas__board" style={{ transform: `scale(${zoom})` }}>
        {rootNodes.map(node => (
          <RootNode key={node.id} />
        ))}
      </div>
    </div>
  );
};
