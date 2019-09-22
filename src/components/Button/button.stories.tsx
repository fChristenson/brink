import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonComponent } from "./component";
import { BUTTONS } from "../../libs/stories/storynames";
import { IconName } from "../Icon/IconNames";

const stories = storiesOf(BUTTONS, module);

stories.add(ButtonComponent.displayName as string, () => (
  <>
    <ButtonComponent>This is some text</ButtonComponent>
    <br />
    <ButtonComponent rightIcon={IconName.CHEVRON_RIGHT}>
      This is some text
    </ButtonComponent>
    <br />
    <ButtonComponent leftIcon={IconName.CHEVRON_LEFT}>
      This is some text
    </ButtonComponent>
  </>
));
