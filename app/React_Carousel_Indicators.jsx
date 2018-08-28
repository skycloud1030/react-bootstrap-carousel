/* React_Carousel_Indicators.jsx */
import React from "react";

export default class React_Carousel_Indicators extends React.PureComponent {
  static defaultProps = {
    data: [],
    activeIndex: 0,
    indClick: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      css: "carousel-indicators"
    };
  }
  _onClick = index => {
    const { activeIndex } = this.props;
    const direction = activeIndex < index ? "next" : "prev";
    this.props.indClick(index, direction);
  };
  render() {
    const { data, activeIndex } = this.props;
      if (Array.isArray(data)) {
        const row = data.map((_item, index) => {
          const className = index == activeIndex ? "active" : "";
          return (
            <li
              key={index}
              onClick={this._onClick.bind(this, index)}
              className={className}
              style={{marginLeft: 10}}
            />
          );
        });
        return <ol className={this.state.css}>{row}</ol>;
      }
      else {
        return null;
      }
  }
}
