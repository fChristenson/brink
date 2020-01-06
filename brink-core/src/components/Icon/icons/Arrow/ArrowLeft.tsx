import React from "react";
import { getColor } from "../../../../configs/colors/colors";
import { IIconProps } from "../IconProps";

export const ArrowLeft: React.FunctionComponent<IIconProps> = ({ color }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      role="presentation"
    >
      <path
        fill={color ? getColor(color) : "#fff"}
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
      ></path>
    </svg>
  );
};
