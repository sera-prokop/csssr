/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/components/level/level.js":
/*!******************************************!*\
  !*** ./markup/components/level/level.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

var windowWidth = window.innerWidth || document.body.clientWidth;
var values = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать', 'Пишу сложный JS с нуля'];
var slider = document.querySelector('.level__slider');
var input = document.querySelector('.level__input');
var options = {
  start: 1,
  snap: true,
  behaviour: 'drag',
  orientation: windowWidth < 768 ? 'vertical' : 'horizontal',
  range: windowWidth < 768 ? {
    min: 0,
    '33.3%': 1,
    '66.7%%': 2,
    max: 3
  } : {
    min: 0,
    '18.6%': 1,
    '49.4%': 2,
    max: 3
  },
  pips: {
    mode: 'steps',
    density: 500
  }
};

var addClassName = function addClassName(elem, className) {
  elem.className += " ".concat(className);
};

var changePimps = function changePimps(sliderNode, vals) {
  var valNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-value'));
  var pipNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-marker'));
  var firstPipNode = pipNodes[0];
  var lastPipNode = pipNodes[pipNodes.length - 1];
  addClassName(firstPipNode, 'noUi-first-pip');
  addClassName(lastPipNode, 'noUi-last-pip');
  return valNodes.map(function (node, index) {
    node.innerHTML = vals[index];
    node.addEventListener('click', function () {
      slider.noUiSlider.set(index);
      input.value = index;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(slider, options); // slider.noUiSlider.set(input.value);

  changePimps(slider, values);
});

/***/ }),

/***/ "./markup/components/textarea/textarea.js":
/*!************************************************!*\
  !*** ./markup/components/textarea/textarea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  autosize__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('textarea'));
});

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_textarea_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/textarea/textarea */ "./markup/components/textarea/textarea.js");
/* harmony import */ var components_level_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/level/level */ "./markup/components/level/level.js");

/*
    This file can be used as entry point for webpack!
 */



