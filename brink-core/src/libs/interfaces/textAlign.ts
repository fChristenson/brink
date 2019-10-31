export const textAlign = ["center", "left", "right"] as const;

export type TextAlign = typeof textAlign[number];

export interface ITextAlign {
  textAlign?: TextAlign;
}
