import React from "react";
import { storiesOf } from "@storybook/react";
import { Paper } from "./component";
import { CONTAINERS } from "../../libs/stories/storynames";
import { ColorNames } from "../../configs/colors/colors";

const stories = storiesOf(CONTAINERS, module);

stories.add(Paper.displayName as string, () => (
  <>
    <Paper
      backgroundColor={ColorNames.GRADIENT1}
      margin="0 auto"
      padding="8px"
      maxWidth="300px"
      height="300px"
    />
    <br />
    <Paper margin="0 auto" padding="8px" maxWidth="300px" height="300px" />
  </>
));
