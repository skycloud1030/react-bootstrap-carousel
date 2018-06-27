import React from "react";
import classNames from "classnames";
import { React_Carousel_Indicators } from "./React_Carousel_Indicators.jsx";
import { React_Carousel_Controls } from "./React_Carousel_Controls.jsx";
import { React_Carousel_Item } from "./React_Carousel_Item.jsx";
import shallowequal from "fbjs/lib/shallowEqual";

/* React_Bootstrap_Carousel.jsx*/
export class React_Bootstrap_Carousel extends React.PureComponent {
  static defaultProps = {
    indicators: true,
    controls: true,
    slideshowSpeed: 7000,
    defaultActiveIndex: 0,
    wrap: true,
    autoplay: true,
    children: [],
    animation: true,
    className: "",
    version: 3,
    onSelect: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.defaultActiveIndex,
      className: classNames("carousel slide", this.props.className)
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.children.length > 0) {
      this._autoPlay();
    }
    if (!shallowequal(prevProps.autoplay, this.props.autoplay)) {
      this._autoPlay();
    }
    if (!shallowequal(prevState.activeIndex, this.state.activeIndex)) {
      let { direction, activeIndex } = this.state;
      this.props.onSelect(activeIndex, direction);
    }
  }
  componentDidMount() {
    if (this.props.children.length > 0) {
      this._autoPlay();
    }
  }
  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout);
  }
  _autoPlay = () => {
    this._pause();
    this.props.autoplay && this._play();
  };
  slideNext = () => {
    let { activeIndex } = this.state;
    let { wrap } = this.props;
    let count = this.props.children.length;
    let index = activeIndex + 1;
    if (index > count - 1) {
      if (!wrap) {
        return;
      }
      index = 0;
    }
    this.setState({ activeIndex: index, direction: "next" });
  };
  goToSlide = activeIndex => {
    clearTimeout(this.timeout);
    this.setState({ activeIndex });
  };
  slidePrev = () => {
    let { activeIndex } = this.state;
    let { wrap } = this.props;
    let index = activeIndex - 1;
    let count = this.props.children.length;
    if (index < 0) {
      if (!wrap) {
        return;
      }
      index = count - 1;
    }
    this.setState({ activeIndex: index, direction: "prev" });
  };
  _handleMouseOver = () => {
    this._pause();
  };
  _handleMouseOut = () => {
    if (this.isPaused && this.props.autoplay) {
      this._play();
    }
  };
  _pause = () => {
    this.isPaused = true;
    clearTimeout(this.timeout);
  };
  _waitForNext() {
    this.timeout = setTimeout(this.slideNext, this.props.slideshowSpeed);
  }
  _play = () => {
    this.isPaused = false;
    this._waitForNext();
  };
  _indClick = (index, direction) => {
    clearTimeout(this.timeout);
    let { activeIndex } = this.state;
    this.setState({ activeIndex: index, direction });
    this.isPaused = false;
  };
  _controlsClick = call => {
    clearTimeout(this.timeout);
    this.isPaused = false;
    if (call == "prev") {
      this.slidePrev();
    } else {
      this.slideNext();
    }
  };
  render_ind = () => {
    let { children, indicators } = this.props;
    let { activeIndex } = this.state;
    if (indicators) {
      return (
        <React_Carousel_Indicators data={children} activeIndex={activeIndex} indClick={this._indClick} />
      );
    }
  };
  render_control = () => {
    let { children, controls, leftIcon, rightIcon, version } = this.props;
    if (controls) {
      return (
        <React_Carousel_Controls
          dataLength={children.length}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          prev={this.slidePrev}
          next={this.slideNext}
          controlsClick={this._controlsClick}
          version={version}
        />
      );
    }
  };
  render() {
    const { children, version } = this.props;
    const { activeIndex, className } = this.state;
    const { animation } = this.props;
    return (
      <div
        className={classNames(className)}
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut}
      >
        {this.render_ind()}
        <React_Carousel_Item
          animation={animation}
          data={children}
          activeIndex={activeIndex}
          version={version}
        />
        {this.render_control()}
      </div>
    );
  }
}
