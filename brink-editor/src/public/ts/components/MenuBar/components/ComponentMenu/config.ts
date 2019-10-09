import { IconName } from "@blueprintjs/core";
import * as Brink from "brink-core/out/components";

const componentNames = Object.keys(Brink);

console.log(componentNames);

export interface IMenuConfig {
  id: string;
  icon: IconName;
  text: string;
}

const MenuItem = (text: string): IMenuConfig => {
  return {
    id: Math.random().toString(),
    icon: "box",
    text
  };
};

export const containerMenuItems: IMenuConfig[] = componentNames
  .filter(c => /Container$/.test(c))
  .map(MenuItem);

export const inputMenuItems: IMenuConfig[] = componentNames
  .filter(c => /Input$/.test(c))
  .map(MenuItem);
