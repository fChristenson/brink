import { Color } from "../../configs/colors/colors";
import { CSSProperties } from "react";

export const styles: CSSProperties = {
  cursor: "pointer",
  width: "230px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  background: Color.BLUE1,
  borderRadius: "47px",
  color: Color.WHITE1,
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "bolder",
  fontSize: "16px",
  lineHeight: "16px",
  textAlign: "center",
  letterSpacing: "0.75px"
};

export const textStyles: CSSProperties = {
  flex: "1 0 auto"
};
