# react-bootstrap-carousel
[![Travis](https://api.travis-ci.org/skycloud1030/react-bootstrap-carousel.svg?branch=master)](https://travis-ci.org/skycloud1030/react-bootstrap-carousel)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/react-bootstrap-carousel/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/react-bootstrap-carousel?branch=master)
[![Version](https://img.shields.io/npm/v/react-bootstrap-carousel.svg)](https://www.npmjs.com/package/react-bootstrap-carousel)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Donloads](https://img.shields.io/npm/dm/react-bootstrap-carousel.svg)](https://www.npmjs.com/package/react-bootstrap-carousel)


A carousel component for react (with bootstrap@3.3.7). This project is a react port of: [react-bootstrap](https://react-bootstrap.github.io/components/carousel)

## Install

```sh
npm i --save react-bootstrap-carousel
```

## Getting Started

```js
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
```

## Demo

[fade](https://skycloud1030.github.io/react-bootstrap-carousel/example/fade.html)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-default" onClick={this._changeIcon}>
                Change Icon
              </button>
              <button type="button" className="btn btn-default" onClick={this.slidePrev}>
                Slider prev
              </button>
              <button type="button" className="btn btn-default" onClick={this.slideNext}>
                Slider next
              </button>
              <button type="button" className="btn btn-default" onClick={this.goToSlide}>
                Go to slide 4
              </button>
            </div>
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="https://www.w3schools.com/bootstrap/la.jpg"
                  />
                  <div className="carousel-caption">
                    Image
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"aqua"}}>
                  <video className="carousel-center" controls style={{width:"75%"}} height="250">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                  <div className="carousel-caption">
                    Video
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightpink"}}>
                  <div className="carousel-center">
                    center Text
                  </div>
                  <div className="carousel-caption">
                    Text
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightblue"}}>
                  <span>
                    text
                  </span>
                  <div className="carousel-caption">
                    Text
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightblue"}}>
                  <div className="carousel-center">
                    <iframe
                      style={{width:500}}
                      height="250"
                      src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                  <div className="carousel-caption">
                    Youtube
                  </div>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};
ReactDOM.render(
    <Demo/>,
    document.getElementById('Demo')
);
```

## className

```
Type:string
Default:""
```

## defaultActiveIndex

```
Type:number
Default:0
```

## slideshowSpeed

```
Type:number
Default:7000
```

## animation

```
Type:boolean
Default:true
```

## autoplay

```
Type:boolean
Default:true
```

## wrap

```
Type:boolean
Default:true
```

## indicators

```
Type:boolean
Default:true
```

## slidePrev

```
Type:function
slidePrev=()=>{this.slider.slidePrev();}
```

## slideNext

```
Type:function
slideNext=()=>{this.slider.slideNext();}
```

## goToSlide

```
goToSlide=()=>{this.slider.goToSlide(2);}
```

## onSelect

```
Type:function
Description: callback when active change
```

## leftIcon

```
Type:node
```

## rightIcon

```
Type:node
```
