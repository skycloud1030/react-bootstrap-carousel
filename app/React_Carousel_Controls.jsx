/*React_Carousel_Controls.jsx*/
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class React_Carousel_Controls extends React.Component{
  static defaultProps={
    dataLength:0,
    controlsClick:()=>{}
  }
  constructor(props){
    super(props);
    this.state={
      leftCss:"left carousel-control",
      rightCss:"right carousel-control"
    }
  }
  _onclick=(call)=>{
    this.props.controlsClick(call);
  }
  render(){
    let {rightIcon,leftIcon,dataLength}=this.props;
    if(dataLength<2){
      return null;
    }
    return(
      <div>
        <a className={this.state.leftCss} onClick={this._onclick.bind(this,"prev")}>
          <React_FlexSlider_Icon_Left icon={leftIcon} />
        </a>
        <a className={this.state.rightCss} onClick={this._onclick.bind(this,"next")}>
          <React_FlexSlider_Icon_Right icon={rightIcon} />
        </a>
      </div>
    )
  }
};

export class React_FlexSlider_Icon_Right extends React.Component{
  static defaultProps={
    icon: <span className="glyphicon glyphicon-chevron-right"></span>
  }
  constructor(props){
    super(props);
  }
  render(){
    let {icon,style,css}=this.props;
    return(
      <span className="rightControl">
        {icon}
      </span>
    );
  }
};

export class React_FlexSlider_Icon_Left extends React.Component{
  static defaultProps={
    icon: <span className="glyphicon glyphicon-chevron-left"></span>
  }
  constructor(props){
    super(props);
  }
  render(){
    let {icon,style,css}=this.props;

    return(
      <span className="leftControl">
        {icon}
      </span>
    );

  }
};
