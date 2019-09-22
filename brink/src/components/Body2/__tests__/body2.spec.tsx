import React from "react";
import { Body2, styles } from "..";
import { childrenTests } from "../../../libs/tests/childrenTest";
import { baseTests } from "../../../libs/tests/baseTests";
import { marginTests } from "../../../libs/tests/marginTests";
import { shallow } from "enzyme";

describe("Body2 tests", () => {
  baseTests(<Body2 />, styles);
  childrenTests(<Body2 />);
  marginTests(<Body2 />, styles);

  it("applies textAlign styles", () => {
    const wrapper = shallow(<Body2 />);
    wrapper.setProps({ textAlign: "center" });
    wrapper.render();
    expect(wrapper.props().style).toEqual({
      ...styles,
      display: "block",
      textAlign: "center"
    });
  });

  it("does not include textAlign if none is passed", () => {
    const wrapper = shallow(<Body2 />);
    expect(styles.textAlign).toBeFalsy();
    expect(wrapper.props().style).toEqual(styles);
  });
});