window.addEventListener('load', function () {
  // slider();
  Object(components_textarea_textarea__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(components_level_level__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 13.1.5 - 4/24/2019 */
(function(factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function() {
    "use strict";

    var VERSION = "13.1.5";

    //region Helper Methods

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup"
              }
            : window.navigator.msPointerEnabled
                ? {
                      start: "MSPointerDown",
                      move: "MSPointerMove",
                      end: "MSPointerUp"
                  }
                : {
                      start: "mousedown touchstart",
                      move: "mousemove touchmove",
                      end: "mouseup touchend"
                  };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {}
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    //endregion

    //region Range Calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value) {
        return (value * 100) / (range[1] - range[0]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }

        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];

            return;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    //endregion

    //region Spectrum

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function(a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function(a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getMargin = function(value) {
        var step = this.xNumSteps[0];

        if (step && (value / step) % 1 !== 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        }

        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
    };

    Spectrum.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
        var j = getJ(value, this.xPct);

        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }

        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
    };

    //endregion

    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    var defaultFormatter = {
        to: function(value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getMargin(entry);

        if (!parsed.margin) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
        }
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getMargin(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getMargin' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

        if (parsed.padding[0] === false || parsed.padding[1] === false) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
        }

        if (parsed.padding[0] < 0 || parsed.padding[1] < 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
        }

        if (parsed.padding[0] + parsed.padding[1] > 100) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                touchArea: "touch-area",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function(name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    //endregion

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'

        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;

        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};

        // Exposed API
        var scope_Self;

        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            addNodeTo(handle, options.cssClasses.touchArea);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function(event) {
                    return eventKeydown(event, handleNumber);
                });
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }

        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function(tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();

            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);

            bindEvent("update.tooltips", function(values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function(value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function(a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function(current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function(checkTouch) {
                    return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(proposal) {
            var closest = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }

                var pos = Math.abs(scope_Locations[index] - proposal);

                if (pos < closest || (pos === 100 && closest === 100)) {
                    handleNumber = index;
                    closest = pos;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }

            var handle;

            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }

            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];

            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            } else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
            }

            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0];
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1];

            if (!isDown && !isUp) {
                return true;
            }

            event.preventDefault();

            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];

            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }

            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, 10);
            }

            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);

            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;

            valueSetHandle(handleNumber, scope_Values[handleNumber] + step, true);

            return false;
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function(handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function(a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function(targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice()
                        );
                    });
                }
            });
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.max(to, reference[handleNumber - 1] + options.margin);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.min(to, reference[handleNumber + 1] - options.margin);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.min(to, reference[handleNumber - 1] + options.limit);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.max(to, reference[handleNumber + 1] - options.limit);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    to = Math.max(to, options.padding[0]);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    to = Math.min(to, 100 - options.padding[1]);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var rule = "translate(" + inRuleOrder(transformDirection(to, 0) - scope_DirOffset + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = rule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            // Second pass. Now that all base values are set, apply constraints
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true);
            });

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true);

            fireEvent("update", handleNumber);

            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;

            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }

            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }

            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            } else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }

            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }

            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            } else if (location === 0) {
                decrement = null;
            }

            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();

            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }

            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }

            return [decrement, increment];
        }

        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            } else {
                removePips();
            }

            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            } else {
                removeTooltips();
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);

            addElements(options.connect, scope_Base);

            // Attach user events.
            bindSliderEvents(options.events);

            // Use the public value method to set the start values.
            valueSet(options.start);

            if (options.pips) {
                pips(options.pips);
            }

            if (options.tooltips) {
                tooltips();
            }

            aria();
        }

        setupSlider();

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            removeTooltips: removeTooltips,
            pips: pips // Issue #594
        };

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        create: initialize
    };
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvbGV2ZWwvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvdGV4dGFyZWEvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdXRvc2l6ZS9kaXN0L2F1dG9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3RyaWJ1dGUvbm91aXNsaWRlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInZhbHVlcyIsInNsaWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsIm9wdGlvbnMiLCJzdGFydCIsInNuYXAiLCJiZWhhdmlvdXIiLCJvcmllbnRhdGlvbiIsInJhbmdlIiwibWluIiwibWF4IiwicGlwcyIsIm1vZGUiLCJkZW5zaXR5IiwiYWRkQ2xhc3NOYW1lIiwiZWxlbSIsImNsYXNzTmFtZSIsImNoYW5nZVBpbXBzIiwic2xpZGVyTm9kZSIsInZhbHMiLCJ2YWxOb2RlcyIsInNsaWNlIiwiYXBwbHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGlwTm9kZXMiLCJmaXJzdFBpcE5vZGUiLCJsYXN0UGlwTm9kZSIsImxlbmd0aCIsIm1hcCIsIm5vZGUiLCJpbmRleCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJub1VpU2xpZGVyIiwic2V0IiwidmFsdWUiLCJjcmVhdGUiLCJhdXRvc2l6ZSIsInRleHRBcmVhIiwibGV2ZWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQkMsUUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQXZEO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLENBQ1gsV0FEVyxFQUVYLDJCQUZXLEVBR1gsa0RBSFcsRUFJWCx3QkFKVyxDQUFmO0FBT0EsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixlQUF2QixDQUFkO0FBQ0EsSUFBSUUsT0FBTyxHQUFHO0FBQ1ZDLE9BQUssRUFBRSxDQURHO0FBRVZDLE1BQUksRUFBRSxJQUZJO0FBR1ZDLFdBQVMsRUFBRSxNQUhEO0FBSVZDLGFBQVcsRUFBRWQsV0FBVyxHQUFHLEdBQWQsR0FBb0IsVUFBcEIsR0FBaUMsWUFKcEM7QUFLVmUsT0FBSyxFQUFFZixXQUFXLEdBQUcsR0FBZCxHQUFvQjtBQUN2QmdCLE9BQUcsRUFBRSxDQURrQjtBQUV2QixhQUFTLENBRmM7QUFHdkIsY0FBVSxDQUhhO0FBSXZCQyxPQUFHLEVBQUU7QUFKa0IsR0FBcEIsR0FLSDtBQUNBRCxPQUFHLEVBQUUsQ0FETDtBQUVBLGFBQVMsQ0FGVDtBQUdBLGFBQVMsQ0FIVDtBQUlBQyxPQUFHLEVBQUU7QUFKTCxHQVZNO0FBZ0JWQyxNQUFJLEVBQUU7QUFDRkMsUUFBSSxFQUFFLE9BREo7QUFFRkMsV0FBTyxFQUFFO0FBRlA7QUFoQkksQ0FBZDs7QUFzQkEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxTQUFQLEVBQXFCO0FBQ3RDRCxNQUFJLENBQUNDLFNBQUwsZUFBc0JBLFNBQXRCO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWFDLElBQWIsRUFBc0I7QUFDdEMsTUFBTUMsUUFBUSxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsS0FBVCxDQUFlSixVQUFVLENBQUNLLGdCQUFYLENBQTRCLGFBQTVCLENBQWYsQ0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsR0FBR0gsS0FBSCxDQUFTQyxLQUFULENBQWVKLFVBQVUsQ0FBQ0ssZ0JBQVgsQ0FBNEIsY0FBNUIsQ0FBZixDQUFqQjtBQUNBLE1BQU1FLFlBQVksR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBN0I7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQW5CLENBQTVCO0FBRUFiLGNBQVksQ0FBQ1csWUFBRCxFQUFlLGdCQUFmLENBQVo7QUFDQVgsY0FBWSxDQUFDWSxXQUFELEVBQWMsZUFBZCxDQUFaO0FBRUEsU0FBT04sUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2pDRCxRQUFJLENBQUNFLFNBQUwsR0FBaUJaLElBQUksQ0FBQ1csS0FBRCxDQUFyQjtBQUNBRCxRQUFJLENBQUNHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakNoQyxZQUFNLENBQUNpQyxVQUFQLENBQWtCQyxHQUFsQixDQUFzQkosS0FBdEI7QUFDQTVCLFdBQUssQ0FBQ2lDLEtBQU4sR0FBY0wsS0FBZDtBQUNILEtBSEQ7QUFJSCxHQU5NLENBQVA7QUFPSCxDQWhCRDs7QUFrQmUsMkVBQU07QUFDakJHLG1EQUFVLENBQUNHLE1BQVgsQ0FBa0JwQyxNQUFsQixFQUEwQkcsT0FBMUIsRUFEaUIsQ0FFakI7O0FBQ0FjLGFBQVcsQ0FBQ2pCLE1BQUQsRUFBU0QsTUFBVCxDQUFYO0FBQ0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFFZSwyRUFBTTtBQUNqQnNDLGlEQUFRLENBQUN6QyxRQUFRLENBQUMyQixnQkFBVCxDQUEwQixVQUExQixDQUFELENBQVI7QUFDSCxDQUZELEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFhO0FBRWI7Ozs7QUFJQTtBQUNBO0FBRUE3QixNQUFNLENBQUNzQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ2xDO0FBQ0FNLDhFQUFRO0FBQ1JDLHdFQUFLO0FBQ1IsQ0FKRCxFOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxpQ0FBTyxDQUFDLE1BQVEsRUFBRSxPQUFTLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN4QyxFQUFFLE1BQU0sWUFRTjtBQUNGLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQy9SRDtBQUNBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQzNCLEtBQUssTUFBTSxFQU1OO0FBQ0wsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDLG9CQUFvQix3QkFBd0I7QUFDNUMsc0JBQXNCLDBCQUEwQjtBQUNoRCx3QkFBd0IsNEJBQTRCO0FBQ3BELG1CQUFtQix3QkFBd0I7QUFDM0Msc0JBQXNCLDJCQUEyQjtBQUNqRCxnQ0FBZ0MscUNBQXFDO0FBQ3JFLG9CQUFvQix3QkFBd0I7QUFDNUMsMEJBQTBCLCtCQUErQjtBQUN6RCxxQkFBcUIsMEJBQTBCO0FBQy9DLG9CQUFvQix5QkFBeUI7QUFDN0Msc0JBQXNCLDJCQUEyQjtBQUNqRCx3QkFBd0IsNEJBQTRCO0FBQ3BELHlCQUF5Qiw4QkFBOEI7QUFDdkQscUJBQXFCLDBCQUEwQjtBQUMvQyx1QkFBdUIsNEJBQTRCO0FBQ25ELDhCQUE4QixrQ0FBa0M7QUFDaEUsOEJBQThCLG1DQUFtQztBQUNqRSx3QkFBd0IsNEJBQTRCO0FBQ3BELHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtFQUErRSxnQkFBZ0I7QUFDL0Y7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanNcIik7XG4iLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuY29uc3QgdmFsdWVzID0gW1xuICAgICfQndC1INCy0LvQsNC00LXRjicsXG4gICAgJ9CY0YHQv9C+0LvRjNC30YPRjiDQs9C+0YLQvtCy0YvQtSDRgNC10YjQtdC90LjRjycsXG4gICAgJ9CY0YHQv9C+0LvRjNC30YPRjiDQs9C+0YLQvtCy0YvQtSDRgNC10YjQtdC90LjRjyDQuCDRg9C80LXRjiDQuNGFINC/0LXRgNC10LTQtdC70YvQstCw0YLRjCcsXG4gICAgJ9Cf0LjRiNGDINGB0LvQvtC20L3Ri9C5IEpTINGBINC90YPQu9GPJ1xuXTtcblxuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsX19zbGlkZXInKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsX19pbnB1dCcpO1xubGV0IG9wdGlvbnMgPSB7XG4gICAgc3RhcnQ6IDEsXG4gICAgc25hcDogdHJ1ZSxcbiAgICBiZWhhdmlvdXI6ICdkcmFnJyxcbiAgICBvcmllbnRhdGlvbjogd2luZG93V2lkdGggPCA3NjggPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgIHJhbmdlOiB3aW5kb3dXaWR0aCA8IDc2OCA/IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICAnMzMuMyUnOiAxLFxuICAgICAgICAnNjYuNyUlJzogMixcbiAgICAgICAgbWF4OiAzXG4gICAgfSA6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICAnMTguNiUnOiAxLFxuICAgICAgICAnNDkuNCUnOiAyLFxuICAgICAgICBtYXg6IDNcbiAgICB9LFxuICAgIHBpcHM6IHtcbiAgICAgICAgbW9kZTogJ3N0ZXBzJyxcbiAgICAgICAgZGVuc2l0eTogNTAwXG4gICAgfVxufTtcblxuY29uc3QgYWRkQ2xhc3NOYW1lID0gKGVsZW0sIGNsYXNzTmFtZSkgPT4ge1xuICAgIGVsZW0uY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbn07XG5cbmNvbnN0IGNoYW5nZVBpbXBzID0gKHNsaWRlck5vZGUsIHZhbHMpID0+IHtcbiAgICBjb25zdCB2YWxOb2RlcyA9IFtdLnNsaWNlLmFwcGx5KHNsaWRlck5vZGUucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktdmFsdWUnKSk7XG4gICAgY29uc3QgcGlwTm9kZXMgPSBbXS5zbGljZS5hcHBseShzbGlkZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub1VpLW1hcmtlcicpKTtcbiAgICBjb25zdCBmaXJzdFBpcE5vZGUgPSBwaXBOb2Rlc1swXTtcbiAgICBjb25zdCBsYXN0UGlwTm9kZSA9IHBpcE5vZGVzW3BpcE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgYWRkQ2xhc3NOYW1lKGZpcnN0UGlwTm9kZSwgJ25vVWktZmlyc3QtcGlwJyk7XG4gICAgYWRkQ2xhc3NOYW1lKGxhc3RQaXBOb2RlLCAnbm9VaS1sYXN0LXBpcCcpO1xuXG4gICAgcmV0dXJuIHZhbE5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWxzW2luZGV4XTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLnNldChpbmRleCk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGluZGV4O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIG9wdGlvbnMpO1xuICAgIC8vIHNsaWRlci5ub1VpU2xpZGVyLnNldChpbnB1dC52YWx1ZSk7XG4gICAgY2hhbmdlUGltcHMoc2xpZGVyLCB2YWx1ZXMpO1xufTtcbiIsImltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBhdXRvc2l6ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gICAgVGhpcyBmaWxlIGNhbiBiZSB1c2VkIGFzIGVudHJ5IHBvaW50IGZvciB3ZWJwYWNrIVxuICovXG5cbmltcG9ydCB0ZXh0QXJlYSBmcm9tICdjb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhJztcbmltcG9ydCBsZXZlbCBmcm9tICdjb21wb25lbnRzL2xldmVsL2xldmVsJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgLy8gc2xpZGVyKCk7XG4gICAgdGV4dEFyZWEoKTtcbiAgICBsZXZlbCgpO1xufSk7XG5cbiIsIi8qIVxuXHRhdXRvc2l6ZSA0LjAuMlxuXHRsaWNlbnNlOiBNSVRcblx0aHR0cDovL3d3dy5qYWNrbG1vb3JlLmNvbS9hdXRvc2l6ZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ21vZHVsZScsICdleHBvcnRzJ10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0ZmFjdG9yeShtb2R1bGUsIGV4cG9ydHMpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBtb2QgPSB7XG5cdFx0XHRleHBvcnRzOiB7fVxuXHRcdH07XG5cdFx0ZmFjdG9yeShtb2QsIG1vZC5leHBvcnRzKTtcblx0XHRnbG9iYWwuYXV0b3NpemUgPSBtb2QuZXhwb3J0cztcblx0fVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIG1hcCA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdHZhciB2YWx1ZXMgPSBbXTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0XHRcdFx0cmV0dXJuIGtleXMuaW5kZXhPZihrZXkpID4gLTE7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXNba2V5cy5pbmRleE9mKGtleSldO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuXHRcdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShrZXkpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0a2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSgpO1xuXG5cdHZhciBjcmVhdGVFdmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcblx0XHRyZXR1cm4gbmV3IEV2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcblx0fTtcblx0dHJ5IHtcblx0XHRuZXcgRXZlbnQoJ3Rlc3QnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIGRvZXMgbm90IHN1cHBvcnQgYG5ldyBFdmVudCgpYFxuXHRcdGNyZWF0ZUV2ZW50ID0gZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXHRcdFx0ZXZ0LmluaXRFdmVudChuYW1lLCB0cnVlLCBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gZXZ0O1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhc3NpZ24odGEpIHtcblx0XHRpZiAoIXRhIHx8ICF0YS5ub2RlTmFtZSB8fCB0YS5ub2RlTmFtZSAhPT0gJ1RFWFRBUkVBJyB8fCBtYXAuaGFzKHRhKSkgcmV0dXJuO1xuXG5cdFx0dmFyIGhlaWdodE9mZnNldCA9IG51bGw7XG5cdFx0dmFyIGNsaWVudFdpZHRoID0gbnVsbDtcblx0XHR2YXIgY2FjaGVkSGVpZ2h0ID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0XHR2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YSwgbnVsbCk7XG5cblx0XHRcdGlmIChzdHlsZS5yZXNpemUgPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0dGEuc3R5bGUucmVzaXplID0gJ25vbmUnO1xuXHRcdFx0fSBlbHNlIGlmIChzdHlsZS5yZXNpemUgPT09ICdib3RoJykge1xuXHRcdFx0XHR0YS5zdHlsZS5yZXNpemUgPSAnaG9yaXpvbnRhbCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdHlsZS5ib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcpIHtcblx0XHRcdFx0aGVpZ2h0T2Zmc2V0ID0gLShwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoZWlnaHRPZmZzZXQgPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRml4IHdoZW4gYSB0ZXh0YXJlYSBpcyBub3Qgb24gZG9jdW1lbnQgYm9keSBhbmQgaGVpZ2h0T2Zmc2V0IGlzIE5vdCBhIE51bWJlclxuXHRcdFx0aWYgKGlzTmFOKGhlaWdodE9mZnNldCkpIHtcblx0XHRcdFx0aGVpZ2h0T2Zmc2V0ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2hhbmdlT3ZlcmZsb3codmFsdWUpIHtcblx0XHRcdHtcblx0XHRcdFx0Ly8gQ2hyb21lL1NhZmFyaS1zcGVjaWZpYyBmaXg6XG5cdFx0XHRcdC8vIFdoZW4gdGhlIHRleHRhcmVhIHktb3ZlcmZsb3cgaXMgaGlkZGVuLCBDaHJvbWUvU2FmYXJpIGRvIG5vdCByZWZsb3cgdGhlIHRleHQgdG8gYWNjb3VudCBmb3IgdGhlIHNwYWNlXG5cdFx0XHRcdC8vIG1hZGUgYXZhaWxhYmxlIGJ5IHJlbW92aW5nIHRoZSBzY3JvbGxiYXIuIFRoZSBmb2xsb3dpbmcgZm9yY2VzIHRoZSBuZWNlc3NhcnkgdGV4dCByZWZsb3cuXG5cdFx0XHRcdHZhciB3aWR0aCA9IHRhLnN0eWxlLndpZHRoO1xuXHRcdFx0XHR0YS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuXHRcdFx0XHQvLyBGb3JjZSByZWZsb3c6XG5cdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRcdFx0dGEub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cdFx0XHRcdHRhLnN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHRhLnN0eWxlLm92ZXJmbG93WSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFBhcmVudE92ZXJmbG93cyhlbCkge1xuXHRcdFx0dmFyIGFyciA9IFtdO1xuXG5cdFx0XHR3aGlsZSAoZWwgJiYgZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuXHRcdFx0XHRpZiAoZWwucGFyZW50Tm9kZS5zY3JvbGxUb3ApIHtcblx0XHRcdFx0XHRhcnIucHVzaCh7XG5cdFx0XHRcdFx0XHRub2RlOiBlbC5wYXJlbnROb2RlLFxuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiBlbC5wYXJlbnROb2RlLnNjcm9sbFRvcFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsID0gZWwucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZXNpemUoKSB7XG5cdFx0XHRpZiAodGEuc2Nyb2xsSGVpZ2h0ID09PSAwKSB7XG5cdFx0XHRcdC8vIElmIHRoZSBzY3JvbGxIZWlnaHQgaXMgMCwgdGhlbiB0aGUgZWxlbWVudCBwcm9iYWJseSBoYXMgZGlzcGxheTpub25lIG9yIGlzIGRldGFjaGVkIGZyb20gdGhlIERPTS5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb3ZlcmZsb3dzID0gZ2V0UGFyZW50T3ZlcmZsb3dzKHRhKTtcblx0XHRcdHZhciBkb2NUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gTmVlZGVkIGZvciBNb2JpbGUgSUUgKHRpY2tldCAjMjQwKVxuXG5cdFx0XHR0YS5zdHlsZS5oZWlnaHQgPSAnJztcblx0XHRcdHRhLnN0eWxlLmhlaWdodCA9IHRhLnNjcm9sbEhlaWdodCArIGhlaWdodE9mZnNldCArICdweCc7XG5cblx0XHRcdC8vIHVzZWQgdG8gY2hlY2sgaWYgYW4gdXBkYXRlIGlzIGFjdHVhbGx5IG5lY2Vzc2FyeSBvbiB3aW5kb3cucmVzaXplXG5cdFx0XHRjbGllbnRXaWR0aCA9IHRhLmNsaWVudFdpZHRoO1xuXG5cdFx0XHQvLyBwcmV2ZW50cyBzY3JvbGwtcG9zaXRpb24ganVtcGluZ1xuXHRcdFx0b3ZlcmZsb3dzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRcdGVsLm5vZGUuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsVG9wO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChkb2NUb3ApIHtcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY1RvcDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdFx0XHRyZXNpemUoKTtcblxuXHRcdFx0dmFyIHN0eWxlSGVpZ2h0ID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHRhLnN0eWxlLmhlaWdodCkpO1xuXHRcdFx0dmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGEsIG51bGwpO1xuXG5cdFx0XHQvLyBVc2luZyBvZmZzZXRIZWlnaHQgYXMgYSByZXBsYWNlbWVudCBmb3IgY29tcHV0ZWQuaGVpZ2h0IGluIElFLCBiZWNhdXNlIElFIGRvZXMgbm90IGFjY291bnQgdXNlIG9mIGJvcmRlci1ib3hcblx0XHRcdHZhciBhY3R1YWxIZWlnaHQgPSBjb21wdXRlZC5ib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoY29tcHV0ZWQuaGVpZ2h0KSkgOiB0YS5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdC8vIFRoZSBhY3R1YWwgaGVpZ2h0IG5vdCBtYXRjaGluZyB0aGUgc3R5bGUgaGVpZ2h0IChzZXQgdmlhIHRoZSByZXNpemUgbWV0aG9kKSBpbmRpY2F0ZXMgdGhhdCBcblx0XHRcdC8vIHRoZSBtYXgtaGVpZ2h0IGhhcyBiZWVuIGV4Y2VlZGVkLCBpbiB3aGljaCBjYXNlIHRoZSBvdmVyZmxvdyBzaG91bGQgYmUgYWxsb3dlZC5cblx0XHRcdGlmIChhY3R1YWxIZWlnaHQgPCBzdHlsZUhlaWdodCkge1xuXHRcdFx0XHRpZiAoY29tcHV0ZWQub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuXHRcdFx0XHRcdGNoYW5nZU92ZXJmbG93KCdzY3JvbGwnKTtcblx0XHRcdFx0XHRyZXNpemUoKTtcblx0XHRcdFx0XHRhY3R1YWxIZWlnaHQgPSBjb21wdXRlZC5ib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGEsIG51bGwpLmhlaWdodCkpIDogdGEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBOb3JtYWxseSBrZWVwIG92ZXJmbG93IHNldCB0byBoaWRkZW4sIHRvIGF2b2lkIGZsYXNoIG9mIHNjcm9sbGJhciBhcyB0aGUgdGV4dGFyZWEgZXhwYW5kcy5cblx0XHRcdFx0aWYgKGNvbXB1dGVkLm92ZXJmbG93WSAhPT0gJ2hpZGRlbicpIHtcblx0XHRcdFx0XHRjaGFuZ2VPdmVyZmxvdygnaGlkZGVuJyk7XG5cdFx0XHRcdFx0cmVzaXplKCk7XG5cdFx0XHRcdFx0YWN0dWFsSGVpZ2h0ID0gY29tcHV0ZWQuYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhLCBudWxsKS5oZWlnaHQpKSA6IHRhLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2FjaGVkSGVpZ2h0ICE9PSBhY3R1YWxIZWlnaHQpIHtcblx0XHRcdFx0Y2FjaGVkSGVpZ2h0ID0gYWN0dWFsSGVpZ2h0O1xuXHRcdFx0XHR2YXIgZXZ0ID0gY3JlYXRlRXZlbnQoJ2F1dG9zaXplOnJlc2l6ZWQnKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0YS5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIEZpcmVmb3ggd2lsbCB0aHJvdyBhbiBlcnJvciBvbiBkaXNwYXRjaEV2ZW50IGZvciBhIGRldGFjaGVkIGVsZW1lbnRcblx0XHRcdFx0XHQvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODkzNzZcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBwYWdlUmVzaXplID0gZnVuY3Rpb24gcGFnZVJlc2l6ZSgpIHtcblx0XHRcdGlmICh0YS5jbGllbnRXaWR0aCAhPT0gY2xpZW50V2lkdGgpIHtcblx0XHRcdFx0dXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBkZXN0cm95ID0gZnVuY3Rpb24gKHN0eWxlKSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGFnZVJlc2l6ZSwgZmFsc2UpO1xuXHRcdFx0dGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGUsIGZhbHNlKTtcblx0XHRcdHRhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlLCBmYWxzZSk7XG5cdFx0XHR0YS5yZW1vdmVFdmVudExpc3RlbmVyKCdhdXRvc2l6ZTpkZXN0cm95JywgZGVzdHJveSwgZmFsc2UpO1xuXHRcdFx0dGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignYXV0b3NpemU6dXBkYXRlJywgdXBkYXRlLCBmYWxzZSk7XG5cblx0XHRcdE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0dGEuc3R5bGVba2V5XSA9IHN0eWxlW2tleV07XG5cdFx0XHR9KTtcblxuXHRcdFx0bWFwLmRlbGV0ZSh0YSk7XG5cdFx0fS5iaW5kKHRhLCB7XG5cdFx0XHRoZWlnaHQ6IHRhLnN0eWxlLmhlaWdodCxcblx0XHRcdHJlc2l6ZTogdGEuc3R5bGUucmVzaXplLFxuXHRcdFx0b3ZlcmZsb3dZOiB0YS5zdHlsZS5vdmVyZmxvd1ksXG5cdFx0XHRvdmVyZmxvd1g6IHRhLnN0eWxlLm92ZXJmbG93WCxcblx0XHRcdHdvcmRXcmFwOiB0YS5zdHlsZS53b3JkV3JhcFxuXHRcdH0pO1xuXG5cdFx0dGEuYWRkRXZlbnRMaXN0ZW5lcignYXV0b3NpemU6ZGVzdHJveScsIGRlc3Ryb3ksIGZhbHNlKTtcblxuXHRcdC8vIElFOSBkb2VzIG5vdCBmaXJlIG9ucHJvcGVydHljaGFuZ2Ugb3Igb25pbnB1dCBmb3IgZGVsZXRpb25zLFxuXHRcdC8vIHNvIGJpbmRpbmcgdG8gb25rZXl1cCB0byBjYXRjaCBtb3N0IG9mIHRob3NlIGV2ZW50cy5cblx0XHQvLyBUaGVyZSBpcyBubyB3YXkgdGhhdCBJIGtub3cgb2YgdG8gZGV0ZWN0IHNvbWV0aGluZyBsaWtlICdjdXQnIGluIElFOS5cblx0XHRpZiAoJ29ucHJvcGVydHljaGFuZ2UnIGluIHRhICYmICdvbmlucHV0JyBpbiB0YSkge1xuXHRcdFx0dGEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cGRhdGUsIGZhbHNlKTtcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGFnZVJlc2l6ZSwgZmFsc2UpO1xuXHRcdHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlLCBmYWxzZSk7XG5cdFx0dGEuYWRkRXZlbnRMaXN0ZW5lcignYXV0b3NpemU6dXBkYXRlJywgdXBkYXRlLCBmYWxzZSk7XG5cdFx0dGEuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG5cdFx0dGEuc3R5bGUud29yZFdyYXAgPSAnYnJlYWstd29yZCc7XG5cblx0XHRtYXAuc2V0KHRhLCB7XG5cdFx0XHRkZXN0cm95OiBkZXN0cm95LFxuXHRcdFx0dXBkYXRlOiB1cGRhdGVcblx0XHR9KTtcblxuXHRcdGluaXQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3kodGEpIHtcblx0XHR2YXIgbWV0aG9kcyA9IG1hcC5nZXQodGEpO1xuXHRcdGlmIChtZXRob2RzKSB7XG5cdFx0XHRtZXRob2RzLmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGUodGEpIHtcblx0XHR2YXIgbWV0aG9kcyA9IG1hcC5nZXQodGEpO1xuXHRcdGlmIChtZXRob2RzKSB7XG5cdFx0XHRtZXRob2RzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBhdXRvc2l6ZSA9IG51bGw7XG5cblx0Ly8gRG8gbm90aGluZyBpbiBOb2RlLmpzIGVudmlyb25tZW50IGFuZCBJRTggKG9yIGxvd2VyKVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0YXV0b3NpemUgPSBmdW5jdGlvbiBhdXRvc2l6ZShlbCkge1xuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdFx0YXV0b3NpemUuZGVzdHJveSA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdFx0YXV0b3NpemUudXBkYXRlID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRhdXRvc2l6ZSA9IGZ1bmN0aW9uIGF1dG9zaXplKGVsLCBvcHRpb25zKSB7XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5sZW5ndGggPyBlbCA6IFtlbF0sIGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFzc2lnbih4LCBvcHRpb25zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0XHRhdXRvc2l6ZS5kZXN0cm95ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5sZW5ndGggPyBlbCA6IFtlbF0sIGRlc3Ryb3kpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdFx0YXV0b3NpemUudXBkYXRlID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbC5sZW5ndGggPyBlbCA6IFtlbF0sIHVwZGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0fVxuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IGF1dG9zaXplO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pOyIsIi8qISBub3Vpc2xpZGVyIC0gMTMuMS41IC0gNC8yNC8yMDE5ICovXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgLy8gTm9kZS9Db21tb25KU1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcclxuICAgICAgICB3aW5kb3cubm9VaVNsaWRlciA9IGZhY3RvcnkoKTtcclxuICAgIH1cclxufSkoZnVuY3Rpb24oKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgVkVSU0lPTiA9IFwiMTMuMS41XCI7XHJcblxyXG4gICAgLy9yZWdpb24gSGVscGVyIE1ldGhvZHNcclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cclxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXHJcbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXHJcbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cclxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xyXG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICB2YXIgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoZG9jKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxyXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcclxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXHJcbiAgICAgICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uXHJcbiAgICAgICAgICAgID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcFxyXG4gICAgICAgICAgICA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG51bWVyaWNhbC5cclxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cclxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcclxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cclxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXHJcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXHJcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xyXG4gICAgICAgIG51bVN0ciA9IFN0cmluZyhudW1TdHIpO1xyXG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcclxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLFxyXG4gICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXHJcbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdFxyXG4gICAgICAgICAgICA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXHJcbiAgICAgICAgICAgIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoZG9jKSB7XHJcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XHJcbiAgICAgICAgdmFyIHggPSBzdXBwb3J0UGFnZU9mZnNldFxyXG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxyXG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxyXG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcclxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XHJcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XHJcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcclxuICAgIC8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcclxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxyXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcclxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XHJcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcclxuICAgICAgICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIk1TUG9pbnRlck1vdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZW5kOiBcIm1vdXNldXAgdG91Y2hlbmRcIlxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXHJcbiAgICAvLyBJc3N1ZSAjNzg1XHJcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XHJcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2VuZHJlZ2lvblxyXG5cclxuICAgIC8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cclxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XHJcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAocGVyY2VudGFnZSkgSG93IG1hbnkgcGVyY2VudCBpcyB0aGlzIHZhbHVlIG9mIHRoaXMgcmFuZ2U/XHJcbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVsxXSAtIHJhbmdlWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xyXG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBmcm9tUGVyY2VudGFnZShyYW5nZSwgcmFuZ2VbMF0gPCAwID8gdmFsdWUgKyBNYXRoLmFicyhyYW5nZVswXSkgOiB2YWx1ZSAtIHJhbmdlWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xyXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XHJcbiAgICAgICAgdmFyIGogPSAxO1xyXG5cclxuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XHJcbiAgICAgICAgICAgIGogKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxyXG4gICAgZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4VmFsKTtcclxuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcclxuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xyXG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xyXG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XHJcblxyXG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAgICBmdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXHJcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xyXG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xyXG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XHJcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XHJcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xyXG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XHJcbiAgICAgICAgdmFyIGIgPSB4UGN0W2pdO1xyXG5cclxuICAgICAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cclxuICAgICAgICBpZiAoc25hcCkge1xyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF4U3RlcHNbaiAtIDFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRW50cnlQb2ludChpbmRleCwgdmFsdWUsIHRoYXQpIHtcclxuICAgICAgICB2YXIgcGVyY2VudGFnZTtcclxuXHJcbiAgICAgICAgLy8gV3JhcCBudW1lcmljYWwgaW5wdXQgaW4gYW4gYXJyYXkuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWplY3QgYW55IGludmFsaWQgaW5wdXQsIGJ5IHRlc3Rpbmcgd2hldGhlciB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3JhbmdlJyBjb250YWlucyBpbnZhbGlkIHZhbHVlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBcIm1pblwiKSB7XHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBmb3IgY29ycmVjdCBpbnB1dC5cclxuICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXHJcbiAgICAgICAgdGhhdC54UGN0LnB1c2gocGVyY2VudGFnZSk7XHJcbiAgICAgICAgdGhhdC54VmFsLnB1c2godmFsdWVbMF0pO1xyXG5cclxuICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXHJcbiAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXHJcbiAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxyXG4gICAgICAgIGlmICghcGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC54U3RlcHNbMF0gPSB2YWx1ZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoYXQueFN0ZXBzLnB1c2goaXNOYU4odmFsdWVbMV0pID8gZmFsc2UgOiB2YWx1ZVsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGF0LnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RlcFBvaW50KGksIG4sIHRoYXQpIHtcclxuICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cclxuICAgICAgICBpZiAoIW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XHJcbiAgICAgICAgaWYgKHRoYXQueFZhbFtpXSA9PT0gdGhhdC54VmFsW2kgKyAxXSkge1xyXG4gICAgICAgICAgICB0aGF0LnhTdGVwc1tpXSA9IHRoYXQueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGF0LnhWYWxbaV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cclxuICAgICAgICB0aGF0LnhTdGVwc1tpXSA9XHJcbiAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGF0LnhWYWxbaV0sIHRoYXQueFZhbFtpICsgMV1dLCBuKSAvIHN1YlJhbmdlUmF0aW8odGhhdC54UGN0W2ldLCB0aGF0LnhQY3RbaSArIDFdKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhhdC54VmFsW2kgKyAxXSAtIHRoYXQueFZhbFtpXSkgLyB0aGF0LnhOdW1TdGVwc1tpXTtcclxuICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcclxuICAgICAgICB2YXIgc3RlcCA9IHRoYXQueFZhbFtpXSArIHRoYXQueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XHJcblxyXG4gICAgICAgIHRoYXQueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZW5kcmVnaW9uXHJcblxyXG4gICAgLy9yZWdpb24gU3BlY3RydW1cclxuXHJcbiAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xyXG4gICAgICAgIHRoaXMueFBjdCA9IFtdO1xyXG4gICAgICAgIHRoaXMueFZhbCA9IFtdO1xyXG4gICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xyXG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcclxuICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XHJcblxyXG4gICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICB2YXIgb3JkZXJlZCA9IFtdOyAvLyBbMCwgJ21pbiddLCBbMSwgJzUwJSddLCBbMiwgJ21heCddXHJcblxyXG4gICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXHJcbiAgICAgICAgZm9yIChpbmRleCBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2VudHJ5W2luZGV4XSwgaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cclxuICAgICAgICBpZiAob3JkZXJlZC5sZW5ndGggJiYgdHlwZW9mIG9yZGVyZWRbMF1bMF0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBoYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxyXG4gICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cclxuICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IHRoaXMueFN0ZXBzLnNsaWNlKDApO1xyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TWFyZ2luID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB2YXIgc3RlcCA9IHRoaXMueE51bVN0ZXBzWzBdO1xyXG5cclxuICAgICAgICBpZiAoc3RlcCAmJiAodmFsdWUgLyBzdGVwKSAlIDEgIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnbGltaXQnLCAnbWFyZ2luJyBhbmQgJ3BhZGRpbmcnIG11c3QgYmUgZGl2aXNpYmxlIGJ5IHN0ZXAuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMueFBjdC5sZW5ndGggPT09IDIgPyBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uKHZhbHVlLCBpc0Rvd24sIHNpemUpIHtcclxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcclxuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xyXG4gICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XHJcbiAgICB9O1xyXG5cclxuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGVwQmVmb3JlOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDJdLFxyXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXNTdGVwOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxyXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxyXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXHJcbiAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gT3V0c2lkZSB0ZXN0aW5nXHJcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9lbmRyZWdpb25cclxuXHJcbiAgICAvL3JlZ2lvbiBPcHRpb25zXHJcblxyXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcydsbCBwcmV2ZW50XHJcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxyXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxyXG4gICAgICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxyXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxyXG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcclxuICAgICAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XHJcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XHJcblxyXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIHJldHVybnMgZmFsc2Ugd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCxcclxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cclxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cclxuXHJcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcclxuICAgICAgICB0bzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudG9GaXhlZCgyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb206IE51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChlbnRyeSkge1xyXG4gICAgICAgIC8vIEFueSBvYmplY3Qgd2l0aCBhIHRvIGFuZCBmcm9tIG1ldGhvZCBpcyBzdXBwb3J0ZWQuXHJcbiAgICAgICAgaWYgKGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXHJcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cclxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxyXG4gICAgICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXRjaCBlcXVhbCBzdGFydCBvciBlbmQuXHJcbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gZW50cnkubWF4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3JhbmdlJyAnbWluJyBhbmQgJ21heCcgY2Fubm90IGJlIGVxdWFsLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAsIHBhcnNlZC5zaW5nbGVTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXRlIGlucHV0LiBWYWx1ZXMgYXJlbid0IHRlc3RlZCwgYXMgdGhlIHB1YmxpYyAudmFsIG1ldGhvZFxyXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxyXG4gICAgICAgIHBhcnNlZC5oYW5kbGVzID0gZW50cnkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXHJcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXHJcbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxyXG4gICAgICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRlKHBhcnNlZCwgZW50cnkpIHtcclxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cclxuICAgICAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcclxuICAgICAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XHJcbiAgICAgICAgdmFyIGk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XHJcbiAgICAgICAgICAgIGVudHJ5ID0gW3RydWUsIGZhbHNlXTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcclxuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxyXG4gICAgICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RPcmllbnRhdGlvbihwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XHJcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxyXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxyXG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSXNzdWUgIzU4MlxyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldE1hcmdpbihlbnRyeSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyc2VkLm1hcmdpbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdtYXJnaW4nIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXRNYXJnaW4oZW50cnkpO1xyXG5cclxuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJub1VpU2xpZGVyIChcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgVkVSU0lPTiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIpOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcclxuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gJ2dldE1hcmdpbicgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXHJcbiAgICAgICAgcGFyc2VkLnBhZGRpbmcgPSBbcGFyc2VkLnNwZWN0cnVtLmdldE1hcmdpbihlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXRNYXJnaW4oZW50cnlbMV0pXTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZC5wYWRkaW5nWzBdID09PSBmYWxzZSB8fCBwYXJzZWQucGFkZGluZ1sxXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAncGFkZGluZycgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXSA8IDAgfHwgcGFyc2VkLnBhZGRpbmdbMV0gPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXSArIHBhcnNlZC5wYWRkaW5nWzFdID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcclxuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXHJcbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcclxuICAgICAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXHJcbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXHJcbiAgICAgICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXHJcbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcclxuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XHJcbiAgICAgICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XHJcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xyXG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xyXG4gICAgICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcclxuXHJcbiAgICAgICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxyXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcclxuICAgICAgICAgICAgZHJhZzogZHJhZyxcclxuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxyXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxyXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXHJcbiAgICAgICAgICAgIHVuY29uc3RyYWluZWQ6IHVuY29uc3RyYWluZWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RUb29sdGlwcyhwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gYXNBcnJheShlbnRyeSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyc2VkLnRvb2x0aXBzLmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZvcm1hdHRlci50byAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XHJcbiAgICAgICAgdmFsaWRhdGVGb3JtYXQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIHBhcnNlZC5mb3JtYXQgPSBlbnRyeTtcclxuICAgICAgICB2YWxpZGF0ZUZvcm1hdChlbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uLiBQYXNzZWQgdmFsdWVzIGFyZSB1c2VkIHdpdGhvdXQgdmFsaWRhdGlvbi5cclxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXHJcbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXHJcbiAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXHJcbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICBsaW1pdDogMCxcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcclxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcclxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cclxuICAgICAgICB2YXIgdGVzdHMgPSB7XHJcbiAgICAgICAgICAgIHN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTdGVwIH0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxyXG4gICAgICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXHJcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcclxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcclxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXHJcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcclxuICAgICAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcclxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcclxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcclxuICAgICAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcclxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcclxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXHJcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXHJcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgY29ubmVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcclxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcclxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcclxuICAgICAgICAgICAgICAgIGJhc2U6IFwiYmFzZVwiLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlTG93ZXI6IFwiaGFuZGxlLWxvd2VyXCIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcclxuICAgICAgICAgICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IFwiY29ubmVjdFwiLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcclxuICAgICAgICAgICAgICAgIGx0cjogXCJsdHJcIixcclxuICAgICAgICAgICAgICAgIHJ0bDogXCJydGxcIixcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogXCJkcmFnZ2FibGVcIixcclxuICAgICAgICAgICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXHJcbiAgICAgICAgICAgICAgICBwaXBzOiBcInBpcHNcIixcclxuICAgICAgICAgICAgICAgIHBpcHNIb3Jpem9udGFsOiBcInBpcHMtaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcclxuICAgICAgICAgICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmtlckhvcml6b250YWw6IFwibWFya2VyLWhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcclxuICAgICAgICAgICAgICAgIG1hcmtlckxhcmdlOiBcIm1hcmtlci1sYXJnZVwiLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUhvcml6b250YWw6IFwidmFsdWUtaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhcmdlOiBcInZhbHVlLWxhcmdlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxyXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYXJpYUZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxyXG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xyXG4gICAgICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBpc24ndCBzZXQsIGJ1dCBpdCBpcyByZXF1aXJlZCwgdGhyb3cgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcclxuICAgICAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcclxuXHJcbiAgICAgICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXHJcbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xyXG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cclxuICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxyXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcGFyc2VkLnRyYW5zZm9ybVJ1bGUgPSBub1ByZWZpeCA/IFwidHJhbnNmb3JtXCIgOiBtc1ByZWZpeCA/IFwibXNUcmFuc2Zvcm1cIiA6IFwid2Via2l0VHJhbnNmb3JtXCI7XHJcblxyXG4gICAgICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IFtbXCJsZWZ0XCIsIFwidG9wXCJdLCBbXCJyaWdodFwiLCBcImJvdHRvbVwiXV07XHJcblxyXG4gICAgICAgIHBhcnNlZC5zdHlsZSA9IHN0eWxlc1twYXJzZWQuZGlyXVtwYXJzZWQub3J0XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvL2VuZHJlZ2lvblxyXG5cclxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lID0gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKTtcclxuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XHJcblxyXG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xyXG5cclxuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXHJcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB2YXIgc2NvcGVfQmFzZTtcclxuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcclxuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XHJcbiAgICAgICAgdmFyIHNjb3BlX1BpcHM7XHJcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xyXG5cclxuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXHJcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcclxuICAgICAgICB2YXIgc2NvcGVfVmFsdWVzID0gW107XHJcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xyXG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XHJcbiAgICAgICAgdmFyIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBFeHBvc2VkIEFQSVxyXG4gICAgICAgIHZhciBzY29wZV9TZWxmO1xyXG5cclxuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xyXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xyXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xyXG5cclxuICAgICAgICAvLyBQaXBzIGNvbnN0YW50c1xyXG4gICAgICAgIHZhciBQSVBTX05PTkUgPSAtMTtcclxuICAgICAgICB2YXIgUElQU19OT19WQUxVRSA9IDA7XHJcbiAgICAgICAgdmFyIFBJUFNfTEFSR0VfVkFMVUUgPSAxO1xyXG4gICAgICAgIHZhciBQSVBTX1NNQUxMX1ZBTFVFID0gMjtcclxuXHJcbiAgICAgICAgLy8gRm9yIGhvcml6b250YWwgc2xpZGVycyBpbiBzdGFuZGFyZCBsdHIgZG9jdW1lbnRzLFxyXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cclxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cclxuICAgICAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZFRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcclxuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgaGFuZGxlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcclxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcclxuICAgICAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xyXG4gICAgICAgICAgICBpZiAoIWFkZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cclxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMgPSBbXTtcclxuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxyXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gS2VlcCBhIGxpc3Qgb2YgYWxsIGFkZGVkIGhhbmRsZXMuXHJcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1tpICsgMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xyXG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcclxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdO1xyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwcykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGUudG9vbHRpcHNcIik7XHJcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxyXG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xyXG5cclxuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlLnRvb2x0aXBzXCIsIGZ1bmN0aW9uKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcclxuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIsIGZ1bmN0aW9uKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxyXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvcHRpb25zLmFyaWFGb3JtYXQudG8odW5lbmNvZGVkW2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXggPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWF4KS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKG1vZGUsIHZhbHVlcywgc3RlcHBlZCkge1xyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJyYW5nZVwiIHx8IG1vZGUgPT09IFwic3RlcHNcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcImNvdW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIDAgLSAxMDAgaW4gJ2NvdW50JyBwYXJ0cy5cclxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHZhbHVlcyAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vZGUgPSBcInBvc2l0aW9uc1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJwb3NpdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInZhbHVlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gc2ltcGx5IHVzZSB0aGUgdmFsdWVzLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQoZGVuc2l0eSwgbW9kZSwgZ3JvdXApIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBmbG9hdGluZyBwb2ludCB2YXJpYW5jZSBieSBkcm9wcGluZyB0aGUgc21hbGxlc3QgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpIC8gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcclxuICAgICAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XHJcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cclxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoXHJcbiAgICAgICAgICAgICAgICBncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxyXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxyXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGxhc3RJblJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uKGN1cnJlbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgIHZhciBxO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IGdyb3VwW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGN0UG9zO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhbFN0ZXBzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBtb2RlID09PSBcInN0ZXBzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIHN0ZXAgb24gdG8gdGhlIG5leHQgc3VicmFuZ2UuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cclxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvdyBjYW4gYmUgMCwgc28gdGVzdCBmb3IgZmFsc2UuIElmIGhpZ2ggaXMgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBJbmRleCAwIGlzIGFscmVhZHkgaGFuZGxlZC5cclxuICAgICAgICAgICAgICAgIGlmIChsb3cgPT09IGZhbHNlIHx8IGhpZ2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxyXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkgPSBzYWZlSW5jcmVtZW50KGksIHN0ZXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BjdCA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIGRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHBvaW50cyBldmVubHksIGFkZGluZyB0aGUgY29ycmVjdCBudW1iZXIgdG8gdGhpcyBzdWJyYW5nZS5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW8gYmV0d2VlbiB0aGUgcm91bmRlZCB2YWx1ZSBhbmQgdGhlIGFjdHVhbCBzaXplIG1pZ2h0IGJlIH4xJSBvZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVsbCByYW5nZSwgMiBmb3IgNTAsIDQgZm9yIDI1LCBldGMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gUElQU19MQVJHRV9WQUxVRSA6IGlzU3RlcHMgPyBQSVBTX1NNQUxMX1ZBTFVFIDogUElQU19OT19WQUxVRTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IFtdO1xyXG4gICAgICAgICAgICB2YWx1ZVNpemVDbGFzc2VzW1BJUFNfTk9fVkFMVUVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsO1xyXG4gICAgICAgICAgICB2YWx1ZVNpemVDbGFzc2VzW1BJUFNfTEFSR0VfVkFMVUVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2U7XHJcbiAgICAgICAgICAgIHZhbHVlU2l6ZUNsYXNzZXNbUElQU19TTUFMTF9WQUxVRV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWI7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSBbXTtcclxuICAgICAgICAgICAgbWFya2VyU2l6ZUNsYXNzZXNbUElQU19OT19WQUxVRV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsO1xyXG4gICAgICAgICAgICBtYXJrZXJTaXplQ2xhc3Nlc1tQSVBTX0xBUkdFX1ZBTFVFXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZTtcclxuICAgICAgICAgICAgbWFya2VyU2l6ZUNsYXNzZXNbUElQU19TTUFMTF9WQUxVRV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcclxuICAgICAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcclxuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uQ2xhc3NlcyA9IGEgPyB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA6IG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcztcclxuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gUElQU19OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG1hcmtlciBmb3IgZXZlcnkgcG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gUElQU19OT19WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gZm9ybWF0dGVyLnRvKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbihvZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwaXBzKGdyaWQpIHtcclxuICAgICAgICAgICAgLy8gRml4ICM2NjlcclxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1vZGUgPSBncmlkLm1vZGU7XHJcbiAgICAgICAgICAgIHZhciBkZW5zaXR5ID0gZ3JpZC5kZW5zaXR5IHx8IDE7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBncmlkLmZpbHRlciB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGdyaWQudmFsdWVzIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc3RlcHBlZCA9IGdyaWQuc3RlcHBlZCB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAobW9kZSwgdmFsdWVzLCBzdGVwcGVkKTtcclxuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKGRlbnNpdHksIG1vZGUsIGdyb3VwKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGdyaWQuZm9ybWF0IHx8IHtcclxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLnJvdW5kXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cclxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzY29wZV9CYXNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB2YXIgYWx0ID0gXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxyXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cclxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XHJcblxyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZSA9IGZpeEV2ZW50KGUsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xyXG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcclxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXHJcbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcclxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcclxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxyXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXHJcbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXHJcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXHJcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXHJcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XHJcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIHg7XHJcbiAgICAgICAgICAgIHZhciB5O1xyXG5cclxuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xyXG4gICAgICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cclxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24oY2hlY2tUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1RvdWNoLnRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHwgZXZlbnRUYXJnZXQuY29udGFpbnMoY2hlY2tUb3VjaC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxyXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xyXG4gICAgICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XHJcbiAgICAgICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xyXG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xyXG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcclxuICAgICAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXHJcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXHJcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUocHJvcG9zYWwpIHtcclxuICAgICAgICAgICAgdmFyIGNsb3Nlc3QgPSAxMDA7XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IE1hdGguYWJzKHNjb3BlX0xvY2F0aW9uc1tpbmRleF0gLSBwcm9wb3NhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA8IGNsb3Nlc3QgfHwgKHBvcyA9PT0gMTAwICYmIGNsb3Nlc3QgPT09IDEwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cclxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiYgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkhUTUxcIiAmJiBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxyXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50TW92ZShldmVudCwgZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxyXG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvOTI3MDA1L21vYmlsZS1pZTEwLXdpbmRvd3MtcGhvbmUtYnV0dG9ucy1wcm9wZXJ0eS1vZi1wb2ludGVybW92ZS1ldmVudC1hbHdheXMtemVyb1xyXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOVwiKSA9PT0gLTEgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCAmJiBkYXRhLmJ1dHRvbnNQcm9wZXJ0eSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXHJcbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxyXG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cclxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXHJcbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XHJcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXHJcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXHJcbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXHJcbiAgICAgICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxyXG4gICAgICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXHJcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXHJcbiAgICAgICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXHJcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxyXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxyXG4gICAgICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXHJcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXHJcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gVGhlIHRhcCBldmVudCBzaG91bGRuJ3QgcHJvcGFnYXRlIHVwXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxyXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRha2VzIGEgY29uZmlndXJhYmxlIGFtb3VudCBvZiBtcyAoZGVmYXVsdCAzMDApLiBSZS1lbmFibGUgdGhlIHNsaWRlciBhZnRlciB0aGF0LlxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcclxuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xyXG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbmFwKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXHJcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xyXG4gICAgICAgIC8vIERvbid0IG1vdmUgdGhlIGRvY3VtZW50IHdoZW4gcHJlc3NpbmcgYXJyb3cga2V5cyBvbiBmb2N1c2VkIGhhbmRsZXNcclxuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XHJcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXTtcclxuICAgICAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xyXG4gICAgICAgICAgICB2YXIgc3RlcHMgPSBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xyXG5cclxuICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxyXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xyXG4gICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xyXG4gICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xyXG5cclxuICAgICAgICAgICAgdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXAsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cclxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xyXG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXHJcbiAgICAgICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBhcmUgb25seSBib3VuZCB0byB0aGUgdmlzdWFsIGhhbmRsZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBbaW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxyXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgc2NvcGVfQmFzZSwgZXZlbnRUYXAsIHt9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcclxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXHJcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbihjb25uZWN0LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cclxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBkcmFnZ2VkIGJ5IHRoZSBoYW5kbGVzLiBUaGUgaGFuZGxlIGluIHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbihldmVudEhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBldmVudEhvbGRlciwgZXZlbnRTdGFydCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4IC0gMSwgaW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF0dGFjaCBhbiBldmVudCB0byB0aGlzIHNsaWRlciwgcG9zc2libHkgaW5jbHVkaW5nIGEgbmFtZXNwYWNlXHJcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcclxuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0ucHVzaChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxyXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XHJcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24oYmluZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbih0YXJnZXRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTcGxpdCBvdXQgdGhlIGhhbmRsZSBwb3NpdGlvbmluZyBsb2dpYyBzbyB0aGUgTW92ZSBldmVudCBjYW4gdXNlIGl0LCB0b29cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gRm9yIHNsaWRlcnMgd2l0aCBtdWx0aXBsZSBoYW5kbGVzLCBsaW1pdCBtb3ZlbWVudCB0byB0aGUgb3RoZXIgaGFuZGxlLlxyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXHJcbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSArIG9wdGlvbnMubWFyZ2luKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgcmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdIC0gb3B0aW9ucy5tYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcclxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcclxuICAgICAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXHJcbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgcmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdICsgb3B0aW9ucy5saW1pdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSAtIG9wdGlvbnMubGltaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXHJcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBvcHRpb25zLnBhZGRpbmdbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIDEwMCAtIG9wdGlvbnMucGFkZGluZ1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XHJcblxyXG4gICAgICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXHJcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXHJcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcclxuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXHJcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xyXG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxyXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzID0gaGFuZGxlTnVtYmVycy5zbGljZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXHJcbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXHJcbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVOdW1iZXIsIG8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYltvXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZltvXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gdG8gLSBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxyXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlTnVtYmVyLCBvKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10pIHx8IHN0YXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxyXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXHJcbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxyXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcclxuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9ucy5cclxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXHJcbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBydWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0ICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xyXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHJ1bGU7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcclxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xyXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcclxuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSB6SW5kZXg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQpIHtcclxuICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb25uZWN0KGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsID0gMDtcclxuICAgICAgICAgICAgdmFyIGggPSAxMDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGwgPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcclxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XHJcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcclxuICAgICAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxyXG4gICAgICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxyXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgYSBmb3JtYXR0ZWQgbnVtYmVyIHdhcyBwYXNzZWQsIGF0dGVtcHQgdG8gZGVjb2RlIGl0LlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XHJcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXHJcbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNOYU4odG8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBFdmVudCBmaXJlcyBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhZmlyZVNldEV2ZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGluaXRpYWwgdmFsdWVzIHdlcmUgc2V0IGJlZm9yZSB1c2luZyBhbmltYXRlZCBwbGFjZW1lbnQuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXHJcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlc1toYW5kbGVOdW1iZXJdLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gU2Vjb25kIHBhc3MuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50c1xyXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgc2xpZGVyIHRvIGluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcclxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XHJcbiAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIiArIFZFUlNJT04gKyBcIik6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcclxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVHZXQoKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY3NzQ2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmNzc0NsYXNzZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcclxuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcclxuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XHJcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxyXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxyXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXHJcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGVhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxyXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cclxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXHJcbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xyXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcclxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcclxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcclxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cclxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bmRlZmluZWQuIG51bGwgcmVtb3ZlcyB0aGUgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCBuZXcgb3B0aW9ucyBpbnRvIHRoZSBzbGlkZXIgc3RhdGVcclxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlX1NwZWN0cnVtID0gbmV3T3B0aW9ucy5zcGVjdHJ1bTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpbWl0LCBtYXJnaW4gYW5kIHBhZGRpbmcgZGVwZW5kIG9uIHRoZSBzcGVjdHJ1bSBidXQgYXJlIHN0b3JlZCBvdXRzaWRlIG9mIGl0LiAoIzY3NylcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcclxuICAgICAgICAgICAgb3B0aW9ucy5saW1pdCA9IG5ld09wdGlvbnMubGltaXQ7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IG5ld09wdGlvbnMucGFkZGluZztcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XHJcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVQaXBzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwcywgcmVtb3ZlcyBleGlzdGluZy5cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBjdXJyZW50IHBvc2l0aW9uaW5nIHNvIHZhbHVlU2V0IGZvcmNlcyBhbiB1cGRhdGUuXHJcbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zVG9VcGRhdGUuc3RhcnQgfHwgdiwgZmlyZVNldEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxyXG4gICAgICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cclxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cclxuICAgICAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xyXG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJpYSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xyXG4gICAgICAgIHNjb3BlX1NlbGYgPSB7XHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXHJcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXHJcbiAgICAgICAgICAgIG9uOiBiaW5kRXZlbnQsXHJcbiAgICAgICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXHJcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXHJcbiAgICAgICAgICAgIHNldDogdmFsdWVTZXQsXHJcbiAgICAgICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXHJcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxyXG4gICAgICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICAgICAgICAgIF9fbW92ZUhhbmRsZXM6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVIYW5kbGVzKGEsIGIsIHNjb3BlX0xvY2F0aW9ucywgYyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucywgLy8gSXNzdWUgIzYwMCwgIzY3OFxyXG4gICAgICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCwgLy8gSXNzdWUgIzU5N1xyXG4gICAgICAgICAgICByZW1vdmVQaXBzOiByZW1vdmVQaXBzLFxyXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXHJcbiAgICAgICAgICAgIHBpcHM6IHBpcHMgLy8gSXNzdWUgIzU5NFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzY29wZV9TZWxmO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiICsgVkVSU0lPTiArIFwiKTogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIgKyBWRVJTSU9OICsgXCIpOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMsIHRhcmdldCk7XHJcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcGk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGEgZnVuY3Rpb24gZm9yIGZ1dHVyZSBleHBhbmRhYmlsaXR5O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXHJcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTixcclxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemVcclxuICAgIH07XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9