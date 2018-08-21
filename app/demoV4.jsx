import React from "react";
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

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
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
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
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <Row>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <div className="btn-group">
              <Button bsStyle="primary" onClick={this._changeIcon}>
                Change Icon
              </Button>
              <Button bsStyle="primary" onClick={this.slidePrev}>
                Slider prev
              </Button>
              <Button bsStyle="primary" onClick={this.slideNext}>
                Slider next
              </Button>
              <Button bsStyle="primary" onClick={this.goToSlide}>
                Go to slide 4
              </Button>
              <Button bsStyle="primary" onClick={this.autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </Button>
            </div>
          </Col>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
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
                <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
              <div style={{ height: 400, width: "100%", backgroundColor: "lightpink" }}>
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
              version={4}
              autoplay={this.state.autoplay}
              pauseOnVisibility={true}
              onSelect={this.visiableOnSelect}
              slideshowSpeed={2000}
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
          <Col span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel version={4} className="carousel-fade">
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">This carsouel transition is fade</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">This carsouel transition is fade</span>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

ReactDOM.render(<Demo />, document.getElementById("Demo"));
