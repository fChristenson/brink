import { IconName } from "@blueprintjs/core";

export interface IMenuConfig {
  icon: IconName;
  text: string;
}

const MenuItem = (text: string): IMenuConfig => {
  return {
    icon: "box",
    text
  };
};

export const containerMenuItems: IMenuConfig[] = [
  MenuItem("CenterContainer"),
  MenuItem("DivContainer")
];

export const inputMenuItems: IMenuConfig[] = [
  MenuItem("Button"),
  MenuItem("TextField")
];
