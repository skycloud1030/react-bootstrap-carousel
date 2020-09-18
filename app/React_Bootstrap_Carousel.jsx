import React from "react";
import BaseComponent from "./base.js";
import React_Carousel_Indicators from "./React_Carousel_Indicators.jsx";
import React_Carousel_Controls from "./React_Carousel_Controls.jsx";
import React_Carousel_Item from "./React_Carousel_Item.jsx";

/* React_Bootstrap_Carousel.jsx*/

const Render_Ind = React.memo(function Render_Ind(props) {
  const { children, indicators, activeIndex } = props;
  if (indicators) {
    return (
      <React_Carousel_Indicators
        data={children}
        activeIndex={activeIndex}
        indClick={props._indClick}
      />
    );
  }
});

const Render_Control = React.memo(function Render_Control(props) {
  const { children, controls, leftIcon, rightIcon, version } = props;
  if (controls) {
    return (
      <React_Carousel_Controls
        dataLength={children.length}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        prev={props.slidePrev}
        next={props.slideNext}
        controlsClick={props._controlsClick}
        version={version}
      />
    );
  }
});

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
    onSelect: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.defaultActiveIndex,
      className: `carousel ${this.props.className}`,
    };
  }
  visibilitychange = () => {
    (document.hidden || this.props.hidden) && this.props.pauseOnVisibility
      ? this._pause()
      : this._autoPlay();
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
  goToSlide = (activeIndex) => {
    this.timeout && clearTimeout(this.timeout);
    this.safeSetState({ activeIndex });
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
    this.safeSetState({ activeIndex: index, direction: "prev" });
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
  _controlsClick = (call) => {
    this.timeout && clearTimeout(this.timeout);
    this.isPaused = false;
    if (call == "prev") {
      this.slidePrev();
    } else {
      this.slideNext();
    }
  };
  render() {
    const { children, version } = this.props;
    const { activeIndex, className } = this.state;
    const { animation, indicators } = this.props;
    const { leftIcon, rightIcon, controls } = this.props;

    return (
      <div
        className={className}
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut}
      >
        <Render_Ind {...{ activeIndex, indicators, _indClick: this._indClick }}>
          {children}
        </Render_Ind>
        <React_Carousel_Item {...{ animation, activeIndex, version }}>
          {children}
        </React_Carousel_Item>
        <Render_Control
          {...{
            controls,
            leftIcon,
            rightIcon,
            version,
            slidePrev: this.slidePrev,
            slideNext: this.slideNext,
            _controlsClick: this._controlsClick,
          }}
        >
          {children}
        </Render_Control>
      </div>
    );
  }
}
