import React from "react";
import { Paper, styles } from "../";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";
import { marginTests } from "../../../libs/tests/marginTests";

describe("Paper tests", () => {
  baseTests(<Paper />, styles);
  childrenTests(<Paper />);
  marginTests(<Paper />, styles);
});
