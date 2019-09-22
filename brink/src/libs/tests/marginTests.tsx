import React from "react";
import { shallow } from "enzyme";
import { CSSProperties } from "react";

export const marginTests = (
  Component: React.ReactElement,
  styles: CSSProperties
) => {
  describe("Margin test", () => {
    it("applies margin styles", () => {
      const wrapper = shallow(Component);
      wrapper.setProps({ margin: "1 2 3 4" });
      wrapper.render();
      expect(wrapper.props().style).toEqual({ ...styles, margin: "1 2 3 4" });
    });

    it("does not include margins if none are passed", () => {
      const wrapper = shallow(Component);
      expect(styles.margin).toBeFalsy();
      expect(wrapper.props().style).toEqual(styles);
    });
  });
};
