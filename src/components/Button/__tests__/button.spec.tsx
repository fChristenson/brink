import React from "react";
import { Button, styles } from "..";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";

describe("Button tests", () => {
  baseTests(<Button />, styles);
  childrenTests(<Button />);
});
