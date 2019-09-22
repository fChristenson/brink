import { shallow } from "enzyme";
import { CSSProperties } from "react";

export const baseTests = (
  Component: React.ReactElement,
  baseStyles: CSSProperties
) => {
  describe("Base test", () => {
    it("is defined", () => {
      expect(Component).toBeDefined();
      expect(baseStyles).toBeDefined();
    });

    it("is possible to render", () => {
      const wrapper = shallow(Component);
      expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it("should assert that the component matches the snapshot", () => {
      const wrapper = shallow(Component);
      expect(wrapper.html()).toMatchSnapshot();
      expect(baseStyles).toMatchSnapshot();
    });

    it("should include base styles for when the component is in a untouched state", () => {
      if (Object.keys(baseStyles).length < 1) return;

      const wrapper = shallow(Component);
      expect(wrapper.props().style).toEqual(baseStyles);
    });

    it("should not allow arbitrary props", () => {
      const wrapper = shallow(Component);
      wrapper.setProps({ "data-test-prop": 1 });
      wrapper.render();
      expect(wrapper.props()["data-test-prop"]).toBeUndefined();
    });
  });
};
