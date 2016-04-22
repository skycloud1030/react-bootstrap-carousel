(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("react-bootstrap-carousel", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-bootstrap-carousel"] = factory(require("react"), require("react-dom"));
	else
		root["react-bootstrap-carousel"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _React_Bootstrap_Carousel = __webpack_require__(1);

	Object.defineProperty(exports, 'React_Bootstrap_Carousel', {
	  enumerable: true,
	  get: function get() {
	    return _React_Bootstrap_Carousel.React_Bootstrap_Carousel;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.React_Bootstrap_Carousel = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _React_Carousel_Indicators = __webpack_require__(5);

	var _React_Carousel_Controls = __webpack_require__(6);

	var _React_Carousel_Item = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* React_Boostrap_Carousel.jsx*/


	var React_Bootstrap_Carousel = exports.React_Bootstrap_Carousel = function (_React$Component) {
	  _inherits(React_Bootstrap_Carousel, _React$Component);

	  function React_Bootstrap_Carousel(props) {
	    _classCallCheck(this, React_Bootstrap_Carousel);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(React_Bootstrap_Carousel).call(this, props));

	    _this._next = function () {
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
	      _this.setState({ activeIndex: index });
	    };

	    _this._prev = function () {
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
	      _this.setState({ activeIndex: index });
	    };

	    _this._handleMouseOver = function () {
	      _this._pause();
	    };

	    _this._handleMouseOut = function () {
	      if (_this.isPaused) {
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

	    _this._indClick = function (index) {
	      clearTimeout(_this.timeout);
	      var activeIndex = _this.state.activeIndex;

	      _this.setState({ activeIndex: index });
	      _this.isPaused = false;
	    };

	    _this._controlsClick = function (call) {
	      clearTimeout(_this.timeout);
	      _this.isPaused = false;
	      if (call == "prev") {
	        _this._prev();
	      } else {
	        _this._next();
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
	    value: function componentDidUpdate() {
	      if (this.props.children.length > 0) {
	        this._pause();
	        this._play();
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.children.length > 0) {
	        this._pause();
	        this._play();
	      }
	    }
	  }, {
	    key: '_waitForNext',
	    value: function _waitForNext() {
	      if (!this.isPaused && this.props.activeIndex == null) {
	        this.timeout = setTimeout(this._next, this.props.slideshowSpeed);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var indicators = _props.indicators;
	      var controls = _props.controls;
	      var slideshowSpeed = _props.slideshowSpeed;
	      var leftImage = _props.leftImage;
	      var rightImage = _props.rightImage;
	      var _state = this.state;
	      var activeIndex = _state.activeIndex;
	      var direction = _state.direction;
	      var className = _state.className;
	      var animation = _state.animation;

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(className),
	          onMouseOver: this._handleMouseOver,
	          onMouseOut: this._handleMouseOut
	        },
	        this.props.indicators ? _react2.default.createElement(_React_Carousel_Indicators.React_Carousel_Indicators, { data: children, activeIndex: activeIndex, indClick: this._indClick }) : null,
	        _react2.default.createElement(_React_Carousel_Item.React_Carousel_Item, { animation: animation, direction: direction, data: children, activeIndex: activeIndex }),
	        this.props.controls ? _react2.default.createElement(_React_Carousel_Controls.React_Carousel_Controls, { dataLength: children.length, leftImage: leftImage, rightImage: rightImage, prev: this._prev, next: this._next, controlsClick: this._controlsClick }) : null
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
	  children: [],
	  animation: true,
	  className: ""

	};
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.React_Carousel_Indicators = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* React_Carousel_Indicators.jsx */


	var React_Carousel_Indicators = exports.React_Carousel_Indicators = function (_React$Component) {
	  _inherits(React_Carousel_Indicators, _React$Component);

	  function React_Carousel_Indicators(props) {
	    _classCallCheck(this, React_Carousel_Indicators);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(React_Carousel_Indicators).call(this, props));

	    _this._onClick = function (index) {
	      if (typeof _this.props.indClick == "function") {
	        _this.props.indClick(index);
	      }
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

	      var _props = this.props;
	      var data = _props.data;
	      var activeIndex = _props.activeIndex;

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
	  activeIndex: 0
	};
	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.React_FlexSlider_Icon_Left = exports.React_FlexSlider_Icon_Right = exports.React_Carousel_Controls = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React_Carousel_Controls.jsx*/


	var React_Carousel_Controls = exports.React_Carousel_Controls = function (_React$Component) {
	  _inherits(React_Carousel_Controls, _React$Component);

	  function React_Carousel_Controls(props) {
	    _classCallCheck(this, React_Carousel_Controls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(React_Carousel_Controls).call(this, props));

	    _this._onclick = function (call) {
	      if (typeof _this.props.controlsClick == "function") {
	        _this.props.controlsClick(call);
	      }
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
	      var _props = this.props;
	      var rightImage = _props.rightImage;
	      var leftImage = _props.leftImage;
	      var dataLength = _props.dataLength;

	      if (dataLength < 2) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { className: this.state.leftCss, onClick: this._onclick.bind(this, "prev") },
	          _react2.default.createElement(React_FlexSlider_Icon_Left, { image: leftImage })
	        ),
	        _react2.default.createElement(
	          'a',
	          { className: this.state.rightCss, onClick: this._onclick.bind(this, "next") },
	          _react2.default.createElement(React_FlexSlider_Icon_Right, { image: rightImage })
	        )
	      );
	    }
	  }]);

	  return React_Carousel_Controls;
	}(_react2.default.Component);

	React_Carousel_Controls.defaultProps = {
	  dataLength: 0
	};
	;

	var React_FlexSlider_Icon_Right = exports.React_FlexSlider_Icon_Right = function (_React$Component2) {
	  _inherits(React_FlexSlider_Icon_Right, _React$Component2);

	  function React_FlexSlider_Icon_Right(props) {
	    _classCallCheck(this, React_FlexSlider_Icon_Right);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(React_FlexSlider_Icon_Right).call(this, props));
	  }

	  _createClass(React_FlexSlider_Icon_Right, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var image = _props2.image;
	      var style = _props2.style;
	      var css = _props2.css;

	      if (image) {
	        return _react2.default.createElement('img', { className: 'rightControl', src: image });
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(React_FlexSlider_Icon_Left).call(this, props));
	  }

	  _createClass(React_FlexSlider_Icon_Left, [{
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var image = _props3.image;
	      var style = _props3.style;
	      var css = _props3.css;


	      if (image) {
	        return _react2.default.createElement('img', { className: 'leftControl', src: image });
	      } else {
	        return _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' });
	      }
	    }
	  }]);

	  return React_FlexSlider_Icon_Left;
	}(_react2.default.Component);

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.React_Carousel_Item = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React_Carousel_Item.jsx*/


	var React_Carousel_Item = exports.React_Carousel_Item = function (_React$Component) {
	  _inherits(React_Carousel_Item, _React$Component);

	  function React_Carousel_Item(props) {
	    _classCallCheck(this, React_Carousel_Item);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(React_Carousel_Item).call(this, props));
	  }

	  _createClass(React_Carousel_Item, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var activeIndex = _props.activeIndex;
	      var css = _props.css;
	      var direction = _props.direction;
	      var animation = _props.animation;

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

/***/ }
/******/ ])
});
;