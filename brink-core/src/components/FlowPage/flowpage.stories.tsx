import React from "react";
import { storiesOf } from "@storybook/react";
import { FlowPageComponent } from "./component";
import { PAGES } from "../../libs/stories/storynames";
import { submitNoop } from "../../libs/utils/noop";
import { ColorNames } from "../../configs/colors";
import { CenterContainer } from "../CenterContainer";
import { Body2 } from "../Body2";

const stories = storiesOf(PAGES, module);

stories.add(FlowPageComponent.displayName as string, () => (
  <>
    <FlowPageComponent
      onSubmit={submitNoop}
      headerIconColor={ColorNames.WHITE1}
      backgroundColor={ColorNames.BLUE1}
    >
      <CenterContainer>
        <Body2 textColor={ColorNames.WHITE1}>
          This is where content will be
        </Body2>
      </CenterContainer>
    </FlowPageComponent>
  </>
));
