import React from "react";
import { Color } from "../../../configs/colors/colors";
import { IIconProps } from "./IconProps";

export const Subscription: React.FunctionComponent<IIconProps> = ({
  color
}) => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16.5011 34.5H4.5003C3.7046 34.5 2.94148 34.1839 2.37883 33.6213C1.81618 33.0587 1.50009 32.2956 1.50009 31.5V7.5C1.50009 6.70435 1.81618 5.94129 2.37883 5.37868C2.94148 4.81607 3.7046 4.5 4.5003 4.5H31.5022C32.2979 4.5 33.061 4.81607 33.6237 5.37868C34.1863 5.94129 34.5024 6.70435 34.5024 7.5V16.5 M1.50009 13.5H34.5024 M10.5007 7.5V1.5 M25.5018 7.5V1.5 M30.0021 37.5H22.5016V45 M45.3372 38.968C44.5413 41.2882 43.0022 43.281 40.9585 44.6376C38.9149 45.9943 36.4807 46.6389 34.0334 46.4717C31.5861 46.3044 29.2623 45.3346 27.4222 43.7126C25.5821 42.0905 24.3285 39.9069 23.8557 37.5 M39.0027 31.5H46.5033V24 M23.6677 30.034C24.4621 27.7125 26.0006 25.7181 28.0443 24.3602C30.0881 23.0022 32.5229 22.3567 34.9711 22.5238C37.4192 22.6909 39.7437 23.6612 41.584 25.2842C43.4243 26.9072 44.6775 29.0921 45.1492 31.5"
          // @ts-ignore
          stroke={color ? Color[color] : "#FFB74D"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48.0034" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
