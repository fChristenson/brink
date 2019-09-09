import { ReactNode } from "react";
import path from "path";

export const buildPage = (xml: any): ReactNode => {
  const page = xml.elements.find((element: any) => element.name === "Page");
  return require(path.resolve(__dirname, "..", "..", "components", page.name));
};

/**
 * <Page>
      <CenterContainer>
        <RangeInput />
      </CenterContainer>
    </Page>
 */
