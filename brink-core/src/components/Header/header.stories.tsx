import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "./component";
import { HEADERS } from "../../libs/stories/storynames";
import { ColorNames } from "../../configs/colors";

const stories = storiesOf(HEADERS, module);

stories.add(Header.displayName as string, () => (
  <>
    <Header />
    <Header iconColor={ColorNames.GRAY1} />
    <Header iconColor={ColorNames.GREEN1} />
  </>
));
