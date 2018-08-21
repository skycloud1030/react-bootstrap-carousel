import React from "react";
import PropTypes from "prop-types";

export default class BaseComponent extends React.PureComponent {
  static propTypes = {
    init: PropTypes.func,
    unmount: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.isUnmounted = false;
  }
  safeSetState = args => {
    !this.isUnmount && this.setState(args);
  };
  componentDidMount() {
    window.addEventListener("beforeunload", this.unmount);
    window.addEventListener("visibilitychange", this.visibilitychange);
    typeof this.init === "function" && this.init();
  }
  componentWillUnmount() {
    this.isUnmount = true;
    typeof this.unmount === "function" && this.unmount();
    window.removeEventListener("beforeunload", this.unmount);
    window.removeEventListener("visibilitychange", this.visibilitychange);
  }
  render() {
    return <div>The Base Component</div>;
  }
}
