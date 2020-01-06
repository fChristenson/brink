import React from "react";
import { withAppContext } from "../../store";
import { IProps } from "./props";
import { PageComponent } from "../Page";
import { Header } from "../Header";
import { ColorNames } from "../../configs/colors";

export const FlowPageComponent: React.FunctionComponent<IProps> = ({
  headerIconColor,
  backgroundColor,
  children,
  onSubmit
}) => {
  return (
    <PageComponent backgroundColor={backgroundColor} onSubmit={onSubmit}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <header>
          <Header iconColor={headerIconColor || ColorNames.WHITE1} />
        </header>
        <div>{children}</div>
        <footer>THis is the footer</footer>
      </div>
    </PageComponent>
  );
};

FlowPageComponent.displayName = "FlowPageComponent";

export const FlowPage = withAppContext<IProps>(FlowPageComponent);
