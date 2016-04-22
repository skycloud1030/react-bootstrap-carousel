# react-bootstrap-carousel
A carousel component for react (with bootstrap).
This project is a react port of: [react-bootstrap](http://react-bootstrap.github.io/components.html#carousels)

## Install
```
npm i --save react-bootstrap-carousel
```

## Getting Started
```
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-boostrap-carousel/css/bootstrap.min.css';
import 'react-boostrap-carousel/css/react-bootstrap-carousel.css';
```
## Demo
[fade](http://skycloud1030.github.io/react-bootstrap-carousel/example/react_bootstrap_carousel.html)
```
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-boostrap-carousel/css/bootstrap.min.css';
import 'react-boostrap-carousel/css/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';


class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return(
        <div style={{height:300,margin:20}}>
          <React_Bootstrap_Carousel animation={true} className="carousel-fade">
            <div style={{height:300,width:"100%",backgroundColor:"skyblue"}}>
              123
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"aqua"}}>
              456
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"lightpink"}}>
              789
            </div>
          </React_Bootstrap_Carousel>
        </div>
      )
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
## leftImage
```
Type:string
Default:
Description: the image src
```
## rightImage
```
Type:string
Default:
Description: the image src
```
