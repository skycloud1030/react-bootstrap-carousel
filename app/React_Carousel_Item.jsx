/*React_Carousel_Item.jsx*/
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class React_Carousel_Item extends React.Component{
  static defaultProps={
    data:[],
    activeIndex:0,
    direction:null,
    css:"item"
  }
  constructor(props){
    super(props);
  }
  render(){
    let {data,activeIndex,css,direction,animation}=this.props;
    let row=data.map((item,index)=>{
      let position;
      if(index>activeIndex && animation===true){
        position="right";
        direction="next";
      }
      else if(index<activeIndex &&animation===true){
        position="left";
        direction="prev";
      }
      let className=classNames(css,direction,position);

      if(index==activeIndex){
        className=classNames(css,"active");
      }
      return (
        <div key={index} className={className}>
          {item}
        </div>
      );
    });
    return(
      <div className="carousel-inner" role="listbox">
        {row}
      </div>
    )
  }
};
