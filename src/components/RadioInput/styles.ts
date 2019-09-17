import { CSSProperties } from "react";
import { Color } from "../../configs/colors/colors";

export const styles: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: `1px solid ${Color.GRAY3}`,
  padding: "31px 48px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  borderRadius: "8px"
};

export const inputStyles: CSSProperties = {
  display: "",
  position: "absolute",
  opacity: 0
};

export const selectedStyles: CSSProperties = {
  background: Color.GREEN1
};
