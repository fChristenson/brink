import React from "react";
import { DivContainer, styles } from "..";
import { baseTests } from "../../../libs/tests/baseTests";
import { shallow } from "enzyme";
import { marginTests } from "../../../libs/tests/marginTests";
import { childrenTests } from "../../../libs/tests/childrenTest";

describe("DivContainer tests", () => {
  baseTests(<DivContainer />, styles);
  marginTests(<DivContainer />, styles);
  childrenTests(<DivContainer />);

  it("applies flex styles", () => {
    const wrapper = shallow(<DivContainer justifyContent="center" />);
    expect(wrapper.props().style).toEqual({
      ...styles,
      display: "flex",
      justifyContent: "center"
    });
  });

  it("doesn't apply flex styles if justifyContent is excluded", () => {
    const wrapper = shallow(<DivContainer />);
    expect(wrapper.props().style).toEqual(styles);
  });
});
