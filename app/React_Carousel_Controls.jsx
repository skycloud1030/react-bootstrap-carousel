/*React_Carousel_Controls.jsx*/
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class React_Carousel_Controls extends React.Component{
  static defaultProps={
    dataLength:0,
  }
  constructor(props){
    super(props);
    this.state={
      leftCss:"left carousel-control",
      rightCss:"right carousel-control"
    }
  }
  _onclick=(call)=>{
    if(typeof this.props.controlsClick=="function"){
      this.props.controlsClick(call);
    }
  }
  render(){
    let {rightImage,leftImage,dataLength}=this.props;
    if(dataLength<2){
      return null;
    }
    return(
      <div>
        <a className={this.state.leftCss} onClick={this._onclick.bind(this,"prev")}>
          <React_FlexSlider_Icon_Left image={leftImage} />
        </a>
        <a className={this.state.rightCss} onClick={this._onclick.bind(this,"next")}>
          <React_FlexSlider_Icon_Right image={rightImage} />
        </a>
      </div>
    )
  }
};

export class React_FlexSlider_Icon_Right extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {image,style,css}=this.props;
    if (image){
      return(
        <img className="rightControl" src={image}></img>
      )
    }
    else{
      return(
        <span className="glyphicon glyphicon-chevron-right"></span>
      )
    }
  }
};

export class React_FlexSlider_Icon_Left extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {image,style,css}=this.props;

    if (image){
      return(
        <img className="leftControl" src={image}></img>
      )
    }
    else{
      return(
        <span className="glyphicon glyphicon-chevron-left"></span>
      )
    }

  }
};
