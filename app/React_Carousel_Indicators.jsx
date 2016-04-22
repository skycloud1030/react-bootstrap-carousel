/* React_Carousel_Indicators.jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class React_Carousel_Indicators extends React.Component{
  static defaultProps={
    data:[],
    activeIndex:0,
  }
  constructor(props){
    super(props);
    this.state={
      css:"carousel-indicators",
    }
  }
  _onClick=(index)=>{
    if(typeof this.props.indClick=="function"){
      this.props.indClick(index);
    }
  }
  render(){
    let {data,activeIndex}=this.props;
    let row=data.map((item,index)=>{
      let className;
      if(index==activeIndex){
        className="active";
      }
      else{
        className="";
      }
      return (
        <li key={index} onClick={this._onClick.bind(this,index)} className={className} style={{marginLeft:10}}></li>
      );
    });
    return(
      <ol className={this.state.css}>
        {row}
      </ol>
    )
  }
};
