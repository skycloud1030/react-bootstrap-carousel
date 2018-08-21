import React from "react";
import { mount } from "enzyme";
import BaseComponent from "./base.js";

let initCheck = false;
let unmountCheck = false;
let isUnmount = false;

class TestComponent extends BaseComponent {
  constructor(props) {
    super(props);
  }
  init = () => {
    initCheck = true;
  };
  unmount = () => {
    isUnmount = this.isUnmount;
    unmountCheck = true;
  };
}

describe("Base", () => {
  const base = mount(<TestComponent />);
  it("Should show default render", () => {
    expect(base.getDOMNode().textContent).toBe("The Base Component");
  });
  it("Should have init function", () => {
    expect(initCheck).toBe(true);
  });
  it("Should have init function", () => {
    expect(initCheck).toBe(true);
  });
  it("Should have unmount function", () => {
    base.unmount();
    expect(unmountCheck).toBe(true);
    expect(isUnmount).toBe(true);
  });
});
