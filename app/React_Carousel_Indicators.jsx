/* React_Carousel_Indicators.jsx */
import React from "react";
import { useState, useCallback } from "react";

React_Carousel_Indicators.defaultProps = {
  data: [],
  activeIndex: 0,
  indClick: () => {},
};
function React_Carousel_Indicators(props) {
  const { activeIndex, data } = props;
  const [state] = useState({ css: "carousel-indicators" });
  const _onClick = useCallback(
    (index) => {
      const direction = activeIndex < index ? "next" : "prev";
      props.indClick(index, direction);
    },
    [activeIndex]
  );

  if (!Array.isArray(data)) {
    return null;
  }

  const _row = data.map((_item, index) => {
    const className = index == activeIndex ? "active" : "";
    return (
      <li
        key={index}
        onClick={_onClick.bind(this, index)}
        className={className}
        style={{ marginLeft: 10 }}
      />
    );
  });

  return <ol className={state.css}>{_row}</ol>;
}

export default React.memo(React_Carousel_Indicators);
