import React from "react";
import { Headline3, styles } from "../";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";
import { marginTests } from "../../../libs/tests/marginTests";
import { textAlignTests } from "../../../libs/tests/textAlignTests";

describe("Headline3 tests", () => {
  baseTests(<Headline3 />, styles);
  childrenTests(<Headline3 />);
  marginTests(<Headline3 />, styles);
  textAlignTests(<Headline3 />, styles);
});
