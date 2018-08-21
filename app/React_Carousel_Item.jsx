/*React_Carousel_Item.jsx*/
import React from "react";
import classNames from "classnames";

export default class React_Carousel_Item extends React.PureComponent {
  static defaultProps = {
    data: [],
    activeIndex: 0,
    direction: null,
    version: 3
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { data, activeIndex, version, animation } = this.props;
    const css = version == 4 ? "carousel-item" : "item";
    const row = data.map((item, index) => {
      let position, direction;

      switch (true) {
        case animation === true && index > activeIndex && version == 4:
          position = "carousel-item-right";
          direction = "carousel-item-next";
          break;
        case animation === true && index > activeIndex:
          position = "right";
          direction = "next";
          break;
        case animation === true && index < activeIndex && version == 4:
          position = "carousel-item-left";
          direction = "carousel-item-prev";
          break;
        case animation === true && index < activeIndex:
          position = "left";
          direction = "prev";
          break;
      }
      let className = classNames(css, direction, position);
      className = index === activeIndex ? classNames(css, "active") : className;

      return (
        <div key={index} className={className}>
          {item}
        </div>
      );
    });
    return (
      <div className="carousel-inner" role="listbox">
        {row}
      </div>
    );
  }
}
