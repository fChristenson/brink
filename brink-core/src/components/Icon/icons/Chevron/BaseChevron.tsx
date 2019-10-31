import React from "react";
import { getColor } from "../../../../configs/colors/colors";
import { IIconProps } from "../IconProps";

export interface IBaseChevronProps {
  rotateByDegrees: number;
}

export const BaseChevron: React.FunctionComponent<
  IBaseChevronProps & IIconProps
> = ({ color, rotateByDegrees }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotateByDegrees}deg)` }}
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11L12 19L20 27"
        stroke={color ? getColor(color) : "#707985"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
