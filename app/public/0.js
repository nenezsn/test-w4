(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/_core-js@2.6.11@core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/is-iterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/is-iterable.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/is-iterable */ \"./node_modules/_core-js@2.6.11@core-js/library/fn/is-iterable.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/is-iterable.js\");\n\nvar _isIterable3 = _interopRequireDefault(_isIterable2);\n\nvar _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function sliceIterator(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n\n    try {\n      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n        _arr.push(_s.value);\n\n        if (i && _arr.length === i) break;\n      }\n    } catch (err) {\n      _d = true;\n      _e = err;\n    } finally {\n      try {\n        if (!_n && _i[\"return\"]) _i[\"return\"]();\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n\n    return _arr;\n  }\n\n  return function (arr, i) {\n    if (Array.isArray(arr)) {\n      return arr;\n    } else if ((0, _isIterable3.default)(Object(arr))) {\n      return sliceIterator(arr, i);\n    } else {\n      throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/library/fn/get-iterator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/library/fn/get-iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@2.6.11@core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/library/fn/is-iterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/library/fn/is-iterable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.is-iterable */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/core.is-iterable.js\");\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@2.6.11@core-js/library/fn/is-iterable.js?");

/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/library/modules/core.get-iterator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/library/modules/core.get-iterator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@2.6.11@core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/library/modules/core.is-iterable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/library/modules/core.is-iterable.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/_core-js@2.6.11@core-js/library/modules/_core.js\").isIterable = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@2.6.11@core-js/library/modules/core.is-iterable.js?");

/***/ }),

/***/ "./node_modules/_memoize-one@5.1.1@memoize-one/dist/memoize-one.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_memoize-one@5.1.1@memoize-one/dist/memoize-one.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction areInputsEqual(newInputs, lastInputs) {\n    if (newInputs.length !== lastInputs.length) {\n        return false;\n    }\n    for (var i = 0; i < newInputs.length; i++) {\n        if (newInputs[i] !== lastInputs[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction memoizeOne(resultFn, isEqual) {\n    if (isEqual === void 0) { isEqual = areInputsEqual; }\n    var lastThis;\n    var lastArgs = [];\n    var lastResult;\n    var calledOnce = false;\n    function memoized() {\n        var newArgs = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            newArgs[_i] = arguments[_i];\n        }\n        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {\n            return lastResult;\n        }\n        lastResult = resultFn.apply(this, newArgs);\n        calledOnce = true;\n        lastThis = this;\n        lastArgs = newArgs;\n        return lastResult;\n    }\n    return memoized;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (memoizeOne);\n\n\n//# sourceURL=webpack:///./node_modules/_memoize-one@5.1.1@memoize-one/dist/memoize-one.esm.js?");

/***/ }),

/***/ "./src/components/hooks/context.js":
/*!*****************************************!*\
  !*** ./src/components/hooks/context.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar text = _react2.default.createContext();\nexports.default = text;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/components/hooks/context.js?");

/***/ }),

/***/ "./src/components/hooks/testContext.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/testContext.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _context = __webpack_require__(/*! ./context */ \"./src/components/hooks/context.js\");\n\nvar _context2 = _interopRequireDefault(_context);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @description React hooks useContext\n */\n\nfunction Father() {\n    return _react2.default.createElement(\n        _context2.default.Provider,\n        { value: { content: 'this is Reactv16 context' } },\n        _react2.default.createElement(Son, null)\n    );\n}\nfunction Son() {\n    var contextvalue = (0, _react.useContext)(_context2.default);\n    return _react2.default.createElement(\n        'div',\n        null,\n        contextvalue.value\n    );\n}\nexports.default = Father;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/components/hooks/testContext.js?");

/***/ }),

