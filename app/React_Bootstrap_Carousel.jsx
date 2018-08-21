import React from "react";
import BaseComponent from "./base.js";
import classNames from "classnames";
import React_Carousel_Indicators from "./React_Carousel_Indicators.jsx";
import React_Carousel_Controls from "./React_Carousel_Controls.jsx";
import React_Carousel_Item from "./React_Carousel_Item.jsx";

/* React_Bootstrap_Carousel.jsx*/
export default class React_Bootstrap_Carousel extends BaseComponent {
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
    pauseOnVisibility: false,
    hidden: false,
    onSelect: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.defaultActiveIndex,
      className: classNames("carousel slide", this.props.className)
    };
  }
  visibilitychange = () => {
    (document.hidden || this.props.hidden) && this.props.pauseOnVisibility ? this._pause() : this._autoPlay();
  };
  componentDidUpdate(prevProps, prevState) {
    this._checkChildrenLength();
    if (this.props.autoplay !== prevProps.autoplay) {
      this._autoPlay();
    }
    if (prevState.activeIndex !== this.state.activeIndex) {
      let { direction, activeIndex } = this.state;
      this.props.onSelect(activeIndex, direction);
    }
  }
  init() {
    this._checkChildrenLength();
  }
  unmount() {
    this.timeout && clearTimeout(this.timeout);
  }
  _checkChildrenLength = () => {
    const { children } = this.props;
    if (Array.isArray(children) && children.length > 0) {
      this._autoPlay();
    }
  };
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
    this.safeSetState({ activeIndex: index, direction: "next" });
  };
  goToSlide = activeIndex => {
    this.timeout && clearTimeout(this.timeout);
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
    this.timeout && clearTimeout(this.timeout);
  };
  _waitForNext() {
    this.timeout = setTimeout(this.slideNext, this.props.slideshowSpeed);
  }
  _play = () => {
    this.isPaused = false;
    this._waitForNext();
  };
  _indClick = (index, direction) => {
    this.timeout && clearTimeout(this.timeout);
    this.setState({ activeIndex: index, direction });
    this.isPaused = false;
  };
  _controlsClick = call => {
    this.timeout && clearTimeout(this.timeout);
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
