import React from "react";

const Row = React.memo(function Row(props) {
  return <div className="row">{props.children}</div>;
});

const Col = React.memo(function Col(props) {
  return (
    <div className={`col-sm-${props.span}`} style={props.style}>
      {props.children}
    </div>
  );
});

const Button = React.memo(function Button(props) {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
});

const ButtonGroup = React.memo(function ButtonGroup(props) {
  return <div className="btn-group">{props.children}</div>;
});

/**
 *  Bootstrap Component
 */
export { Row, Button, Col, ButtonGroup };
