(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("ReactBootstrap_Carousel", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap_Carousel"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap_Carousel"] = factory(root["react"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React_Bootstrap_Carousel = __webpack_require__(4);

Object.defineProperty(exports, 'React_Bootstrap_Carousel', {
  enumerable: true,
  get: function get() {
    return _React_Bootstrap_Carousel.React_Bootstrap_Carousel;
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.React_Bootstrap_Carousel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _React_Carousel_Indicators = __webpack_require__(5);

var _React_Carousel_Controls = __webpack_require__(6);

var _React_Carousel_Item = __webpack_require__(7);

var _shallowequal = __webpack_require__(8);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* React_Bootstrap_Carousel.jsx*/
var React_Bootstrap_Carousel = exports.React_Bootstrap_Carousel = function (_React$Component) {
  _inherits(React_Bootstrap_Carousel, _React$Component);

  function React_Bootstrap_Carousel(props) {
    _classCallCheck(this, React_Bootstrap_Carousel);

    var _this = _possibleConstructorReturn(this, (React_Bootstrap_Carousel.__proto__ || Object.getPrototypeOf(React_Bootstrap_Carousel)).call(this, props));

    _this._autoPlay = function () {
      _this._pause();
      _this.props.autoplay && _this._play();
    };

    _this.slideNext = function () {
      var activeIndex = _this.state.activeIndex;

      var prevIndex = activeIndex;
      var wrap = _this.props.wrap;

      var count = _this.props.children.length;
      var index = activeIndex + 1;
      if (index > count - 1) {
        if (!wrap) {
          return;
        }
        index = 0;
      }
      _this.setState({ activeIndex: index, direction: "next" });
    };

    _this.goToSlide = function (activeIndex) {
      clearTimeout(_this.timeout);
      _this.setState({ activeIndex: activeIndex });
    };

    _this.slidePrev = function () {
      var activeIndex = _this.state.activeIndex;

      var prevIndex = activeIndex;
      var wrap = _this.props.wrap;

      var index = activeIndex - 1;
      var count = _this.props.children.length;
      if (index < 0) {
        if (!wrap) {
          return;
        }
        index = count - 1;
      }
      _this.setState({ activeIndex: index, direction: "prev" });
    };

    _this._handleMouseOver = function () {
      _this._pause();
    };

    _this._handleMouseOut = function () {
      if (_this.isPaused && _this.props.autoplay) {
        _this._play();
      }
    };

    _this._pause = function () {
      _this.isPaused = true;
      clearTimeout(_this.timeout);
    };

    _this._play = function () {
      _this.isPaused = false;
      _this._waitForNext();
    };

    _this._indClick = function (index, direction) {
      clearTimeout(_this.timeout);
      var activeIndex = _this.state.activeIndex;

      _this.setState({ activeIndex: index, direction: direction });
      _this.isPaused = false;
    };

    _this._controlsClick = function (call) {
      clearTimeout(_this.timeout);
      _this.isPaused = false;
      if (call == "prev") {
        _this.slidePrev();
      } else {
        _this.slideNext();
      }
    };

    _this.render_ind = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          indicators = _this$props.indicators;
      var activeIndex = _this.state.activeIndex;

      if (indicators) {
        return _react2.default.createElement(_React_Carousel_Indicators.React_Carousel_Indicators, { data: children, activeIndex: activeIndex, indClick: _this._indClick });
      }
    };

    _this.render_control = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          controls = _this$props2.controls,
          leftIcon = _this$props2.leftIcon,
          rightIcon = _this$props2.rightIcon;

      if (controls) {
        return _react2.default.createElement(_React_Carousel_Controls.React_Carousel_Controls, { dataLength: children.length, leftIcon: leftIcon, rightIcon: rightIcon, prev: _this.slidePrev, next: _this.slideNext, controlsClick: _this._controlsClick });
      }
    };

    _this.state = {
      activeIndex: _this.props.defaultActiveIndex,
      className: (0, _classnames2.default)("carousel slide", _this.props.className),
      animation: _this.props.animation
    };
    return _this;
  }

  _createClass(React_Bootstrap_Carousel, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.children.length > 0) {
        this._autoPlay();
      }
      if (!(0, _shallowequal2.default)(prevProps.autoplay, this.props.autoplay)) {
        this._autoPlay();
      }
      if (!(0, _shallowequal2.default)(prevState.activeIndex, this.state.activeIndex)) {
        var _state = this.state,
            direction = _state.direction,
            activeIndex = _state.activeIndex;

        this.props.onSelect(activeIndex, direction);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.children.length > 0) {
        this._autoPlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timeout && clearTimeout(this.timeout);
    }
  }, {
    key: '_waitForNext',
    value: function _waitForNext() {
      if (!this.isPaused && this.props.activeIndex == null) {
        this.timeout = setTimeout(this.slideNext, this.props.slideshowSpeed);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          activeIndex = _state2.activeIndex,
          className = _state2.className,
          animation = _state2.animation;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className),
          onMouseOver: this._handleMouseOver,
          onMouseOut: this._handleMouseOut
        },
        this.render_ind(),
        _react2.default.createElement(_React_Carousel_Item.React_Carousel_Item, { animation: animation, data: children, activeIndex: activeIndex }),
        this.render_control()
      );
    }
  }]);

  return React_Bootstrap_Carousel;
}(_react2.default.Component);

