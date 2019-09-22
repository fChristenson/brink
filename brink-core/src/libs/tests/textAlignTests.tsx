import React from "react";
import { shallow } from "enzyme";
import { CSSProperties } from "react";

export const textAlignTests = (
  Component: React.ReactElement,
  styles: CSSProperties
) => {
  describe("TextAlign test", () => {
    it("applies textAlign styles", () => {
      const wrapper = shallow(Component);
      wrapper.setProps({ textAlign: "center" });
      wrapper.render();
      expect(wrapper.props().style).toEqual({ ...styles, textAlign: "center" });
    });

    it("does not include textAlign if none is passed", () => {
      const wrapper = shallow(Component);
      expect(styles.textAlign).toBeFalsy();
      expect(wrapper.props().style).toEqual(styles);
    });
  });
};
