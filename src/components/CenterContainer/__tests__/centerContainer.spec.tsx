import React from "react";
import { CenterContainer, styles } from "../";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";

describe("Center container", () => {
  baseTests(<CenterContainer />, styles);
  childrenTests(<CenterContainer />);
});
