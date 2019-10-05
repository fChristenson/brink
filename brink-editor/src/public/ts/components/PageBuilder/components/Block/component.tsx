import React from "react";

interface IProps {
  fullHeight?: boolean;
  width?: string;
  height?: string;
  name: string;
  addNode(name: string, targetId: string): void;
}

export const Block: React.FunctionComponent<IProps> = ({
  fullHeight,
  name,
  width,
  height,
  addNode
}) => {
  const className = fullHeight ? "block--full-height" : "block";

  return (
    <div
      onClick={() => addNode("Button", "id")}
      className={className}
      style={{ width, height }}
    >
      <h2 className="block__h2">{name}</h2>
    </div>
  );
};
