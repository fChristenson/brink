/**
 * This file contains the documentation for shared component properties.
 *
 * The descriptions and examples should show the usage from the perspective
 * of the XML format of Brink components.
 */
import { IDisabled } from "../interfaces/disabled";
import { IIcon } from "../interfaces/icon";
import { IMargin } from "../interfaces/margin";
import { IMaxWidth } from "../interfaces/maxWidth";
import { IName } from "../interfaces/name";
import { IOnClick } from "../interfaces/onClick";
import { IPadding } from "../interfaces/padding";
import { ITextAlign, textAlign } from "../interfaces/textAlign";
import { ITextColor } from "../interfaces/textColor";
import { IconName } from "../../components/Icon/IconNames";
import { ColorNames, Color } from "../../configs/colors";
import { IBackgroundColor } from "../interfaces/backgroundColor";
import { ExcludePrivateProps } from "../interfaces";

type All = IDisabled &
  IIcon &
  IMargin &
  IMaxWidth &
  IName &
  IBackgroundColor &
  Pick<IOnClick, "onClick"> &
  IPadding &
  ITextAlign &
  ITextColor & { children: any };

export interface IDoc {
  description: string;
  exampleValues: readonly any[];
}

/**
 * T should be the props we want to document
 * for the XML syntax.
 */
export type IDocs<T extends string> = {
  [key in ExcludePrivateProps<T>]: IDoc | undefined;
};

type ISharedDocs = {
  [key in keyof All]: IDoc;
};

const marginValues = ["0 0 0 0", "10px 10px", "20%", "5px 5px 5px 0"];

export const sharedDocs: ISharedDocs = {
  backgroundColor: {
    description: "The background color",
    exampleValues: Object.values(ColorNames)
  },
  disabled: {
    description: "Element is disabled or enabled",
    exampleValues: [true, false]
  },
  icon: {
    description: "Icon to use",
    exampleValues: Object.values(IconName)
  },
  margin: {
    description: "Margin to use for the element",
    exampleValues: marginValues
  },
  maxWidth: {
    description: "Maximum width the element is allowed to have",
    exampleValues: ["100px", "100%", "5px", "5%"]
  },
  name: {
    description: "Name of the component element",
    exampleValues: ["username", "password", "email"]
  },
  onClick: {
    description: "The function to run when the element is clicked",
    exampleValues: ["goToPage1", "addRow", "removeRow", "save", "delete"]
  },
  padding: {
    description: "Padding to use for the element",
    exampleValues: marginValues
  },
  textAlign: {
    description: "How the element should align text",
    exampleValues: textAlign
  },
  textColor: {
    description: "Text color to use",
    exampleValues: Object.values(ColorNames)
  },
  children: {
    description: "Element can have other elements inside of it",
    exampleValues: [
      `
      <Element>
        Hello world!
      </Element>
      `,
      `
      <Element>
        <AnotherElement />
      </Element>
      `
    ]
  }
};
