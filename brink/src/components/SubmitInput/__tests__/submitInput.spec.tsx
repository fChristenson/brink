import React from "react";
import { SubmitInput, styles } from "..";
import { baseTests } from "../../../libs/tests/baseTests";

describe("SubmitInput tests", () => {
  baseTests(<SubmitInput />, styles);
});
