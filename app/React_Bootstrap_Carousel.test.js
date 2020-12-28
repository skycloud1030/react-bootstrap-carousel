import React from "react";
import { mount, shallow } from "enzyme";
import RBCarousel from "./React_Bootstrap_Carousel.jsx";

describe("React_Bootstrap_Carousel", () => {
  const carousel = mount(
    <RBCarousel defaultActiveIndex={1}>
      <div>Test1</div>
      <div>Test2</div>
      <div>Test3</div>
    </RBCarousel>
  );

  const carousel2 = mount(<RBCarousel defaultActiveIndex={1} />);
  const carousel_element = carousel.instance();
  const carousel_notArray = mount(<RBCarousel>Test1</RBCarousel>);

  it("Should have next and prev", () => {
    expect(typeof carousel_element.slideNext).toBe("function");
    expect(typeof carousel_element.slidePrev).toBe("function");
  });
  it("Should goToSlide to corret item", () => {
    carousel.instance().goToSlide(0);
    expect(carousel_element.state.activeIndex).toBe(0);
  });
  it("Should slidePrev to corret item", () => {
    carousel_element.goToSlide(1);
    carousel_element.slidePrev();
    const next = carousel_element.state.activeIndex;
    expect(next).toBe(0);
  });
  it("Should slideNext to corret item", () => {
    carousel_element.goToSlide(1);
    carousel_element.slideNext();
    const next = carousel_element.state.activeIndex;
    expect(next).toBe(2);
    carousel_element.goToSlide(2);
    carousel_element.slideNext();
    let activeIndex = carousel_element.state.activeIndex;
    expect(activeIndex).toBe(0);
    carousel_element.goToSlide(0);
    carousel_element.slidePrev();
    activeIndex = carousel_element.state.activeIndex;
    expect(activeIndex).toBe(2);
  });
  it("Should autoplay work", () => {
    carousel2.setProps({ autoplay: false });
    carousel.setProps({ autoplay: false });
    expect(carousel.instance().isPaused).toBe(true);
    expect(carousel2.instance().isPaused).toBe(true);
  });
  it("Should auto play when visibilitychange", () => {
    carousel.setProps({
      hidden: true,
      pauseOnVisibility: true,
      autoplay: true,
    });
    carousel_element.visibilitychange();
    expect(carousel.instance().isPaused).toBe(true);
    carousel.setProps({ hidden: false });
    carousel_element.visibilitychange();
    expect(carousel.instance().isPaused).toBe(false);
  });
  it("Should wrap work", () => {
    let activeIndex;
    carousel.setProps({ wrap: false });
    const carousel_element2 = carousel.instance();
    carousel_element2.goToSlide(2);
    carousel_element2.slideNext();
    activeIndex = carousel_element.state.activeIndex;
    expect(activeIndex).toBe(2);
    carousel_element2.goToSlide(0);
    carousel_element2.slidePrev();
    activeIndex = carousel_element.state.activeIndex;
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
    expect(carousel_element.props.version).toBe(4);
  });
  it("Should control work", () => {
    let activeIndex;
    carousel_element.goToSlide(1);
    carousel.setProps({ version: 3, controls: true, indicators: false });
    carousel.find(".left.carousel-control").simulate("click");
    activeIndex = carousel.find("React_Carousel_Item").props().activeIndex;
    expect(activeIndex).toBe(0);
    carousel.find(".right.carousel-control").simulate("click");
    activeIndex = carousel.find("React_Carousel_Item").props().activeIndex;
    expect(activeIndex).toBe(1);
  });
  it("Should indicators work", () => {
    carousel.setProps({ indicators: true, animation: false });
    carousel.find(".carousel-indicators li").first().simulate("click");
    let activeIndex = carousel.find("React_Carousel_Item").props().activeIndex;
    expect(activeIndex).toBe(0);
    carousel.unmount();
  });
  it("Check data format", () => {
    expect(carousel_notArray.find(".carousel-indicators li").length).toBe(0);
  });
});
