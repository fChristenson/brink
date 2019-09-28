import React from "react";

interface IProps {
  open: boolean;
}

export const ComponentEditor: React.FunctionComponent<IProps> = ({ open }) => {
  const className = open
    ? "component_editor bp3-dark"
    : "component_editor--hidden bp3-dark";
  return <div className={className}>foobar</div>;
};
