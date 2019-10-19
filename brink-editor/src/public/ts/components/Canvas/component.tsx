import React from "react";
import { RootNode } from "./components/RootNode";
import { IRootNode } from "./components/RootNode/RootNode";
import { ArcherContainer, ArcherElement } from "react-archer";
import {
  RelationConfig,
  getToId,
  getFromId,
  getAnchorPosition
} from "./relations";
import { IConnection } from "./components/RootNode/Connection";
import { findRootNode } from "../CodeEditor/utils";

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
                const from = findRootNode(rootNodes, c.from);
                const to = findRootNode(rootNodes, c.to);

                return (
                  <ArcherElement
                    key={i}
                    id={getFromId(c.from, i)}
                    relations={[
                      RelationConfig(
                        getToId(to.id),
                        c.name,
                        getAnchorPosition(from.x, to.x)
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
