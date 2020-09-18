/*React_Carousel_Controls.jsx*/
import React from "react";
import { useCallback, useMemo, useState } from "react";

React_Carousel_Controls.defaultProps = {
  dataLength: 0,
  controlsClick: () => {},
  version: 3,
};
function React_Carousel_Controls(props) {
  const { dataLength, version } = props;
  const { rightIcon, leftIcon } = props;
  const [bootstrap] = useState({
    ver_4: {
      leftCss: "left carousel-control-prev",
      rightCss: "right carousel-control-next",
      leftIcon: <i className="icon icon-chevron-left" />,
      rightIcon: <i className="icon icon-chevron-right" />,
    },
    ver_3: {
      leftCss: "left carousel-control",
      rightCss: "right carousel-control",
      leftIcon: <i className="glyphicon glyphicon-chevron-left" />,
      rightIcon: <i className="glyphicon glyphicon-chevron-right" />,
    },
  });
  const _onclick = useCallback((call) => props.controlsClick(call), []);
  const _renderControl = useMemo(() => {
    let icon_left = leftIcon;
    let icon_right = rightIcon;
    let leftCss = "";
    let rightCss = "";
    switch (version) {
      case 4:
        leftCss = bootstrap.ver_4.leftCss;
        rightCss = bootstrap.ver_4.rightCss;
        icon_left = leftIcon || bootstrap.ver_4.leftIcon;
        icon_right = rightIcon || bootstrap.ver_4.rightIcon;
        break;
      default:
        leftCss = bootstrap.ver_3.leftCss;
        rightCss = bootstrap.ver_3.rightCss;
        icon_left = leftIcon || bootstrap.ver_3.leftIcon;
        icon_right = rightIcon || bootstrap.ver_3.rightIcon;
        break;
    }
    return (
      <React.Fragment>
        <a className={leftCss} onClick={_onclick.bind(this, "prev")}>
          <React_FlexSlider_Icon_Left icon={icon_left} />
        </a>
        <a className={rightCss} onClick={_onclick.bind(this, "next")}>
          <React_FlexSlider_Icon_Right icon={icon_right} />
        </a>
      </React.Fragment>
    );
  }, [version, leftIcon, rightIcon]);

  if (dataLength < 2) {
    return null;
  }
  return <div>{_renderControl}</div>;
}

const React_FlexSlider_Icon_Right = React.memo(
  function React_FlexSlider_Icon_Right(props) {
    let { icon } = props;
    return <span className="rightControl">{icon}</span>;
  }
);

const React_FlexSlider_Icon_Left = React.memo(
  function React_FlexSlider_Icon_Left(props) {
    let { icon } = props;
    return <span className="leftControl">{icon}</span>;
  }
);

export { React_FlexSlider_Icon_Right, React_FlexSlider_Icon_Left };
export default React.memo(React_Carousel_Controls);
