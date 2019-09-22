import React from "react";
import { storiesOf } from "@storybook/react";
import { CenterContainer } from "./component";
import { CONTAINERS } from "../../libs/stories/storynames";
import { Block } from "../../libs/stories/block";

const stories = storiesOf(CONTAINERS, module);

stories.add(CenterContainer.displayName as string, () => (
  <CenterContainer>
    <Block blockNumber={1} />
    <br />
    <Block blockNumber={2} />
    <br />
    <Block blockNumber={3} />
  </CenterContainer>
));
