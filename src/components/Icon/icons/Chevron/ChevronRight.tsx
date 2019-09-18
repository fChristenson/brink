import React from "react";
import { IIconProps } from "../IconProps";
import { BaseChevron } from "./BaseChevron";

export const ChevronRight: React.FunctionComponent<IIconProps> = ({
  color
}) => {
  return <BaseChevron color={color} rotateByDegrees={180} />;
};
