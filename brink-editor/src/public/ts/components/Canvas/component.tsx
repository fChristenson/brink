import React from "react";
import { RootNode } from "./components/RootNode";
import { IRootNode, IConnection } from "./components/RootNode/RootNode";
// @ts-ignore
import { SteppedLineTo } from "react-lineto";

interface IProps {
  rootNodes: IRootNode[];
  connections: IConnection[];
  fromRootNode?: IRootNode;
}

export const Canvas: React.FunctionComponent<IProps> = ({
  rootNodes,
  fromRootNode,
  connections
}) => {
  return (
    <div className="canvas">
      {rootNodes.map(node => (
        <RootNode
          fromOutline={fromRootNode && fromRootNode.id === node.id}
          toOutline={fromRootNode && fromRootNode.id !== node.id}
          key={node.id}
          rootNode={node}
        />
      ))}
      {connections.map((connection, i) => (
        <SteppedLineTo
          key={i}
          borderColor="#137CBD"
          borderWidth={4}
          from={connection.from.id}
          to={connection.to.id}
        />
      ))}
    </div>
  );
};
