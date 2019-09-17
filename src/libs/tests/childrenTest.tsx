import React from "react";
import { shallow } from "enzyme";

export const childrenTests = (Component: React.ReactElement) => {
  describe("Children test", () => {
    it("passes the children correctly", () => {
      const wrapper = shallow(Component);
      wrapper.setProps({
        children: "foobar"
      });
      wrapper.render();
      expect(
        wrapper.findWhere(node => {
          return node.text() === "foobar";
        }).length
      ).toBeGreaterThan(0);
    });
  });
};
