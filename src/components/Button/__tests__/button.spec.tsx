import React from "react";
import { ButtonComponent, styles } from "..";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";

describe("Button tests", () => {
  baseTests(<ButtonComponent onClick={"noop"} />, styles);
  childrenTests(<ButtonComponent onClick={"noop"} />);
});
