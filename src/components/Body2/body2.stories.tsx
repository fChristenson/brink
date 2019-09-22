import React from "react";
import { storiesOf } from "@storybook/react";
import { Body2 } from "./component";
import { TEXT } from "../../libs/stories/storynames";
import { ColorNames } from "../../configs/colors/colors";

const stories = storiesOf(TEXT, module);

stories.add(Body2.displayName as string, () => (
  <>
    <Body2>This is some text</Body2>
    <br />
    <Body2 textColor={ColorNames.GREEN1}>This is some text</Body2>
    <br />
    <Body2 textColor={ColorNames.BLUE1}>This is some text</Body2>
  </>
));
