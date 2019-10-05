import React from "react";
import { Block } from "../Block";

interface IProps {
  name: string;
  fullHeight?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

export const ContainerNode: React.FunctionComponent<IProps> = ({
  children,
  fullHeight,
  name,
  onClick
}) => {
  return (
    <div className="container_node" onClick={onClick}>
      {children || <Block name={name} fullHeight={fullHeight} />}
    </div>
  );
};
