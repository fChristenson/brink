import React from "react";
import { ColorNames, getColor } from "../../configs/colors/colors";
import { Body2 } from "../../components";

interface IProps {
  width?: string;
  height?: string;
  backgroundColor?: ColorNames;
  blockNumber?: number;
}

export const Block: React.FunctionComponent<IProps> = ({
  width = "100px",
  height = "100px",
  backgroundColor = ColorNames.BLUE1,
  blockNumber = 1
}) => {
  // @ts-ignore
  const color = getColor(backgroundColor);
  const style = {
    width,
    height,
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={style}>
      <Body2 textColor={ColorNames.WHITE1}>{blockNumber}</Body2>
    </div>
  );
};
