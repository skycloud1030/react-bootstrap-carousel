/*React_Carousel_Item.jsx*/
import React from "react";

export default class React_Carousel_Item extends React.PureComponent {
  static defaultProps = {
    children: [],
    activeIndex: 0,
    animation: false,
    direction: null,
    version: 3
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { children, activeIndex, version, animation } = this.props;
    const css = version == 4 ? "carousel-item" : "item";
    let row = [];

    if (!Array.isArray(children)) {
      return <div className={`${css} active`}>{children}</div>;
    }

    row = children.map((item, index) => {
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
      let className = `${css} ${direction} ${position}`;
      if (index === activeIndex) {
        className = `${css} active`;
      }

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
