/*React_Carousel_Controls.jsx*/
import React from "react";

export class React_Carousel_Controls extends React.PureComponent {
  static defaultProps = {
    dataLength: 0,
    controlsClick: () => {},
    version: 3
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onclick = call => {
    this.props.controlsClick(call);
  };
  render() {
    let { rightIcon, leftIcon, dataLength, version } = this.props;
    let leftCss = "";
    let rightCss = "";
    if (version == 4) {
      leftCss = "left carousel-control-prev";
      rightCss = "right carousel-control-next";
      leftIcon = leftIcon || <i className="icon icon-chevron-left" />;
      rightIcon = rightIcon || <i className="icon icon-chevron-right" />;
    } else {
      leftCss = "left carousel-control";
      rightCss = "right carousel-control";
      leftIcon = leftIcon || <i className="glyphicon glyphicon-chevron-left" />;
      rightIcon = rightIcon || (
        <i className="glyphicon glyphicon-chevron-right" />
      );
    }
    if (dataLength < 2) {
      return null;
    }
    return (
      <div>
        <a className={leftCss} onClick={this._onclick.bind(this, "prev")}>
          <React_FlexSlider_Icon_Left icon={leftIcon} />
        </a>
        <a className={rightCss} onClick={this._onclick.bind(this, "next")}>
          <React_FlexSlider_Icon_Right icon={rightIcon} />
        </a>
      </div>
    );
  }
}

export class React_FlexSlider_Icon_Right extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let { icon, style, css } = this.props;
    return <span className="rightControl">{icon}</span>;
  }
}

export class React_FlexSlider_Icon_Left extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let { icon, style, css } = this.props;
    return <span className="leftControl">{icon}</span>;
  }
}
