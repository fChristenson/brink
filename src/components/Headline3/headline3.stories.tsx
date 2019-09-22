import React from "react";
import { storiesOf } from "@storybook/react";
import { Headline3 } from "./component";
import { TEXT } from "../../libs/stories/storynames";
import { ColorNames } from "../../configs/colors/colors";

const stories = storiesOf(TEXT, module);

stories.add(Headline3.displayName as string, () => (
  <>
    <Headline3>This is some text</Headline3>
    <br />
    <Headline3 textColor={ColorNames.GREEN1}>This is some text</Headline3>
    <br />
    <Headline3 textColor={ColorNames.BLUE1}>This is some text</Headline3>
  </>
));
