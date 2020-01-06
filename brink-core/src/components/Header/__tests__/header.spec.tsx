import React from "react";
import { Header, styles } from "..";
import { baseTests } from "../../../libs/tests/baseTests";

describe("Header tests", () => {
  baseTests(<Header />, styles);
});
