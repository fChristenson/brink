import React from "react";
import { RootNode } from "./components/RootNode";

interface IProps {
  zoom: number;
}

export const Canvas: React.FunctionComponent<IProps> = ({ zoom }) => {
  return (
    <div className="canvas">
      <div
        style={{ transform: `scale(${zoom})` }}
        className="canvas__storyboard"
      >
        <RootNode />
      </div>
    </div>
  );
};