React_Bootstrap_Carousel.defaultProps = {
  indicators: true,
  controls: true,
  slideshowSpeed: 7000,
  defaultActiveIndex: 0,
  wrap: true,
  autoplay: true,
  children: [],
  animation: true,
  className: "",
  onSelect: function onSelect() {}
};
;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.React_Carousel_Indicators = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* React_Carousel_Indicators.jsx */


var React_Carousel_Indicators = exports.React_Carousel_Indicators = function (_React$Component) {
  _inherits(React_Carousel_Indicators, _React$Component);

  function React_Carousel_Indicators(props) {
    _classCallCheck(this, React_Carousel_Indicators);

    var _this = _possibleConstructorReturn(this, (React_Carousel_Indicators.__proto__ || Object.getPrototypeOf(React_Carousel_Indicators)).call(this, props));

    _this._onClick = function (index) {
      var activeIndex = _this.props.activeIndex;

      var direction = "";
      if (activeIndex < index) {
        direction = "next";
      } else {
        direction = "prev";
      }
      _this.props.indClick(index, direction);
    };

    _this.state = {
      css: "carousel-indicators"
    };
    return _this;
  }

  _createClass(React_Carousel_Indicators, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          activeIndex = _props.activeIndex;

      var row = data.map(function (item, index) {
        var className = void 0;
        if (index == activeIndex) {
          className = "active";
        } else {
          className = "";
        }
        return _react2.default.createElement('li', { key: index, onClick: _this2._onClick.bind(_this2, index), className: className, style: { marginLeft: 10 } });
      });
      return _react2.default.createElement(
        'ol',
        { className: this.state.css },
        row
      );
    }
  }]);

  return React_Carousel_Indicators;
}(_react2.default.Component);

React_Carousel_Indicators.defaultProps = {
  data: [],
  activeIndex: 0,
  indClick: function indClick() {}
};
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.React_FlexSlider_Icon_Left = exports.React_FlexSlider_Icon_Right = exports.React_Carousel_Controls = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React_Carousel_Controls.jsx*/


var React_Carousel_Controls = exports.React_Carousel_Controls = function (_React$Component) {
  _inherits(React_Carousel_Controls, _React$Component);

  function React_Carousel_Controls(props) {
    _classCallCheck(this, React_Carousel_Controls);

    var _this = _possibleConstructorReturn(this, (React_Carousel_Controls.__proto__ || Object.getPrototypeOf(React_Carousel_Controls)).call(this, props));

    _this._onclick = function (call) {
      _this.props.controlsClick(call);
    };

    _this.state = {
      leftCss: "left carousel-control",
      rightCss: "right carousel-control"
    };
    return _this;
  }

  _createClass(React_Carousel_Controls, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rightIcon = _props.rightIcon,
          leftIcon = _props.leftIcon,
          dataLength = _props.dataLength;

      if (dataLength < 2) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: this.state.leftCss, onClick: this._onclick.bind(this, "prev") },
          _react2.default.createElement(React_FlexSlider_Icon_Left, { icon: leftIcon })
        ),
        _react2.default.createElement(
          'a',
          { className: this.state.rightCss, onClick: this._onclick.bind(this, "next") },
          _react2.default.createElement(React_FlexSlider_Icon_Right, { icon: rightIcon })
        )
      );
    }
  }]);

  return React_Carousel_Controls;
}(_react2.default.Component);

