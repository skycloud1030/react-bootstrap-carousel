import React from "react";
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="fa fa-glass" />,
        rightIcon: <span className="fa fa-music" />
      });
    }
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 20 }}>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this._changeIcon}
              >
                Change Icon
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.slidePrev}
              >
                Slider prev
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.slideNext}
              >
                Slider next
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.goToSlide}
              >
                Go to slide 4
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.autoplay}
              >
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </button>
            </div>
          </div>
          <div className="col-md-12" style={{ marginTop: 20 }}>
            <React_Bootstrap_Carousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={7000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
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
              <div
                style={{
                  height: 400,
                  width: "100%",
                  backgroundColor: "lightpink"
                }}
              >
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
            </React_Bootstrap_Carousel>
          </div>
          <div className="col-md-12" style={{ marginTop: 20 }}>
            <React_Bootstrap_Carousel version={4} className="carousel-fade">
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
            </React_Bootstrap_Carousel>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("Demo"));
