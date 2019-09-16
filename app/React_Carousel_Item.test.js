import React from "react";
import { mount } from "enzyme";
import RBCarouselItem from "./React_Carousel_Item.jsx";

const children = ["test1", "test2", "test3"];

describe("React_Carousel_Indicators", () => {
  const items = mount(
    <RBCarouselItem activeIndex={1} animation={true}>
      {children}
    </RBCarouselItem>
  );

  it("Should show the correct item with defaultActiveIndex", () => {
    expect(items.find(".active").key()).toBe("1");
  });
});
