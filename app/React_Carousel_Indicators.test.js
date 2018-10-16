import React from "react";
import { mount } from "enzyme";
import React_Carousel_Indicators from "./React_Carousel_Indicators.jsx";

const children = ["test1", "test2", "test3"];
let index;
function indClick(ind, _dir) {
  index = ind;
}
describe("React_Carousel_Indicators", () => {
  const indicators = mount(<React_Carousel_Indicators data={children} indClick={indClick} />);
  const indicators_empty = mount(<React_Carousel_Indicators data={children} />);
  const indicators_notArray = mount(<React_Carousel_Indicators data={"test1"} />);

  it("Should change carousel", () => {
    expect(indicators.find(".carousel-indicators li").length).toBe(3);
    indicators.setProps({ activeIndex: 1 });
    expect(indicators.find(".carousel-indicators li.active").getElement().key).toBe("1");
    indicators
      .find(".carousel-indicators li")
      .at(0)
      .simulate("click");
    expect(index).toBe(0);
    indicators
      .find(".carousel-indicators li")
      .at(2)
      .simulate("click");
    expect(index).toBe(2);
    indicators_empty
      .find(".carousel-indicators li")
      .at(1)
      .simulate("click");
  });

  it("Check data format", () => {
    expect(indicators_notArray.find(".carousel-indicators li").length).toBe(0);
  });
});
