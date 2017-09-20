import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div style={{height:300,margin:20}}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:300,width:"100%",backgroundColor:"skyblue"}}>
              123
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"aqua"}}>
              <video style={{width:"80%",height:250,margin:"0 auto",display:"block"}} controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
              </video>
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
