import React from "react";
import { ContainerNode } from "../ContainerNode";

export const PageNode: React.FunctionComponent = ({ children }) => {
  return (
    <div className="page_node">
      <ContainerNode name="Page" fullHeight>
        {children}
      </ContainerNode>
    </div>
  );
};
