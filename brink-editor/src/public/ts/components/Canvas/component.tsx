import React from "react";
import { RootNode } from "./components/RootNode";
import { IRootNode, IConnection } from "./components/RootNode/RootNode";
import { ArcherContainer, ArcherElement } from "react-archer";
import {
  RelationConfig,
  getToId,
  getFromId,
  getAnchorPosition
} from "./relations";

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
    <ArcherContainer>
      <div className="canvas">
        {rootNodes.map(node => (
          <RootNode
            fromOutline={fromRootNode && fromRootNode.id === node.id}
            toOutline={fromRootNode && fromRootNode.id !== node.id}
            key={node.id}
            rootNode={node}
          >
            {connections
              .filter(c => c.from === node.id)
              .map((c, i) => {
                const fromX = c.getRootNodeById(c.from, rootNodes).x;
                const toX = c.getRootNodeById(c.to, rootNodes).x;

                return (
                  <ArcherElement
                    key={i}
                    id={getFromId(c.from, i)}
                    relations={[
                      RelationConfig(
                        getToId(c.to),
                        "Test1",
                        getAnchorPosition(fromX, toX)
                      )
                    ]}
                  />
                );
              })}
          </RootNode>
        ))}
      </div>
    </ArcherContainer>
  );
};
