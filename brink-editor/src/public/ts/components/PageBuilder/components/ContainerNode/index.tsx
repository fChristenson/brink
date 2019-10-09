import React from "react";
import { Block } from "../Block";

interface IProps {
  name: string;
  fullHeight?: boolean;
}

export const ContainerNode: React.FunctionComponent<IProps> = ({
  children,
  fullHeight,
  name
}) => {
  return <>{children || <Block name={name} fullHeight={fullHeight} />}</>;
};
