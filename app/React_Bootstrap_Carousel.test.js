import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { React_Bootstrap_Carousel } from "./React_Bootstrap_Carousel.jsx";
import { React_Carousel_Item } from "./React_Carousel_Item.jsx";

describe("React_Bootstrap_Carousel", () => {
  const carousel = mount(
    <React_Bootstrap_Carousel defaultActiveIndex={1}>
      <div>Test1</div>
      <div>Test2</div>
      <div>Test3</div>
    </React_Bootstrap_Carousel>
  );
  const carousel2 = mount(<React_Bootstrap_Carousel defaultActiveIndex={1} />);
  const carousel_element = carousel.instance();
  const carousel_item = carousel.find(React_Carousel_Item).instance();
  it("Should have next and prev", () => {
    expect(typeof carousel_element.slideNext).toBe("function");
    expect(typeof carousel_element.slidePrev).toBe("function");
  });
  it("Should show the correct item with defaultActiveIndex", () => {
    expect(carousel_item.props.activeIndex).toBe(carousel_element.props.defaultActiveIndex);
  });
  it("Should goToSlide to corret item", () => {
    carousel_element.goToSlide(0);
    expect(carousel_item.props.activeIndex).toBe(0);
  });
  it("Should slidePrev to corret item", () => {
    carousel_element.goToSlide(1);
    const prev = carousel_item.props.activeIndex;
    carousel_element.slidePrev();
    const next = carousel_item.props.activeIndex;
    expect(next).toBe(0);
  });
  it("Should slideNext to corret item", () => {
    carousel_element.goToSlide(1);
    const prev = carousel_item.props.activeIndex;
    carousel_element.slideNext();
    const next = carousel_item.props.activeIndex;
    expect(next).toBe(2);
    carousel_element.goToSlide(2);
    carousel_element.slideNext();
    let activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(0);
    carousel_element.goToSlide(0);
    carousel_element.slidePrev();
    activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(2);
  });
  it("Should autoplay work", () => {
    carousel2.setProps({ autoplay: false });
    carousel.setProps({ autoplay: false });
    expect(carousel.instance().isPaused).toBe(true);
  });
  it("Should wrap work", () => {
    let activeIndex;
    carousel.setProps({ wrap: false });
    const carousel_element2 = carousel.instance();
    carousel_element2.goToSlide(2);
    carousel_element2.slideNext();
    activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(2);
    carousel_element2.goToSlide(0);
    carousel_element2.slidePrev();
    activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(0);
  });
  it("Should mouseOver work", () => {
    carousel.setProps({ autoplay: true, wrap: true });
    carousel.simulate("mouseover");
    expect(carousel.instance().isPaused).toBe(true);
    carousel.simulate("mouseout");
    expect(carousel.instance().isPaused).toBe(false);
    carousel.setProps({ autoplay: false });
    carousel.simulate("mouseover");
    carousel.simulate("mouseout");
    carousel.simulate("mouseover");
    carousel.setProps({ autoplay: true });
  });
  it("Should version work", () => {
    carousel.setProps({ version: 4, controls: false });
    expect(carousel_item.props.version).toBe(4);
  });
  it("Should control work", () => {
    let activeIndex;
    carousel_element.goToSlide(1);
    carousel.setProps({ version: 3, controls: true, indicators: false });
    carousel.find(".left .carousel-control").simulate("click");
    activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(0);
    carousel.find(".right .carousel-control").simulate("click");
    activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(1);
  });
  it("Should indicators work", () => {
    carousel.setProps({ indicators: true, animation: false });
    carousel
      .find(".carousel-indicators li")
      .at(0)
      .simulate("click");
    let activeIndex = carousel_item.props.activeIndex;
    expect(activeIndex).toBe(0);
    carousel.unmount();
  });
});
