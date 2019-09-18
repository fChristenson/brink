import React from "react";
import { IIconProps } from "../IconProps";
import { BaseChevron } from "./BaseChevron";

export const ChevronLeft: React.FunctionComponent<IIconProps> = ({ color }) => {
  return <BaseChevron color={color} rotateByDegrees={0} />;
};
