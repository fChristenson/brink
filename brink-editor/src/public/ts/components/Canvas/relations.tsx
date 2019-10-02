import React from "react";
import { Relation } from "react-archer";

export type AnchorPosition = "left" | "right";

export const RelationConfig = (
  id: string,
  title: string,
  targetAnchor: AnchorPosition = "left"
): Relation => {
  const color = "#48AFF0";

  return {
    targetId: id,
    targetAnchor,
    sourceAnchor: targetAnchor === "left" ? "right" : "left",
    style: { strokeColor: color, strokeWidth: 1 },
    label: (
      <div
        onClick={() => alert(1)}
        style={{
          cursor: "pointer",
          color,
          background: "white",
          marginTop: targetAnchor === "left" ? "-20px" : "20px"
        }}
      >
        {title}
      </div>
    )
  };
};

export const getToId = (id: string) => `${id}-to`;

export const getFromId = (id: string, i: number) => `${id}-from-${i}`;

export const getAnchorPosition = (x1: number, x2: number): AnchorPosition =>
  x1 < x2 ? "left" : "right";
