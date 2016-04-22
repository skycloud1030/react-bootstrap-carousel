/* React_Boostrap_Carousel.jsx*/
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {React_Carousel_Indicators} from './React_Carousel_Indicators.jsx';
import {React_Carousel_Controls} from './React_Carousel_Controls.jsx';
import {React_Carousel_Item} from './React_Carousel_Item.jsx';

export class React_Bootstrap_Carousel extends React.Component {
  static defaultProps={
    indicators:true,
    controls:true,
    slideshowSpeed:7000,
    defaultActiveIndex:0,
    wrap: true,
    children:[],
    animation:true,
    className:"",

  };
  constructor(props) {
    super(props);
    this.state={
      activeIndex:this.props.defaultActiveIndex,
      className:classNames("carousel slide",this.props.className),
      animation:this.props.animation,
    }
  }
  componentDidUpdate() {
    if(this.props.children.length>0){
      this._pause();
      this._play();
    }
  }
  componentDidMount(){
    if(this.props.children.length>0){
      this._pause();
      this._play();
    }
  }
  _next=()=>{
    let {activeIndex}=this.state;
    let prevIndex=activeIndex;
    let {wrap}=this.props;
    let count=this.props.children.length;
    let index =activeIndex+1;
    if (index > count - 1) {
      if (!wrap) {
        return;
      }
      index = 0;
    }
    this.setState({activeIndex:index});
  }
  _prev=()=>{
    let {activeIndex}=this.state;
    let prevIndex=activeIndex;
    let {wrap}=this.props;
    let index =activeIndex-1;
    let count=this.props.children.length;
    if (index < 0) {
      if (!wrap) {
        return;
      }
      index = count - 1;
    }
    this.setState({activeIndex:index});
  }
  _handleMouseOver=()=>{
    this._pause();
  }
  _handleMouseOut=()=>{
    if (this.isPaused) {
      this._play();
    }
  }
  _pause=()=>{
    this.isPaused = true;
    clearTimeout(this.timeout);
  }
  _waitForNext() {
    if (!this.isPaused && this.props.activeIndex == null) {
      this.timeout = setTimeout(this._next, this.props.slideshowSpeed);
    }
  }
  _play=()=>{
    this.isPaused = false;
    this._waitForNext();
  }
  _indClick=(index)=>{
    clearTimeout(this.timeout);
    let {activeIndex}=this.state;
    this.setState({activeIndex:index});
    this.isPaused = false;
  }
  _controlsClick=(call)=>{
    clearTimeout(this.timeout);
    this.isPaused = false;
    if(call=="prev"){
      this._prev();
    }
    else{
      this._next();
    }
  }
  render(){
    let {children,indicators,controls,slideshowSpeed,leftImage,rightImage}=this.props;
    let {activeIndex,direction,className,animation}=this.state;
    return(
      <div className={classNames(className)}
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut}
      >
        {this.props.indicators?<React_Carousel_Indicators data={children} activeIndex={activeIndex} indClick={this._indClick}/>:null}
        <React_Carousel_Item animation={animation} direction={direction} data={children} activeIndex={activeIndex}/>
        {this.props.controls?<React_Carousel_Controls dataLength={children.length} leftImage={leftImage} rightImage={rightImage} prev={this._prev} next={this._next} controlsClick={this._controlsClick}/>:null}
      </div>
    )
  }
};
