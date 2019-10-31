import { toUpper } from "../../libs/utils/toUpper";

export const getColor = (color: ColorNames): Color => {
  // @ts-ignore
  return Color[toUpper(color)];
};

export enum Color {
  BLUE1 = "#00B5B9",
  WHITE1 = "white",
  WHITE2 = "rgba(255, 255, 255, 0.8)",
  GRAY1 = "#707985",
  GRAY2 = "rgba(38, 74, 106, 0.4)",
  GRAY3 = "#CCD1D9",
  GREEN1 = "#81C784",
  GRADIENT1 = "radial-gradient(245.5% 109.45% at 103.73% 104.2%, #7DD7B6 0%, #0CA7B9 47.67%, #006E98 100%)"
}

export enum ColorNames {
  BLUE1 = "BLUE1",
  WHITE1 = "WHITE1",
  WHITE2 = "WHITE2",
  GRAY1 = "GRAY1",
  GRAY2 = "GRAY2",
  GRAY3 = "GRAY3",
  GREEN1 = "GREEN1",
  GRADIENT1 = "GRADIENT1"
}
