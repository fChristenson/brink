import React from "react";
import { Block } from "../Block";

export const PageNode: React.FunctionComponent = ({ children }) => {
  return (
    <div className="page_node">
      {children || <Block name="Page" fullHeight />}
    </div>
  );
};
