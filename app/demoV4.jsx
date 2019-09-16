import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./boostrap-compoent.jsx";
const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

function Demo() {
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _visiableOnSelect = useCallback(active => {
    console.log(`visiable onSelect active=${active}`);
  }, []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []);
  const _changeIcon = useCallback(() => {
    setIcon(({ leftIcon, rightIcon }) => {
      leftIcon = leftIcon ? undefined : icon_glass;
      rightIcon = rightIcon ? undefined : icon_music;
      return { leftIcon, rightIcon };
    });
  }, []);
  const _slidePrev = useCallback(() => slider_ref.current.slidePrev(), []);
  const _slideNext = useCallback(() => slider_ref.current.slideNext(), []);
  const _goToSlide = useCallback(() => slider_ref.current.goToSlide(1), []);

  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }}>
      <Row>
        <Col span={12} style={{ paddingTop: "20px" }}>
          <ButtonGroup>
            <Button bsStyle="primary" onClick={_slidePrev}>
              Slider prev
            </Button>
            <Button bsStyle="primary" onClick={_slideNext}>
              Slider next
            </Button>
            <Button bsStyle="primary" onClick={_goToSlide}>
              Go to slide 2
            </Button>
          </ButtonGroup>
        </Col>
        <Col span={12} style={{ paddingTop: "20px" }}>
          <ButtonGroup>
            <Button bsStyle="primary" onClick={_changeIcon}>
              Change Icon
            </Button>
            <Button bsStyle="primary" onClick={_autoplay}>
              {autoplay ? "Stop Autoplay" : "Start Autoplay"}
            </Button>
          </ButtonGroup>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel
            animation={true}
            autoplay={autoplay}
            slideshowSpeed={2000}
            defaultActiveIndex={0}
            leftIcon={icon.leftIcon}
            rightIcon={icon.rightIcon}
            onSelect={_onSelect}
            ref={slider_ref}
            version={4}
          >
            <div style={{ height: 400 }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://www.w3schools.com/bootstrap/ny.jpg"
              />
              <div className="carousel-caption">Image</div>
            </div>
            <div style={{ ...styles, backgroundColor: "aqua" }}>
              <video
                className="carousel-center"
                controls
                style={{ width: "75%" }}
                height="250"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption">Video</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightpink" }}>
              <div className="carousel-center">center Text</div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <span>text</span>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <div className="carousel-center">
                <iframe
                  style={{ width: 500 }}
                  height="250"
                  src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="carousel-caption">Youtube</div>
            </div>
          </RBCarousel>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel
            autoplay={autoplay}
            pauseOnVisibility={true}
            onSelect={_visiableOnSelect}
            slideshowSpeed={2000}
            version={4}
          >
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <div className="carousel-center">
                <div>This carsouel won't change if invisiable</div>
                <div>pauseOnVisibility = true</div>
              </div>
              <div className="carousel-center"> </div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <div className="carousel-center">
                <div>This carsouel won't change if invisiable</div>
                <div>pauseOnVisibility = true</div>
              </div>
              <div className="carousel-caption">Text</div>
            </div>
          </RBCarousel>
        </Col>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel className="carousel-fade" version={4}>
            <div style={{ ...styles, backgroundColor: "darkcyan" }}>
              <div className="carousel-center">
                This carsouel transition is fade
              </div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
              <span className="carousel-center">
                This carsouel transition is fade
              </span>
              <div className="carousel-caption">Text</div>
            </div>
          </RBCarousel>
        </Col>
      </Row>
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById("Demo"));
