import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { React_Carousel_Indicators } from "./React_Carousel_Indicators.jsx";

const leftIcon = <span className="glyphicon glyphicon-glass" />;
const rightIcon = <span className="glyphicon glyphicon-music" />;

const children = ["test1", "test2", "test3"];
let index, direction;
function indClick(ind, dir) {
  index = ind;
  direction = dir;
}
describe("React_Carousel_Indicators", () => {
  const indicators = mount(
    <React_Carousel_Indicators data={children} indClick={indClick} />
  );
  const indicators_empty = mount(<React_Carousel_Indicators data={children} />);

  it("Should change carousel", () => {
    expect(indicators.find(".carousel-indicators li").length).toBe(3);
    indicators.setProps({ activeIndex: 1 });
    expect(
      indicators.find(".carousel-indicators li .active").getElement().key
    ).toBe("1");
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
});
