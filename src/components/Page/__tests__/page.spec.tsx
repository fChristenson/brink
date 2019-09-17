import React from "react";
import { PageComponent as Page, styles } from "..";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";
import { submitNoop } from "../../../libs/utils/noop";

describe("Page tests", () => {
  baseTests(<Page onSubmit={submitNoop} />, styles);
  childrenTests(<Page onSubmit={submitNoop} />);
});
