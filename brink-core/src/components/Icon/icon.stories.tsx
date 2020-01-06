import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, IconComponent } from "./component";
import { ICONS } from "../../libs/stories/storynames";
import { IconName } from "./IconNames";
import { ColorNames } from "../../configs/colors";

const stories = storiesOf(ICONS, module);

const icons = Object.values(IconName).sort();

stories.add(IconComponent.displayName as string, () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridAutoRows: "1fr"
    }}
  >
    {icons.map((icon, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Icon icon={icon} color={ColorNames.BLUE1} />
        <p>{icon}</p>
      </div>
    ))}
  </div>
));
