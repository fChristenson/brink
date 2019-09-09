import React from "react";
import { Color } from "../../configs/colors/colors";
import { styles } from "./styles";

interface IPageProps {
  backgroundColor?: Color;
}

export const Page: React.FunctionComponent<IPageProps> = ({
  children,
  backgroundColor = Color.WHITE
}) => {
  return (
    <main style={{ ...styles, background: backgroundColor }}>{children}</main>
  );
};