React_Carousel_Controls.defaultProps = {
  dataLength: 0,
  controlsClick: function controlsClick() {}
};
;

var React_FlexSlider_Icon_Right = exports.React_FlexSlider_Icon_Right = function (_React$Component2) {
  _inherits(React_FlexSlider_Icon_Right, _React$Component2);

  function React_FlexSlider_Icon_Right(props) {
    _classCallCheck(this, React_FlexSlider_Icon_Right);

    return _possibleConstructorReturn(this, (React_FlexSlider_Icon_Right.__proto__ || Object.getPrototypeOf(React_FlexSlider_Icon_Right)).call(this, props));
  }

  _createClass(React_FlexSlider_Icon_Right, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          icon = _props2.icon,
          style = _props2.style,
          css = _props2.css;

      if (this.props.icon) {
        return _react2.default.createElement(
          'span',
          { className: 'rightControl' },
          icon
        );
      } else {
        return _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' });
      }
    }
  }]);

  return React_FlexSlider_Icon_Right;
}(_react2.default.Component);

;

var React_FlexSlider_Icon_Left = exports.React_FlexSlider_Icon_Left = function (_React$Component3) {
  _inherits(React_FlexSlider_Icon_Left, _React$Component3);

  function React_FlexSlider_Icon_Left(props) {
    _classCallCheck(this, React_FlexSlider_Icon_Left);

    return _possibleConstructorReturn(this, (React_FlexSlider_Icon_Left.__proto__ || Object.getPrototypeOf(React_FlexSlider_Icon_Left)).call(this, props));
  }

  _createClass(React_FlexSlider_Icon_Left, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          icon = _props3.icon,
          style = _props3.style,
          css = _props3.css;

      if (this.props.icon) {
        return _react2.default.createElement(
          'span',
          { className: 'leftControl' },
          icon
        );
      } else {
        return _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' });
      }
    }
  }]);

  return React_FlexSlider_Icon_Left;
}(_react2.default.Component);

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.React_Carousel_Item = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React_Carousel_Item.jsx*/


var React_Carousel_Item = exports.React_Carousel_Item = function (_React$Component) {
  _inherits(React_Carousel_Item, _React$Component);

  function React_Carousel_Item(props) {
    _classCallCheck(this, React_Carousel_Item);

    return _possibleConstructorReturn(this, (React_Carousel_Item.__proto__ || Object.getPrototypeOf(React_Carousel_Item)).call(this, props));
  }

  _createClass(React_Carousel_Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          activeIndex = _props.activeIndex,
          css = _props.css,
          direction = _props.direction,
          animation = _props.animation;

      var row = data.map(function (item, index) {
        var position = void 0;
        if (index > activeIndex && animation === true) {
          position = "right";
          direction = "next";
        } else if (index < activeIndex && animation === true) {
          position = "left";
          direction = "prev";
        }
        var className = (0, _classnames2.default)(css, direction, position);

        if (index == activeIndex) {
          className = (0, _classnames2.default)(css, "active");
        }
        return _react2.default.createElement(
          'div',
          { key: index, className: className },
          item
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'carousel-inner', role: 'listbox' },
        row
      );
    }
  }]);

  return React_Carousel_Item;
}(_react2.default.Component);

React_Carousel_Item.defaultProps = {
  data: [],
  activeIndex: 0,
  direction: null,
  css: "item"
};
;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ })
/******/ ]);
});