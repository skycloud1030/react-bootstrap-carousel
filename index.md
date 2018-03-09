# react-bootstrap-carousel

[![Travis](https://api.travis-ci.org/skycloud1030/react-bootstrap-carousel.svg?branch=master)](https://travis-ci.org/skycloud1030/react-bootstrap-carousel)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/react-bootstrap-carousel/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/react-bootstrap-carousel?branch=master)
[![Version](https://img.shields.io/npm/v/react-bootstrap-carousel.svg)](https://www.npmjs.com/package/react-bootstrap-carousel)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Donloads](https://img.shields.io/npm/dm/react-bootstrap-carousel.svg)](https://www.npmjs.com/package/react-bootstrap-carousel)

This project support carousel components built with [React](https://github.com/facebook/react).

* [Bootstrap@3.3.7](https://getbootstrap.com/docs/3.3/javascript/#carousel)
* [Bootstrap@4.1](https://getbootstrap.com/docs/4.1/components/carousel/#with-indicators)

## Install

```sh
npm i --save react-bootstrap-carousel
```

## Getting Started

```js
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
```

## Demo

[Bootstrap_V3 demo](https://skycloud1030.github.io/react-bootstrap-carousel/example/demoV3.html)

[Bootstrap_V4 demo](https://skycloud1030.github.io/react-bootstrap-carousel/example/demoV4.html)

## version

Support Bootstrap version 3 || Bootstrap version 4

```
Type:number
Default:3
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
