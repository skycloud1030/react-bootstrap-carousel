import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { React_Bootstrap_Carousel } from "./React_Bootstrap_Carousel.jsx";
import { React_Carousel_Item } from "./React_Carousel_Item.jsx";

describe("React_Bootstrap_Carousel", () => {
  const wrapper = mount(
    <React_Bootstrap_Carousel defaultActiveIndex={1}>
      <div>Test1</div>
      <div>Test2</div>
      <div>Test3</div>
    </React_Bootstrap_Carousel>
  );
  const carousel = wrapper.instance();
  const carousel_item = wrapper.find(React_Carousel_Item).instance();
  it("Should have next and prev", () => {
    expect(typeof carousel.slideNext).toBe("function");
    expect(typeof carousel.slidePrev).toBe("function");
  });
  it("Should show the correct item with defaultActiveIndex", () => {
    expect(carousel_item.props.activeIndex).toBe(carousel.props.defaultActiveIndex);
  });
  it("Should goToSlide to corret item", () => {
    carousel.goToSlide(0);
    expect(carousel_item.props.activeIndex).toBe(0);
  });
  it("Should slidePrev to corret item", () => {
    carousel.goToSlide(1);
    const prev = carousel_item.props.activeIndex;
    carousel.slidePrev();
    const next = carousel_item.props.activeIndex;
    expect(next).toBe(0);
  });
  it("Should slideNext to corret item", () => {
    carousel.goToSlide(1);
    const prev = carousel_item.props.activeIndex;
    carousel.slideNext();
    const next = carousel_item.props.activeIndex;
    expect(next).toBe(2);
  });
});
