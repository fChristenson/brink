import React from "react";
import { TextInputComponent, styles } from "..";
import { baseTests } from "../../../libs/tests/baseTests";
import { noop } from "../../../libs/utils/noop";

describe("TextInput tests", () => {
  baseTests(<TextInputComponent onUpdate={noop} name="test" />, styles);
});