/***/ "./src/components/hooks/testReducer.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/testReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @description 对比hooks reducers和redux reducers\n */\n\nfunction countReducer(state, action) {\n    switch (action.type) {\n        case 'ADD':\n            return state + 1;\n        case 'SUB':\n            return state - 1;\n        default:\n            return 0;\n    }\n}\n\nfunction Index(props) {\n    // HOOKS reducers\n    var _useReducer = (0, _react.useReducer)(countReducer, 0),\n        _useReducer2 = (0, _slicedToArray3.default)(_useReducer, 2),\n        count2 = _useReducer2[0],\n        dispatch = _useReducer2[1];\n    // redux reducers\n\n\n    var app = (0, _reactRedux.useSelector)(function (state) {\n        return state.app;\n    });\n    var dispatch2 = (0, _reactRedux.useDispatch)();\n\n    var add = (0, _react.useCallback)(function () {\n        dispatch2({\n            type: 'ADD_PRICE'\n        });\n    }, []);\n    var sub = (0, _react.useCallback)(function () {\n        dispatch2({\n            type: 'SUB_PRICE'\n        });\n    }, []);\n\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n            'h3',\n            null,\n            '\\u6570\\u91CF1\\uFF1A',\n            count,\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                        dispatch({ type: \"ADD\" });\n                    } },\n                '\\u52A0'\n            ),\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                        dispatch({ type: \"SUB\" });\n                    } },\n                '\\u51CF'\n            )\n        ),\n        _react2.default.createElement(\n            'h3',\n            null,\n            '\\u4EF7\\u683C\\uFF1A',\n            app.price,\n            _react2.default.createElement(\n                'button',\n                { onClick: add },\n                '\\u52A0'\n            ),\n            _react2.default.createElement(\n                'button',\n                { onClick: sub },\n                '\\u51CF'\n            )\n        )\n    );\n}\n\nexports.default = Index;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/components/hooks/testReducer.js?");

/***/ }),

/***/ "./src/components/hooks/testuseMemo.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/testuseMemo.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _memoizeOne = __webpack_require__(/*! memoize-one */ \"./node_modules/_memoize-one@5.1.1@memoize-one/dist/memoize-one.esm.js\");\n\nvar _memoizeOne2 = _interopRequireDefault(_memoizeOne);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//和 usememo 很相似\n\n// function组件需要放在外面   和usememo一个效果 具有缓存结果的功效 类似于vue的计算属性\n/**\n * @description useMemo 记忆函数 类似于vue的计算属性缓存机制\n */\nvar getSum = (0, _memoizeOne2.default)(function (count1, count2) {\n    console.log('memoize-one reset compute');\n    return count1 + ':' + count2;\n});\nfunction Index() {\n    var _useState = (0, _react.useState)(0),\n        _useState2 = (0, _slicedToArray3.default)(_useState, 2),\n        count1 = _useState2[0],\n        setCount1 = _useState2[1];\n\n    var _useState3 = (0, _react.useState)(0),\n        _useState4 = (0, _slicedToArray3.default)(_useState3, 2),\n        count2 = _useState4[0],\n        setCount2 = _useState4[1];\n\n    // 用于测试\n\n\n    var _useState5 = (0, _react.useState)(false),\n        _useState6 = (0, _slicedToArray3.default)(_useState5, 2),\n        flag = _useState6[0],\n        setFlag = _useState6[1];\n\n    var sum = (0, _react.useMemo)(function () {\n        console.log('useMemo reset compute');\n        return count1 + count2;\n    }, [count1, count2]);\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h3',\n            null,\n            '\\u6570\\u91CF\\uFF1A',\n            sum,\n            '===== \\u6570\\u91CF\\uFF1A',\n            getSum(count1, count2),\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                        setCount1(count1 + 1);\n                    } },\n                'count1\\u52A0'\n            ),\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                        setCount2(count2 + 1);\n                    } },\n                'count2\\u52A0'\n            )\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    setFlag(!flag);\n                } },\n            '\\u5F15\\u8D77render'\n        ),\n        _react2.default.createElement(Son, { sum: sum })\n    );\n}\n\n// memo和pureComponent 功能一样  做了一层浅比较\nvar Son = _react2.default.memo(function (_ref) {\n    var sum = _ref.sum;\n\n    console.log('son render');\n    return _react2.default.createElement(\n        'div',\n        null,\n        '\\u5B50\\u7EC4\\u4EF6\\u9A8C\\u8BC1',\n        sum\n    );\n});\n\nexports.default = Index;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/components/hooks/testuseMemo.js?");

