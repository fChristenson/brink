import React from "react";

export const contentClassName = "content";

export const Content: React.FunctionComponent = ({ children }) => {
  return <div className={contentClassName}>{children}</div>;
};
