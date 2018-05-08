import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { React_Carousel_Controls } from "./React_Carousel_Controls.jsx";

const leftIcon = <span className="glyphicon glyphicon-glass" />;
const rightIcon = <span className="glyphicon glyphicon-music" />;

let carousel_control;
function controlsClick(call) {
  carousel_control = call;
}
describe("React_Carousel_Controls", () => {
  const controls = mount(
    <React_Carousel_Controls dataLength={2} controlsClick={controlsClick} />
  );
  const controls_empty = mount(<React_Carousel_Controls dataLength={2} />);
  it("Should change icon", () => {
    controls.instance();
    expect(controls.find(".left .carousel-control").length).toBe(1);
    expect(controls.find(".right .carousel-control").length).toBe(1);
    controls.find(".left .carousel-control").simulate("click");
    expect(carousel_control).toBe("prev");
    controls.find(".right .carousel-control").simulate("click");
    expect(carousel_control).toBe("next");
    controls.setProps({ version: 4 });
    expect(controls.find(".left .carousel-control-prev").length).toBe(1);
    expect(controls.find(".right .carousel-control-next").length).toBe(1);
    controls.setProps({ dataLength: 1 });
    expect(controls.find(".left .carousel-control").length).toBe(0);
    expect(controls.find(".right .carousel-control").length).toBe(0);
    controls.setProps({ leftIcon, rightIcon, dataLength: 2});
    controls_empty.find(".left .carousel-control").simulate("click");
    
  });
});