/***/ }),

/***/ "./src/components/hooks/testuseRef.js":
/*!********************************************!*\
  !*** ./src/components/hooks/testuseRef.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Index() {\n    var _useState = (0, _react.useState)(0),\n        _useState2 = (0, _slicedToArray3.default)(_useState, 2),\n        count = _useState2[0],\n        setCount = _useState2[1];\n\n    var countRef = (0, _react.useRef)(count);\n    var inputRef = (0, _react.useRef)();\n    var sonRef = (0, _react.useRef)();\n    // 存在缓存问题 不能读到最新的count\n    // useEffect(()=>{\n    //     const timer = setInterval(() => {\n    //         console.log('2222',count)\n    //     }, 3000)\n    //     return ()=>{\n    //         clearInterval(timer)\n    //     }\n    // },[])\n    (0, _react.useEffect)(function () {\n        var timer = setInterval(function () {\n            console.log(countRef.current);\n        }, 3000);\n        return function () {\n            clearInterval(timer);\n        };\n    }, []);\n    // 如果不写count以来 每次count值都是初始值\n    var handleClick = (0, _react.useCallback)(function () {\n        setCount(count + 1);\n        countRef.current += 1;\n    }, [count]);\n    var handleValue = (0, _react.useCallback)(function () {\n        alert(inputRef.current.value);\n    }, []);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h3',\n            null,\n            count\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: handleClick },\n            '\\u589E\\u52A0'\n        ),\n        _react2.default.createElement('input', { ref: inputRef }),\n        _react2.default.createElement(\n            'button',\n            { onClick: handleValue },\n            '\\u6253\\u5370'\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return sonRef.current.handleClick();\n                } },\n            '\\u51FA\\u53D1\\u5B50\\u7EC4\\u4EF6\\u5B9E\\u4F8B'\n        ),\n        '>',\n        _react2.default.createElement(Son, { ref: sonRef })\n    );\n} /**\n   * @description useRef处理capture value 问题  和 获取dom节点\n   */\n\nvar Son = function (_React$Component) {\n    (0, _inherits3.default)(Son, _React$Component);\n\n    function Son() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        (0, _classCallCheck3.default)(this, Son);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Son.__proto__ || (0, _getPrototypeOf2.default)(Son)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {\n            alert('this is son event');\n        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);\n    }\n\n    (0, _createClass3.default)(Son, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                'son component'\n            );\n        }\n    }]);\n    return Son;\n}(_react2.default.Component);\n\nexports.default = Index;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/components/hooks/testuseRef.js?");

/***/ }),

/***/ "./src/route/hook.js":
/*!***************************!*\
  !*** ./src/route/hook.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _testContext = __webpack_require__(/*! ../components/hooks/testContext */ \"./src/components/hooks/testContext.js\");\n\nvar _testContext2 = _interopRequireDefault(_testContext);\n\nvar _testReducer = __webpack_require__(/*! ../components/hooks/testReducer */ \"./src/components/hooks/testReducer.js\");\n\nvar _testReducer2 = _interopRequireDefault(_testReducer);\n\nvar _testuseMemo = __webpack_require__(/*! ../components/hooks/testuseMemo */ \"./src/components/hooks/testuseMemo.js\");\n\nvar _testuseMemo2 = _interopRequireDefault(_testuseMemo);\n\nvar _testuseRef = __webpack_require__(/*! ../components/hooks/testuseRef */ \"./src/components/hooks/testuseRef.js\");\n\nvar _testuseRef2 = _interopRequireDefault(_testuseRef);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar hook = function (_Component) {\n    (0, _inherits3.default)(hook, _Component);\n\n    function hook() {\n        (0, _classCallCheck3.default)(this, hook);\n        return (0, _possibleConstructorReturn3.default)(this, (hook.__proto__ || (0, _getPrototypeOf2.default)(hook)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(hook, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'hooks'\n                )\n            );\n        }\n    }]);\n    return hook;\n}(_react.Component);\n\nexports.default = hook;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack:///./src/route/hook.js?");

/***/ })

}]);