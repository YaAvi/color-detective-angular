/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	function requireAll(requireContext) {
	    return requireContext.keys().map(requireContext);
	}
	// requires and returns all modules that match
	requireAll(__webpack_require__(/*! ./www/css/ */ 1));
	//require("./www/fonts/material/material-icons.css");
	__webpack_require__(/*! ./www/js/lib/angular/angular.min.js */ 24);
	__webpack_require__(/*! ./www/js/lib/angular/angular-animate.js */ 25);
	__webpack_require__(/*! ./www/js/lib/dist/mn-touch.min.js */ 26);
	requireAll(__webpack_require__(/*! ./www/js/lib/ng-cordova-master/ */ 27));
	__webpack_require__(/*! ./www/js/app.js */ 32);
	requireAll(__webpack_require__(/*! ./www/js/cd-common/ */ 33));
	requireAll(__webpack_require__(/*! ./www/js/cd-data/ */ 39));
	requireAll(__webpack_require__(/*! ./www/js/cd-head/ */ 41));
	requireAll(__webpack_require__(/*! ./www/js/cd-footer/ */ 48));
	requireAll(__webpack_require__(/*! ./www/js/cd-history/ */ 58));
	requireAll(__webpack_require__(/*! ./www/js/cd-image/ */ 64));

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./www/css ^\.\/.*\.css$ ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./animate.css": 2,
		"./animation.css": 6,
		"./buttons.css": 8,
		"./color.css": 10,
		"./header.css": 12,
		"./history.css": 14,
		"./icons.css": 16,
		"./image.css": 18,
		"./style.css": 20,
		"./url-box.css": 22
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./www/css/animate.css ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./animate.css */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./animate.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./animate.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!********************************************!*\
  !*** ./~/css-loader!./www/css/animate.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/*!*******************************!*\
  !*** ./www/css/animation.css ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./animation.css */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./animation.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./animation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!**********************************************!*\
  !*** ./~/css-loader!./www/css/animation.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*---------------- ANIMATIONS ---------------*/\r\n\r\n.color-samples.ng-enter,\r\n.color-samples.ng-leave {\r\n    transition: margin 300ms;\r\n    -webkit-animation-duration: 700ms;\r\n    animation-duration: 700ms;\r\n}\r\n\r\n.color-samples.ng-enter,\r\n.color-samples.ng-leave-active {\r\n    margin-bottom: -52px;\r\n}\r\n.color-samples.ng-enter-active {\r\n    margin-bottom: 2px;\r\n}\r\n.color-samples.ng-enter {\r\n    -webkit-animation-name: rollIn;\r\n    animation-name: rollIn;\r\n}\r\n.color-samples.ng-leave {\r\n    -webkit-animation-name: rollOut;\r\n    animation-name: rollOut;\r\n}\r\n.ng-enter-stagger,\r\n.ng-leave-stagger {\r\n    transition-delay: 150ms;\r\n    transition-duration: 0;\r\n    -webkit-animation-delay: 150ms;\r\n    animation-delay: 150ms;\r\n    -webkit-animation-duration: 0s;\r\n    animation-duration: 0s;\r\n}", ""]);
	
	// exports


/***/ },
/* 8 */
/*!*****************************!*\
  !*** ./www/css/buttons.css ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./buttons.css */ 9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./buttons.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./buttons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/*!********************************************!*\
  !*** ./~/css-loader!./www/css/buttons.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".button-div {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.button {\r\n    width: 20%;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    float: left;\r\n    background-color: #696969;\r\n}", ""]);
	
	// exports


/***/ },
/* 10 */
/*!***************************!*\
  !*** ./www/css/color.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./color.css */ 11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./color.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./color.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/*!******************************************!*\
  !*** ./~/css-loader!./www/css/color.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".color {\r\n    width: 100%;\r\n    font-size: 1em;\r\n    position: absolute;\r\n    bottom: 69px;\r\n    padding: 23px 0 23px 0;\r\n    text-align: center;\r\n    background-color: #777777;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.color p {\r\n    transition: all .1s ease-out;\r\n}\r\n\r\n.color p:active {\r\n    transform: scale(1.3);\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 12 */
/*!****************************!*\
  !*** ./www/css/header.css ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./header.css */ 13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./header.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/*!*******************************************!*\
  !*** ./~/css-loader!./www/css/header.css ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".head {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    z-index: 500;\r\n    background-color: #737373;\r\n    transition: all .3s ease-in-out;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 2px 6px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.history-button {\r\n    padding: 9px 4px;\r\n    float: left;\r\n    width: 10%;\r\n}\r\n\r\n.history-button:active > .material-icons {\r\n    transform: scale(0.7);\r\n}\r\n\r\n.title {\r\n    float: left;\r\n    width: 48%;\r\n    padding: 14px 5px;\r\n    font-size: 1.13em;\r\n}\r\n\r\n.prev-button {\r\n    width: 10%;\r\n    padding: 9px 4px;\r\n    float: right;\r\n}\r\n\r\n.prev-button:active > .material-icons {\r\n    transform: scale(0.7);\r\n}\r\n\r\n.next-button {\r\n    width: 10%;\r\n    padding: 9px 4px;\r\n    float: right;\r\n}\r\n\r\n.next-button:active > .material-icons {\r\n    transform: scale(0.7);\r\n}\r\n\r\n.donate {\r\n    padding: 9px 4px;\r\n    float: right;\r\n    width: 10%;\r\n}\r\n\r\n.donate:active > .material-icons {\r\n    transform: scale(0.7);\r\n}", ""]);
	
	// exports


/***/ },
/* 14 */
/*!*****************************!*\
  !*** ./www/css/history.css ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./history.css */ 15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./history.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./history.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/*!********************************************!*\
  !*** ./~/css-loader!./www/css/history.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".history {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: -190px;\r\n    width: 190px;\r\n    transition: all .2s ease;\r\n    z-index: 100;\r\n    background-color: rgba(77, 77, 77, 0.5);\r\n    bottom: 134px;\r\n    overflow: auto;\r\n}\r\n\r\n.open-history {\r\n    transform: translate3d(190px, 0, 0);\r\n}\r\n\r\n.close-history {\r\n    transform: translate3d(-190px, 0, 0);\r\n}\r\n\r\n.color-samples {\r\n    width: 180px;\r\n    height: 50px;\r\n    z-index: 101;\r\n    margin: 2px 5px;\r\n    position: initial;\r\n    float: left;\r\n}\r\n\r\n.color-name {\r\n    width: 100%;\r\n    padding-top: 1px;\r\n    padding-left: 3px;\r\n}\r\n\r\n.color-hex {\r\n    text-align: right;\r\n    width: 59%;\r\n    padding-top: 10px;\r\n    padding-right: 3px;\r\n    float: right;\r\n}\r\n\r\n.del-buttons {\r\n    margin: 5px;\r\n}\r\n\r\n.del-one {\r\n    width: 50%;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n.del-all {\r\n    width: 50%;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n.del-one:active > .material-icons {\r\n    transform: scale(0.7);\r\n}\r\n\r\n.del-all:active > .material-icons {\r\n    transform: scale(0.7);\r\n}", ""]);
	
	// exports


/***/ },
/* 16 */
/*!***************************!*\
  !*** ./www/css/icons.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./icons.css */ 17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./icons.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./icons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/*!******************************************!*\
  !*** ./~/css-loader!./www/css/icons.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".material-icons {\r\n    font-size: 2em !important;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.button:active > .material-icons {\r\n    transform: scale(0.7);\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n    color: #777;\r\n}", ""]);
	
	// exports


/***/ },
/* 18 */
/*!***************************!*\
  !*** ./www/css/image.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./image.css */ 19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./image.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./image.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/*!******************************************!*\
  !*** ./~/css-loader!./www/css/image.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".zoomable {\r\n    position: fixed;\r\n    top: 50px;\r\n    width: 100%;\r\n    bottom: 134px;\r\n    overflow: auto;\r\n    overflow-x: auto;\r\n    display: flex;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    margin: auto;\r\n    vertical-align: middle;\r\n    transition: all .3s ease;\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
/*!***************************!*\
  !*** ./www/css/style.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./style.css */ 21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/*!******************************************!*\
  !*** ./~/css-loader!./www/css/style.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n[ng\\:cloak],\r\n[ng-cloak],\r\n[data-ng-cloak],\r\n[x-ng-cloak],\r\n.ng-cloak,\r\n.x-ng-cloak {\r\n    display: none !important;\r\n}\r\n\r\nbody {\r\n    background-color: #909090;\r\n    color: floralwhite;\r\n    -webkit-user-select: none;\r\n    /* Chrome/Safari */\r\n    -moz-user-select: none;\r\n    /* Firefox */\r\n    -ms-user-select: none;\r\n    /* IE10+ */\r\n}", ""]);
	
	// exports


/***/ },
/* 22 */
/*!*****************************!*\
  !*** ./www/css/url-box.css ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./url-box.css */ 23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./url-box.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./url-box.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/*!********************************************!*\
  !*** ./~/css-loader!./www/css/url-box.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".image-url {\r\n    position: fixed;\r\n    bottom: -70px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 70px;\r\n    z-index: 1000;\r\n    transition: all .15s ease;\r\n    background-color: dimgrey;\r\n}\r\n\r\n.open-url {\r\n    transform: translate3d(0, -70px, 0);\r\n}\r\n\r\n.close-url {\r\n    transform: translate3d(0, 70px, 0);\r\n}\r\n\r\n.url-input {\r\n    margin: 15px 7px;\r\n    padding: 10px;\r\n    width: 77%;\r\n}\r\n\r\n.url-confirm {\r\n    float: right;\r\n    padding: 20px 6px;\r\n    background-color: #737373;\r\n}\r\n\r\n.url-confirm:active > .material-icons {\r\n    transform: scale(0.7);\r\n}", ""]);
	
	// exports


/***/ },
/* 24 */
/*!*******************************************!*\
  !*** ./www/js/lib/angular/angular.min.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.5
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(v){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.5/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ya(a){if(null==a||Va(a))return!1;if(K(a)||F(a)||B&&a instanceof B)return!0;
	var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(oc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
	b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function pc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function qc(a){return function(b,d){a(d,b)}}function Xd(){return++nb}function Nb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(G(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var n=h[k],m=g[n];d&&G(m)?fa(m)?a[n]=new Date(m.valueOf()):Wa(m)?a[n]=new RegExp(m):m.nodeName?a[n]=m.cloneNode(!0):
	Ob(m)?a[n]=m.clone():(G(a[n])||(a[n]=K(m)?[]:{}),Nb(a[n],[m],!0)):a[n]=m}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Nb(a,za.call(arguments,1),!1)}function Yd(a){return Nb(a,za.call(arguments,1),!0)}function X(a){return parseInt(a,10)}function Pb(a,b){return R(Object.create(a),b)}function C(){}function Xa(a){return a}function da(a){return function(){return a}}function rc(a){return E(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function x(a){return"undefined"!==
	typeof a}function G(a){return null!==a&&"object"===typeof a}function oc(a){return null!==a&&"object"===typeof a&&!sc(a)}function F(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function fa(a){return"[object Date]"===ma.call(a)}function E(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Da(a){return"boolean"===typeof a}function Zd(a){return a&&Q(a.length)&&
	$d.test(ma.call(a))}function Ob(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ae(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function va(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function qa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(oc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
	(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!G(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw Aa("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(sc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
	case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
	g=[];if(b){if(Zd(b)||"[object ArrayBuffer]"===ma.call(b))throw Aa("cpta");if(a===b)throw Aa("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function ha(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(G(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function pa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
	"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!pa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?pa(a.getTime(),b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||K(b)||fa(b)||Wa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!pa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!E(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(za.call(b,
	d))}function tc(a,b){var d=2<arguments.length?za.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function be(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&v.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function ab(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,be,
	b)}function uc(a){return F(a)?JSON.parse(a):a}function vc(a,b){a=a.replace(ce,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Qb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=vc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function wa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ma?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}
	function wc(a){try{return decodeURIComponent(a)}catch(b){}}function xc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,ua.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Rb(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}
	function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function de(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,F(d=a.getAttribute(d)))return d;return null}function ee(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
	q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==de(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){G(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===v.document?"document":wa(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
	b.unshift("ng");c=bb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;v&&e.test(v.name)&&(d.debugInfoEnabled=!0,v.name=v.name.replace(e,""));if(v&&!f.test(v.name))return c();v.name=v.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function fe(){v.name=
	"NG_ENABLE_DEBUG_INFO!"+v.name;v.location.reload()}function ge(a){a=ea.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(he,function(a,c){return(c?b:"")+a.toLowerCase()})}function ie(){var a;if(!Ac){var b=pb();(Z=y(b)?v.jQuery:b?v[b]:void 0)&&Z.fn.on?(B=Z,R(Z.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=Z.cleanData,Z.cleanData=function(b){for(var c,
	e=0,f;null!=(f=b[e]);e++)(c=Z._data(f,"events"))&&c.$destroy&&Z(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&K(a)&&(a=a[a.length-1]);qb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
	b[g],a&&(a=(e=a)[c]);return!d&&E(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(za.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function je(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
	(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return M}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return M}}if(!g)throw d("nomod",f);var c=[],e=[],r=[],N=a("$injector","invoke","push",e),M={_invokeQueue:c,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
	"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:N,run:function(a){r.push(a);return this}};h&&N(h);return M})}})}function ke(a){R(a,{bootstrap:yc,copy:qa,extend:R,merge:Yd,equals:pa,element:B,forEach:q,injector:bb,noop:C,bind:tc,toJson:ab,fromJson:uc,identity:Xa,isUndefined:y,
	isDefined:x,isString:F,isFunction:E,isObject:G,isNumber:Q,isElement:Ob,isArray:K,version:le,isDate:fa,lowercase:P,uppercase:sb,callbacks:{counter:0},getTestability:ge,$$minErr:O,$$csp:Ea,reloadWithDebugInfo:fe});Sb=je(v);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:me});a.provider("$compile",Cc).directive({a:ne,input:Dc,textarea:Dc,form:oe,script:pe,select:qe,style:re,option:se,ngBind:te,ngBindHtml:ue,ngBindTemplate:ve,ngClass:we,ngClassEven:xe,ngClassOdd:ye,ngCloak:ze,ngController:Ae,
	ngForm:Be,ngHide:Ce,ngIf:De,ngInclude:Ee,ngInit:Fe,ngNonBindable:Ge,ngPluralize:He,ngRepeat:Ie,ngShow:Je,ngStyle:Ke,ngSwitch:Le,ngSwitchWhen:Me,ngSwitchDefault:Ne,ngOptions:Oe,ngTransclude:Pe,ngModel:Qe,ngList:Re,ngChange:Se,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Te,ngModelOptions:Ue}).directive({ngInclude:Ve}).directive(tb).directive(Ic);a.provider({$anchorScroll:We,$animate:Xe,$animateCss:Ye,$$animateJs:Ze,$$animateQueue:$e,
	$$AnimateRunner:af,$$animateAsyncRun:bf,$browser:cf,$cacheFactory:df,$controller:ef,$document:ff,$exceptionHandler:gf,$filter:Jc,$$forceReflow:hf,$interpolate:jf,$interval:kf,$http:lf,$httpParamSerializer:mf,$httpParamSerializerJQLike:nf,$httpBackend:of,$xhrFactory:pf,$location:qf,$log:rf,$parse:sf,$rootScope:tf,$q:uf,$$q:vf,$sce:wf,$sceDelegate:xf,$sniffer:yf,$templateCache:zf,$templateRequest:Af,$$testability:Bf,$timeout:Cf,$window:Df,$$rAF:Ef,$$jqLite:Ff,$$HashMap:Gf,$$cookieReader:Hf})}])}function cb(a){return a.replace(If,
	function(a,d,c,e){return e?c.toUpperCase():c}).replace(Jf,"Moz$1")}function Kc(a){a=a.nodeType;return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Kf.exec(a)||["",""])[1].toLowerCase();c=ia[c]||ia._default;d.innerHTML=c[1]+a.replace(Lf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
	return e}function Mc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=V(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new U(a)}if(b){b=v.document;var d;a=(d=Mf.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||db(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)db(d[c])}function Oc(a,
	b,d,c){if(x(c))throw Ub("offargs");var e=(c=vb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&Za(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);wb[a]&&g(wb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function db(a,b){var d=a.ng339,c=d&&eb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete eb[d],a.ng339=void 0))}function vb(a,b){var d=
	a.ng339,d=d&&eb[d];b&&!d&&(a.ng339=d=++Nf,d=eb[d]={events:{},data:{},handle:void 0});return d}function Wb(a,b,d){if(Kc(a)){var c=x(d),e=!c&&b&&!G(b),f=!b;a=(a=vb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function xb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function yb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
	" ").replace(" "+V(b)+" "," ")))})}function zb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Ab(a,"$"+(b||"ngController")+"Controller")}function Ab(a,
	b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Qc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Bb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Of(a,b){b=b||v;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Rc(a,b){var d=Cb[b.toLowerCase()];return d&&Sc[va(a)]&&d}function Pf(a,b){var d=function(c,
	d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Qf;1<g&&(f=ha(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
	a;return d}function Qf(a,b,d){d.call(a,b)}function Rf(a,b,d){var c=b.relatedTarget;c&&(c===a||Sf.call(a,c))||d.call(a,b)}function Ff(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return xb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)}})}}function Fa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
	d+":"+(b||Xd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Tc(a){a=Function.prototype.toString.call(a).replace(Tf,"");return a.match(Uf)||a.match(Vf)}function Wf(a){return(a=Tc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function bb(a,b){function d(a){return function(b,c){if(G(b))q(b,qc(a));else return a(b,c)}}function c(a,b){Qa(a,"service");if(E(b)||K(b))b=r.instantiate(b);if(!b.$get)throw Ga("pget",a);return m[a+"Provider"]=
	b}function e(a,b){return function(){var c=w.invoke(b,this);if(y(c))throw Ga("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{F(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(r.invoke(a)):K(a)?b.push(r.invoke(a)):
	Pa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ga("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=bb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
	if("string"!==typeof l)throw Ga("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ca?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
	a))},get:d,annotate:bb.$$annotate,has:function(b){return m.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],n=new Ra([],!0),m={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Qa(a,"constant");m[a]=b;N[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=w.invoke(d,c);return w.invoke(b,null,
	{$delegate:a})}}}},r=m.$injector=h(m,function(a,b){ea.isString(b)&&l.push(b);throw Ga("unpr",l.join(" <- "));}),N={},M=h(N,function(a,b){var c=r.get(a+"Provider",b);return w.invoke(c.$get,c,void 0,a)}),w=M;m.$injectorProvider={$get:da(M)};var p=g(a),w=M.get("$injector");w.strictDi=b;q(p,function(a){a&&w.invoke(a)});return w}function We(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
	function(a){if("a"===va(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Ob(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
	b&&""===a||Of(function(){c.$evalAsync(g)})});return g}]}function fb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Xf(a){F(a)&&(a=a.split(" "));var b=T();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ha(a){return G(a)?a:{}}function Yf(a,b,d,c){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(M--,0===M)for(;w.length;)try{w.pop()()}catch(b){d.error(b)}}}function f(){u=null;g();h()}function g(){p=I();
	p=y(p)?null:p;pa(p,L)&&(p=L);L=p}function h(){if(t!==k.url()||H!==p)t=k.url(),H=p,q(J,function(a){a(k.url(),p)})}var k=this,l=a.location,n=a.history,m=a.setTimeout,r=a.clearTimeout,N={};k.isMock=!1;var M=0,w=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){M++};k.notifyWhenNoOutstandingRequests=function(a){0===M?a():w.push(a)};var p,H,t=l.href,z=b.find("base"),u=null,I=c.history?function(){try{return n.state}catch(a){}}:C;g();H=p;k.url=function(b,d,e){y(e)&&(e=null);l!==
	a.location&&(l=a.location);n!==a.history&&(n=a.history);if(b){var f=H===e;if(t===b&&(!c.history||f))return k;var h=t&&Ia(t)===Ia(b);t=b;H=e;if(!c.history||h&&f){if(!h||u)u=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(u=b)}else n[d?"replaceState":"pushState"](e,"",b),g(),H=p;return k}return u||l.href.replace(/%27/g,"'")};k.state=function(){return p};var J=[],D=!1,L=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
	f);D=!0}J.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=z.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;M++;c=m(function(){delete N[c];e(a)},b||0);N[c]=!0;return c};k.defer.cancel=function(a){return N[a]?(delete N[a],r(a),e(C),!0):!1}}function cf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Yf(a,c,b,d)}]}function df(){this.$get=
	function(){function a(a,c){function e(a){a!=m&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,n=T(),m=null,r=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(r.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return k[a]},
	remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==m&&(m=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;n=T();m=r=null},destroy:function(){n=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function zf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,
	b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,
	h=ae("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/,n=T();this.directive=function M(b,d){Qa(b,"directive");F(b)?(c(b),qb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,f){try{var g=a.invoke(e);E(g)?g={compile:da(g)}:!g.compile&&g.link&&(g.compile=da(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||b;g.require=g.require||g.controller&&g.name;g.restrict=
	g.restrict||"EA";g.$$moduleName=e.$$moduleName;d.push(g)}catch(h){c(h)}});return d}])),e[b].push(d)):q(b,qc(M));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Uc(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
	require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=
	function(a){return x(a)?(m=a,this):m};var r=10;this.onChangesTtl=function(a){return arguments.length?(r=a,this):r};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,n,t,z,u,I,J,D){function L(){try{if(!--qa)throw Z=void 0,ga("infchng",r);u.$apply(function(){for(var a=0,b=Z.length;a<b;++a)Z[a]();Z=void 0})}finally{qa++}}function S(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<
	e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function $(a,b,c){na.innerHTML="<span "+b+">";b=na.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function A(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Mc(k,a[g]=v.document.createElement("span"))}var l=s(a,b,a,c,d,e);ba.$$addScopeClass(a);var m=null;return function(b,
	c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==va(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?B(ca(m,B("<div>").append(a).html())):c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,
	c,d,e){var f,k,l,m,n,t,p;if(r)for(p=Array(c.length),m=0;m<h.length;m+=3)f=h[m],p[f]=c[f];else p=c;m=0;for(n=h.length;m<n;)k=p[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,t=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,t)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,r,t=0;t<a.length;t++){k=new S;l=x(a[t],[],k,0===t?d:void 0,e);(f=l.length?Ba(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);
	k=f&&f.terminal||!(m=a[t].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),n=!0,r=r||f;f=null}return n?g:null}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function x(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:la(b,
	xa(va(a)),"E",d,e);for(var l,m,n,t=a.attributes,r=0,p=t&&t.length;r<p;r++){var I=!1,D=!1;l=t[r];k=l.name;m=V(l.value);l=xa(k);if(n=ya.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(Aa))&&Q(l[1])&&(I=k,D=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=m,Rc(a,l)&&(c[l]=!0);fa(a,b,m,l,n);la(b,l,"A",d,e,I,D)}a=a.className;G(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=g.exec(a);)l=xa(k[2]),
	la(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Ma:if(11===Ca)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);X(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=xa(k[1]),la(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(J){}}b.sort(Y);return b}function Wc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&
	e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function Xc(a,b,c){return function(d,e,f,g,h){e=Wc(e[0],b,c);return a(d,e,f,g,h)}}function Yb(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ba(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Xc(a,c,d));a.require=A.require;a.directiveName=M;if(D===A||A.$$isolateScope)a=ha(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Xc(b,c,d));
	b.require=A.require;b.directiveName=M;if(D===A||A.$$isolateScope)b=ha(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);H&&(e=u);c||(c=H?z.parent():z);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,$);if(y(f))throw ga("noslot",d,wa(z));}else return g(a,b,e,c,$)}var m,t,p,A,w,u,L,z;b===e?(f=d,z=d.$$element):(z=B(e),f=new S(z,d));w=c;D?A=c.$new(!0):r&&(w=c.$parent);g&&(L=l,L.$$boundTransclude=g,L.isSlotFilled=function(a){return!!g.$$slots[a]});
	I&&(u=O(z,f,L,I,A,c,D));D&&(ba.$$addScopeInfo(z,A,!0,!(J&&(J===D||J===D.$$originalDirective))),ba.$$addScopeClass(z,!0),A.$$isolateBindings=D.$$isolateBindings,t=ia(c,f,A,A.$$isolateBindings,D),t.removeWatches&&A.$on("$destroy",t.removeWatches));for(m in u){t=I[m];p=u[m];var Xb=t.$$bindings.bindToController;p.bindingInfo=p.identifier&&Xb?ia(w,f,p.instance,Xb,t):{};var M=p();M!==p.instance&&(p.instance=M,z.data("$"+t.name+"Controller",M),p.bindingInfo.removeWatches&&p.bindingInfo.removeWatches(),p.bindingInfo=
	ia(w,f,p.instance,Xb,t))}q(I,function(a,b){var c=a.require;a.bindToController&&!K(c)&&G(c)&&R(u[b].instance,gb(b,c,z,u))});q(u,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&w.$on("$destroy",function(){b.$onDestroy()})});m=0;for(t=h.length;m<t;m++)p=h[m],ja(p,p.isolateScope?A:c,z,f,p.require&&gb(p.directiveName,p.require,z,u),L);var $=c;D&&(D.template||null===D.templateUrl)&&($=A);a&&a($,e.childNodes,void 0,g);for(m=
	k.length-1;0<=m;m--)p=k[m],ja(p,p.isolateScope?A:c,z,f,p.require&&gb(p.directiveName,p.require,z,u),L);q(u,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var t=-Number.MAX_VALUE,r=l.newScopeDirective,I=l.controllerDirectives,D=l.newIsolateScopeDirective,J=l.templateDirective,w=l.nonTlbTranscludeDirective,u=!1,L=!1,H=l.hasElementTranscludeDirective,z=d.$$element=B(b),A,M,$,s=e,Sa,ka=!1,C=!1,v,F=0,Ba=a.length;F<Ba;F++){A=a[F];var P=A.$$start,Q=A.$$end;P&&(z=Wc(b,P,Q));$=void 0;
	if(t>A.priority)break;if(v=A.scope)A.templateUrl||(G(v)?(W("new/isolated scope",D||r,A,z),D=A):W("new/isolated scope",D,A,z)),r=r||A;M=A.name;if(!ka&&(A.replace&&(A.templateUrl||A.template)||A.transclude&&!A.$$tlb)){for(v=F+1;ka=a[v++];)if(ka.transclude&&!ka.$$tlb||ka.replace&&(ka.templateUrl||ka.template)){C=!0;break}ka=!0}!A.templateUrl&&A.controller&&(v=A.controller,I=I||T(),W("'"+M+"' controller",I[M],A,z),I[M]=A);if(v=A.transclude)if(u=!0,A.$$tlb||(W("transclusion",w,A,z),w=A),"element"==v)H=
	!0,t=A.priority,$=z,z=d.$$element=B(ba.$$createComment(M,d[M])),b=z[0],da(f,za.call($,0),b),$[0].$$parentNode=$[0].parentNode,s=Yb(C,$,e,t,g&&g.name,{nonTlbTranscludeDirective:w});else{var la=T();$=B(Vb(b)).contents();if(G(v)){$=[];var Y=T(),X=T();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Y[a]=b;la[b]=null;X[b]=c});q(z.contents(),function(a){var b=Y[xa(va(a))];b?(X[b]=!0,la[b]=la[b]||[],la[b].push(a)):$.push(a)});q(X,function(a,b){if(!a)throw ga("reqslot",b);});for(var Z in la)la[Z]&&
	(la[Z]=Yb(C,la[Z],e))}z.empty();s=Yb(C,$,e,void 0,void 0,{needsNewScope:A.$$isolateScope||A.$$newScope});s.$$slots=la}if(A.template)if(L=!0,W("template",J,A,z),J=A,v=E(A.template)?A.template(z,d):A.template,v=ta(v),A.replace){g=A;$=Tb.test(v)?Yc(ca(A.templateNamespace,V(v))):[];b=$[0];if(1!=$.length||1!==b.nodeType)throw ga("tplrt",M,"");da(f,z,b);Ba={$attr:{}};v=x(b,[],Ba);var ea=a.splice(F+1,a.length-(F+1));(D||r)&&Zc(v,D,r);a=a.concat(v).concat(ea);U(d,Ba);Ba=a.length}else z.html(v);if(A.templateUrl)L=
	!0,W("template",J,A,z),J=A,A.replace&&(g=A),n=aa(a.splice(F,a.length-F),z,d,f,u&&s,h,k,{controllerDirectives:I,newScopeDirective:r!==A&&r,newIsolateScopeDirective:D,templateDirective:J,nonTlbTranscludeDirective:w}),Ba=a.length;else if(A.compile)try{Sa=A.compile(z,d,s),E(Sa)?m(null,Sa,P,Q):Sa&&m(Sa.pre,Sa.post,P,Q)}catch(fa){c(fa,wa(z))}A.terminal&&(n.terminal=!0,t=Math.max(t,A.priority))}n.scope=r&&!0===r.scope;n.transcludeOnThisElement=u;n.templateOnThisElement=L;n.transclude=s;l.hasElementTranscludeDirective=
	H;return n}function gb(a,b,c,d){var e;if(F(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=gb(a,b[g],c,d);else G(b)&&(e={},q(b,function(b,f){e[f]=gb(a,b,c,d)}));return e||null}function O(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,
	$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=z(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Zc(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Pb(a[d],{$$isolateScope:b,$$newScope:c})}function la(b,f,g,h,k,l,m){if(f===k)return null;k=null;if(e.hasOwnProperty(f)){var n;f=a.get(f+"Directive");for(var t=0,r=f.length;t<r;t++)try{if(n=f[t],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Pb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var I=
	n,D=n,A=n.name,J={isolateScope:null,bindToController:null};G(D.scope)&&(!0===D.bindToController?(J.bindToController=d(D.scope,A,!0),J.isolateScope={}):J.isolateScope=d(D.scope,A,!1));G(D.bindToController)&&(J.bindToController=d(D.bindToController,A,!0));if(G(J.bindToController)){var w=D.controller,z=D.controllerAs;if(!w)throw ga("noctrl",A);if(!Uc(w,z))throw ga("noident",A);}var u=I.$$bindings=J;G(u.isolateScope)&&(n.$$isolateBindings=u.isolateScope)}b.push(n);k=n}}catch(L){c(L)}}return k}function Q(b){if(e.hasOwnProperty(b))for(var c=
	a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(A(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function aa(a,b,c,d,e,f,
	g,h){var k=[],l,m,t=b[0],p=a.shift(),r=Pb(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),I=E(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,D=p.templateNamespace;b.empty();n(I).then(function(n){var J,w;n=ta(n);if(p.replace){n=Tb.test(n)?Yc(ca(D,V(n))):[];J=n[0];if(1!=n.length||1!==J.nodeType)throw ga("tplrt",p.name,I);n={$attr:{}};da(d,b,J);var z=x(J,[],n);G(p.scope)&&Zc(z,!0);a=z.concat(a);U(c,n)}else J=t,b.html(n);a.unshift(r);l=Ba(a,J,c,e,b,p,f,g,h);q(d,function(a,c){a==
	J&&(d[c]=b[0])});for(m=s(b[0].childNodes,e);k.length;){n=k.shift();w=k.shift();var u=k.shift(),L=k.shift(),z=b[0];if(!n.$$destroyed){if(w!==t){var S=w.className;h.hasElementTranscludeDirective&&p.replace||(z=Vb(J));da(u,B(w),z);A(B(z),S)}w=l.transcludeOnThisElement?ka(n,l.transclude,L):L;l(m,n,z,d,w)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=ka(b,l.transclude,e)),l(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==
	c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,wa(d));}function X(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=
	P(a||"html");switch(a){case "svg":case "math":var c=v.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return I.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return I.RESOURCE_URL}function fa(a,c,d,e,f){var g=ea(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===va(a))throw ga("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,
	c,h){c=h.$$observers||(h.$$observers=T());if(l.test(e))throw ga("nodomevents");var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
	c);break}f&&f.replaceChild(c,d);a=v.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ha(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}function ia(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(L),Z=[]),m||(m={},Z.push(h)),m[b]&&
	(e=m[b].previousValue),m[b]=new Db(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,n=e.optional,p,r,I,D;switch(e.mode){case "@":n||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Da(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;p=c[m];F(p)?d[h]=b(p)(a):Da(p)&&(d[h]=p);l[h]=new Db(Zb,d[h]);break;case "=":if(!ua.call(c,m)){if(n)break;c[m]=void 0}if(n&&!c[m])break;r=t(c[m]);D=r.literal?pa:function(a,b){return a===b||a!==a&&b!==b};
	I=r.assign||function(){p=d[h]=r(a);throw ga("nonassign",c[m],m,f.name);};p=d[h]=r(a);n=function(b){D(b,d[h])||(D(b,p)?I(a,b=d[h]):d[h]=b);return p=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(t(c[m],n),null,r.literal);k.push(n);break;case "<":if(!ua.call(c,m)){if(n)break;c[m]=void 0}if(n&&!c[m])break;r=t(c[m]);d[h]=r(a);l[h]=new Db(Zb,d[h]);n=a.$watch(r,function(a,b){a===b&&(b=d[h]);g(h,a,b);d[h]=a},r.literal);k.push(n);break;case "&":r=c.hasOwnProperty(m)?t(c[m]):C;if(r===
	C&&n)break;d[h]=function(b){return r(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var oa=/^\w/,na=v.document.createElement("div"),qa=r,Z;S.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&J.removeClass(this.$$element,
	c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=va(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+D(V(g[m]),!0),f=
	f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=D(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):oa.test(e)?this.$$element.attr(e,b):$(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),
	sa=b.endSymbol(),ta="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},ya=/^ngAttr[A-Z]/,Aa=/^(.+)Start$/;ba.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;ba.$$addBindingClass=m?function(a){A(a,"ng-binding")}:C;ba.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;ba.$$addScopeClass=m?function(a,b){A(a,b?"ng-isolate-scope":"ng-scope")}:C;ba.$$createComment=
	function(a,b){var c="";m&&(c=" "+(a||"")+": "+(b||"")+" ");return v.document.createComment(c)};return ba}]}function Db(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return cb(a.replace(Vc,""))}function $c(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Yc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Zf.call(a,b,1);return a}function Uc(a,
	b){if(b&&F(b))return b;if(F(a)){var d=bd.exec(a);if(d)return d[3]}}function ef(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");G(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!G(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,n,m;h=!0===h;k&&F(k)&&(m=k);if(F(f)){k=f.match(bd);if(!k)throw $f("ctrlfmt",f);n=k[1];m=
	m||k[3];f=a.hasOwnProperty(n)?a[n]:Bc(g.$scope,n,!0)||(b?Bc(c,n,!0):void 0);Pa(f,n,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),m&&e(g,m,l,n||f.name),R(function(){var a=d.invoke(f,l,g,n);a!==l&&(G(a)||E(a))&&(l=a,m&&e(g,m,l,n||f.name));return l},{instance:l,identifier:m});l=d.instantiate(f,g,n);m&&e(g,m,l,n||f.name);return l}}]}function ff(){this.$get=["$window",function(a){return B(a.document)}]}function gf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,
	arguments)}}]}function $b(a){return G(a)?fa(a)?a.toISOString():ab(a):a}function mf(){this.$get=function(){return function(a){if(!a)return"";var b=[];pc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ja(c)+"="+ja($b(a)))}):b.push(ja(c)+"="+ja($b(a))))});return b.join("&")}}}function nf(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(G(a)?c:"")+"]")}):G(a)&&!fa(a)?pc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+
	"="+ja($b(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function ac(a,b){if(F(a)){var d=a.replace(ag,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(cd))||(c=(c=d.match(bg))&&cg[c[0]].test(d));c&&(a=uc(d))}}return a}function dd(a){var b=T(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=P(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):G(a)&&q(a,function(a,d){var f=P(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function ed(a){var b;
	return function(d){b||(b=dd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function fd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function lf(){var a=this.defaults={transformResponse:[ac],transformRequest:[function(a){return G(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?ab(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(bc),put:ha(bc),patch:ha(bc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
	paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function n(b){function c(a){var b=R({},a);b.data=fd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,
	e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!G(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ha(b))}(b);f.method=sb(f.method);f.paramSerializer=F(f.paramSerializer)?
	l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=fd(b.data,ed(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===P(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return m(b,e).then(c,c)},void 0],h=k.when(f);for(q(M,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var n=g.shift(),
	h=h.then(b,n)}d?(h.success=function(a){Pa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Pa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=gd("success"),h.error=gd("error"));return h}function m(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){m(c,a,d,e)}L&&(200<=a&&300>a?L.put(A,[a,c,dd(d),
	e]):L.remove(A));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function u(a){m(a.data,a.status,ha(a.headers()),a.statusText)}function I(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var J=k.defer(),D=J.promise,L,S,M=c.headers,A=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);D.then(I,I);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&
	"JSONP"!==c.method||(L=G(c.cache)?c.cache:G(a.cache)?a.cache:N);L&&(S=L.get(A),x(S)?S&&E(S.then)?S.then(u,u):K(S)?m(S[1],S[0],ha(S[2]),S[3]):m(S,200,{},"OK"):L.put(A,D));y(S)&&((S=hd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(M[c.xsrfHeaderName||a.xsrfHeaderName]=S),e(c.method,A,d,l,M,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return D}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var N=g("$http");a.paramSerializer=
	F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var M=[];q(c,function(a){M.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function pf(){this.$get=function(){return function(){return new v.XMLHttpRequest}}}
	function of(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return dg(a,c,a.defer,b.angular.callbacks,d[0])}]}function dg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,N="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),N=a.type,g="error"===a.type?404:200);d&&d(g,N)};f.addEventListener("load",
	n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,k,l,n,m,r,N,M,w){function p(){z&&z();u&&u.abort()}function H(b,c,e,f,g){x(J)&&d.cancel(J);z=u=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==P(e)){var t="_"+(c.counter++).toString(36);c[t]=function(a){c[t].data=a;c[t].called=!0};var z=f(h.replace("JSON_CALLBACK","angular.callbacks."+t),t,function(a,b){H(l,a,c[t].data,"",b);c[t]=C})}else{var u=b(e,h);
	u.open(e,h,!0);q(n,function(a,b){x(a)&&u.setRequestHeader(b,a)});u.onload=function(){var a=u.statusText||"",b="response"in u?u.response:u.responseText,c=1223===u.status?204:u.status;0===c&&(c=b?200:"file"==ra(h).protocol?404:0);H(l,c,b,u.getAllResponseHeaders(),a)};e=function(){H(l,-1,null,null,"")};u.onerror=e;u.onabort=e;q(M,function(a,b){u.addEventListener(b,a)});q(w,function(a,b){u.upload.addEventListener(b,a)});r&&(u.withCredentials=!0);if(N)try{u.responseType=N}catch(I){if("json"!==N)throw I;
	}u.send(y(k)?null:k)}if(0<m)var J=d(p,m);else m&&E(m.then)&&m.then(p)}}function jf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,m,r){function H(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);
	var d;if(r&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=ab(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var t;k||(k=g(f),t=da(k),t.exp=f,t.expressions=[],t.$$watchDelegate=h);return t}r=!!r;var z,u,I=0,J=[],D=[];t=f.length;for(var L=[],S=[];I<t;)if(-1!=(z=f.indexOf(a,I))&&-1!=(u=f.indexOf(b,z+l)))I!==z&&L.push(g(f.substring(I,z))),I=f.substring(z+l,u),J.push(I),D.push(d(I,H)),I=u+n,S.push(L.length),L.push("");
	else{I!==t&&L.push(g(f.substring(I)));break}m&&1<L.length&&Ja.throwNoconcat(f);if(!k||J.length){var q=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&y(a[b]))return;L[S[b]]=a[b]}return L.join("")};return R(function(a){var b=0,d=J.length,e=Array(d);try{for(;b<d;b++)e[b]=D[b](a);return q(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:J,$$watchDelegate:function(a,b){var c;return a.$watchGroup(D,function(d,e){var f=q(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,n=b.length,m=new RegExp(a.replace(/./g,
	f),"g"),r=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function kf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,n){function m(){r?f.apply(null,N):f(p)}var r=4<arguments.length,N=r?za.call(arguments,4):[],q=b.setInterval,w=b.clearInterval,p=0,H=x(n)&&!n,t=(H?c:d).defer(),z=t.promise;l=x(l)?l:0;z.$$intervalId=q(function(){H?e.defer(m):a.$evalAsync(m);t.notify(p++);0<l&&p>=l&&(t.resolve(p),
	w(z.$$intervalId),delete g[z.$$intervalId]);H||a.$apply()},k);g[z.$$intervalId]=t;return z}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function cc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function id(a,b){var d=ra(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=X(d.port)||eg[d.protocol]||null}function jd(a,b){var d="/"!==a.charAt(0);
	d&&(a="/"+a);var c=ra(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function na(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ia(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function hb(a){return a.replace(/(#.+)|#$/,"$1")}function dc(a,b,d){this.$$html5=!0;d=d||"";id(a,this);this.$$parse=function(a){var d=na(b,
	a);if(!F(d))throw Eb("ipthprfx",a,b);jd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Rb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;x(f=na(a,c))?(g=f,g=x(f=na(d,f))?b+(na("/",f)||f):a+g):x(f=na(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function ec(a,b,d){id(a,this);
	this.$$parse=function(c){var e=na(a,c)||na(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=na(d,e),y(f)&&(f=e));jd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=
	function(b,d){return Ia(a)==Ia(b)?(this.$$parse(b),!0):!1}}function kd(a,b,d){this.$$html5=!0;ec.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ia(c)?f=c:(g=na(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Fb(a){return function(){return this[a]}}function ld(a,
	b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function qf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Da(a)?(b.enabled=a,this):G(a)?(Da(a.enabled)&&(b.enabled=a.enabled),Da(a.requireBase)&&(b.requireBase=a.requireBase),Da(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,
	c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,n;n=c.baseHref();var m=c.url(),r;if(b.enabled){if(!n&&b.requireBase)throw Eb("nobase");r=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(n||"/");n=e.history?dc:kd}else r=Ia(m),n=ec;var N=r.substr(0,Ia(r).lastIndexOf("/")+1);l=new n(r,N,"#"+a);l.$$parseLinkUrl(m,m);l.$$state=c.state();
	var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");G(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ra(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
	!0))}});hb(l.absUrl())!=hb(m)&&c.url(l.absUrl(),!0);var w=!0;c.onUrlChange(function(a,b){y(na(N,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=hb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(w=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=hb(c.url()),b=hb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(w||
	m)w=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function rf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
	(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ta(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
	a||"__proto__"===a)throw ca("isecfld",b);return a}function fg(a){return a+""}function sa(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===gg||a===hg||a===ig)throw ca("isecff",b);}}function Gb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||
	a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function jg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function aa(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){aa(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:aa(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;
	break;case s.BinaryExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:aa(a.test,b);aa(a.alternate,b);aa(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
	!1;a.toWatch=[a];break;case s.MemberExpression:aa(a.object,b);a.computed&&aa(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){aa(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:aa(a.left,b);aa(a.right,b);a.constant=a.left.constant&&a.right.constant;
	a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){aa(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){aa(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;
	var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function pd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function sd(a,
	b){this.astBuilder=a;this.$filter=b}function td(a,b){this.astBuilder=a;this.$filter=b}function Hb(a){return"constructor"==a}function fc(a){return E(a.valueOf)?a.valueOf():kg.call(a)}function sf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,D;e=e||H;switch(typeof c){case "string":D=c=c.trim();var q=e?b:a;g=q[D];if(!g){":"===
	c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?p:w;var S=new gc(g);g=(new hc(S,f,g)).parse(c);g.constant?g.$$watchDelegate=r:k?g.$$watchDelegate=g.literal?m:n:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));q[D]=g}return N(g,d);case "function":return N(c,d);default:return N(C,d)}}function h(a){function b(c,d,e,f){var g=H;H=!0;try{return a(c,d,e,f)}finally{H=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&
	c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&fc(b));return g},b,c,e)}for(var l=[],m=[],n=0,r=f.length;n<r;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);
	if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&fc(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function n(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function m(a,b,c,d){function e(a){var b=!0;q(a,function(a){x(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function r(a,b,c,d){var e;
	return e=a.$watch(function(a){e();return d(a)},b,c)}function N(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==m&&c!==n?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var M=Ea().noUnsafeEval,w={csp:M,expensiveChecks:!1,literals:qa(d),isIdentifierStart:E(c)&&c,
	isIdentifierContinue:E(e)&&e},p={csp:M,expensiveChecks:!0,literals:qa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},H=!1;g.$$runningExpensiveChecks=function(){return H};return g}]}function uf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},b)}]}function vf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,
	c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
	a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(G(a)||E(a))g=a&&a.then;E(g)?
	(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];
	a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=
	d.prototype;n.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=l;n.resolve=l;n.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Ef(){this.$get=["$window","$timeout",function(a,
	b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function tf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=
	null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=
	this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function m(a){if(H.$$phase)throw d("inprog",H.$$phase);H.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function N(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function w(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=
	null}function p(){null===e&&(e=h.defer(function(){H.$apply(w)}))}n.prototype={constructor:n,$new:function(b,c){var d;c=c||this;b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,
	a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=Za(k,l)&&r(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,
	b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(G(e))if(ya(e))for(f!==m&&(f=m,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>
	a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),m=[],r={},p=!0,t=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,n,r,p,q,N=b,u,x=[],y,v;m("$digest");h.$$checkUrlChange();this===H&&null!==e&&(h.defer.cancel(e),w());c=null;do{q=!1;
	for(u=this;t.length;){try{v=t.shift(),v.scope.$eval(v.expression,v.locals)}catch(C){f(C)}c=null}a:do{if(r=u.$$watchers)for(p=r.length;p--;)try{if(a=r[p])if(n=a.get,(g=n(u))!==(k=a.last)&&!(a.eq?pa(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?qa(g,null):g,l=a.fn,l(g,k===s?g:k,u),5>N&&(y=4-N,x[y]||(x[y]=[]),x[y].push({msg:E(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(F){f(F)}if(!(r=u.$$watchersCount&&
	u.$$childHead||u!==this&&u.$$nextSibling))for(;u!==this&&!(r=u.$$nextSibling);)u=u.$parent}while(u=r);if((q||t.length)&&!N--)throw H.$$phase=null,d("infdig",b,x);}while(q||t.length);for(H.$$phase=null;z.length;)try{z.shift()()}catch(B){f(B)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)N(this,this.$$listenerCount[b],b);a&&a.$$childHead==
	this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||
	t.length||h.defer(function(){t.length&&H.$digest()});t.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{m("$apply");try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){f(b)}finally{try{H.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);p()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=
	0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,N(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,n--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);
	h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=
	null;return e}};var H=new n,t=H.$$asyncQueue=[],z=H.$$postDigestQueue=[],u=H.$$applyAsyncQueue=[];return H}]}function me(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ra(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function lg(a){if("self"===a)return a;
	if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function wd(a){var b=[];x(a)&&q(a,function(a){b.push(lg(a))});return b}function xf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",
	function(d){function c(a,b){return"self"===a?hd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=
	e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=ra(e.toString()),m,r,q=!1;m=0;for(r=a.length;m<r;m++)if(c(a[m],g)){q=!0;break}if(q)for(m=0,r=b.length;m<r;m++)if(c(b[m],
	g)){q=!1;break}if(q)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function wf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw ta("iequirks");var c=ha(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},
	c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=P(b);c[cb("parse_as_"+d)]=function(b){return e(a,b)};c[cb("get_trusted_"+d)]=function(b){return f(a,b)};c[cb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function yf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,
	e=X((/android (\d+)/.exec(P((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,n=!1,m=!1;if(l){for(var r in l)if(n=k.exec(r)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||h+"Transition"in l);m=!!("animation"in l||h+"Animation"in l);!e||n&&m||(n=F(l.webkitTransition),m=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===
	a&&11>=Ca)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ea(),vendorPrefix:h,transitions:n,animations:m,android:e}}]}function Af(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;F(g)&&b.get(g)||(g=e.getTrustedResourceUrl(g));var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==ac}):k===ac&&(k=null);return d.get(g,
	R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw mg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Bf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+
	vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Cf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
	function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var n=za.call(arguments,3),m=x(l)&&!l,r=(m?c:d).defer(),q=r.promise,s;s=b.defer(function(){try{r.resolve(f.apply(null,n))}catch(b){r.reject(b),e(b)}finally{delete g[q.$$timeoutId]}m||a.$apply()},k);q.$$timeoutId=s;g[s]=r;return q}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ra(a){Ca&&(Y.setAttribute("href",a),a=
	Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function hd(a){a=F(a)?ra(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function Df(){this.$get=da(v)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},
	c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Hf(){this.$get=yd}function Jc(a){function b(d,c){if(G(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);b("filter",ng);
	b("json",og);b("limitTo",pg);b("lowercase",qg);b("number",Bd);b("orderBy",Cd);b("uppercase",rg)}function ng(){return function(a,b,d){if(!ya(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(ic(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=sg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function sg(a,b,d){var c=G(a)&&"$"in a;!0===b?b=pa:E(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===
	b;if(G(b)||G(a)&&!rc(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!G(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=ic(a),g=ic(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return Ka(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&(f="$"===h,!Ka(f?a:a[h],
	e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function ic(a){return null===a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function tg(a){var b=0,d,c,e,f,g;-1<
	(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==jc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==jc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function ug(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=
	Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Dd(a,b,d,c,e){if(!F(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=tg(h);ug(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
	b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Ib(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=jc+a;d&&(a=a.substr(a.length-b));return e+a}function W(a,b,d,c,e){d=
	d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Ib(f,b,c,e)}}function ib(a,b,d){return function(c,e){var f=c["get"+a](),g=sb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ib(b,a)}}function kc(a,b){return 0>=a.getFullYear()?
	b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));f=X(b[4]||0)-f;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=
	[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=vg.test(c)?X(c):b(c));Q(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=wg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var n=c.getTimezoneOffset();f&&(n=vc(f,n),c=Qb(c,f,!0));q(h,function(b){k=xg[b];g+=k?k(c,a.DATETIME_FORMATS,n):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function og(){return function(a,b){y(b)&&(b=2);return ab(a,b)}}function pg(){return function(a,b,d){b=Infinity===
	Math.abs(Number(b))?Number(b):X(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!F(a))return a;d=!d||isNaN(d)?0:X(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Xa;if(E(b))h=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
	descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!ya(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
	c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(rc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],q=0;c.type===f.type?c.value!==f.value&&(q=c.value<f.value?-1:1):q=c.type<f.type?-1:1;if(c=q*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Id(a,
	b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Jb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
	f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Jb};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);
	c.addClass(a,Kb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function lc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=P(b[0].type);
	if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
	b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",n)}b.on("change",l);if(Kd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Lb(a,b){return function(d,c){var e,f;if(fa(d))return d;if(F(d)){'"'==d.charAt(0)&&
	'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(yg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,n){function m(a){return a&&
	!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return x(a)&&!fa(a)?d(a)||void 0:a}Ld(e,f,g,h);jb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Qb(a,q)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw lb("datefmt",a);if(m(a))return(s=a)&&q&&(s=Qb(s,q,!0)),n("date")(a,c,q);s=null;return""});if(x(g.min)||g.ngMin){var w;h.$validators.min=function(a){return!m(a)||y(w)||d(a)>=
	w};g.$observe("min",function(a){w=r(a);h.$validate()})}if(x(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!m(a)||y(p)||d(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function Ld(a,b,d,c){(c.$$hasNativeValidators=G(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Md(a,b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function mc(a,b){a="ngClass"+a;return["$animate",
	function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):G(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||T(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
	c);return d.join(" ")}function n(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function m(a){if(!0===b||f.$index%2===b){var c=e(a||[]);if(!r)k(c);else if(!pa(a,r)){var d=e(r);n(d,c)}}r=K(a)?a.map(function(a){return ha(a)}):ha(a)}var r;f.$watch(h[a],m,!0);h.$observe("class",function(b){m(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
	function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Nd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Nd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Od(c.$pending)&&(c.$pending=void 0));Da(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
	a,f),h(c.$$success,a,f));c.$pending?(b(Pd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Pd,!1),c.$valid=Od(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var zg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,P=function(a){return F(a)?a.toLowerCase():a},sb=function(a){return F(a)?a.toUpperCase():a},Ca,
	B,Z,za=[].slice,Zf=[].splice,Ag=[].push,ma=Object.prototype.toString,sc=Object.getPrototypeOf,Aa=O("ng"),ea=v.angular||(v.angular={}),Sb,nb=0;Ca=v.document.documentMode;C.$inject=[];Xa.$inject=[];var K=Array.isArray,$d=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return F(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ea=function(){if(!x(Ea.rules)){var a=v.document.querySelector("[ng-csp]")||
	v.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ea.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ea;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ea.rules},pb=function(){if(x(pb.name_))return pb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=v.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
	"jq");break}return pb.name_=e},ce=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],he=/[A-Z]/g,Ac=!1,Ma=3,le={full:"1.5.5",major:1,minor:5,dot:5,codeName:"material-conspiration"};U.expando="ng339";var eb=U.cache={},Nf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var If=/([\:\-\_]+(.))/g,Jf=/^moz([A-Z])/,wb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=O("jqLite"),Mf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Kf=/<([\w:-]+)/,Lf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Sf=v.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
	v.document.readyState?v.setTimeout(b):(this.on("DOMContentLoaded",b),U(v).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Ag,sort:[].sort,splice:[].splice},Cb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[P(a)]=a});var Sc={};q("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var ad={ngMinlength:"minlength",
	ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Wb,removeData:db,hasData:function(a){for(var b in eb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)db(a[b])}},function(a,b){U[b]=a});q({data:Wb,inheritedData:Ab,scope:function(a){return B.data(a,"$scope")||Ab(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Ab(a,
	"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:xb,css:function(a,b,d){b=cb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=P(b),Cb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=
	d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===va(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Qc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Qc&&y(2==a.length&&
	a!==xb&&a!==Pc?b:c)){if(G(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:db,on:function(a,b,d,c){if(x(c))throw Ub("onargs");if(Kc(a)){c=vb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Pf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
	c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],wb[b]?(h(wb[b],Rf),h(b,void 0,!0)):h(b)}},off:Oc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);q(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
	b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Mc(a,B(b).eq(0).clone()[0])},remove:Bb,detach:function(a){Bb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,b,d){b&&q(b.split(" "),
	function(b){var e=d;y(e)&&(e=!xb(a,b));(e?zb:yb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=vb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
	!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=R(c,b)),b=ha(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):Nc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Ra.prototype={put:function(a,
	b){this[Fa(a,this.nextUid)]=b},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var b=this[a=Fa(a,this.nextUid)];delete this[a];return b}};var Gf=[function(){this.$get=[function(){return Ra}]}],Uf=/^([^\(]+?)=>/,Vf=/^[^\(]*\(\s*([^\)]*)\)/m,Bg=/,/,Cg=/^\s*(_?)(\S+?)\1\s*$/,Tf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=O("$injector");bb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Wf(a)),Ga("strictdi",d);
	b=Tc(a);q(b[1].split(Bg),function(a){a.replace(Cg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Qd=O("$animate"),Ze=function(){this.$get=C},$e=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Xf(b.attr("class")),e="",f="";q(c,
	function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&zb(a,e);f&&yb(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Xe=["$provide",function(a){var b=this;this.$$registeredAnimations=
	Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Qd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Qd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
	d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ha(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ha(h))},leave:function(b,c){return a.push(b,"leave",Ha(c),function(){b.remove()})},addClass:function(b,
	c,g){g=Ha(g);g.addClass=fb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ha(g);g.removeClass=fb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ha(h);h.addClass=fb(h.addClass,c);h.removeClass=fb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ha(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=fb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],bf=function(){this.$get=
	["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},af=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
	else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
	"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
	0,this._state=2)}};return f}]},Ye=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=qa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=O("$compile"),Zb=new function(){};
	Cc.$inject=["$provide","$$sanitizeUriProvider"];Db.prototype.isFirstChange=function(){return this.previousValue===Zb};var Vc=/^((?:x|data)[\:\-_])/i,$f=O("$controller"),bd=/^(\S+)(\s+as\s+([\w$]+))?$/,hf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},cd="application/json",bc={"Content-Type":cd+";charset=utf-8"},bg=/^\[|^\{(?!\{)/,cg={"[":/]$/,"{":/}$/},ag=/^\)\]\}',?\n/,Dg=O("$http"),gd=function(a){return function(){throw Dg("legacy",
	a);}},Ja=ea.$interpolateMinErr=O("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var Eg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,eg={http:80,https:443,ftp:21},Eb=O("$location"),Fg={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Eg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Fb("$$protocol"),
	host:Fb("$$host"),port:Fb("$$port"),path:ld("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(G(a))a=qa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Eb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:ld("$$hash",function(a){return null!==
	a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([kd,ec,dc],function(a){a.prototype=Object.create(Fg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Eb("nostate");this.$$state=y(b)?null:b;return this}});var ca=O("$parse"),gg=Function.prototype.call,hg=Function.prototype.apply,ig=Function.prototype.bind,Mb=T();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var Gg={n:"\n",f:"\f",r:"\r",
	t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
	else{var b=a+this.peek(),d=b+this.peek(2),c=Mb[b],e=Mb[d];Mb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
	"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
	b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",
	a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
	readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
	this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Gg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
	s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
	a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
	assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
	this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
	b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
	this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=qa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
	callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
	this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
	object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===
	this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?
	(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};aa(c,d.$filter);var e="",f;this.stage="assign";if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=od(c.body);
	d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext",
	"ifDefined","plus","text",e))(this.$filter,Ta,sa,md,fg,Gb,jg,nd,a);this.state=this.stage=void 0;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,
	function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,n;c=c||C;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,
	void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:n=this.escape(a.value);this.assign(b,n);c(n);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});n=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,n);c(n);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});n="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,
	0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,n);c(n);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
	a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ta(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Hb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||
	this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),n=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,n),d&&(d.computed=!0,d.name=h);else{Ta(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),
	k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));n=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Hb(a.property.name))n=k.ensureSafeObject(n);k.assign(b,n);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),n=h+"("+l.join(",")+")",k.assign(b,n),c(b)):(h=k.nextId(),g={},l=
	[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),n=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):n=h+"("+l.join(",")+")";n=k.ensureSafeObject(n);k.assign(b,n)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw ca("lval");
	this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);n=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,n);c(b||n)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});n="["+l.join(",")+"]";this.assign(b,n);c(n);break;case s.ObjectExpression:l=[];q(a.properties,function(a){k.recurse(a.value,
	k.nextId(),void 0,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});n="{"+l.join(",")+"}";this.assign(b,n);c(n);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,
	"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+
	"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),
	";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=
	this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,
	b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;aa(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===
	c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
	this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ta(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Hb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ta(a.property.name,f.expression),
	e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var m=[],r=0;r<g.length;++r)m.push(g[r](a,c,d,f));a=e.apply(void 0,m,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,
	c,d,n){var m=e(a,c,d,n),r;if(null!=m.value){sa(m.context,f.expression);md(m.value,f.expression);r=[];for(var q=0;q<g.length;++q)r.push(sa(g[q](a,c,d,n),f.expression));r=sa(m.value.apply(m.context,r),f.expression)}return b?{value:r}:r};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,n){var m=c(a,d,g,n);a=e(a,d,g,n);sa(m.value,f.expression);Gb(m.context);m.context[m.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),
	function(a,c,d,e){for(var f=[],r=0;r<g.length;++r)f.push(g[r](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},r=0;r<g.length;++r)f[g[r].key]=g[r].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
	c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);
	h=(x(h)?h:0)-(x(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,
	e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,
	g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,
	name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&sa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),n,m;null!=l&&(n=b(f,g,h,k),n+="",Ta(n,e),c&&1!==c&&(Gb(l),l&&!l[n]&&(l[n]={})),m=l[n],sa(m,e));return d?{context:l,name:n,value:m}:m}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Gb(g),
	g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Hb(b))&&sa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var hc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var kg=Object.prototype.valueOf,ta=O("$sce"),oa={HTML:"html",CSS:"css",
	URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},mg=O("$compile"),Y=v.document.createElement("a"),xd=ra(v.location.href);yd.$inject=["$document"];Jc.$inject=["$provide"];var Fd=22,Ed=".",jc="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var xg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:ib("Month"),MMM:ib("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:ib("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),
	h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:ib("Day"),EEE:ib("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:kc,GG:kc,GGG:kc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},wg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	vg=/^\-?\d+$/;Ad.$inject=["$locale"];var qg=da(P),rg=da(sb);Cd.$inject=["$parse"];var ne=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};q(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,
	b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(ad,function(a,b){tb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(zg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=xa("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===
	ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Rd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",
	restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Ua).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var m=f[0];if(!("action"in e)){var r=function(b){a.$apply(function(){m.$commitViewValue();m.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",r,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",r,!1)},0,!1)})}(f[1]||m.$$parentForm).$addControl(m);var q=g?c(m.$name):C;g&&
	(q(a,m),e.$observe(g,function(b){m.$name!==b&&(q(a,void 0),m.$$parentForm.$$renameControl(m,b),q=c(m.$name),q(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);q(a,void 0);R(m,Jb)})}}}}}]},oe=Rd(),Be=Rd(!0),yg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Hg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Ig=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	Jg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Sd=/^(\d{4,})-(\d{2})-(\d{2})$/,Td=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,nc=/^(\d{4,})-W(\d\d)$/,Ud=/^(\d{4,})-(\d\d)$/,Vd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kd=T();q(["date","datetime-local","month","time","week"],function(a){Kd[a]=!0});var Wd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c)},date:kb("date",Sd,Lb(Sd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Td,Lb(Td,"yyyy MM dd HH mm ss sss".split(" ")),
	"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Vd,Lb(Vd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",nc,function(a,b){if(fa(a))return a;if(F(a)){nc.lastIndex=0;var d=nc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Ud,Lb(Ud,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Ld(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName=
	"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Jg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){x(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",
	function(a){x(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Hg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);lc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Ig.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
	a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Md(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Md(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return pa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,
	file:C},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Wd[P(g.type)]||Wd.text)(e,f,g,h[0],b,a,d,c)}}}}],Kg=/^(true|false|\d+)$/,Te=function(){return{restrict:"A",priority:100,compile:function(a,b){return Kg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},te=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
	return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],ve=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ue=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
	b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Se=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),we=mc("",!0),ye=mc("Odd",0),xe=mc("Even",1),ze=La({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ae=[function(){return{restrict:"A",scope:!0,controller:"@",
	priority:500}}],Ic={},Lg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Lg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var De=["$animate","$compile",function(a,
	b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=rb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ee=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
	transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,n,m,r){var q=0,s,w,p,y=function(){w&&(w.remove(),w=null);s&&(s.$destroy(),s=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};c.$watch(f,function(f){var n=function(){!x(h)||h&&!c.$eval(h)||b()},u=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&u===q){var b=c.$new();m.template=a;a=r(b,function(a){y();d.enter(a,null,e).then(n)});s=b;p=a;s.$emit("$includeContentLoaded",
	f);c.$eval(g)}},function(){c.$$destroyed||u!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),m.template=null)})}}}}],Ve=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Lc(e.template,v.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Fe=La({priority:450,compile:function(){return{pre:function(a,
	b,d){a.$eval(d.ngInit)}}}}),Re=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Nd="ng-invalid",Ua="ng-pristine",Kb="ng-dirty",Pd="ng-pending",lb=O("ngModel"),Mg=["$scope",
	"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
	this.$$parentForm=Jb;var n=e(d.ngModel),m=n.assign,r=n,s=m,v=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");r=function(a){var c=n(a);E(c)&&(c=b(a));return c};s=function(a,b){E(n(a))?f(a,{$$$p:b}):m(a,b)}}else if(!n.assign)throw lb("nonassign",d.ngModel,wa(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
	f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var H=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Kb);f.addClass(c,Ua)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Kb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
	this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:void 0,p.$modelValue!==c&&p.$$writeModelToScope())})}};
	this.$$runValidators=function(a,b,c){function d(){var c=!0;q(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!E(h.then))throw lb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===H&&p.$setValidity(a,b)}function g(a){h===H&&c(a)}H++;var h=
	H;(function(){var a=p.$$parserName||"parse";if(y(w))f(a,null);else return w||(q(p.$validators,function(a,b){f(b,null)}),q(p.$asyncValidators,function(a,b){f(b,null)})),f(a,w),w;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;
	if(w=y(b)?void 0:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),y(b)){w=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=r(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:void 0,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);q(p.$viewChangeListeners,
	function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&x(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=r(a);if(b!==p.$modelValue&&(p.$modelValue===
	p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;w=void 0;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,C))}return b})}],Qe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Mg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
	g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Ng=/(\s+|^)default(\s+|$)/,Ue=function(){return{restrict:"A",
	controller:["$scope","$attrs",function(a,b){var d=this;this.$options=qa(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Ng,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ge=La({terminal:!0,priority:1E3}),Og=O("ngOptions"),Pg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	Oe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Pg);if(!m)throw Og("iexp",a,wa(b));var r=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];b=d(m[2]?m[1]:r);var w=a&&d(a)||b,p=s&&d(s),v=s?function(a,b){return p(c,b)}:function(a){return Fa(a)},
	t=function(a,b){return v(a,L(a,b))},z=d(m[2]||m[1]),u=d(m[3]||""),y=d(m[4]||""),x=d(m[8]),D={},L=q?function(a,b){D[q]=b;D[r]=a;return D}:function(a){D[r]=a;return D};return{trackBy:s,getTrackByValue:t,getWatchables:d(x,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=L(l,h),l=v(l,h);b.push(l);if(m[2]||m[1])l=z(c,h),b.push(l);m[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=x(c)||[],g=f(d),h=g.length,m=0;m<h;m++){var p=d===
	g?m:g[m],q=L(d[p],p),r=w(c,q),p=v(r,q),D=z(c,q),N=u(c,q),q=y(c,q),r=new e(p,r,D,N,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[t(a)]},getViewValueFromOption:function(a){return s?ea.copy(a.viewValue):a.viewValue}}}}}var e=v.document.createElement("option"),f=v.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function n(a,b){a.element=
	b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(){var a=u&&r.readValue();if(u)for(var b=u.items.length-1;0<=b;b--){var c=u.items[b];c.group?Bb(c.element.parentNode):Bb(c.element)}u=I.getOptions();var d={};t&&h.prepend(w);u.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
	n(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=r.readValue(),(I.trackBy||v?pa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple,w;l=0;for(var p=h.children(),y=p.length;l<y;l++)if(""===p[l].value){w=p.eq(l);break}var t=!!w,z=B(e.cloneNode(!1));z.val("?");var u,I=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();v?(s.$isEmpty=function(a){return!a||0===a.length},r.writeValue=function(a){u.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
	u.getOptionFromViewValue(a))a.element.selected=!0})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=u.selectValueMap[a])&&!a.disabled&&b.push(u.getViewValueFromOption(a))});return b},I.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return I.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=function(a){var b=u.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),t||w.remove(),h[0].value=b.selectValue,b.element.selected=
	!0),b.element.setAttribute("selected","selected")):null===a||t?(z.remove(),t||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(t||w.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},r.readValue=function(){var a=u.selectValueMap[h.val()];return a&&!a.disabled?(t||w.remove(),z.remove(),u.getViewValueFromOption(a)):null},I.trackBy&&d.$watch(function(){return I.getTrackByValue(s.$viewValue)},function(){s.$render()}));t?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
	w=B(e.cloneNode(!1));h.empty();m();d.$watchCollection(I.getWatchables,m)}}}}],He=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,n=h.$attr.when&&g.attr(h.$attr.when),m=h.offset||0,r=f.$eval(n)||{},s={},v=b.startSymbol(),w=b.endSymbol(),p=v+l+"-"+m+w,x=ea.noop,t;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),r[c]=g.attr(h.$attr[b]))});q(r,function(a,d){s[d]=b(a.replace(c,p))});f.$watch(l,
	function(b){var c=parseFloat(b),e=isNaN(c);e||c in r||(c=a.pluralCat(c-m));c===t||e&&Q(t)&&isNaN(t)||(x(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+n),x=C,k()):x=f.$watch(e,k),t=c)})}}}],Ie=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,n,m){a[c]=d;e&&(a[e]=n);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
	terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var n=l[1],m=l[2],r=l[3],s=l[4],l=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",n);var v=l[3]||l[1],w=l[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw c("badident",
	r);var p,y,t,z,u={$id:Fa};s?p=a(s):(t=function(a,b){return Fa(b)},z=function(a){return a});return function(a,d,f,g,l){p&&(y=function(b,c,d){w&&(u[w]=b);u[v]=c;u.$index=d;return p(a,u)});var n=T();a.$watchCollection(m,function(f){var g,m,p=d[0],s,u=T(),x,D,E,C,F,B,G;r&&(a[r]=f);if(ya(f))F=f,m=y||t;else for(G in m=y||z,F=[],f)ua.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);x=F.length;G=Array(x);for(g=0;g<x;g++)if(D=f===F?g:F[g],E=f[D],C=m(D,E,g),n[C])B=n[C],delete n[C],u[C]=B,G[g]=B;else{if(u[C])throw q(G,
	function(a){a&&a.scope&&(n[a.id]=a)}),c("dupes",h,C,E);G[g]={id:C,scope:void 0,clone:void 0};u[C]=!0}for(s in n){B=n[s];C=rb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,m=C.length;g<m;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<x;g++)if(D=f===F?g:F[g],E=f[D],B=G[g],B.scope){s=p;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(rb(B.clone),null,p);p=B.clone[B.clone.length-1];e(B.scope,g,v,E,w,D,x)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
	null,p);p=d;B.clone=a;u[B.id]=B;e(B.scope,g,v,E,w,D,x)});n=u})}}}}],Je=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ce=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ke=La(function(a,b,d){a.$watch(d.ngStyle,function(a,
	d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Le=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],n=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=rb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(n(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
	c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Me=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Ne=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
	b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Qg=O("ngTransclude"),Pe=La({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Qg("orphan",wa(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),pe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Rg={$setViewValue:C,$render:C},
	Sg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Rg;d.unknownOption=B(v.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Fa(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
	a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
	function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],qe=function(){return{restrict:"E",require:["select","?ngModel"],controller:Sg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
	if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||pa(g,e.$viewValue)||(g=ha(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},se=["$interpolate",
	function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],re=da({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
	function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,wa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
	X(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=X(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};v.angular.bootstrap?v.console&&console.log("WARNING: Tried to load angular more than once."):(ie(),ke(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
	"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
	WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
	c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(v.document).ready(function(){ee(v.document,yc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 25 */
/*!***********************************************!*\
  !*** ./www/js/lib/angular/angular-animate.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.5
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';
	
	/* jshint ignore:start */
	var noop        = angular.noop;
	var copy        = angular.copy;
	var extend      = angular.extend;
	var jqLite      = angular.element;
	var forEach     = angular.forEach;
	var isArray     = angular.isArray;
	var isString    = angular.isString;
	var isObject    = angular.isObject;
	var isUndefined = angular.isUndefined;
	var isDefined   = angular.isDefined;
	var isFunction  = angular.isFunction;
	var isElement   = angular.isElement;
	
	var ELEMENT_NODE = 1;
	var COMMENT_NODE = 8;
	
	var ADD_CLASS_SUFFIX = '-add';
	var REMOVE_CLASS_SUFFIX = '-remove';
	var EVENT_CLASS_PREFIX = 'ng-';
	var ACTIVE_CLASS_SUFFIX = '-active';
	var PREPARE_CLASS_SUFFIX = '-prepare';
	
	var NG_ANIMATE_CLASSNAME = 'ng-animate';
	var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';
	
	// Detect proper transitionend/animationend event names.
	var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;
	
	// If unprefixed events are not supported but webkit-prefixed are, use the latter.
	// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	// Register both events in case `window.onanimationend` is not supported because of that,
	// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	// therefore there is no reason to test anymore for other vendor prefixes:
	// http://caniuse.com/#search=transition
	if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
	  CSS_PREFIX = '-webkit-';
	  TRANSITION_PROP = 'WebkitTransition';
	  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	} else {
	  TRANSITION_PROP = 'transition';
	  TRANSITIONEND_EVENT = 'transitionend';
	}
	
	if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
	  CSS_PREFIX = '-webkit-';
	  ANIMATION_PROP = 'WebkitAnimation';
	  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	} else {
	  ANIMATION_PROP = 'animation';
	  ANIMATIONEND_EVENT = 'animationend';
	}
	
	var DURATION_KEY = 'Duration';
	var PROPERTY_KEY = 'Property';
	var DELAY_KEY = 'Delay';
	var TIMING_KEY = 'TimingFunction';
	var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;
	
	var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
	var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
	var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
	var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;
	
	var isPromiseLike = function(p) {
	  return p && p.then ? true : false;
	};
	
	var ngMinErr = angular.$$minErr('ng');
	function assertArg(arg, name, reason) {
	  if (!arg) {
	    throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
	  }
	  return arg;
	}
	
	function mergeClasses(a,b) {
	  if (!a && !b) return '';
	  if (!a) return b;
	  if (!b) return a;
	  if (isArray(a)) a = a.join(' ');
	  if (isArray(b)) b = b.join(' ');
	  return a + ' ' + b;
	}
	
	function packageStyles(options) {
	  var styles = {};
	  if (options && (options.to || options.from)) {
	    styles.to = options.to;
	    styles.from = options.from;
	  }
	  return styles;
	}
	
	function pendClasses(classes, fix, isPrefix) {
	  var className = '';
	  classes = isArray(classes)
	      ? classes
	      : classes && isString(classes) && classes.length
	          ? classes.split(/\s+/)
	          : [];
	  forEach(classes, function(klass, i) {
	    if (klass && klass.length > 0) {
	      className += (i > 0) ? ' ' : '';
	      className += isPrefix ? fix + klass
	                            : klass + fix;
	    }
	  });
	  return className;
	}
	
	function removeFromArray(arr, val) {
	  var index = arr.indexOf(val);
	  if (val >= 0) {
	    arr.splice(index, 1);
	  }
	}
	
	function stripCommentsFromElement(element) {
	  if (element instanceof jqLite) {
	    switch (element.length) {
	      case 0:
	        return [];
	        break;
	
	      case 1:
	        // there is no point of stripping anything if the element
	        // is the only element within the jqLite wrapper.
	        // (it's important that we retain the element instance.)
	        if (element[0].nodeType === ELEMENT_NODE) {
	          return element;
	        }
	        break;
	
	      default:
	        return jqLite(extractElementNode(element));
	        break;
	    }
	  }
	
	  if (element.nodeType === ELEMENT_NODE) {
	    return jqLite(element);
	  }
	}
	
	function extractElementNode(element) {
	  if (!element[0]) return element;
	  for (var i = 0; i < element.length; i++) {
	    var elm = element[i];
	    if (elm.nodeType == ELEMENT_NODE) {
	      return elm;
	    }
	  }
	}
	
	function $$addClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.addClass(elm, className);
	  });
	}
	
	function $$removeClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.removeClass(elm, className);
	  });
	}
	
	function applyAnimationClassesFactory($$jqLite) {
	  return function(element, options) {
	    if (options.addClass) {
	      $$addClass($$jqLite, element, options.addClass);
	      options.addClass = null;
	    }
	    if (options.removeClass) {
	      $$removeClass($$jqLite, element, options.removeClass);
	      options.removeClass = null;
	    }
	  }
	}
	
	function prepareAnimationOptions(options) {
	  options = options || {};
	  if (!options.$$prepared) {
	    var domOperation = options.domOperation || noop;
	    options.domOperation = function() {
	      options.$$domOperationFired = true;
	      domOperation();
	      domOperation = noop;
	    };
	    options.$$prepared = true;
	  }
	  return options;
	}
	
	function applyAnimationStyles(element, options) {
	  applyAnimationFromStyles(element, options);
	  applyAnimationToStyles(element, options);
	}
	
	function applyAnimationFromStyles(element, options) {
	  if (options.from) {
	    element.css(options.from);
	    options.from = null;
	  }
	}
	
	function applyAnimationToStyles(element, options) {
	  if (options.to) {
	    element.css(options.to);
	    options.to = null;
	  }
	}
	
	function mergeAnimationDetails(element, oldAnimation, newAnimation) {
	  var target = oldAnimation.options || {};
	  var newOptions = newAnimation.options || {};
	
	  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
	  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
	  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);
	
	  if (newOptions.preparationClasses) {
	    target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
	    delete newOptions.preparationClasses;
	  }
	
	  // noop is basically when there is no callback; otherwise something has been set
	  var realDomOperation = target.domOperation !== noop ? target.domOperation : null;
	
	  extend(target, newOptions);
	
	  // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
	  if (realDomOperation) {
	    target.domOperation = realDomOperation;
	  }
	
	  if (classes.addClass) {
	    target.addClass = classes.addClass;
	  } else {
	    target.addClass = null;
	  }
	
	  if (classes.removeClass) {
	    target.removeClass = classes.removeClass;
	  } else {
	    target.removeClass = null;
	  }
	
	  oldAnimation.addClass = target.addClass;
	  oldAnimation.removeClass = target.removeClass;
	
	  return target;
	}
	
	function resolveElementClasses(existing, toAdd, toRemove) {
	  var ADD_CLASS = 1;
	  var REMOVE_CLASS = -1;
	
	  var flags = {};
	  existing = splitClassesToLookup(existing);
	
	  toAdd = splitClassesToLookup(toAdd);
	  forEach(toAdd, function(value, key) {
	    flags[key] = ADD_CLASS;
	  });
	
	  toRemove = splitClassesToLookup(toRemove);
	  forEach(toRemove, function(value, key) {
	    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
	  });
	
	  var classes = {
	    addClass: '',
	    removeClass: ''
	  };
	
	  forEach(flags, function(val, klass) {
	    var prop, allow;
	    if (val === ADD_CLASS) {
	      prop = 'addClass';
	      allow = !existing[klass];
	    } else if (val === REMOVE_CLASS) {
	      prop = 'removeClass';
	      allow = existing[klass];
	    }
	    if (allow) {
	      if (classes[prop].length) {
	        classes[prop] += ' ';
	      }
	      classes[prop] += klass;
	    }
	  });
	
	  function splitClassesToLookup(classes) {
	    if (isString(classes)) {
	      classes = classes.split(' ');
	    }
	
	    var obj = {};
	    forEach(classes, function(klass) {
	      // sometimes the split leaves empty string values
	      // incase extra spaces were applied to the options
	      if (klass.length) {
	        obj[klass] = true;
	      }
	    });
	    return obj;
	  }
	
	  return classes;
	}
	
	function getDomNode(element) {
	  return (element instanceof angular.element) ? element[0] : element;
	}
	
	function applyGeneratedPreparationClasses(element, event, options) {
	  var classes = '';
	  if (event) {
	    classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
	  }
	  if (options.addClass) {
	    classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
	  }
	  if (options.removeClass) {
	    classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
	  }
	  if (classes.length) {
	    options.preparationClasses = classes;
	    element.addClass(classes);
	  }
	}
	
	function clearGeneratedClasses(element, options) {
	  if (options.preparationClasses) {
	    element.removeClass(options.preparationClasses);
	    options.preparationClasses = null;
	  }
	  if (options.activeClasses) {
	    element.removeClass(options.activeClasses);
	    options.activeClasses = null;
	  }
	}
	
	function blockTransitions(node, duration) {
	  // we use a negative delay value since it performs blocking
	  // yet it doesn't kill any existing transitions running on the
	  // same element which makes this safe for class-based animations
	  var value = duration ? '-' + duration + 's' : '';
	  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
	  return [TRANSITION_DELAY_PROP, value];
	}
	
	function blockKeyframeAnimations(node, applyBlock) {
	  var value = applyBlock ? 'paused' : '';
	  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
	  applyInlineStyle(node, [key, value]);
	  return [key, value];
	}
	
	function applyInlineStyle(node, styleTuple) {
	  var prop = styleTuple[0];
	  var value = styleTuple[1];
	  node.style[prop] = value;
	}
	
	function concatWithSpace(a,b) {
	  if (!a) return b;
	  if (!b) return a;
	  return a + ' ' + b;
	}
	
	var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
	  var queue, cancelFn;
	
	  function scheduler(tasks) {
	    // we make a copy since RAFScheduler mutates the state
	    // of the passed in array variable and this would be difficult
	    // to track down on the outside code
	    queue = queue.concat(tasks);
	    nextTick();
	  }
	
	  queue = scheduler.queue = [];
	
	  /* waitUntilQuiet does two things:
	   * 1. It will run the FINAL `fn` value only when an uncanceled RAF has passed through
	   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
	   *
	   * The motivation here is that animation code can request more time from the scheduler
	   * before the next wave runs. This allows for certain DOM properties such as classes to
	   * be resolved in time for the next animation to run.
	   */
	  scheduler.waitUntilQuiet = function(fn) {
	    if (cancelFn) cancelFn();
	
	    cancelFn = $$rAF(function() {
	      cancelFn = null;
	      fn();
	      nextTick();
	    });
	  };
	
	  return scheduler;
	
	  function nextTick() {
	    if (!queue.length) return;
	
	    var items = queue.shift();
	    for (var i = 0; i < items.length; i++) {
	      items[i]();
	    }
	
	    if (!cancelFn) {
	      $$rAF(function() {
	        if (!cancelFn) nextTick();
	      });
	    }
	  }
	}];
	
	/**
	 * @ngdoc directive
	 * @name ngAnimateChildren
	 * @restrict AE
	 * @element ANY
	 *
	 * @description
	 *
	 * ngAnimateChildren allows you to specify that children of this element should animate even if any
	 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
	 * (structural) animation, child elements that also have an active structural animation are not animated.
	 *
	 * Note that even if `ngAnimteChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
	 *
	 *
	 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
	 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
	 *
	 * @example
	 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
	     <file name="index.html">
	       <div ng-controller="mainController as main">
	         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
	         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
	         <hr>
	         <div ng-animate-children="{{main.animateChildren}}">
	           <div ng-if="main.enterElement" class="container">
	             List of items:
	             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
	           </div>
	         </div>
	       </div>
	     </file>
	     <file name="animations.css">
	
	      .container.ng-enter,
	      .container.ng-leave {
	        transition: all ease 1.5s;
	      }
	
	      .container.ng-enter,
	      .container.ng-leave-active {
	        opacity: 0;
	      }
	
	      .container.ng-leave,
	      .container.ng-enter-active {
	        opacity: 1;
	      }
	
	      .item {
	        background: firebrick;
	        color: #FFF;
	        margin-bottom: 10px;
	      }
	
	      .item.ng-enter,
	      .item.ng-leave {
	        transition: transform 1.5s ease;
	      }
	
	      .item.ng-enter {
	        transform: translateX(50px);
	      }
	
	      .item.ng-enter-active {
	        transform: translateX(0);
	      }
	    </file>
	    <file name="script.js">
	      angular.module('ngAnimateChildren', ['ngAnimate'])
	        .controller('mainController', function() {
	          this.animateChildren = false;
	          this.enterElement = false;
	        });
	    </file>
	  </example>
	 */
	var $$AnimateChildrenDirective = ['$interpolate', function($interpolate) {
	  return {
	    link: function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN_DATA, true);
	      } else {
	        // Interpolate and set the value, so that it is available to
	        // animations that run right after compilation
	        setData($interpolate(val)(scope));
	        attrs.$observe('ngAnimateChildren', setData);
	      }
	
	      function setData(value) {
	        value = value === 'on' || value === 'true';
	        element.data(NG_ANIMATE_CHILDREN_DATA, value);
	      }
	    }
	  };
	}];
	
	var ANIMATE_TIMER_KEY = '$$animateCss';
	
	/**
	 * @ngdoc service
	 * @name $animateCss
	 * @kind object
	 *
	 * @description
	 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
	 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
	 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
	 * directives to create more complex animations that can be purely driven using CSS code.
	 *
	 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
	 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
	 *
	 * ## Usage
	 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
	 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
	 * any automatic control over cancelling animations and/or preventing animations from being run on
	 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
	 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
	 * the CSS animation.
	 *
	 * The example below shows how we can create a folding animation on an element using `ng-if`:
	 *
	 * ```html
	 * <!-- notice the `fold-animation` CSS class -->
	 * <div ng-if="onOff" class="fold-animation">
	 *   This element will go BOOM
	 * </div>
	 * <button ng-click="onOff=true">Fold In</button>
	 * ```
	 *
	 * Now we create the **JavaScript animation** that will trigger the CSS transition:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## More Advanced Uses
	 *
	 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
	 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
	 *
	 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
	 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
	 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
	 * to provide a working animation that will run in CSS.
	 *
	 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         addClass: 'red large-text pulse-twice',
	 *         easing: 'ease-out',
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
	 *
	 * ```css
	 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
	 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
	 * .red { background:red; }
	 * .large-text { font-size:20px; }
	 *
	 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
	 * .pulse-twice {
	 *   animation: 0.5s pulse linear 2;
	 *   -webkit-animation: 0.5s pulse linear 2;
	 * }
	 *
	 * @keyframes pulse {
	 *   from { transform: scale(0.5); }
	 *   to { transform: scale(1.5); }
	 * }
	 *
	 * @-webkit-keyframes pulse {
	 *   from { -webkit-transform: scale(0.5); }
	 *   to { -webkit-transform: scale(1.5); }
	 * }
	 * ```
	 *
	 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
	 *
	 * ## How the Options are handled
	 *
	 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
	 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
	 * styles using the `from` and `to` properties.
	 *
	 * ```js
	 * var animator = $animateCss(element, {
	 *   from: { background:'red' },
	 *   to: { background:'blue' }
	 * });
	 * animator.start();
	 * ```
	 *
	 * ```css
	 * .rotating-animation {
	 *   animation:0.5s rotate linear;
	 *   -webkit-animation:0.5s rotate linear;
	 * }
	 *
	 * @keyframes rotate {
	 *   from { transform: rotate(0deg); }
	 *   to { transform: rotate(360deg); }
	 * }
	 *
	 * @-webkit-keyframes rotate {
	 *   from { -webkit-transform: rotate(0deg); }
	 *   to { -webkit-transform: rotate(360deg); }
	 * }
	 * ```
	 *
	 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
	 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
	 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
	 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
	 * and spread across the transition and keyframe animation.
	 *
	 * ## What is returned
	 *
	 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
	 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
	 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
	 *
	 * ```js
	 * var animator = $animateCss(element, { ... });
	 * ```
	 *
	 * Now what do the contents of our `animator` variable look like:
	 *
	 * ```js
	 * {
	 *   // starts the animation
	 *   start: Function,
	 *
	 *   // ends (aborts) the animation
	 *   end: Function
	 * }
	 * ```
	 *
	 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
	 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and styles may have been
	 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
	 * and that changing them will not reconfigure the parameters of the animation.
	 *
	 * ### runner.done() vs runner.then()
	 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
	 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
	 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
	 * unless you really need a digest to kick off afterwards.
	 *
	 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
	 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
	 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
	 *
	 * @param {DOMElement} element the element that will be animated
	 * @param {object} options the animation-related options that will be applied during the animation
	 *
	 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
	 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
	 * * `structural` - Indicates that the `ng-` prefix will be added to the event class. Setting to `false` or omitting will turn `ng-EVENT` and
	 * `ng-EVENT-active` in `EVENT` and `EVENT-active`. Unused if `event` is omitted.
	 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
	 * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
	 * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
	 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
	 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
	 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
	 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
	 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
	 * is provided then the animation will be skipped entirely.
	 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
	 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
	 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
	 * CSS delay value.
	 * * `stagger` - A numeric time value representing the delay between successively animated elements
	 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
	 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
	 *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
	 * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occurring on the classes being added and removed.)
	 * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
	 *    the animation is closed. This is useful for when the styles are used purely for the sake of
	 *    the animation and do not have a lasting visual effect on the element (e.g. a collapse and open animation).
	 *    By default this value is set to `false`.
	 *
	 * @return {object} an object with start and end methods and details about the animation.
	 *
	 * * `start` - The method to start the animation. This will return a `Promise` when called.
	 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
	 */
	var ONE_SECOND = 1000;
	var BASE_TEN = 10;
	
	var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	var CLOSING_TIME_BUFFER = 1.5;
	
	var DETECT_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP,
	  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
	};
	
	var DETECT_STAGGER_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP
	};
	
	function getCssKeyframeDurationStyle(duration) {
	  return [ANIMATION_DURATION_PROP, duration + 's'];
	}
	
	function getCssDelayStyle(delay, isKeyframeAnimation) {
	  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
	  return [prop, delay + 's'];
	}
	
	function computeCssStyles($window, element, properties) {
	  var styles = Object.create(null);
	  var detectedStyles = $window.getComputedStyle(element) || {};
	  forEach(properties, function(formalStyleName, actualStyleName) {
	    var val = detectedStyles[formalStyleName];
	    if (val) {
	      var c = val.charAt(0);
	
	      // only numerical-based values have a negative sign or digit as the first value
	      if (c === '-' || c === '+' || c >= 0) {
	        val = parseMaxTime(val);
	      }
	
	      // by setting this to null in the event that the delay is not set or is set directly as 0
	      // then we can still allow for negative values to be used later on and not mistake this
	      // value for being greater than any other negative value.
	      if (val === 0) {
	        val = null;
	      }
	      styles[actualStyleName] = val;
	    }
	  });
	
	  return styles;
	}
	
	function parseMaxTime(str) {
	  var maxValue = 0;
	  var values = str.split(/\s*,\s*/);
	  forEach(values, function(value) {
	    // it's always safe to consider only second values and omit `ms` values since
	    // getComputedStyle will always handle the conversion for us
	    if (value.charAt(value.length - 1) == 's') {
	      value = value.substring(0, value.length - 1);
	    }
	    value = parseFloat(value) || 0;
	    maxValue = maxValue ? Math.max(value, maxValue) : value;
	  });
	  return maxValue;
	}
	
	function truthyTimingValue(val) {
	  return val === 0 || val != null;
	}
	
	function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
	  var style = TRANSITION_PROP;
	  var value = duration + 's';
	  if (applyOnlyDuration) {
	    style += DURATION_KEY;
	  } else {
	    value += ' linear all';
	  }
	  return [style, value];
	}
	
	function createLocalCacheLookup() {
	  var cache = Object.create(null);
	  return {
	    flush: function() {
	      cache = Object.create(null);
	    },
	
	    count: function(key) {
	      var entry = cache[key];
	      return entry ? entry.total : 0;
	    },
	
	    get: function(key) {
	      var entry = cache[key];
	      return entry && entry.value;
	    },
	
	    put: function(key, value) {
	      if (!cache[key]) {
	        cache[key] = { total: 1, value: value };
	      } else {
	        cache[key].total++;
	      }
	    }
	  };
	}
	
	// we do not reassign an already present style value since
	// if we detect the style property value again we may be
	// detecting styles that were added via the `from` styles.
	// We make use of `isDefined` here since an empty string
	// or null value (which is what getPropertyValue will return
	// for a non-existing style) will still be marked as a valid
	// value for the style (a falsy value implies that the style
	// is to be removed at the end of the animation). If we had a simple
	// "OR" statement then it would not be enough to catch that.
	function registerRestorableStyles(backup, node, properties) {
	  forEach(properties, function(prop) {
	    backup[prop] = isDefined(backup[prop])
	        ? backup[prop]
	        : node.style.getPropertyValue(prop);
	  });
	}
	
	var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
	  var gcsLookup = createLocalCacheLookup();
	  var gcsStaggerLookup = createLocalCacheLookup();
	
	  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
	               '$$forceReflow', '$sniffer', '$$rAFScheduler', '$$animateQueue',
	       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
	                $$forceReflow,   $sniffer,   $$rAFScheduler, $$animateQueue) {
	
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	    var parentCounter = 0;
	    function gcsHashFn(node, extraClasses) {
	      var KEY = "$$ngAnimateParentKey";
	      var parentNode = node.parentNode;
	      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
	      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
	    }
	
	    function computeCachedCssStyles(node, className, cacheKey, properties) {
	      var timings = gcsLookup.get(cacheKey);
	
	      if (!timings) {
	        timings = computeCssStyles($window, node, properties);
	        if (timings.animationIterationCount === 'infinite') {
	          timings.animationIterationCount = 1;
	        }
	      }
	
	      // we keep putting this in multiple times even though the value and the cacheKey are the same
	      // because we're keeping an internal tally of how many duplicate animations are detected.
	      gcsLookup.put(cacheKey, timings);
	      return timings;
	    }
	
	    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
	      var stagger;
	
	      // if we have one or more existing matches of matching elements
	      // containing the same parent + CSS styles (which is how cacheKey works)
	      // then staggering is possible
	      if (gcsLookup.count(cacheKey) > 0) {
	        stagger = gcsStaggerLookup.get(cacheKey);
	
	        if (!stagger) {
	          var staggerClassName = pendClasses(className, '-stagger');
	
	          $$jqLite.addClass(node, staggerClassName);
	
	          stagger = computeCssStyles($window, node, properties);
	
	          // force the conversion of a null value to zero incase not set
	          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
	          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);
	
	          $$jqLite.removeClass(node, staggerClassName);
	
	          gcsStaggerLookup.put(cacheKey, stagger);
	        }
	      }
	
	      return stagger || {};
	    }
	
	    var cancelLastRAFRequest;
	    var rafWaitQueue = [];
	    function waitUntilQuiet(callback) {
	      rafWaitQueue.push(callback);
	      $$rAFScheduler.waitUntilQuiet(function() {
	        gcsLookup.flush();
	        gcsStaggerLookup.flush();
	
	        // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
	        // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
	        var pageWidth = $$forceReflow();
	
	        // we use a for loop to ensure that if the queue is changed
	        // during this looping then it will consider new requests
	        for (var i = 0; i < rafWaitQueue.length; i++) {
	          rafWaitQueue[i](pageWidth);
	        }
	        rafWaitQueue.length = 0;
	      });
	    }
	
	    function computeTimings(node, className, cacheKey) {
	      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
	      var aD = timings.animationDelay;
	      var tD = timings.transitionDelay;
	      timings.maxDelay = aD && tD
	          ? Math.max(aD, tD)
	          : (aD || tD);
	      timings.maxDuration = Math.max(
	          timings.animationDuration * timings.animationIterationCount,
	          timings.transitionDuration);
	
	      return timings;
	    }
	
	    return function init(element, initialOptions) {
	      // all of the animation functions should create
	      // a copy of the options data, however, if a
	      // parent service has already created a copy then
	      // we should stick to using that
	      var options = initialOptions || {};
	      if (!options.$$prepared) {
	        options = prepareAnimationOptions(copy(options));
	      }
	
	      var restoreStyles = {};
	      var node = getDomNode(element);
	      if (!node
	          || !node.parentNode
	          || !$$animateQueue.enabled()) {
	        return closeAndReturnNoopAnimator();
	      }
	
	      var temporaryStyles = [];
	      var classes = element.attr('class');
	      var styles = packageStyles(options);
	      var animationClosed;
	      var animationPaused;
	      var animationCompleted;
	      var runner;
	      var runnerHost;
	      var maxDelay;
	      var maxDelayTime;
	      var maxDuration;
	      var maxDurationTime;
	      var startTime;
	      var events = [];
	
	      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
	        return closeAndReturnNoopAnimator();
	      }
	
	      var method = options.event && isArray(options.event)
	            ? options.event.join(' ')
	            : options.event;
	
	      var isStructural = method && options.structural;
	      var structuralClassName = '';
	      var addRemoveClassName = '';
	
	      if (isStructural) {
	        structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
	      } else if (method) {
	        structuralClassName = method;
	      }
	
	      if (options.addClass) {
	        addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
	      }
	
	      if (options.removeClass) {
	        if (addRemoveClassName.length) {
	          addRemoveClassName += ' ';
	        }
	        addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
	      }
	
	      // there may be a situation where a structural animation is combined together
	      // with CSS classes that need to resolve before the animation is computed.
	      // However this means that there is no explicit CSS code to block the animation
	      // from happening (by setting 0s none in the class name). If this is the case
	      // we need to apply the classes before the first rAF so we know to continue if
	      // there actually is a detected transition or keyframe animation
	      if (options.applyClassesEarly && addRemoveClassName.length) {
	        applyAnimationClasses(element, options);
	      }
	
	      var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
	      var fullClassName = classes + ' ' + preparationClasses;
	      var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
	      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
	      var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;
	
	      // there is no way we can trigger an animation if no styles and
	      // no classes are being applied which would then trigger a transition,
	      // unless there a is raw keyframe value that is applied to the element.
	      if (!containsKeyframeAnimation
	           && !hasToStyles
	           && !preparationClasses) {
	        return closeAndReturnNoopAnimator();
	      }
	
	      var cacheKey, stagger;
	      if (options.stagger > 0) {
	        var staggerVal = parseFloat(options.stagger);
	        stagger = {
	          transitionDelay: staggerVal,
	          animationDelay: staggerVal,
	          transitionDuration: 0,
	          animationDuration: 0
	        };
	      } else {
	        cacheKey = gcsHashFn(node, fullClassName);
	        stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
	      }
	
	      if (!options.$$skipPreparationClasses) {
	        $$jqLite.addClass(element, preparationClasses);
	      }
	
	      var applyOnlyDuration;
	
	      if (options.transitionStyle) {
	        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
	        applyInlineStyle(node, transitionStyle);
	        temporaryStyles.push(transitionStyle);
	      }
	
	      if (options.duration >= 0) {
	        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
	        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);
	
	        // we set the duration so that it will be picked up by getComputedStyle later
	        applyInlineStyle(node, durationStyle);
	        temporaryStyles.push(durationStyle);
	      }
	
	      if (options.keyframeStyle) {
	        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
	        applyInlineStyle(node, keyframeStyle);
	        temporaryStyles.push(keyframeStyle);
	      }
	
	      var itemIndex = stagger
	          ? options.staggerIndex >= 0
	              ? options.staggerIndex
	              : gcsLookup.count(cacheKey)
	          : 0;
	
	      var isFirst = itemIndex === 0;
	
	      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
	      // without causing any combination of transitions to kick in. By adding a negative delay value
	      // it forces the setup class' transition to end immediately. We later then remove the negative
	      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
	      // that if there is no transition defined then nothing will happen and this will also allow
	      // other transitions to be stacked on top of each other without any chopping them out.
	      if (isFirst && !options.skipBlocking) {
	        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
	      }
	
	      var timings = computeTimings(node, fullClassName, cacheKey);
	      var relativeDelay = timings.maxDelay;
	      maxDelay = Math.max(relativeDelay, 0);
	      maxDuration = timings.maxDuration;
	
	      var flags = {};
	      flags.hasTransitions          = timings.transitionDuration > 0;
	      flags.hasAnimations           = timings.animationDuration > 0;
	      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
	      flags.applyTransitionDuration = hasToStyles && (
	                                        (flags.hasTransitions && !flags.hasTransitionAll)
	                                         || (flags.hasAnimations && !flags.hasTransitions));
	      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
	      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
	      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
	      flags.recalculateTimingStyles = addRemoveClassName.length > 0;
	
	      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
	        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;
	
	        if (flags.applyTransitionDuration) {
	          flags.hasTransitions = true;
	          timings.transitionDuration = maxDuration;
	          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
	          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
	        }
	
	        if (flags.applyAnimationDuration) {
	          flags.hasAnimations = true;
	          timings.animationDuration = maxDuration;
	          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
	        }
	      }
	
	      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
	        return closeAndReturnNoopAnimator();
	      }
	
	      if (options.delay != null) {
	        var delayStyle;
	        if (typeof options.delay !== "boolean") {
	          delayStyle = parseFloat(options.delay);
	          // number in options.delay means we have to recalculate the delay for the closing timeout
	          maxDelay = Math.max(delayStyle, 0);
	        }
	
	        if (flags.applyTransitionDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle));
	        }
	
	        if (flags.applyAnimationDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle, true));
	        }
	      }
	
	      // we need to recalculate the delay value since we used a pre-emptive negative
	      // delay value and the delay value is required for the final event checking. This
	      // property will ensure that this will happen after the RAF phase has passed.
	      if (options.duration == null && timings.transitionDuration > 0) {
	        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
	      }
	
	      maxDelayTime = maxDelay * ONE_SECOND;
	      maxDurationTime = maxDuration * ONE_SECOND;
	      if (!options.skipBlocking) {
	        flags.blockTransition = timings.transitionDuration > 0;
	        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
	                                       stagger.animationDelay > 0 &&
	                                       stagger.animationDuration === 0;
	      }
	
	      if (options.from) {
	        if (options.cleanupStyles) {
	          registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
	        }
	        applyAnimationFromStyles(element, options);
	      }
	
	      if (flags.blockTransition || flags.blockKeyframeAnimation) {
	        applyBlocking(maxDuration);
	      } else if (!options.skipBlocking) {
	        blockTransitions(node, false);
	      }
	
	      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
	      return {
	        $$willAnimate: true,
	        end: endFn,
	        start: function() {
	          if (animationClosed) return;
	
	          runnerHost = {
	            end: endFn,
	            cancel: cancelFn,
	            resume: null, //this will be set during the start() phase
	            pause: null
	          };
	
	          runner = new $$AnimateRunner(runnerHost);
	
	          waitUntilQuiet(start);
	
	          // we don't have access to pause/resume the animation
	          // since it hasn't run yet. AnimateRunner will therefore
	          // set noop functions for resume and pause and they will
	          // later be overridden once the animation is triggered
	          return runner;
	        }
	      };
	
	      function endFn() {
	        close();
	      }
	
	      function cancelFn() {
	        close(true);
	      }
	
	      function close(rejected) { // jshint ignore:line
	        // if the promise has been called already then we shouldn't close
	        // the animation again
	        if (animationClosed || (animationCompleted && animationPaused)) return;
	        animationClosed = true;
	        animationPaused = false;
	
	        if (!options.$$skipPreparationClasses) {
	          $$jqLite.removeClass(element, preparationClasses);
	        }
	        $$jqLite.removeClass(element, activeClasses);
	
	        blockKeyframeAnimations(node, false);
	        blockTransitions(node, false);
	
	        forEach(temporaryStyles, function(entry) {
	          // There is only one way to remove inline style properties entirely from elements.
	          // By using `removeProperty` this works, but we need to convert camel-cased CSS
	          // styles down to hyphenated values.
	          node.style[entry[0]] = '';
	        });
	
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	
	        if (Object.keys(restoreStyles).length) {
	          forEach(restoreStyles, function(value, prop) {
	            value ? node.style.setProperty(prop, value)
	                  : node.style.removeProperty(prop);
	          });
	        }
	
	        // the reason why we have this option is to allow a synchronous closing callback
	        // that is fired as SOON as the animation ends (when the CSS is removed) or if
	        // the animation never takes off at all. A good example is a leave animation since
	        // the element must be removed just after the animation is over or else the element
	        // will appear on screen for one animation frame causing an overbearing flicker.
	        if (options.onDone) {
	          options.onDone();
	        }
	
	        if (events && events.length) {
	          // Remove the transitionend / animationend listener(s)
	          element.off(events.join(' '), onAnimationProgress);
	        }
	
	        //Cancel the fallback closing timeout and remove the timer data
	        var animationTimerData = element.data(ANIMATE_TIMER_KEY);
	        if (animationTimerData) {
	          $timeout.cancel(animationTimerData[0].timer);
	          element.removeData(ANIMATE_TIMER_KEY);
	        }
	
	        // if the preparation function fails then the promise is not setup
	        if (runner) {
	          runner.complete(!rejected);
	        }
	      }
	
	      function applyBlocking(duration) {
	        if (flags.blockTransition) {
	          blockTransitions(node, duration);
	        }
	
	        if (flags.blockKeyframeAnimation) {
	          blockKeyframeAnimations(node, !!duration);
	        }
	      }
	
	      function closeAndReturnNoopAnimator() {
	        runner = new $$AnimateRunner({
	          end: endFn,
	          cancel: cancelFn
	        });
	
	        // should flush the cache animation
	        waitUntilQuiet(noop);
	        close();
	
	        return {
	          $$willAnimate: false,
	          start: function() {
	            return runner;
	          },
	          end: endFn
	        };
	      }
	
	      function onAnimationProgress(event) {
	        event.stopPropagation();
	        var ev = event.originalEvent || event;
	
	        // we now always use `Date.now()` due to the recent changes with
	        // event.timeStamp in Firefox, Webkit and Chrome (see #13494 for more info)
	        var timeStamp = ev.$manualTimeStamp || Date.now();
	
	        /* Firefox (or possibly just Gecko) likes to not round values up
	         * when a ms measurement is used for the animation */
	        var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
	
	        /* $manualTimeStamp is a mocked timeStamp value which is set
	         * within browserTrigger(). This is only here so that tests can
	         * mock animations properly. Real events fallback to event.timeStamp,
	         * or, if they don't, then a timeStamp is automatically created for them.
	         * We're checking to see if the timeStamp surpasses the expected delay,
	         * but we're using elapsedTime instead of the timeStamp on the 2nd
	         * pre-condition since animationPauseds sometimes close off early */
	        if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	          // we set this flag to ensure that if the transition is paused then, when resumed,
	          // the animation will automatically close itself since transitions cannot be paused.
	          animationCompleted = true;
	          close();
	        }
	      }
	
	      function start() {
	        if (animationClosed) return;
	        if (!node.parentNode) {
	          close();
	          return;
	        }
	
	        // even though we only pause keyframe animations here the pause flag
	        // will still happen when transitions are used. Only the transition will
	        // not be paused since that is not possible. If the animation ends when
	        // paused then it will not complete until unpaused or cancelled.
	        var playPause = function(playAnimation) {
	          if (!animationCompleted) {
	            animationPaused = !playAnimation;
	            if (timings.animationDuration) {
	              var value = blockKeyframeAnimations(node, animationPaused);
	              animationPaused
	                  ? temporaryStyles.push(value)
	                  : removeFromArray(temporaryStyles, value);
	            }
	          } else if (animationPaused && playAnimation) {
	            animationPaused = false;
	            close();
	          }
	        };
	
	        // checking the stagger duration prevents an accidentally cascade of the CSS delay style
	        // being inherited from the parent. If the transition duration is zero then we can safely
	        // rely that the delay value is an intentional stagger delay style.
	        var maxStagger = itemIndex > 0
	                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
	                            (timings.animationDuration && stagger.animationDuration === 0))
	                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
	        if (maxStagger) {
	          $timeout(triggerAnimationStart,
	                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
	                   false);
	        } else {
	          triggerAnimationStart();
	        }
	
	        // this will decorate the existing promise runner with pause/resume methods
	        runnerHost.resume = function() {
	          playPause(true);
	        };
	
	        runnerHost.pause = function() {
	          playPause(false);
	        };
	
	        function triggerAnimationStart() {
	          // just incase a stagger animation kicks in when the animation
	          // itself was cancelled entirely
	          if (animationClosed) return;
	
	          applyBlocking(false);
	
	          forEach(temporaryStyles, function(entry) {
	            var key = entry[0];
	            var value = entry[1];
	            node.style[key] = value;
	          });
	
	          applyAnimationClasses(element, options);
	          $$jqLite.addClass(element, activeClasses);
	
	          if (flags.recalculateTimingStyles) {
	            fullClassName = node.className + ' ' + preparationClasses;
	            cacheKey = gcsHashFn(node, fullClassName);
	
	            timings = computeTimings(node, fullClassName, cacheKey);
	            relativeDelay = timings.maxDelay;
	            maxDelay = Math.max(relativeDelay, 0);
	            maxDuration = timings.maxDuration;
	
	            if (maxDuration === 0) {
	              close();
	              return;
	            }
	
	            flags.hasTransitions = timings.transitionDuration > 0;
	            flags.hasAnimations = timings.animationDuration > 0;
	          }
	
	          if (flags.applyAnimationDelay) {
	            relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
	                  ? parseFloat(options.delay)
	                  : relativeDelay;
	
	            maxDelay = Math.max(relativeDelay, 0);
	            timings.animationDelay = relativeDelay;
	            delayStyle = getCssDelayStyle(relativeDelay, true);
	            temporaryStyles.push(delayStyle);
	            node.style[delayStyle[0]] = delayStyle[1];
	          }
	
	          maxDelayTime = maxDelay * ONE_SECOND;
	          maxDurationTime = maxDuration * ONE_SECOND;
	
	          if (options.easing) {
	            var easeProp, easeVal = options.easing;
	            if (flags.hasTransitions) {
	              easeProp = TRANSITION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	            if (flags.hasAnimations) {
	              easeProp = ANIMATION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	          }
	
	          if (timings.transitionDuration) {
	            events.push(TRANSITIONEND_EVENT);
	          }
	
	          if (timings.animationDuration) {
	            events.push(ANIMATIONEND_EVENT);
	          }
	
	          startTime = Date.now();
	          var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
	          var endTime = startTime + timerTime;
	
	          var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
	          var setupFallbackTimer = true;
	          if (animationsData.length) {
	            var currentTimerData = animationsData[0];
	            setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
	            if (setupFallbackTimer) {
	              $timeout.cancel(currentTimerData.timer);
	            } else {
	              animationsData.push(close);
	            }
	          }
	
	          if (setupFallbackTimer) {
	            var timer = $timeout(onAnimationExpired, timerTime, false);
	            animationsData[0] = {
	              timer: timer,
	              expectedEndTime: endTime
	            };
	            animationsData.push(close);
	            element.data(ANIMATE_TIMER_KEY, animationsData);
	          }
	
	          if (events.length) {
	            element.on(events.join(' '), onAnimationProgress);
	          }
	
	          if (options.to) {
	            if (options.cleanupStyles) {
	              registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
	            }
	            applyAnimationToStyles(element, options);
	          }
	        }
	
	        function onAnimationExpired() {
	          var animationsData = element.data(ANIMATE_TIMER_KEY);
	
	          // this will be false in the event that the element was
	          // removed from the DOM (via a leave animation or something
	          // similar)
	          if (animationsData) {
	            for (var i = 1; i < animationsData.length; i++) {
	              animationsData[i]();
	            }
	            element.removeData(ANIMATE_TIMER_KEY);
	          }
	        }
	      }
	    };
	  }];
	}];
	
	var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateCssDriver');
	
	  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
	  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';
	
	  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
	  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';
	
	  function isDocumentFragment(node) {
	    return node.parentNode && node.parentNode.nodeType === 11;
	  }
	
	  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
	       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {
	
	    // only browsers that support these properties can render animations
	    if (!$sniffer.animations && !$sniffer.transitions) return noop;
	
	    var bodyNode = $document[0].body;
	    var rootNode = getDomNode($rootElement);
	
	    var rootBodyElement = jqLite(
	      // this is to avoid using something that exists outside of the body
	      // we also special case the doc fragment case because our unit test code
	      // appends the $rootElement to the body after the app has been bootstrapped
	      isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
	    );
	
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	    return function initDriverFn(animationDetails) {
	      return animationDetails.from && animationDetails.to
	          ? prepareFromToAnchorAnimation(animationDetails.from,
	                                         animationDetails.to,
	                                         animationDetails.classes,
	                                         animationDetails.anchors)
	          : prepareRegularAnimation(animationDetails);
	    };
	
	    function filterCssClasses(classes) {
	      //remove all the `ng-` stuff
	      return classes.replace(/\bng-\S+\b/g, '');
	    }
	
	    function getUniqueValues(a, b) {
	      if (isString(a)) a = a.split(' ');
	      if (isString(b)) b = b.split(' ');
	      return a.filter(function(val) {
	        return b.indexOf(val) === -1;
	      }).join(' ');
	    }
	
	    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
	      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
	      var startingClasses = filterCssClasses(getClassVal(clone));
	
	      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	
	      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);
	
	      rootBodyElement.append(clone);
	
	      var animatorIn, animatorOut = prepareOutAnimation();
	
	      // the user may not end up using the `out` animation and
	      // only making use of the `in` animation or vice-versa.
	      // In either case we should allow this and not assume the
	      // animation is over unless both animations are not used.
	      if (!animatorOut) {
	        animatorIn = prepareInAnimation();
	        if (!animatorIn) {
	          return end();
	        }
	      }
	
	      var startingAnimator = animatorOut || animatorIn;
	
	      return {
	        start: function() {
	          var runner;
	
	          var currentAnimation = startingAnimator.start();
	          currentAnimation.done(function() {
	            currentAnimation = null;
	            if (!animatorIn) {
	              animatorIn = prepareInAnimation();
	              if (animatorIn) {
	                currentAnimation = animatorIn.start();
	                currentAnimation.done(function() {
	                  currentAnimation = null;
	                  end();
	                  runner.complete();
	                });
	                return currentAnimation;
	              }
	            }
	            // in the event that there is no `in` animation
	            end();
	            runner.complete();
	          });
	
	          runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn
	          });
	
	          return runner;
	
	          function endFn() {
	            if (currentAnimation) {
	              currentAnimation.end();
	            }
	          }
	        }
	      };
	
	      function calculateAnchorStyles(anchor) {
	        var styles = {};
	
	        var coords = getDomNode(anchor).getBoundingClientRect();
	
	        // we iterate directly since safari messes up and doesn't return
	        // all the keys for the coords object when iterated
	        forEach(['width','height','top','left'], function(key) {
	          var value = coords[key];
	          switch (key) {
	            case 'top':
	              value += bodyNode.scrollTop;
	              break;
	            case 'left':
	              value += bodyNode.scrollLeft;
	              break;
	          }
	          styles[key] = Math.floor(value) + 'px';
	        });
	        return styles;
	      }
	
	      function prepareOutAnimation() {
	        var animator = $animateCss(clone, {
	          addClass: NG_OUT_ANCHOR_CLASS_NAME,
	          delay: true,
	          from: calculateAnchorStyles(outAnchor)
	        });
	
	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }
	
	      function getClassVal(element) {
	        return element.attr('class') || '';
	      }
	
	      function prepareInAnimation() {
	        var endingClasses = filterCssClasses(getClassVal(inAnchor));
	        var toAdd = getUniqueValues(endingClasses, startingClasses);
	        var toRemove = getUniqueValues(startingClasses, endingClasses);
	
	        var animator = $animateCss(clone, {
	          to: calculateAnchorStyles(inAnchor),
	          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
	          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
	          delay: true
	        });
	
	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }
	
	      function end() {
	        clone.remove();
	        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      }
	    }
	
	    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
	      var fromAnimation = prepareRegularAnimation(from, noop);
	      var toAnimation = prepareRegularAnimation(to, noop);
	
	      var anchorAnimations = [];
	      forEach(anchors, function(anchor) {
	        var outElement = anchor['out'];
	        var inElement = anchor['in'];
	        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
	        if (animator) {
	          anchorAnimations.push(animator);
	        }
	      });
	
	      // no point in doing anything when there are no elements to animate
	      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;
	
	      return {
	        start: function() {
	          var animationRunners = [];
	
	          if (fromAnimation) {
	            animationRunners.push(fromAnimation.start());
	          }
	
	          if (toAnimation) {
	            animationRunners.push(toAnimation.start());
	          }
	
	          forEach(anchorAnimations, function(animation) {
	            animationRunners.push(animation.start());
	          });
	
	          var runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
	          });
	
	          $$AnimateRunner.all(animationRunners, function(status) {
	            runner.complete(status);
	          });
	
	          return runner;
	
	          function endFn() {
	            forEach(animationRunners, function(runner) {
	              runner.end();
	            });
	          }
	        }
	      };
	    }
	
	    function prepareRegularAnimation(animationDetails) {
	      var element = animationDetails.element;
	      var options = animationDetails.options || {};
	
	      if (animationDetails.structural) {
	        options.event = animationDetails.event;
	        options.structural = true;
	        options.applyClassesEarly = true;
	
	        // we special case the leave animation since we want to ensure that
	        // the element is removed as soon as the animation is over. Otherwise
	        // a flicker might appear or the element may not be removed at all
	        if (animationDetails.event === 'leave') {
	          options.onDone = options.domOperation;
	        }
	      }
	
	      // We assign the preparationClasses as the actual animation event since
	      // the internals of $animateCss will just suffix the event token values
	      // with `-active` to trigger the animation.
	      if (options.preparationClasses) {
	        options.event = concatWithSpace(options.event, options.preparationClasses);
	      }
	
	      var animator = $animateCss(element, options);
	
	      // the driver lookup code inside of $$animation attempts to spawn a
	      // driver one by one until a driver returns a.$$willAnimate animator object.
	      // $animateCss will always return an object, however, it will pass in
	      // a flag as a hint as to whether an animation was detected or not
	      return animator.$$willAnimate ? animator : null;
	    }
	  }];
	}];
	
	// TODO(matsko): use caching here to speed things up for detection
	// TODO(matsko): add documentation
	//  by the time...
	
	var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
	  this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
	       function($injector,   $$AnimateRunner,   $$jqLite) {
	
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	         // $animateJs(element, 'enter');
	    return function(element, event, classes, options) {
	      var animationClosed = false;
	
	      // the `classes` argument is optional and if it is not used
	      // then the classes will be resolved from the element's className
	      // property as well as options.addClass/options.removeClass.
	      if (arguments.length === 3 && isObject(classes)) {
	        options = classes;
	        classes = null;
	      }
	
	      options = prepareAnimationOptions(options);
	      if (!classes) {
	        classes = element.attr('class') || '';
	        if (options.addClass) {
	          classes += ' ' + options.addClass;
	        }
	        if (options.removeClass) {
	          classes += ' ' + options.removeClass;
	        }
	      }
	
	      var classesToAdd = options.addClass;
	      var classesToRemove = options.removeClass;
	
	      // the lookupAnimations function returns a series of animation objects that are
	      // matched up with one or more of the CSS classes. These animation objects are
	      // defined via the module.animation factory function. If nothing is detected then
	      // we don't return anything which then makes $animation query the next driver.
	      var animations = lookupAnimations(classes);
	      var before, after;
	      if (animations.length) {
	        var afterFn, beforeFn;
	        if (event == 'leave') {
	          beforeFn = 'leave';
	          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
	        } else {
	          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
	          afterFn = event;
	        }
	
	        if (event !== 'enter' && event !== 'move') {
	          before = packageAnimations(element, event, options, animations, beforeFn);
	        }
	        after  = packageAnimations(element, event, options, animations, afterFn);
	      }
	
	      // no matching animations
	      if (!before && !after) return;
	
	      function applyOptions() {
	        options.domOperation();
	        applyAnimationClasses(element, options);
	      }
	
	      function close() {
	        animationClosed = true;
	        applyOptions();
	        applyAnimationStyles(element, options);
	      }
	
	      var runner;
	
	      return {
	        $$willAnimate: true,
	        end: function() {
	          if (runner) {
	            runner.end();
	          } else {
	            close();
	            runner = new $$AnimateRunner();
	            runner.complete(true);
	          }
	          return runner;
	        },
	        start: function() {
	          if (runner) {
	            return runner;
	          }
	
	          runner = new $$AnimateRunner();
	          var closeActiveAnimations;
	          var chain = [];
	
	          if (before) {
	            chain.push(function(fn) {
	              closeActiveAnimations = before(fn);
	            });
	          }
	
	          if (chain.length) {
	            chain.push(function(fn) {
	              applyOptions();
	              fn(true);
	            });
	          } else {
	            applyOptions();
	          }
	
	          if (after) {
	            chain.push(function(fn) {
	              closeActiveAnimations = after(fn);
	            });
	          }
	
	          runner.setHost({
	            end: function() {
	              endAnimations();
	            },
	            cancel: function() {
	              endAnimations(true);
	            }
	          });
	
	          $$AnimateRunner.chain(chain, onComplete);
	          return runner;
	
	          function onComplete(success) {
	            close(success);
	            runner.complete(success);
	          }
	
	          function endAnimations(cancelled) {
	            if (!animationClosed) {
	              (closeActiveAnimations || noop)(cancelled);
	              onComplete(cancelled);
	            }
	          }
	        }
	      };
	
	      function executeAnimationFn(fn, element, event, options, onDone) {
	        var args;
	        switch (event) {
	          case 'animate':
	            args = [element, options.from, options.to, onDone];
	            break;
	
	          case 'setClass':
	            args = [element, classesToAdd, classesToRemove, onDone];
	            break;
	
	          case 'addClass':
	            args = [element, classesToAdd, onDone];
	            break;
	
	          case 'removeClass':
	            args = [element, classesToRemove, onDone];
	            break;
	
	          default:
	            args = [element, onDone];
	            break;
	        }
	
	        args.push(options);
	
	        var value = fn.apply(fn, args);
	        if (value) {
	          if (isFunction(value.start)) {
	            value = value.start();
	          }
	
	          if (value instanceof $$AnimateRunner) {
	            value.done(onDone);
	          } else if (isFunction(value)) {
	            // optional onEnd / onCancel callback
	            return value;
	          }
	        }
	
	        return noop;
	      }
	
	      function groupEventedAnimations(element, event, options, animations, fnName) {
	        var operations = [];
	        forEach(animations, function(ani) {
	          var animation = ani[fnName];
	          if (!animation) return;
	
	          // note that all of these animations will run in parallel
	          operations.push(function() {
	            var runner;
	            var endProgressCb;
	
	            var resolved = false;
	            var onAnimationComplete = function(rejected) {
	              if (!resolved) {
	                resolved = true;
	                (endProgressCb || noop)(rejected);
	                runner.complete(!rejected);
	              }
	            };
	
	            runner = new $$AnimateRunner({
	              end: function() {
	                onAnimationComplete();
	              },
	              cancel: function() {
	                onAnimationComplete(true);
	              }
	            });
	
	            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
	              var cancelled = result === false;
	              onAnimationComplete(cancelled);
	            });
	
	            return runner;
	          });
	        });
	
	        return operations;
	      }
	
	      function packageAnimations(element, event, options, animations, fnName) {
	        var operations = groupEventedAnimations(element, event, options, animations, fnName);
	        if (operations.length === 0) {
	          var a,b;
	          if (fnName === 'beforeSetClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
	          } else if (fnName === 'setClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
	          }
	
	          if (a) {
	            operations = operations.concat(a);
	          }
	          if (b) {
	            operations = operations.concat(b);
	          }
	        }
	
	        if (operations.length === 0) return;
	
	        // TODO(matsko): add documentation
	        return function startAnimation(callback) {
	          var runners = [];
	          if (operations.length) {
	            forEach(operations, function(animateFn) {
	              runners.push(animateFn());
	            });
	          }
	
	          runners.length ? $$AnimateRunner.all(runners, callback) : callback();
	
	          return function endFn(reject) {
	            forEach(runners, function(runner) {
	              reject ? runner.cancel() : runner.end();
	            });
	          };
	        };
	      }
	    };
	
	    function lookupAnimations(classes) {
	      classes = isArray(classes) ? classes : classes.split(' ');
	      var matches = [], flagMap = {};
	      for (var i=0; i < classes.length; i++) {
	        var klass = classes[i],
	            animationFactory = $animateProvider.$$registeredAnimations[klass];
	        if (animationFactory && !flagMap[klass]) {
	          matches.push($injector.get(animationFactory));
	          flagMap[klass] = true;
	        }
	      }
	      return matches;
	    }
	  }];
	}];
	
	var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateJsDriver');
	  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
	    return function initDriverFn(animationDetails) {
	      if (animationDetails.from && animationDetails.to) {
	        var fromAnimation = prepareAnimation(animationDetails.from);
	        var toAnimation = prepareAnimation(animationDetails.to);
	        if (!fromAnimation && !toAnimation) return;
	
	        return {
	          start: function() {
	            var animationRunners = [];
	
	            if (fromAnimation) {
	              animationRunners.push(fromAnimation.start());
	            }
	
	            if (toAnimation) {
	              animationRunners.push(toAnimation.start());
	            }
	
	            $$AnimateRunner.all(animationRunners, done);
	
	            var runner = new $$AnimateRunner({
	              end: endFnFactory(),
	              cancel: endFnFactory()
	            });
	
	            return runner;
	
	            function endFnFactory() {
	              return function() {
	                forEach(animationRunners, function(runner) {
	                  // at this point we cannot cancel animations for groups just yet. 1.5+
	                  runner.end();
	                });
	              };
	            }
	
	            function done(status) {
	              runner.complete(status);
	            }
	          }
	        };
	      } else {
	        return prepareAnimation(animationDetails);
	      }
	    };
	
	    function prepareAnimation(animationDetails) {
	      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
	      var element = animationDetails.element;
	      var event = animationDetails.event;
	      var options = animationDetails.options;
	      var classes = animationDetails.classes;
	      return $$animateJs(element, event, classes, options);
	    }
	  }];
	}];
	
	var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
	var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
	var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
	  var PRE_DIGEST_STATE = 1;
	  var RUNNING_STATE = 2;
	  var ONE_SPACE = ' ';
	
	  var rules = this.rules = {
	    skip: [],
	    cancel: [],
	    join: []
	  };
	
	  function makeTruthyCssClassMap(classString) {
	    if (!classString) {
	      return null;
	    }
	
	    var keys = classString.split(ONE_SPACE);
	    var map = Object.create(null);
	
	    forEach(keys, function(key) {
	      map[key] = true;
	    });
	    return map;
	  }
	
	  function hasMatchingClasses(newClassString, currentClassString) {
	    if (newClassString && currentClassString) {
	      var currentClassMap = makeTruthyCssClassMap(currentClassString);
	      return newClassString.split(ONE_SPACE).some(function(className) {
	        return currentClassMap[className];
	      });
	    }
	  }
	
	  function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
	    return rules[ruleType].some(function(fn) {
	      return fn(element, currentAnimation, previousAnimation);
	    });
	  }
	
	  function hasAnimationClasses(animation, and) {
	    var a = (animation.addClass || '').length > 0;
	    var b = (animation.removeClass || '').length > 0;
	    return and ? a && b : a || b;
	  }
	
	  rules.join.push(function(element, newAnimation, currentAnimation) {
	    // if the new animation is class-based then we can just tack that on
	    return !newAnimation.structural && hasAnimationClasses(newAnimation);
	  });
	
	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // there is no need to animate anything if no classes are being added and
	    // there is no structural animation that will be triggered
	    return !newAnimation.structural && !hasAnimationClasses(newAnimation);
	  });
	
	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // why should we trigger a new structural animation if the element will
	    // be removed from the DOM anyway?
	    return currentAnimation.event == 'leave' && newAnimation.structural;
	  });
	
	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // if there is an ongoing current animation then don't even bother running the class-based animation
	    return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
	  });
	
	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // there can never be two structural animations running at the same time
	    return currentAnimation.structural && newAnimation.structural;
	  });
	
	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // if the previous animation is already running, but the new animation will
	    // be triggered, but the new animation is structural
	    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
	  });
	
	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // cancel the animation if classes added / removed in both animation cancel each other out,
	    // but only if the current animation isn't structural
	
	    if (currentAnimation.structural) return false;
	
	    var nA = newAnimation.addClass;
	    var nR = newAnimation.removeClass;
	    var cA = currentAnimation.addClass;
	    var cR = currentAnimation.removeClass;
	
	    // early detection to save the global CPU shortage :)
	    if ((isUndefined(nA) && isUndefined(nR)) || (isUndefined(cA) && isUndefined(cR))) {
	      return false;
	    }
	
	    return hasMatchingClasses(nA, cR) || hasMatchingClasses(nR, cA);
	  });
	
	  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
	               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
	       function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
	                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow) {
	
	    var activeAnimationsLookup = new $$HashMap();
	    var disabledElementsLookup = new $$HashMap();
	    var animationsEnabled = null;
	
	    function postDigestTaskFactory() {
	      var postDigestCalled = false;
	      return function(fn) {
	        // we only issue a call to postDigest before
	        // it has first passed. This prevents any callbacks
	        // from not firing once the animation has completed
	        // since it will be out of the digest cycle.
	        if (postDigestCalled) {
	          fn();
	        } else {
	          $rootScope.$$postDigest(function() {
	            postDigestCalled = true;
	            fn();
	          });
	        }
	      };
	    }
	
	    // Wait until all directive and route-related templates are downloaded and
	    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	    // all of the remote templates being currently downloaded. If there are no
	    // templates currently downloading then the watcher will still fire anyway.
	    var deregisterWatch = $rootScope.$watch(
	      function() { return $templateRequest.totalPendingRequests === 0; },
	      function(isEmpty) {
	        if (!isEmpty) return;
	        deregisterWatch();
	
	        // Now that all templates have been downloaded, $animate will wait until
	        // the post digest queue is empty before enabling animations. By having two
	        // calls to $postDigest calls we can ensure that the flag is enabled at the
	        // very end of the post digest queue. Since all of the animations in $animate
	        // use $postDigest, it's important that the code below executes at the end.
	        // This basically means that the page is fully downloaded and compiled before
	        // any animations are triggered.
	        $rootScope.$$postDigest(function() {
	          $rootScope.$$postDigest(function() {
	            // we check for null directly in the event that the application already called
	            // .enabled() with whatever arguments that it provided it with
	            if (animationsEnabled === null) {
	              animationsEnabled = true;
	            }
	          });
	        });
	      }
	    );
	
	    var callbackRegistry = {};
	
	    // remember that the classNameFilter is set during the provider/config
	    // stage therefore we can optimize here and setup a helper function
	    var classNameFilter = $animateProvider.classNameFilter();
	    var isAnimatableClassName = !classNameFilter
	              ? function() { return true; }
	              : function(className) {
	                return classNameFilter.test(className);
	              };
	
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	    function normalizeAnimationDetails(element, animation) {
	      return mergeAnimationDetails(element, animation, {});
	    }
	
	    // IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
	    var contains = window.Node.prototype.contains || function(arg) {
	      // jshint bitwise: false
	      return this === arg || !!(this.compareDocumentPosition(arg) & 16);
	      // jshint bitwise: true
	    };
	
	    function findCallbacks(parent, element, event) {
	      var targetNode = getDomNode(element);
	      var targetParentNode = getDomNode(parent);
	
	      var matches = [];
	      var entries = callbackRegistry[event];
	      if (entries) {
	        forEach(entries, function(entry) {
	          if (contains.call(entry.node, targetNode)) {
	            matches.push(entry.callback);
	          } else if (event === 'leave' && contains.call(entry.node, targetParentNode)) {
	            matches.push(entry.callback);
	          }
	        });
	      }
	
	      return matches;
	    }
	
	    function filterFromRegistry(list, matchContainer, matchCallback) {
	      var containerNode = extractElementNode(matchContainer);
	      return list.filter(function(entry) {
	        var isMatch = entry.node === containerNode &&
	                        (!matchCallback || entry.callback === matchCallback);
	        return !isMatch;
	      });
	    }
	
	    function cleanupEventListeners(phase, element) {
	      if (phase === 'close' && !element[0].parentNode) {
	        // If the element is not attached to a parentNode, it has been removed by
	        // the domOperation, and we can safely remove the event callbacks
	        $animate.off(element);
	      }
	    }
	
	    var $animate = {
	      on: function(event, container, callback) {
	        var node = extractElementNode(container);
	        callbackRegistry[event] = callbackRegistry[event] || [];
	        callbackRegistry[event].push({
	          node: node,
	          callback: callback
	        });
	
	        // Remove the callback when the element is removed from the DOM
	        jqLite(container).on('$destroy', function() {
	          var animationDetails = activeAnimationsLookup.get(node);
	
	          if (!animationDetails) {
	            // If there's an animation ongoing, the callback calling code will remove
	            // the event listeners. If we'd remove here, the callbacks would be removed
	            // before the animation ends
	            $animate.off(event, container, callback);
	          }
	        });
	      },
	
	      off: function(event, container, callback) {
	        if (arguments.length === 1 && !angular.isString(arguments[0])) {
	          container = arguments[0];
	          for (var eventType in callbackRegistry) {
	            callbackRegistry[eventType] = filterFromRegistry(callbackRegistry[eventType], container);
	          }
	
	          return;
	        }
	
	        var entries = callbackRegistry[event];
	        if (!entries) return;
	
	        callbackRegistry[event] = arguments.length === 1
	            ? null
	            : filterFromRegistry(entries, container, callback);
	      },
	
	      pin: function(element, parentElement) {
	        assertArg(isElement(element), 'element', 'not an element');
	        assertArg(isElement(parentElement), 'parentElement', 'not an element');
	        element.data(NG_ANIMATE_PIN_DATA, parentElement);
	      },
	
	      push: function(element, event, options, domOperation) {
	        options = options || {};
	        options.domOperation = domOperation;
	        return queueAnimation(element, event, options);
	      },
	
	      // this method has four signatures:
	      //  () - global getter
	      //  (bool) - global setter
	      //  (element) - element getter
	      //  (element, bool) - element setter<F37>
	      enabled: function(element, bool) {
	        var argCount = arguments.length;
	
	        if (argCount === 0) {
	          // () - Global getter
	          bool = !!animationsEnabled;
	        } else {
	          var hasElement = isElement(element);
	
	          if (!hasElement) {
	            // (bool) - Global setter
	            bool = animationsEnabled = !!element;
	          } else {
	            var node = getDomNode(element);
	            var recordExists = disabledElementsLookup.get(node);
	
	            if (argCount === 1) {
	              // (element) - Element getter
	              bool = !recordExists;
	            } else {
	              // (element, bool) - Element setter
	              disabledElementsLookup.put(node, !bool);
	            }
	          }
	        }
	
	        return bool;
	      }
	    };
	
	    return $animate;
	
	    function queueAnimation(element, event, initialOptions) {
	      // we always make a copy of the options since
	      // there should never be any side effects on
	      // the input data when running `$animateCss`.
	      var options = copy(initialOptions);
	
	      var node, parent;
	      element = stripCommentsFromElement(element);
	      if (element) {
	        node = getDomNode(element);
	        parent = element.parent();
	      }
	
	      options = prepareAnimationOptions(options);
	
	      // we create a fake runner with a working promise.
	      // These methods will become available after the digest has passed
	      var runner = new $$AnimateRunner();
	
	      // this is used to trigger callbacks in postDigest mode
	      var runInNextPostDigestOrNow = postDigestTaskFactory();
	
	      if (isArray(options.addClass)) {
	        options.addClass = options.addClass.join(' ');
	      }
	
	      if (options.addClass && !isString(options.addClass)) {
	        options.addClass = null;
	      }
	
	      if (isArray(options.removeClass)) {
	        options.removeClass = options.removeClass.join(' ');
	      }
	
	      if (options.removeClass && !isString(options.removeClass)) {
	        options.removeClass = null;
	      }
	
	      if (options.from && !isObject(options.from)) {
	        options.from = null;
	      }
	
	      if (options.to && !isObject(options.to)) {
	        options.to = null;
	      }
	
	      // there are situations where a directive issues an animation for
	      // a jqLite wrapper that contains only comment nodes... If this
	      // happens then there is no way we can perform an animation
	      if (!node) {
	        close();
	        return runner;
	      }
	
	      var className = [node.className, options.addClass, options.removeClass].join(' ');
	      if (!isAnimatableClassName(className)) {
	        close();
	        return runner;
	      }
	
	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;
	
	      var documentHidden = $document[0].hidden;
	
	      // this is a hard disable of all animations for the application or on
	      // the element itself, therefore  there is no need to continue further
	      // past this point if not enabled
	      // Animations are also disabled if the document is currently hidden (page is not visible
	      // to the user), because browsers slow down or do not flush calls to requestAnimationFrame
	      var skipAnimations = !animationsEnabled || documentHidden || disabledElementsLookup.get(node);
	      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
	      var hasExistingAnimation = !!existingAnimation.state;
	
	      // there is no point in traversing the same collection of parent ancestors if a followup
	      // animation will be run on the same element that already did all that checking work
	      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
	        skipAnimations = !areAnimationsAllowed(element, parent, event);
	      }
	
	      if (skipAnimations) {
	        // Callbacks should fire even if the document is hidden (regression fix for issue #14120)
	        if (documentHidden) notifyProgress(runner, event, 'start');
	        close();
	        if (documentHidden) notifyProgress(runner, event, 'close');
	        return runner;
	      }
	
	      if (isStructural) {
	        closeChildAnimations(element);
	      }
	
	      var newAnimation = {
	        structural: isStructural,
	        element: element,
	        event: event,
	        addClass: options.addClass,
	        removeClass: options.removeClass,
	        close: close,
	        options: options,
	        runner: runner
	      };
	
	      if (hasExistingAnimation) {
	        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
	        if (skipAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            close();
	            return runner;
	          } else {
	            mergeAnimationDetails(element, existingAnimation, newAnimation);
	            return existingAnimation.runner;
	          }
	        }
	        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
	        if (cancelAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            // this will end the animation right away and it is safe
	            // to do so since the animation is already running and the
	            // runner callback code will run in async
	            existingAnimation.runner.end();
	          } else if (existingAnimation.structural) {
	            // this means that the animation is queued into a digest, but
	            // hasn't started yet. Therefore it is safe to run the close
	            // method which will call the runner methods in async.
	            existingAnimation.close();
	          } else {
	            // this will merge the new animation options into existing animation options
	            mergeAnimationDetails(element, existingAnimation, newAnimation);
	
	            return existingAnimation.runner;
	          }
	        } else {
	          // a joined animation means that this animation will take over the existing one
	          // so an example would involve a leave animation taking over an enter. Then when
	          // the postDigest kicks in the enter will be ignored.
	          var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
	          if (joinAnimationFlag) {
	            if (existingAnimation.state === RUNNING_STATE) {
	              normalizeAnimationDetails(element, newAnimation);
	            } else {
	              applyGeneratedPreparationClasses(element, isStructural ? event : null, options);
	
	              event = newAnimation.event = existingAnimation.event;
	              options = mergeAnimationDetails(element, existingAnimation, newAnimation);
	
	              //we return the same runner since only the option values of this animation will
	              //be fed into the `existingAnimation`.
	              return existingAnimation.runner;
	            }
	          }
	        }
	      } else {
	        // normalization in this case means that it removes redundant CSS classes that
	        // already exist (addClass) or do not exist (removeClass) on the element
	        normalizeAnimationDetails(element, newAnimation);
	      }
	
	      // when the options are merged and cleaned up we may end up not having to do
	      // an animation at all, therefore we should check this before issuing a post
	      // digest callback. Structural animations will always run no matter what.
	      var isValidAnimation = newAnimation.structural;
	      if (!isValidAnimation) {
	        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
	        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
	                            || hasAnimationClasses(newAnimation);
	      }
	
	      if (!isValidAnimation) {
	        close();
	        clearElementAnimationState(element);
	        return runner;
	      }
	
	      // the counter keeps track of cancelled animations
	      var counter = (existingAnimation.counter || 0) + 1;
	      newAnimation.counter = counter;
	
	      markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);
	
	      $rootScope.$$postDigest(function() {
	        var animationDetails = activeAnimationsLookup.get(node);
	        var animationCancelled = !animationDetails;
	        animationDetails = animationDetails || {};
	
	        // if addClass/removeClass is called before something like enter then the
	        // registered parent element may not be present. The code below will ensure
	        // that a final value for parent element is obtained
	        var parentElement = element.parent() || [];
	
	        // animate/structural/class-based animations all have requirements. Otherwise there
	        // is no point in performing an animation. The parent node must also be set.
	        var isValidAnimation = parentElement.length > 0
	                                && (animationDetails.event === 'animate'
	                                    || animationDetails.structural
	                                    || hasAnimationClasses(animationDetails));
	
	        // this means that the previous animation was cancelled
	        // even if the follow-up animation is the same event
	        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
	          // if another animation did not take over then we need
	          // to make sure that the domOperation and options are
	          // handled accordingly
	          if (animationCancelled) {
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	          }
	
	          // if the event changed from something like enter to leave then we do
	          // it, otherwise if it's the same then the end result will be the same too
	          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
	            options.domOperation();
	            runner.end();
	          }
	
	          // in the event that the element animation was not cancelled or a follow-up animation
	          // isn't allowed to animate from here then we need to clear the state of the element
	          // so that any future animations won't read the expired animation data.
	          if (!isValidAnimation) {
	            clearElementAnimationState(element);
	          }
	
	          return;
	        }
	
	        // this combined multiple class to addClass / removeClass into a setClass event
	        // so long as a structural event did not take over the animation
	        event = !animationDetails.structural && hasAnimationClasses(animationDetails, true)
	            ? 'setClass'
	            : animationDetails.event;
	
	        markElementAnimationState(element, RUNNING_STATE);
	        var realRunner = $$animation(element, event, animationDetails.options);
	
	        // this will update the runner's flow-control events based on
	        // the `realRunner` object.
	        runner.setHost(realRunner);
	        notifyProgress(runner, event, 'start', {});
	
	        realRunner.done(function(status) {
	          close(!status);
	          var animationDetails = activeAnimationsLookup.get(node);
	          if (animationDetails && animationDetails.counter === counter) {
	            clearElementAnimationState(getDomNode(element));
	          }
	          notifyProgress(runner, event, 'close', {});
	        });
	      });
	
	      return runner;
	
	      function notifyProgress(runner, event, phase, data) {
	        runInNextPostDigestOrNow(function() {
	          var callbacks = findCallbacks(parent, element, event);
	          if (callbacks.length) {
	            // do not optimize this call here to RAF because
	            // we don't know how heavy the callback code here will
	            // be and if this code is buffered then this can
	            // lead to a performance regression.
	            $$rAF(function() {
	              forEach(callbacks, function(callback) {
	                callback(element, phase, data);
	              });
	              cleanupEventListeners(phase, element);
	            });
	          } else {
	            cleanupEventListeners(phase, element);
	          }
	        });
	        runner.progress(event, phase, data);
	      }
	
	      function close(reject) { // jshint ignore:line
	        clearGeneratedClasses(element, options);
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();
	        runner.complete(!reject);
	      }
	    }
	
	    function closeChildAnimations(element) {
	      var node = getDomNode(element);
	      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
	      forEach(children, function(child) {
	        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
	        var animationDetails = activeAnimationsLookup.get(child);
	        if (animationDetails) {
	          switch (state) {
	            case RUNNING_STATE:
	              animationDetails.runner.end();
	              /* falls through */
	            case PRE_DIGEST_STATE:
	              activeAnimationsLookup.remove(child);
	              break;
	          }
	        }
	      });
	    }
	
	    function clearElementAnimationState(element) {
	      var node = getDomNode(element);
	      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
	      activeAnimationsLookup.remove(node);
	    }
	
	    function isMatchingElement(nodeOrElmA, nodeOrElmB) {
	      return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
	    }
	
	    /**
	     * This fn returns false if any of the following is true:
	     * a) animations on any parent element are disabled, and animations on the element aren't explicitly allowed
	     * b) a parent element has an ongoing structural animation, and animateChildren is false
	     * c) the element is not a child of the body
	     * d) the element is not a child of the $rootElement
	     */
	    function areAnimationsAllowed(element, parentElement, event) {
	      var bodyElement = jqLite($document[0].body);
	      var bodyElementDetected = isMatchingElement(element, bodyElement) || element[0].nodeName === 'HTML';
	      var rootElementDetected = isMatchingElement(element, $rootElement);
	      var parentAnimationDetected = false;
	      var animateChildren;
	      var elementDisabled = disabledElementsLookup.get(getDomNode(element));
	
	      var parentHost = jqLite.data(element[0], NG_ANIMATE_PIN_DATA);
	      if (parentHost) {
	        parentElement = parentHost;
	      }
	
	      parentElement = getDomNode(parentElement);
	
	      while (parentElement) {
	        if (!rootElementDetected) {
	          // angular doesn't want to attempt to animate elements outside of the application
	          // therefore we need to ensure that the rootElement is an ancestor of the current element
	          rootElementDetected = isMatchingElement(parentElement, $rootElement);
	        }
	
	        if (parentElement.nodeType !== ELEMENT_NODE) {
	          // no point in inspecting the #document element
	          break;
	        }
	
	        var details = activeAnimationsLookup.get(parentElement) || {};
	        // either an enter, leave or move animation will commence
	        // therefore we can't allow any animations to take place
	        // but if a parent animation is class-based then that's ok
	        if (!parentAnimationDetected) {
	          var parentElementDisabled = disabledElementsLookup.get(parentElement);
	
	          if (parentElementDisabled === true && elementDisabled !== false) {
	            // disable animations if the user hasn't explicitly enabled animations on the
	            // current element
	            elementDisabled = true;
	            // element is disabled via parent element, no need to check anything else
	            break;
	          } else if (parentElementDisabled === false) {
	            elementDisabled = false;
	          }
	          parentAnimationDetected = details.structural;
	        }
	
	        if (isUndefined(animateChildren) || animateChildren === true) {
	          var value = jqLite.data(parentElement, NG_ANIMATE_CHILDREN_DATA);
	          if (isDefined(value)) {
	            animateChildren = value;
	          }
	        }
	
	        // there is no need to continue traversing at this point
	        if (parentAnimationDetected && animateChildren === false) break;
	
	        if (!bodyElementDetected) {
	          // we also need to ensure that the element is or will be a part of the body element
	          // otherwise it is pointless to even issue an animation to be rendered
	          bodyElementDetected = isMatchingElement(parentElement, bodyElement);
	        }
	
	        if (bodyElementDetected && rootElementDetected) {
	          // If both body and root have been found, any other checks are pointless,
	          // as no animation data should live outside the application
	          break;
	        }
	
	        if (!rootElementDetected) {
	          // If no rootElement is detected, check if the parentElement is pinned to another element
	          parentHost = jqLite.data(parentElement, NG_ANIMATE_PIN_DATA);
	          if (parentHost) {
	            // The pin target element becomes the next parent element
	            parentElement = getDomNode(parentHost);
	            continue;
	          }
	        }
	
	        parentElement = parentElement.parentNode;
	      }
	
	      var allowAnimation = (!parentAnimationDetected || animateChildren) && elementDisabled !== true;
	      return allowAnimation && rootElementDetected && bodyElementDetected;
	    }
	
	    function markElementAnimationState(element, state, details) {
	      details = details || {};
	      details.state = state;
	
	      var node = getDomNode(element);
	      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);
	
	      var oldValue = activeAnimationsLookup.get(node);
	      var newValue = oldValue
	          ? extend(oldValue, details)
	          : details;
	      activeAnimationsLookup.put(node, newValue);
	    }
	  }];
	}];
	
	var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
	  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';
	
	  var drivers = this.drivers = [];
	
	  var RUNNER_STORAGE_KEY = '$$animationRunner';
	
	  function setRunner(element, runner) {
	    element.data(RUNNER_STORAGE_KEY, runner);
	  }
	
	  function removeRunner(element) {
	    element.removeData(RUNNER_STORAGE_KEY);
	  }
	
	  function getRunner(element) {
	    return element.data(RUNNER_STORAGE_KEY);
	  }
	
	  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler',
	       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$HashMap,   $$rAFScheduler) {
	
	    var animationQueue = [];
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	    function sortAnimations(animations) {
	      var tree = { children: [] };
	      var i, lookup = new $$HashMap();
	
	      // this is done first beforehand so that the hashmap
	      // is filled with a list of the elements that will be animated
	      for (i = 0; i < animations.length; i++) {
	        var animation = animations[i];
	        lookup.put(animation.domNode, animations[i] = {
	          domNode: animation.domNode,
	          fn: animation.fn,
	          children: []
	        });
	      }
	
	      for (i = 0; i < animations.length; i++) {
	        processNode(animations[i]);
	      }
	
	      return flatten(tree);
	
	      function processNode(entry) {
	        if (entry.processed) return entry;
	        entry.processed = true;
	
	        var elementNode = entry.domNode;
	        var parentNode = elementNode.parentNode;
	        lookup.put(elementNode, entry);
	
	        var parentEntry;
	        while (parentNode) {
	          parentEntry = lookup.get(parentNode);
	          if (parentEntry) {
	            if (!parentEntry.processed) {
	              parentEntry = processNode(parentEntry);
	            }
	            break;
	          }
	          parentNode = parentNode.parentNode;
	        }
	
	        (parentEntry || tree).children.push(entry);
	        return entry;
	      }
	
	      function flatten(tree) {
	        var result = [];
	        var queue = [];
	        var i;
	
	        for (i = 0; i < tree.children.length; i++) {
	          queue.push(tree.children[i]);
	        }
	
	        var remainingLevelEntries = queue.length;
	        var nextLevelEntries = 0;
	        var row = [];
	
	        for (i = 0; i < queue.length; i++) {
	          var entry = queue[i];
	          if (remainingLevelEntries <= 0) {
	            remainingLevelEntries = nextLevelEntries;
	            nextLevelEntries = 0;
	            result.push(row);
	            row = [];
	          }
	          row.push(entry.fn);
	          entry.children.forEach(function(childEntry) {
	            nextLevelEntries++;
	            queue.push(childEntry);
	          });
	          remainingLevelEntries--;
	        }
	
	        if (row.length) {
	          result.push(row);
	        }
	
	        return result;
	      }
	    }
	
	    // TODO(matsko): document the signature in a better way
	    return function(element, event, options) {
	      options = prepareAnimationOptions(options);
	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;
	
	      // there is no animation at the current moment, however
	      // these runner methods will get later updated with the
	      // methods leading into the driver's end/cancel methods
	      // for now they just stop the animation from starting
	      var runner = new $$AnimateRunner({
	        end: function() { close(); },
	        cancel: function() { close(true); }
	      });
	
	      if (!drivers.length) {
	        close();
	        return runner;
	      }
	
	      setRunner(element, runner);
	
	      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
	      var tempClasses = options.tempClasses;
	      if (tempClasses) {
	        classes += ' ' + tempClasses;
	        options.tempClasses = null;
	      }
	
	      var prepareClassName;
	      if (isStructural) {
	        prepareClassName = 'ng-' + event + PREPARE_CLASS_SUFFIX;
	        $$jqLite.addClass(element, prepareClassName);
	      }
	
	      animationQueue.push({
	        // this data is used by the postDigest code and passed into
	        // the driver step function
	        element: element,
	        classes: classes,
	        event: event,
	        structural: isStructural,
	        options: options,
	        beforeStart: beforeStart,
	        close: close
	      });
	
	      element.on('$destroy', handleDestroyedElement);
	
	      // we only want there to be one function called within the post digest
	      // block. This way we can group animations for all the animations that
	      // were apart of the same postDigest flush call.
	      if (animationQueue.length > 1) return runner;
	
	      $rootScope.$$postDigest(function() {
	        var animations = [];
	        forEach(animationQueue, function(entry) {
	          // the element was destroyed early on which removed the runner
	          // form its storage. This means we can't animate this element
	          // at all and it already has been closed due to destruction.
	          if (getRunner(entry.element)) {
	            animations.push(entry);
	          } else {
	            entry.close();
	          }
	        });
	
	        // now any future animations will be in another postDigest
	        animationQueue.length = 0;
	
	        var groupedAnimations = groupAnimations(animations);
	        var toBeSortedAnimations = [];
	
	        forEach(groupedAnimations, function(animationEntry) {
	          toBeSortedAnimations.push({
	            domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
	            fn: function triggerAnimationStart() {
	              // it's important that we apply the `ng-animate` CSS class and the
	              // temporary classes before we do any driver invoking since these
	              // CSS classes may be required for proper CSS detection.
	              animationEntry.beforeStart();
	
	              var startAnimationFn, closeFn = animationEntry.close;
	
	              // in the event that the element was removed before the digest runs or
	              // during the RAF sequencing then we should not trigger the animation.
	              var targetElement = animationEntry.anchors
	                  ? (animationEntry.from.element || animationEntry.to.element)
	                  : animationEntry.element;
	
	              if (getRunner(targetElement)) {
	                var operation = invokeFirstDriver(animationEntry);
	                if (operation) {
	                  startAnimationFn = operation.start;
	                }
	              }
	
	              if (!startAnimationFn) {
	                closeFn();
	              } else {
	                var animationRunner = startAnimationFn();
	                animationRunner.done(function(status) {
	                  closeFn(!status);
	                });
	                updateAnimationRunners(animationEntry, animationRunner);
	              }
	            }
	          });
	        });
	
	        // we need to sort each of the animations in order of parent to child
	        // relationships. This ensures that the child classes are applied at the
	        // right time.
	        $$rAFScheduler(sortAnimations(toBeSortedAnimations));
	      });
	
	      return runner;
	
	      // TODO(matsko): change to reference nodes
	      function getAnchorNodes(node) {
	        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
	        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
	              ? [node]
	              : node.querySelectorAll(SELECTOR);
	        var anchors = [];
	        forEach(items, function(node) {
	          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
	          if (attr && attr.length) {
	            anchors.push(node);
	          }
	        });
	        return anchors;
	      }
	
	      function groupAnimations(animations) {
	        var preparedAnimations = [];
	        var refLookup = {};
	        forEach(animations, function(animation, index) {
	          var element = animation.element;
	          var node = getDomNode(element);
	          var event = animation.event;
	          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
	          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];
	
	          if (anchorNodes.length) {
	            var direction = enterOrMove ? 'to' : 'from';
	
	            forEach(anchorNodes, function(anchor) {
	              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
	              refLookup[key] = refLookup[key] || {};
	              refLookup[key][direction] = {
	                animationID: index,
	                element: jqLite(anchor)
	              };
	            });
	          } else {
	            preparedAnimations.push(animation);
	          }
	        });
	
	        var usedIndicesLookup = {};
	        var anchorGroups = {};
	        forEach(refLookup, function(operations, key) {
	          var from = operations.from;
	          var to = operations.to;
	
	          if (!from || !to) {
	            // only one of these is set therefore we can't have an
	            // anchor animation since all three pieces are required
	            var index = from ? from.animationID : to.animationID;
	            var indexKey = index.toString();
	            if (!usedIndicesLookup[indexKey]) {
	              usedIndicesLookup[indexKey] = true;
	              preparedAnimations.push(animations[index]);
	            }
	            return;
	          }
	
	          var fromAnimation = animations[from.animationID];
	          var toAnimation = animations[to.animationID];
	          var lookupKey = from.animationID.toString();
	          if (!anchorGroups[lookupKey]) {
	            var group = anchorGroups[lookupKey] = {
	              structural: true,
	              beforeStart: function() {
	                fromAnimation.beforeStart();
	                toAnimation.beforeStart();
	              },
	              close: function() {
	                fromAnimation.close();
	                toAnimation.close();
	              },
	              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
	              from: fromAnimation,
	              to: toAnimation,
	              anchors: [] // TODO(matsko): change to reference nodes
	            };
	
	            // the anchor animations require that the from and to elements both have at least
	            // one shared CSS class which effectively marries the two elements together to use
	            // the same animation driver and to properly sequence the anchor animation.
	            if (group.classes.length) {
	              preparedAnimations.push(group);
	            } else {
	              preparedAnimations.push(fromAnimation);
	              preparedAnimations.push(toAnimation);
	            }
	          }
	
	          anchorGroups[lookupKey].anchors.push({
	            'out': from.element, 'in': to.element
	          });
	        });
	
	        return preparedAnimations;
	      }
	
	      function cssClassesIntersection(a,b) {
	        a = a.split(' ');
	        b = b.split(' ');
	        var matches = [];
	
	        for (var i = 0; i < a.length; i++) {
	          var aa = a[i];
	          if (aa.substring(0,3) === 'ng-') continue;
	
	          for (var j = 0; j < b.length; j++) {
	            if (aa === b[j]) {
	              matches.push(aa);
	              break;
	            }
	          }
	        }
	
	        return matches.join(' ');
	      }
	
	      function invokeFirstDriver(animationDetails) {
	        // we loop in reverse order since the more general drivers (like CSS and JS)
	        // may attempt more elements, but custom drivers are more particular
	        for (var i = drivers.length - 1; i >= 0; i--) {
	          var driverName = drivers[i];
	          if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check
	
	          var factory = $injector.get(driverName);
	          var driver = factory(animationDetails);
	          if (driver) {
	            return driver;
	          }
	        }
	      }
	
	      function beforeStart() {
	        element.addClass(NG_ANIMATE_CLASSNAME);
	        if (tempClasses) {
	          $$jqLite.addClass(element, tempClasses);
	        }
	        if (prepareClassName) {
	          $$jqLite.removeClass(element, prepareClassName);
	          prepareClassName = null;
	        }
	      }
	
	      function updateAnimationRunners(animation, newRunner) {
	        if (animation.from && animation.to) {
	          update(animation.from.element);
	          update(animation.to.element);
	        } else {
	          update(animation.element);
	        }
	
	        function update(element) {
	          getRunner(element).setHost(newRunner);
	        }
	      }
	
	      function handleDestroyedElement() {
	        var runner = getRunner(element);
	        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
	          runner.end();
	        }
	      }
	
	      function close(rejected) { // jshint ignore:line
	        element.off('$destroy', handleDestroyedElement);
	        removeRunner(element);
	
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();
	
	        if (tempClasses) {
	          $$jqLite.removeClass(element, tempClasses);
	        }
	
	        element.removeClass(NG_ANIMATE_CLASSNAME);
	        runner.complete(!rejected);
	      }
	    };
	  }];
	}];
	
	/**
	 * @ngdoc directive
	 * @name ngAnimateSwap
	 * @restrict A
	 * @scope
	 *
	 * @description
	 *
	 * ngAnimateSwap is a animation-oriented directive that allows for the container to
	 * be removed and entered in whenever the associated expression changes. A
	 * common usecase for this directive is a rotating banner or slider component which
	 * contains one image being present at a time. When the active image changes
	 * then the old image will perform a `leave` animation and the new element
	 * will be inserted via an `enter` animation.
	 *
	 * @animations
	 * | Animation                        | Occurs                               |
	 * |----------------------------------|--------------------------------------|
	 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
	 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
	 *
	 * @example
	 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
	 *          deps="angular-animate.js"
	 *          animations="true" fixBase="true">
	 *   <file name="index.html">
	 *     <div class="container" ng-controller="AppCtrl">
	 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
	 *         {{ number }}
	 *       </div>
	 *     </div>
	 *   </file>
	 *   <file name="script.js">
	 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
	 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
	 *         $scope.number = 0;
	 *         $interval(function() {
	 *           $scope.number++;
	 *         }, 1000);
	 *
	 *         var colors = ['red','blue','green','yellow','orange'];
	 *         $scope.colorClass = function(number) {
	 *           return colors[number % colors.length];
	 *         };
	 *       }]);
	 *   </file>
	 *  <file name="animations.css">
	 *  .container {
	 *    height:250px;
	 *    width:250px;
	 *    position:relative;
	 *    overflow:hidden;
	 *    border:2px solid black;
	 *  }
	 *  .container .cell {
	 *    font-size:150px;
	 *    text-align:center;
	 *    line-height:250px;
	 *    position:absolute;
	 *    top:0;
	 *    left:0;
	 *    right:0;
	 *    border-bottom:2px solid black;
	 *  }
	 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
	 *    transition:0.5s linear all;
	 *  }
	 *  .swap-animation.ng-enter {
	 *    top:-250px;
	 *  }
	 *  .swap-animation.ng-enter-active {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave-active {
	 *    top:250px;
	 *  }
	 *  .red { background:red; }
	 *  .green { background:green; }
	 *  .blue { background:blue; }
	 *  .yellow { background:yellow; }
	 *  .orange { background:orange; }
	 *  </file>
	 * </example>
	 */
	var ngAnimateSwapDirective = ['$animate', '$rootScope', function($animate, $rootScope) {
	  return {
	    restrict: 'A',
	    transclude: 'element',
	    terminal: true,
	    priority: 600, // we use 600 here to ensure that the directive is caught before others
	    link: function(scope, $element, attrs, ctrl, $transclude) {
	      var previousElement, previousScope;
	      scope.$watchCollection(attrs.ngAnimateSwap || attrs['for'], function(value) {
	        if (previousElement) {
	          $animate.leave(previousElement);
	        }
	        if (previousScope) {
	          previousScope.$destroy();
	          previousScope = null;
	        }
	        if (value || value === 0) {
	          previousScope = scope.$new();
	          $transclude(previousScope, function(element) {
	            previousElement = element;
	            $animate.enter(element, null, $element);
	          });
	        }
	      });
	    }
	  };
	}];
	
	/* global angularAnimateModule: true,
	
	   ngAnimateSwapDirective,
	   $$AnimateAsyncRunFactory,
	   $$rAFSchedulerFactory,
	   $$AnimateChildrenDirective,
	   $$AnimateQueueProvider,
	   $$AnimationProvider,
	   $AnimateCssProvider,
	   $$AnimateCssDriverProvider,
	   $$AnimateJsProvider,
	   $$AnimateJsDriverProvider,
	*/
	
	/**
	 * @ngdoc module
	 * @name ngAnimate
	 * @description
	 *
	 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
	 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
	 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
	 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
	 * the HTML element that the animation will be triggered on.
	 *
	 * ## Directive Support
	 * The following directives are "animation aware":
	 *
	 * | Directive                                                                                                | Supported Animations                                                     |
	 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	 *
	 * (More information can be found by visiting each the documentation associated with each directive.)
	 *
	 * ## CSS-based Animations
	 *
	 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
	 * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
	 *
	 * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
	 *
	 * ```html
	 * <div ng-if="bool" class="fade">
	 *    Fade me in out
	 * </div>
	 * <button ng-click="bool=true">Fade In!</button>
	 * <button ng-click="bool=false">Fade Out!</button>
	 * ```
	 *
	 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
	 *
	 * ```css
	 * /&#42; The starting CSS styles for the enter animation &#42;/
	 * .fade.ng-enter {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 *
	 * /&#42; The finishing CSS styles for the enter animation &#42;/
	 * .fade.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
	 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
	 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
	 *
	 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
	 *
	 * ```css
	 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
	 * .fade.ng-leave {
	 *   transition:0.5s linear all;
	 *   opacity:1;
	 * }
	 * .fade.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
	 *
	 * ```css
	 * /&#42; there is no need to define anything inside of the destination
	 * CSS class since the keyframe will take charge of the animation &#42;/
	 * .fade.ng-leave {
	 *   animation: my_fade_animation 0.5s linear;
	 *   -webkit-animation: my_fade_animation 0.5s linear;
	 * }
	 *
	 * @keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 *
	 * @-webkit-keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 * ```
	 *
	 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
	 *
	 * ### CSS Class-based Animations
	 *
	 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
	 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
	 * and removed.
	 *
	 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
	 *
	 * ```html
	 * <div ng-show="bool" class="fade">
	 *   Show and hide me
	 * </div>
	 * <button ng-click="bool=!bool">Toggle</button>
	 *
	 * <style>
	 * .fade.ng-hide {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 * </style>
	 * ```
	 *
	 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
	 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
	 *
	 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
	 * with CSS styles.
	 *
	 * ```html
	 * <div ng-class="{on:onOff}" class="highlight">
	 *   Highlight this box
	 * </div>
	 * <button ng-click="onOff=!onOff">Toggle</button>
	 *
	 * <style>
	 * .highlight {
	 *   transition:0.5s linear all;
	 * }
	 * .highlight.on-add {
	 *   background:white;
	 * }
	 * .highlight.on {
	 *   background:yellow;
	 * }
	 * .highlight.on-remove {
	 *   background:black;
	 * }
	 * </style>
	 * ```
	 *
	 * We can also make use of CSS keyframes by placing them within the CSS classes.
	 *
	 *
	 * ### CSS Staggering Animations
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * ```css
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
	 *     to not accidentally inherit a delay property from another CSS class &#42;/
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * ```js
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * window.requestAnimationFrame(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 *
	 *   $scope.$digest();
	 * });
	 * ```
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * ### The `ng-animate` CSS class
	 *
	 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
	 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
	 *
	 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
	 *
	 * ```css
	 * .zipper.ng-animate {
	 *   transition:0.5s linear all;
	 * }
	 * .zipper.ng-enter {
	 *   opacity:0;
	 * }
	 * .zipper.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
	 * the CSS class once an animation has completed.)
	 *
	 *
	 * ### The `ng-[event]-prepare` class
	 *
	 * This is a special class that can be used to prevent unwanted flickering / flash of content before
	 * the actual animation starts. The class is added as soon as an animation is initialized, but removed
	 * before the actual animation starts (after waiting for a $digest).
	 * It is also only added for *structural* animations (`enter`, `move`, and `leave`).
	 *
	 * In practice, flickering can appear when nesting elements with structural animations such as `ngIf`
	 * into elements that have class-based animations such as `ngClass`.
	 *
	 * ```html
	 * <div ng-class="{red: myProp}">
	 *   <div ng-class="{blue: myProp}">
	 *     <div class="message" ng-if="myProp"></div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * It is possible that during the `enter` animation, the `.message` div will be briefly visible before it starts animating.
	 * In that case, you can add styles to the CSS that make sure the element stays hidden before the animation starts:
	 *
	 * ```css
	 * .message.ng-enter-prepare {
	 *   opacity: 0;
	 * }
	 *
	 * ```
	 *
	 * ## JavaScript-based Animations
	 *
	 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
	 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
	 * `module.animation()` module function we can register the animation.
	 *
	 * Let's see an example of a enter/leave animation using `ngRepeat`:
	 *
	 * ```html
	 * <div ng-repeat="item in items" class="slide">
	 *   {{ item }}
	 * </div>
	 * ```
	 *
	 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     // make note that other events (like addClass/removeClass)
	 *     // have different function input parameters
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *
	 *       // remember to call doneFn so that angular
	 *       // knows that the animation has concluded
	 *     },
	 *
	 *     move: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *     },
	 *
	 *     leave: function(element, doneFn) {
	 *       jQuery(element).fadeOut(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
	 * greensock.js and velocity.js.
	 *
	 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
	 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
	 *
	 * ```html
	 * <div ng-class="color" class="colorful">
	 *   this box is moody
	 * </div>
	 * <button ng-click="color='red'">Change to red</button>
	 * <button ng-click="color='blue'">Change to blue</button>
	 * <button ng-click="color='green'">Change to green</button>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.colorful', [function() {
	 *   return {
	 *     addClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     removeClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     setClass: function(element, addedClass, removedClass, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## CSS + JS Animations Together
	 *
	 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
	 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
	 * charge of the animation**:
	 *
	 * ```html
	 * <div ng-if="bool" class="slide">
	 *   Slide in and out
	 * </div>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).slideIn(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ```css
	 * .slide.ng-enter {
	 *   transition:0.5s linear all;
	 *   transform:translateY(-100px);
	 * }
	 * .slide.ng-enter.ng-enter-active {
	 *   transform:translateY(0);
	 * }
	 * ```
	 *
	 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
	 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
	 * our own JS-based animation code:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
	 *
	 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
	 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
	 * data into `$animateCss` directly:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true,
	 *         addClass: 'maroon-setting',
	 *         from: { height:0 },
	 *         to: { height: 200 }
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Now we can fill in the rest via our transition CSS code:
	 *
	 * ```css
	 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
	 * .slide.ng-enter { transition:0.5s linear all; }
	 *
	 * /&#42; this extra CSS class will be absorbed into the transition
	 * since the $animateCss code is adding the class &#42;/
	 * .maroon-setting { background:red; }
	 * ```
	 *
	 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
	 *
	 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
	 *
	 * ## Animation Anchoring (via `ng-animate-ref`)
	 *
	 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
	 * structural areas of an application (like views) by pairing up elements using an attribute
	 * called `ng-animate-ref`.
	 *
	 * Let's say for example we have two views that are managed by `ng-view` and we want to show
	 * that there is a relationship between two components situated in within these views. By using the
	 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
	 * can then attach an animation, which is triggered when the view changes.
	 *
	 * Say for example we have the following template code:
	 *
	 * ```html
	 * <!-- index.html -->
	 * <div ng-view class="view-animation">
	 * </div>
	 *
	 * <!-- home.html -->
	 * <a href="#/banner-page">
	 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * </a>
	 *
	 * <!-- banner-page.html -->
	 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * ```
	 *
	 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
	 * HTML contents to see if there is a match reference between any components in the view
	 * that is leaving and the view that is entering. It will scan both the view which is being
	 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
	 * contain a matching ref value.
	 *
	 * The two images match since they share the same ref value. ngAnimate will now create a
	 * transport element (which is a clone of the first image element) and it will then attempt
	 * to animate to the position of the second image element in the next view. For the animation to
	 * work a special CSS class called `ng-anchor` will be added to the transported element.
	 *
	 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
	 * ngAnimate will handle the entire transition for us as well as the addition and removal of
	 * any changes of CSS classes between the elements:
	 *
	 * ```css
	 * .banner.ng-anchor {
	 *   /&#42; this animation will last for 1 second since there are
	 *          two phases to the animation (an `in` and an `out` phase) &#42;/
	 *   transition:0.5s linear all;
	 * }
	 * ```
	 *
	 * We also **must** include animations for the views that are being entered and removed
	 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
	 *
	 * ```css
	 * .view-animation.ng-enter, .view-animation.ng-leave {
	 *   transition:0.5s linear all;
	 *   position:fixed;
	 *   left:0;
	 *   top:0;
	 *   width:100%;
	 * }
	 * .view-animation.ng-enter {
	 *   transform:translateX(100%);
	 * }
	 * .view-animation.ng-leave,
	 * .view-animation.ng-enter.ng-enter-active {
	 *   transform:translateX(0%);
	 * }
	 * .view-animation.ng-leave.ng-leave-active {
	 *   transform:translateX(-100%);
	 * }
	 * ```
	 *
	 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
	 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
	 * from its origin. Once that animation is over then the `in` stage occurs which animates the
	 * element to its destination. The reason why there are two animations is to give enough time
	 * for the enter animation on the new element to be ready.
	 *
	 * The example above sets up a transition for both the in and out phases, but we can also target the out or
	 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
	 *
	 * ```css
	 * .banner.ng-anchor-out {
	 *   transition: 0.5s linear all;
	 *
	 *   /&#42; the scale will be applied during the out animation,
	 *          but will be animated away when the in animation runs &#42;/
	 *   transform: scale(1.2);
	 * }
	 *
	 * .banner.ng-anchor-in {
	 *   transition: 1s linear all;
	 * }
	 * ```
	 *
	 *
	 *
	 *
	 * ### Anchoring Demo
	 *
	  <example module="anchoringExample"
	           name="anchoringExample"
	           id="anchoringExample"
	           deps="angular-animate.js;angular-route.js"
	           animations="true">
	    <file name="index.html">
	      <a href="#/">Home</a>
	      <hr />
	      <div class="view-container">
	        <div ng-view class="view"></div>
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
	        .config(['$routeProvider', function($routeProvider) {
	          $routeProvider.when('/', {
	            templateUrl: 'home.html',
	            controller: 'HomeController as home'
	          });
	          $routeProvider.when('/profile/:id', {
	            templateUrl: 'profile.html',
	            controller: 'ProfileController as profile'
	          });
	        }])
	        .run(['$rootScope', function($rootScope) {
	          $rootScope.records = [
	            { id:1, title: "Miss Beulah Roob" },
	            { id:2, title: "Trent Morissette" },
	            { id:3, title: "Miss Ava Pouros" },
	            { id:4, title: "Rod Pouros" },
	            { id:5, title: "Abdul Rice" },
	            { id:6, title: "Laurie Rutherford Sr." },
	            { id:7, title: "Nakia McLaughlin" },
	            { id:8, title: "Jordon Blanda DVM" },
	            { id:9, title: "Rhoda Hand" },
	            { id:10, title: "Alexandrea Sauer" }
	          ];
	        }])
	        .controller('HomeController', [function() {
	          //empty
	        }])
	        .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
	          var index = parseInt($routeParams.id, 10);
	          var record = $rootScope.records[index - 1];
	
	          this.title = record.title;
	          this.id = record.id;
	        }]);
	    </file>
	    <file name="home.html">
	      <h2>Welcome to the home page</h1>
	      <p>Please click on an element</p>
	      <a class="record"
	         ng-href="#/profile/{{ record.id }}"
	         ng-animate-ref="{{ record.id }}"
	         ng-repeat="record in records">
	        {{ record.title }}
	      </a>
	    </file>
	    <file name="profile.html">
	      <div class="profile record" ng-animate-ref="{{ profile.id }}">
	        {{ profile.title }}
	      </div>
	    </file>
	    <file name="animations.css">
	      .record {
	        display:block;
	        font-size:20px;
	      }
	      .profile {
	        background:black;
	        color:white;
	        font-size:100px;
	      }
	      .view-container {
	        position:relative;
	      }
	      .view-container > .view.ng-animate {
	        position:absolute;
	        top:0;
	        left:0;
	        width:100%;
	        min-height:500px;
	      }
	      .view.ng-enter, .view.ng-leave,
	      .record.ng-anchor {
	        transition:0.5s linear all;
	      }
	      .view.ng-enter {
	        transform:translateX(100%);
	      }
	      .view.ng-enter.ng-enter-active, .view.ng-leave {
	        transform:translateX(0%);
	      }
	      .view.ng-leave.ng-leave-active {
	        transform:translateX(-100%);
	      }
	      .record.ng-anchor-out {
	        background:red;
	      }
	    </file>
	  </example>
	 *
	 * ### How is the element transported?
	 *
	 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
	 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
	 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
	 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
	 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
	 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
	 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
	 * will become visible since the shim class will be removed.
	 *
	 * ### How is the morphing handled?
	 *
	 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
	 * what CSS classes differ between the starting element and the destination element. These different CSS classes
	 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
	 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
	 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
	 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
	 * the cloned element is placed inside of root element which is likely close to the body element).
	 *
	 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
	 *
	 *
	 * ## Using $animate in your directive code
	 *
	 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
	 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
	 * imagine we have a greeting box that shows and hides itself when the data changes
	 *
	 * ```html
	 * <greeting-box active="onOrOff">Hi there</greeting-box>
	 * ```
	 *
	 * ```js
	 * ngModule.directive('greetingBox', ['$animate', function($animate) {
	 *   return function(scope, element, attrs) {
	 *     attrs.$observe('active', function(value) {
	 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
	 *     });
	 *   });
	 * }]);
	 * ```
	 *
	 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
	 * in our HTML code then we can trigger a CSS or JS animation to happen.
	 *
	 * ```css
	 * /&#42; normally we would create a CSS class to reference on the element &#42;/
	 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
	 * ```
	 *
	 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
	 * possible be sure to visit the {@link ng.$animate $animate service API page}.
	 *
	 *
	 * ## Callbacks and Promises
	 *
	 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
	 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
	 * ended by chaining onto the returned promise that animation method returns.
	 *
	 * ```js
	 * // somewhere within the depths of the directive
	 * $animate.enter(element, parent).then(function() {
	 *   //the animation has completed
	 * });
	 * ```
	 *
	 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
	 * anymore.)
	 *
	 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
	 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
	 * routing controller to hook into that:
	 *
	 * ```js
	 * ngModule.controller('HomePageController', ['$animate', function($animate) {
	 *   $animate.on('enter', ngViewElement, function(element) {
	 *     // the animation for this route has completed
	 *   }]);
	 * }])
	 * ```
	 *
	 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
	 */
	
	/**
	 * @ngdoc service
	 * @name $animate
	 * @kind object
	 *
	 * @description
	 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
	 *
	 * Click here {@link ng.$animate to learn more about animations with `$animate`}.
	 */
	angular.module('ngAnimate', [])
	  .directive('ngAnimateSwap', ngAnimateSwapDirective)
	
	  .directive('ngAnimateChildren', $$AnimateChildrenDirective)
	  .factory('$$rAFScheduler', $$rAFSchedulerFactory)
	
	  .provider('$$animateQueue', $$AnimateQueueProvider)
	  .provider('$$animation', $$AnimationProvider)
	
	  .provider('$animateCss', $AnimateCssProvider)
	  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)
	
	  .provider('$$animateJs', $$AnimateJsProvider)
	  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);
	
	
	})(window, window.angular);


/***/ },
/* 26 */
/*!*****************************************!*\
  !*** ./www/js/lib/dist/mn-touch.min.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * 
	 * @name: mnTouch
	 * @version: 1.3.2
	 * @description: Ultrafast AngularJS touch events directive (tap, hold and swipe)
	 * @author: Alessandro Bellini - ilmente
	 * @license: MIT
	 *
	 */
	"use strict";angular.module("mn",[]).directive("mnTouch",["$timeout",function(e){var t=function(t,n,o){t.$event={name:"",isSecure:!1,isRunning:!1,target:n[0],threshold:o.threshold?o.threshold:10,holdfor:o.holdfor?o.holdfor:500,types:{start:"mousedown",move:"mousemove",end:"mouseup",cancel:""},time:{},coords:{},events:{},directionX:0,directionY:0,offsetX:0,offsetY:0};var v=function(e){t.$event.name=e,o[e]&&(t.$eval(o[e]),t.$apply())},s=function(e){return{x:e.pageX||0,y:e.pageY||0}};if("undefined"!=typeof window.ontouchstart&&"undefined"!=typeof window.ontouchend&&"undefined"!=typeof window.ontouchcancel?(t.$event.types.start="touchstart",t.$event.types.move="touchmove",t.$event.types.end="touchend",t.$event.types.cancel="touchcancel",s=function(e){var t=e&&e.changedTouches&&!!e.changedTouches.length>0?e.changedTouches[0]:{};return{x:t.pageX||e.pageX||0,y:t.pageY||e.pageY||0}}):window.navigator.pointerEnabled?(t.$event.types.start="pointerdown",t.$event.types.move="pointermove",t.$event.types.end="pointerup"):window.navigator.msPointerEnabled&&(t.$event.types.start="MSPointerDown",t.$event.types.move="MSPointerMove",t.$event.types.end="MSPointerUp",t.$event.types.cancel="MSPointerOut"),o.tap){t.$event.isSecure=!1,t.$event.isRunning=!1;var i=function(e){t.$event.events.start=e,t.$event.coords.start=s(e),v("tap")};t.$event.target.addEventListener(t.$event.types.start,i,!1)}else{t.$event.isSecure=!0;var r=null,i=function(n){t.$event.isRunning=!0,t.$event.time.start=(new Date).getTime(),t.$event.events.start=n,t.$event.coords.start=s(n),o.hold&&(r=e(function(){a(t.$event.events.move||n)},t.$event.holdfor,!1))},d=function(e){t.$event.isRunning&&(t.$event.events.move=e)},a=function(n){r&&e.cancel(r),t.$event.isRunning&&(t.$event.isRunning=!1,t.$event.time.end=(new Date).getTime(),t.$event.time.duration=t.$event.time.end-t.$event.time.start,t.$event.events.end=n,t.$event.coords.end=s(n),t.$event.directionX=t.$event.coords.end.x-t.$event.coords.start.x,t.$event.directionY=t.$event.coords.end.y-t.$event.coords.start.y,t.$event.offsetX=Math.abs(t.$event.directionX),t.$event.offsetY=Math.abs(t.$event.directionY),v(t.$event.offsetX<=t.$event.threshold&&t.$event.offsetY<=t.$event.threshold?o.hold&&t.$event.time.duration>=t.$event.holdfor?"hold":"secureTap":t.$event.offsetX>=t.$event.offsetY?t.$event.directionX>0?"swipeRight":"swipeLeft":t.$event.directionY>0?"swipeDown":"swipeUp"))};t.$event.target.addEventListener(t.$event.types.start,i,!1),t.$event.target.addEventListener(t.$event.types.end,a,!1),t.$event.types.cancel&&t.$event.target.addEventListener(t.$event.types.cancel,a,!1),o.hold&&t.$event.target.addEventListener(t.$event.types.move,d,!1)}};return{restrict:"A",link:t}}]);
	//# sourceMappingURL=./mn-touch.min.js.map

/***/ },
/* 27 */
/*!***************************************************!*\
  !*** ./www/js/lib/ng-cordova-master ^\.\/.*\.js$ ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./dist/ng-cordova-mocks.min.js": 28,
		"./dist/ng-cordova.min.js": 29,
		"./src/camera.js": 30,
		"./src/statusbar.js": 31
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 27;


/***/ },
/* 28 */
/*!*******************************************************************!*\
  !*** ./www/js/lib/ng-cordova-master/dist/ng-cordova-mocks.min.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	/*!
	 * ngCordova
	 * v0.1.26-alpha
	 * Copyright 2015 Drifty Co. http://drifty.com/
	 * See LICENSE in this repository for license information
	 */
	!function(){var e=angular.module("ngCordovaMocks",[]);e.factory("$cordovaActionSheet",["$q",function(e){var r=!1;return{throwsError:r,show:function(){var r=e.defer();return this.throwsError?r.reject("There was an error on showing action sheet"):r.resolve(),r.promise}}}]),e.factory("$cordovaAppVersion",["$q",function(e){var r=!1;return{throwsError:r,getAppVersion:function(){var r=e.defer();return r.resolve("mock v"),r.promise}}}]),e.factory("$cordovaBarcodeScanner",["$q",function(e){var r=!1,t="",o="",n=!1;return{throwsError:r,scannedText:t,scannedFormat:o,wasCancelled:n,scan:function(){var r=e.defer();return this.throwsError?r.reject("There was an error scanning."):r.resolve({text:this.scannedText,format:this.scannedFormat,cancelled:this.wasCancelled}),r.promise},encode:function(r,t){this.scannedFormat=r,this.scannedText=t;var o=e.defer();return this.throwsError?o.reject("There was an error encoding the data."):o.resolve(),o.promise}}}]),e.factory("$cordovaBLE",["$q","$timeout","$interval","$log",function(e,r,t,o){var n={name:"Test Device",id:"AA:BB:CC:DD:EE:FF",advertising:[2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],rssi:-55},i={name:"Test Device",id:"AA:BB:CC:DD:EE:FF",advertising:[2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],rssi:-55,services:["1800","1801","180f"],characteristics:[{service:"1800",characteristic:"2a00",properties:["Read"]},{service:"1800",characteristic:"2a01",properties:["Read"]},{service:"1801",characteristic:"2a05",properties:["Read"]},{service:"180f",characteristic:"2a19",properties:["Read"],descriptors:[{uuid:"2901"},{uuid:"2904"}]}]},s=new ArrayBuffer(8);return{scan:function(t,o){var i=e.defer();return r(function(){i.notify(n)},Math.round(1e3*o*Math.random())),r(function(){i.resolve()},1e3*o),i.promise},startScan:function(e,t,o){r(function(){t(n)},Math.round(1e3*Math.random()))},stopScan:function(){var t=e.defer();return r(function(){t.resolve()},500),t.promise},connect:function(t){var o=e.defer();return r(function(){o.resolve(i)},1500),o.promise},disconnect:function(t){var o=e.defer();return r(function(){o.resolve(!0)},500),o.promise},read:function(t,o,n){var i=e.defer();return r(function(){i.resolve(s)},100),i.promise},write:function(t,o,n,i){var s=e.defer();return r(function(){s.resolve(!0)},100),s.promise},writeWithoutResponse:function(t,o,n,i){var s=e.defer();return r(function(){s.resolve(!0)},100),s.promise},writeCommand:function(e,r,t,n){return o.warning("writeCommand is deprecated, use writeWithoutResponse"),this.writeWithoutResponse(e,r,t,n)},startNotification:function(e,r,o,n,i){t(function(){var e=new Uint8Array([Math.round(255*Math.random())]);n(e)},200,10)},stopNotification:function(t,o,n){var i=e.defer();return r(function(){i.resolve()},100),i.promise},isConnected:function(r){var t=e.defer();return t.resolve(!0),t.promise},enable:function(){var t=e.defer();return r(function(){t.resolve()},1500),t.promise},isEnabled:function(){var r=e.defer();return r.resolve(!0),r.promise}}}]),e.factory("$cordovaBrightness",["$q",function(e){var r=100;return{get:function(){var t=e.defer();return t.resolve(r),t.promise},set:function(t){var o=e.defer();return r=t,o.resolve("OK"),o.promise},setKeepScreenOn:function(r){var t=e.defer();return t.resolve("OK"),t.promise}}}]),e.factory("$cordovaCamera",["$q",function(e){var r=!1,t="";return{throwsError:r,imageData:t,getPicture:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error getting the picture."):(r&&(r=r),t.resolve(this.imageData)),t.promise}}}]),e.factory("$cordovaCapture",["$q",function(e){var r=!1;return{throwsError:r,captureAudio:function(){var r=e.defer();return this.throwsError?r.reject("There was an error capturing the audio."):r.resolve(),r.promise},captureImage:function(){var r=e.defer();return this.throwsError?r.reject("There was an error capturing the image."):r.resolve(),r.promise},captureVideo:function(){var r=e.defer();return this.throwsError?r.reject("There was an error capturing the video."):r.resolve(),r.promise}}}]),e.factory("$cordovaContacts",["$q",function(e){var r=!1,t=[];return{throwsError:r,contacts:t,save:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error saving the contact.");else{for(var o=null,n=0;n<this.contacts.length;n++)if(this.contacts[n].id===r.id){o=n;break}null===o?(this.contacts.push(r),t.resolve()):t.reject("Contact already exists.")}return t.promise},remove:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error saving the contact.");else{for(var o=null,n=0;n<this.contacts.length;n++)if(this.contacts[n].id===r.id){o=n;break}null===o?t.reject("Unable to find contact."):(this.contacts.splice(o,1),t.resolve())}return t.promise},find:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error finding the contact.");else{var o=r.fields||["id","displayName"];if(delete r.fields,o)if("*"===o)t.resolve(this.contacts);else{for(var n=[],i=0;i<this.contacts.length;i++)for(var s in this.contacts[i])var a=this.contacts[i][s];t.resolve(n)}else t.reject("ContactError.INVALID_ARGUMENT_ERROR")}return t.promise}}}]),e.factory("$cordovaDatePicker",["$q",function(e){return{show:function(r){var t=e.defer();return r=r||{date:new Date,mode:"date"},t.resolve(r.date),t.promise}}}]),e.factory("$cordovaDevice",function(){var e="",r="",t="",o="",n="",i="";return{device:e,cordova:r,model:t,platform:o,uuid:n,version:i,version:i,getDevice:function(){return this.device},getCordova:function(){return this.cordova},getModel:function(){return this.model},getPlatform:function(){return this.platform},getUUID:function(){return this.uuid},getVersion:function(){return this.version},getManufacturer:function(){return this.manufacturer}}}),e.factory("$cordovaDeviceMotion",["$interval","$q",function(e,r){var t=null,o=!1,n=[],i=[];return{currentAcceleration:t,throwsError:o,positions:n,watchIntervals:i,getCurrentAcceleration:function(){var e=r.defer();return this.throwsError?e.reject("There was an error getting the current acceleration."):e.resolve(this.currentAcceleration),e.promise},watchAcceleration:function(t){var o=r.defer(),n=Math.floor(1e6*Math.random()+1);if(this.positions=[],self=this,this.throwsError)o.reject("There was an error watching the current acceleration.");else{var i=1e4;t&&t.frequency&&(i=t.frequency),this.watchIntervals.push(e(function(){self.throwsError&&o.reject("There was an error watching the acceleration.");var e=Math.floor(100*Math.random()+1),r=Math.floor(100*Math.random()+1),t=Math.floor(100*Math.random()+1),n={x:e,y:r,z:t,timestamp:Date.now()};self.positions.push(n),o.notify(n)},i))}return{watchId:n,promise:o.promise}},clearWatch:function(t){var o=r.defer();if(t)if(this.throwsError)o.reject("Unable to clear watch.");else{for(var n=-1,s=0;s<this.watchIntervals.length;s++)if(this.watchIntervals[s].watchId===t){e.cancel(i[s].interval),n=s;break}-1!==n&&this.watchIntervals.splice(n,1)}else o.reject("Unable to clear watch. No watch ID provided.");return o.promise}}}]),e.factory("$cordovaDeviceOrientation",["$interval","$q",function(e,r){var t=null,o=!1,n=[],i=[];return{currentHeading:t,throwsError:o,readings:n,watchIntervals:i,getCurrentHeading:function(){var e=r.defer();return this.throwsError?e.reject("There was an error getting the current heading."):e.resolve(this.currentHeading),e.promise},watchHeading:function(t){var o=r.defer(),n=Math.floor(1e6*Math.random()+1),s=this;if(s.readings=[],s.throwsError)o.reject("There was an error getting the compass heading.");else{var a=100;t&&t.frequency&&(a=t.frequency),s.watchIntervals.push({watchID:n,interval:e(function(){s.throwsError&&o.reject("There was an error watching the acceleration.");var e=359.99*Math.random()+1,r=359.99*Math.random()+1,t=Math.floor(360*Math.random()+1),n={magneticHeading:e,trueHeading:r,headingAccuracy:t,timestamp:Date.now()};s.readings.push(n),o.notify(n)},a)})}var c=function(r){for(var t=-1,o=0;o<s.watchIntervals.length;o++)if(s.watchIntervals[o].watchID===r){e.cancel(i[o].interval),t=o;break}-1!==t&&s.watchIntervals.splice(t,1)};return o.promise.cancel=function(){c(n)},o.promise.clearWatch=function(e){c(e||n)},o.promise.watchID=n,o.promise},clearWatch:function(t){var o=r.defer();if(t)if(this.throwsError)o.reject("Unable to clear watch.");else{for(var n=-1,s=0;s<this.watchIntervals.length;s++)if(this.watchIntervals[s].watchId===t){e.cancel(i[s].interval),n=s;break}-1!==n&&this.watchIntervals.splice(n,1)}else o.reject("Unable to clear watch. No watch ID provided.");return o.promise}}}]),e.factory("$cordovaDialogs",["$q",function(e){var r=!1,t="",o="",n="",i=0,s=!0;return{dialogText:r,dialogTitle:t,defaultValue:o,promptResponse:n,buttonLabels:[],beepCount:i,useHostAbilities:s,alert:function(r,t,o){var n=e.defer();return this.useHostAbilities?(alert(r),n.resolve()):(this.dialogText=r,this.dialogTitle=t,this.buttonLabels.push(o),n.resolve()),n.promise},confirm:function(r,t,o){var n=e.defer();if(this.useHostAbilities){var i=confirm(r);n.resolve(i?2:1)}else this.dialogText=r,this.dialogTitle=t,this.buttonLabels.push(o),n.resolve(0);return n.promise},prompt:function(r,t,o,n){var i=e.defer();if(this.useHostAbilities){var s=prompt(r,n);i.resolve(s)}else{this.dialogText=r,this.dialogTitle=t,this.defaultValue=n;for(var a=0;a<o.length;a++)this.buttonLabels.push(o[a]);i.resolve(this.promptResponse)}return i.promise},beep:function(e){this.beepCount=e}}}]),e.factory("$cordovaFacebook",["$q",function(e){return{loginShouldSucceedWith:null,showDialogShouldSucceedWith:null,apiShouldSucceedWith:null,getAccessTokenShouldSucceedWith:null,getLoginStatusShouldSucceedWith:null,logoutShouldSuceedWith:null,login:function(r){return null!==this.loginShouldSucceedWith?e.when(this.loginShouldSucceedWith):e.reject()},showDialog:function(r){return null!==this.showDialogShouldSucceedWith?e.when(this.showDialogShouldSucceedWith):e.reject()},api:function(r,t){return null!==this.apiShouldSucceedWith?e.when(this.apiShouldSucceedWith):e.reject()},getAccessToken:function(){return null!==this.getAccessTokenShouldSucceedWith?e.when(this.getAccessTokenShouldSucceedWith):e.reject()},getLoginStatus:function(){return null!==this.getLoginStatusShouldSucceedWith?e.when(this.getLoginStatusShouldSucceedWith):e.reject()},logout:function(){return null!==this.logoutShouldSuceedWith?e.when(this.logoutShouldSuceedWith):e.reject()}}}]),e.factory("$cordovaFile",["$q",function(e){var r=!1,t={},o=!1,n={},i=function(r){var t=e.defer();return this.throwsError?t.reject(r):t.resolve(),t.promise};return{throwsError:r,fileSystem:t,shouldMockFiles:o,files:n,checkDir:function(r){if(this.shouldMockFiles){var t=e.defer();return this.files[r]&&!this.files[r].isFile?t.resolve():t.reject(),t.promise}return i.call(this,"There was an error checking the directory.")},createDir:function(r,t){if(this.shouldMockFiles){var o=e.defer();return this.files[r]={isFile:!1},o.resolve(),o.promise}return i.call(this,"There was an error creating the directory.")},listDir:function(e){return i.call(this,"There was an error listing the directory")},checkFile:function(r){if(this.shouldMockFiles){var t=e.defer();return this.files[r]&&this.files[r].isFile?t.resolve():t.reject(),t.promise}return i.call(this,"There was an error checking for the file.")},createFile:function(r,t){if(this.shouldMockFiles){var o=e.defer();return this.files[r]={isFile:!0,fileContent:""},o.resolve(),o.promise}return i.call(this,"There was an error creating the file.")},removeFile:function(e,r){return i.call(this,"There was an error removng the file.")},writeFile:function(e,r,t){return this.shouldMockFiles&&e&&r&&(this.files[e]={isFile:!0,fileContent:r}),i.call(this,"There was an error writing the file.")},readFile:function(e){return this.readAsText(e)},readAsText:function(r){if(this.shouldMockFiles){var t=e.defer();return n[r]&&n[r].isFile?t.resolve(n[r].fileContent):t.reject(),t.promise}return i.call(this,"There was an error reading the file as text.")},readAsDataURL:function(e){return i.call(this,"There was an error reading the file as a data url.")},readAsBinaryString:function(e){return i.call(this,"There was an error reading the file as a binary string.")},readAsArrayBuffer:function(e){return i.call(this,"There was an error reading the file as an array buffer.")},readFileMetadata:function(e){return i.call(this,"There was an error reading the file metadata")},readFileAbsolute:function(e){return i.call(this,"There was an error reading the file from the absolute path")},readFileMetadataAbsolute:function(e){return i.call(this,"There was an error reading the file metadta from the absolute path")}}}]),e.factory("$cordovaFileOpener2",["$q",function(e){var r=!1;return{throwsError:r,open:function(r,t){var o=e.defer();return this.throwError?o.reject({status:0,message:"There was an error capturing the file."}):o.resolve(),o.promise},uninstall:function(r){var t=e.defer();return this.throwError?t.reject({status:0,message:"There was an error capturing the packageId."}):t.resolve(),t.promise},appIsInstalled:function(r){var t=e.defer();return this.throwError?t.reject({status:0,message:"There was an error capturing the packageId."}):t.resolve(),t.promise}}}]),e.factory("$cordovaFileTransfer",["$q",function(e){var r=!1,t=function(r){var t=e.defer();return this.throwsError?t.reject(r):t.resolve(),t.promise};return{throwsError:r,download:function(e,r,o,n){return t.call(this,"There was an error downloading the file.")},upload:function(e,r,o){return t.call(this,"There was an error uploading the file.")}}}]),e.factory("$cordovaGeolocation",["$interval","$q",function(e,r){var t=!1,o=!0,n=[],i=[],s=null,a=null;return{throwsError:t,watchIntervals:n,locations:i,currentPosition:s,nextPosition:a,useHostAbilities:o,getCurrentPosition:function(e){var t=r.defer();return this.throwsError?t.reject("There was an error getting the location."):(e&&(e=e),this.useHostAbilities?navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){this.currentPosition=e,t.resolve(this.currentPosition)},function(e){t.reject(e)}):t.reject("Geolocation is not supported by this browser."):t.resolve(this.currentPosition)),t.promise},watchPosition:function(t){var o=r.defer(),i=Math.floor(1e6*Math.random()+1),s=this;if(s.locations=[],s.throwsError)o.reject("There was an error getting the geolocation.");else{var a=1e3;t&&t.timeout&&(a=t.timeout),s.watchIntervals.push({watchID:i,interval:e(function(){s.throwsError&&o.reject("There was an error watching the geolocation.");var e=s.nextPosition;null===e&&(s.useHostAbilities?navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){s.currentPosition=e,s.locations.push(e),o.resolve(e)},function(e){o.reject(e)}):o.reject("Geolocation is not supported by this browser."):(e={coords:{latitude:180*Math.random()+1-90,longitude:360*Math.random()+1-180,altitude:100*Math.random()+1,accuracy:10*Math.random()+1,altitudeAccuracy:10*Math.random()+1,heading:360*Math.random()+1,speed:100*Math.random()+1},timestamp:Date.now()},s.currentPosition=e,s.locations.push(e),o.notify(e)))},a)})}var c=function(r){for(var t=-1,o=0;o<s.watchIntervals.length;o++)if(s.watchIntervals[o].watchID===r){e.cancel(n[o].interval),t=o;break}-1!==t&&s.watchIntervals.splice(t,1)};return o.promise.cancel=function(){c(i)},o.promise.clearWatch=function(e){c(e||i)},o.promise.watchID=i,o.promise},clearWatch:function(t){var o=r.defer();if(t)if(this.throwsError)o.reject("Unable to clear watch.");else{for(var i=-1,s=0;s<this.watchIntervals.length;s++)if(this.watchIntervals[s].watchID===t){e.cancel(n[s].interval),i=s;break}-1!==i&&this.watchIntervals.splice(i,1)}else o.reject("Unable to clear watch. No watch ID provided.");return o.promise}}}]),e.factory("$cordovaGlobalization",["$q",function(e){var r=!1,t=navigator.language?navigator.language:"en-US",o={value:t},n="Sunday",i={value:t};return{throwsError:r,preferredLanguage:o,localeName:i,firstDayOfWeek:n,getPreferredLanguage:function(){var r=e.defer();return this.throwsError?r.reject("There was an error getting the preferred language."):r.resolve(this.preferredLanguage),r.promise},getLocaleName:function(){var r=e.defer();return this.throwsError?r.reject("There was an error getting the locale name."):r.resolve(this.localeName),r.promise},getFirstDayOfWeek:function(){var r=e.defer();return this.throwsError?r.reject("There was an error getting the first day of week."):r.resolve(this.firstDayOfWeek),r.promise},dateToString:function(r,t){var o=e.defer();if(this.throwsError)o.reject("There was an error getting the string from the date.");else{var n="";r=r,t=t,o.resolve(n)}return o.promise},stringToDate:function(r,t){var o=e.defer();if(this.throwsError)o.reject("There was an error getting the date from the string.");else{var n="";r=r,t=t,o.resolve(n)}return o.promise},getDatePattern:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error getting the date pattern.");else{var o="";r=r,t.resolve(o)}return t.promise},getDateNames:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error getting the date names.");else{var o="";r=r,t.resolve(o)}return t.promise},isDayLightSavingsTime:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error getting if this is in daylight savings time mode.");else{var o="";r=r,t.resolve(o)}return t.promise},numberToString:function(r,t){var o=e.defer();if(this.throwsError)o.reject("There was an error convertng the number to a string.");else{var n="";r=r,t=t,o.resolve(n)}return o.promise},stringToNumber:function(r,t){var o=e.defer();if(this.throwsError)o.reject("There was an error convertng the string to a number.");else{var n="";t=t,o.resolve(n)}return o.promise},getNumberPattern:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error convertng the string to a number.");else{var o="";r=r,t.resolve(o)}return t.promise},getCurrencyPattern:function(r){var t=e.defer();if(this.throwsError)t.reject("There was an error convertng the string to a number.");else{var o="";r=r,t.resolve(o)}return t.promise}}}]),e.factory("$cordovaGoogleAnalytics",["$q",function(e){var r=!1,t={};t.throwsError=r;var o=["startTrackerWithId","setUserId","debugMode","trackView","addCustomDimension","trackEvent","trackException","trackTiming","addTransaction","addTransactionItem"];return o.forEach(function(r){t[r]=function(){var r=e.defer();return this.throwsError?r.reject():r.resolve(),r.promise}}),t}]),e.factory("$cordovaGooglePlayGame",["$q",function(e){var r=!1,t=!1,o="";return{_throwsError:r,_isSignedIn:t,_displayName:o,auth:function(){var r=e.defer();return this._throwsError?r.reject("There was a auth error."):(this.isSignedIn=!0,r.resolve("SIGN IN SUCCESS")),r.promise},signout:function(){var r=e.defer();return this.throwsError?r.reject("There was a signout error."):r.resolve(),r.promise},isSignedIn:function(){var r=e.defer();return this._throwsError?r.reject("There was a isSignedIn error."):r.resolve({isSignedIn:this._isSignedIn}),r.promise},showPlayer:function(){var r=e.defer();return this.throwsError?r.reject("There was a showPlayer error."):r.resolve({displayName:this._displayName}),r.promise},submitScore:function(r){var t=e.defer();return this._throwsError?t.reject("There was a submitScore error."):t.resolve("OK"),t.promise},showAllLeaderboards:function(){var r=e.defer();return this.throwsError?r.reject("There was a showAllLeaderboards error."):r.resolve("OK"),r.promise},showLeaderboard:function(r){var t=e.defer();return this._throwsError?t.reject("There was a showLeaderboard error."):t.resolve("OK"),t.promise},unlockAchievement:function(r){var t=e.defer();return this.throwsError?t.reject("There was a unlockAchievement error."):t.resolve("OK"),t.promise},incrementAchievement:function(r){var t=e.defer();return this._throwsError?t.reject("There was a incrementAchievement error."):t.resolve("OK"),t.promise},showAchievements:function(){var r=e.defer();return this.throwsError?r.reject("There was a showAchievements error."):r.resolve("OK"),r.promise}}}]),e.factory("$cordovaKeyboard",function(){var e=!1;return{hideAccessoryBar:function(e){},close:function(){e=!1},show:function(){e=!0},disableScroll:function(e){},isVisible:function(){return e}}}),e.factory("$cordovaKeychain",["$q",function(e){var r={};return{keychains:r,getForKey:function(r,t){var o=e.defer();return this.keychains[t]?o.resolve(this.keychains[t][r]):o.reject(),o.promise},setForKey:function(r,t,o){var n=e.defer();return this.keychains[t]||(this.keychains[t]={}),this.keychains[t][r]=o,n.resolve(),n.promise},removeForKey:function(r,t){var o=e.defer();return this.keychains[t]&&delete this.keychains[t][r],o.resolve(),o.promise}}}]),e.factory("$cordovaLocalNotification",["$q",function(e){function r(e){return o+e}function t(){for(var r=e.defer(),t=[],n=0,i=localStorage.length;i>n;++n)localStorage.key(n).indexOf(o)>-1&&t.push(parseInt(localStorage.key(n).split("-")[1]));return r.resolve(t),r.promise}var o="ngCordLocNotif-";return{cancel:function(t){var o=e.defer();return"number"==typeof t&&(t=[t]),t.forEach(function(e){localStorage.removeItem([r(e)])}),o.resolve(),o.promise},cancelAll:function(){var r=e.defer();return r.resolve(),r.promise},clear:function(t){"number"==typeof t&&(t=[t]);var o=e.defer();return t.forEach(function(e){localStorage.removeItem([r(e)])}),o.resolve(),o.promise},clearAll:function(){var r=e.defer();return r.promise},isScheduled:function(t){var o=e.defer();return localStorage[r(t)]?o.resolve(!0):o.resolve(!1),o.promise},isPresent:function(t){var o=e.defer();return localStorage[r(t)]?o.resolve(!0):o.resolve(!1),o.promise},isTriggered:function(t){var o=e.defer();return localStorage[r(t)]?o.resolve(!1):o.resolve(!0),o.promise},getAllIds:function(){return t()},getIds:function(){return t()},getScheduledIds:function(){return t()},getTriggeredIds:function(){var r=e.defer();return r.resolve([]),r.promise},hasPermission:function(r){var t=e.defer();return t.resolve(!0),t.promise},schedule:function(t){var o=e.defer(),n=r(t.id);return localStorage[n]=JSON.stringify(t),o.resolve(),o.promise},update:function(t){var o=e.defer(),n=r(t.id);return localStorage[n]=JSON.stringify(t),o.resolve(),o.promise}}}]),e.factory("$cordovaNetwork",["$rootScope",function(e){var r="WiFi connection",t=!0;return{connectionType:r,isConnected:t,switchToOnline:function(){this.isConnected=!0,e.$broadcast("$cordovaNetwork:online")},switchToOffline:function(){this.isConnected=!1,e.$broadcast("$cordovaNetwork:offline")},getNetwork:function(){return this.connectionType},isOnline:function(){return this.isConnected},isOffline:function(){return!this.isConnected}}}]),e.factory("$cordovaProgress",["$timeout",function(e){return{show:function(e){var r=e||"Please wait...";console.info("$cordovaProgress.message",r)},showSimple:function(e){var r=e||!1;console.info("$cordovaProgress.dim",r)},showSimpleWithLabel:function(e,r){var t=e||!1,o=r||"Loading...";console.group(),console.info("$cordovaProgress.dim",t),console.info("$cordovaProgress.label",o),console.groupEnd()},showSimpleWithLabelDetail:function(e,r,t){var o=e||!1,n=r||"Loading...",i=t||"Please wait";console.group(),console.info("$cordovaProgress.dim",o),console.info("$cordovaProgress.label",n),console.info("$cordovaProgress.detail",i),console.groupEnd()},showDeterminate:function(r,t){var o=r||!1,n=t||5e4;console.group(),console.info("$cordovaProgress.dim show",o),console.info("$cordovaProgress.timeout",n),console.groupEnd(),e(function(){console.info("$cordovaProgress.dim timeout",o)},n)},showDeterminateWithLabel:function(r,t,o){var n=r||!1,i=t||5e4,s=o||"Loading...";console.group(),console.info("$cordovaProgress.dim",n),console.info("$cordovaProgress.timeout",i),console.info("$cordovaProgress.label",s),console.groupEnd(),e(function(){console.info("$cordovaProgress[dim, label] timeout",[n,s])},i)},showAnnular:function(r,t){var o=r||!1,n=t||5e4;console.group(),console.info("$cordovaProgress.dim",o),console.info("$cordovaProgress.timeout",n),console.groupEnd(),e(function(){console.info("$cordovaProgress.dim timeout",o)},n)},showAnnularWithLabel:function(r,t,o){var n=r||!1,i=t||5e4,s=o||"Loading...";console.group(),console.info("$cordovaProgress.dim",n),console.info("$cordovaProgress.timeout",i),console.info("$cordovaProgress.label",s),console.groupEnd(),e(function(){console.info("$cordovaProgress[dim, label] timeout",[n,s])},i)},showBar:function(r,t){var o=r||!1,n=t||5e4;console.group(),console.info("$cordovaProgress.dim",o),console.info("$cordovaProgress.timeout",n),console.groupEnd(),e(function(){console.info("$cordovaProgress.dim timeout",o)},n)},showBarWithLabel:function(r,t,o){var n=r||!1,i=t||5e4,s=o||"Loading...";console.group(),console.info("$cordovaProgress.dim",n),console.info("$cordovaProgress.label",s),console.info("$cordovaProgress.timeout",i),console.groupEnd(),e(function(){console.info("$cordovaProgress[dim, label] timeout",[n,s])},i)},showSuccess:function(e,r){var t=e||!1,o=r||"Success";console.group(),console.info("$cordovaProgress.dim",t),console.info("$cordovaProgress.label",o),console.groupEnd()},showText:function(e,r,t){var o=e||!1,n=r||"Warning",i=t||"center";console.group(),console.info("$cordovaProgress.dim",o),console.info("$cordovaProgress.text",n),console.info("$cordovaProgress.position",i),console.groupEnd()},hide:function(){console.info("$cordovaProgress.hide")}}}]),e.factory("$cordovaPush",["$q","$timeout","$rootScope",function(e,r,t){var o=!1,n="";return{throwsError:o,deviceToken:n,onNotification:function(e){r(function(){t.$broadcast("$cordovaPush:notificationReceived",e)})},register:function(r){var t=this,o=e.defer();return void 0!==r&&void 0===r.ecb&&(r.ecb=this.onNotification),this.throwsError?o.reject("There was a register error."):(o.resolve(this.deviceToken),r&&r.ecb&&r.ecb({event:"registered",regid:t.deviceToken})),o.promise},unregister:function(r){var t=e.defer();return this.throwsError?t.reject("There was a register error."):t.resolve(),t.promise}}}]),e.factory("$cordovaScreenshot",["$q",function(e){var r=!1;return{throwsError:r,captureToFile:function(){var r=e.defer();return this.throwsError?r.reject("There was an error capturing the screenshot."):r.resolve("path"),r.promise},captureToUri:function(){var r=e.defer();return this.throwsError?r.reject("There was an error capturing the screenshot."):r.resolve(),r.promise}}}]),e.factory("$cordovaSocialSharing",["$q",function(e){var r=!1,t="",o="",n="",i="",s="",a="",c=[],h=[],u=[];return{throwsError:r,message:t,image:o,link:n,number:i,subject:a,toAddresses:c,bccAddresses:h,socialService:s,attachments:u,shareViaTwitter:function(r,t,o){var n=e.defer();return this.throwsError?n.reject("There was an error sharing via Twitter."):(this.message=r,this.image=t,this.link=o,n.resolve()),n.promise},shareViaWhatsApp:function(r,t,o){var n=e.defer();return this.throwsError?n.reject("There was an error sharing via WhatsApp."):(this.message=r,this.image=t,this.link=o,n.resolve()),n.promise},shareViaFacebook:function(r,t,o){var n=e.defer();return this.throwsError?n.reject("There was an error sharing via Facebook."):(this.message=r,this.image=t,this.link=o,n.resolve()),n.promise},shareViaSMS:function(r,t){var o=e.defer();return this.throwsError?o.reject("There was an error sharing via SMS."):(this.message=r,this.number=t,o.resolve()),o.promise},shareViaEmail:function(r,t,o,n,i){var s=e.defer();return this.throwsError?s.reject("There was an error sharing via SMS."):(this.message=r,this.subject=t,this.toAddresses=o,this.bccAddressesc=n,this.attachments=i,s.resolve()),s.promise},canShareViaEmail:function(){var r=e.defer();return this.throwsError?r.reject(!1):r.resolve(!0),r.promise},canShareVia:function(r,t,o,n,i){var s=e.defer();return this.throwsError?s.reject("There was an error sharing via SMS."):(this.message=t,this.socialService=r,this.subject=o,this.attachments=n,this.link=i,s.resolve()),s.promise},shareVia:function(r,t,o,n,i){var s=e.defer();return this.throwsError?s.reject("There was an error sharing via SMS."):(this.socialService=r,this.message=t,this.subject=o,this.attachments=n,this.link=i,s.resolve()),s.promise},share:function(r,t,o,n){var i=e.defer();return this.throwsError?i.reject("There was an error sharing via SMS."):(this.message=r,this.subject=t,this.attachments=o,this.link=n,i.resolve()),i.promise}}}]),e.factory("$cordovaSplashscreen",function(){var e=!1;return{isVisible:e,hide:function(){return this.isVisible=!1,!0},show:function(){return this.isVisible=!0,!0}}}),e.factory("$cordovaSQLite",["$q",function(e){return{openDBShouldSucceedWith:null,executeShouldSucceedWith:null,insertCollectionShouldSucceedWith:null,nestedExecuteShouldSucceedWith:null,deleteDBShouldSucceedWith:null,openDB:function(r,t){null!==this.openDBShouldSucceedWith?e.when(this.openDBShouldSucceedWith):e.reject()},execute:function(r,t,o){null!==this.executeShouldSucceedWith?e.when(this.executeShouldSucceedWith):e.reject()},insertCollection:function(r,t,o){null!==this.insertCollectionShouldSucceedWith?e.when(this.insertCollectionShouldSucceedWith):e.reject()},nestedExecute:function(r,t,o,n,i){null!==this.nestedExecuteShouldSucceedWith?e.when(this.nestedExecuteShouldSucceedWith):e.reject()},deleteDB:function(r){null!==this.deleteDBShouldSucceedWith?e.when(this.deleteDBShouldSucceedWith):e.reject()}}}]),e.factory("$cordovaStatusbar",function(){var e=!0,r=!0;return{isStatusBarVisible:e,canOverlayWebView:r,overlaysWebView:function(e){this.canOverlayWebView=e},style:function(e){return e},styleHex:function(e){return e},styleColor:function(e){return e},hide:function(){this.isStatusBarVisible=!1},show:function(){this.isStatusBarVisible=!0},isVisible:function(){return this.isStatusBarVisible}}}),e.factory("$cordovaToast",["$q",function(e){var r=!1;return{throwsError:r,showShortTop:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},showShortCenter:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},showShortBottom:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},showLongTop:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},showLongCenter:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},showLongBottom:function(r){var t=e.defer();return this.throwsError?t.reject("There was an error showing the toast."):t.resolve(),t.promise},show:function(r,t,o){var n=e.defer();return this.throwsError?n.reject("There was an error showing the toast."):n.resolve(),n.promise},hide:function(){var r=e.defer();return this.throwsError?r.reject("There was an error hiding the toast."):r.resolve(),r.promise}}}]),e.factory("$cordovaVibration",["$timeout",function(e){var r=!1,t=null;return{vibrateTimer:t,isVibrating:r,vibrate:function(r){r>0&&(this.isVibrating=!0,self=this,r instanceof Array?this.vibrateTimer=e(function(){self.isVibrating=!1,self.vibrateTimer=null},r[0]):this.vibrateTimer=e(function(){self.isVibrating=!1,self.vibrateTimer=null},r))},vibrateWithPattern:function(e,r){},cancelVibration:function(){null!==this.vibrateTimer&&this.isVibrating===!0&&(e.cancel(this.vibrateTimer),this.isVibrating=!1)}}}])}();

/***/ },
/* 29 */
/*!*************************************************************!*\
  !*** ./www/js/lib/ng-cordova-master/dist/ng-cordova.min.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	/*!
	 * ngCordova
	 * v0.1.26-alpha
	 * Copyright 2015 Drifty Co. http://drifty.com/
	 * See LICENSE in this repository for license information
	 */
	!function(){angular.module("ngCordova",["ngCordova.plugins"]),angular.module("ngCordova.plugins.actionSheet",[]).factory("$cordovaActionSheet",["$q","$window",function(e,n){return{show:function(r){var o=e.defer();return n.plugins.actionsheet.show(r,function(e){o.resolve(e)}),o.promise},hide:function(){return n.plugins.actionsheet.hide()}}}]),angular.module("ngCordova.plugins.adMob",[]).factory("$cordovaAdMob",["$q","$window",function(e,n){return{createBannerView:function(r){var o=e.defer();return n.plugins.AdMob.createBannerView(r,function(){o.resolve()},function(){o.reject()}),o.promise},createInterstitialView:function(r){var o=e.defer();return n.plugins.AdMob.createInterstitialView(r,function(){o.resolve()},function(){o.reject()}),o.promise},requestAd:function(r){var o=e.defer();return n.plugins.AdMob.requestAd(r,function(){o.resolve()},function(){o.reject()}),o.promise},showAd:function(r){var o=e.defer();return n.plugins.AdMob.showAd(r,function(){o.resolve()},function(){o.reject()}),o.promise},requestInterstitialAd:function(r){var o=e.defer();return n.plugins.AdMob.requestInterstitialAd(r,function(){o.resolve()},function(){o.reject()}),o.promise}}}]),angular.module("ngCordova.plugins.appAvailability",[]).factory("$cordovaAppAvailability",["$q",function(e){return{check:function(n){var r=e.defer();return appAvailability.check(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.appRate",[]).provider("$cordovaAppRate",[function(){this.setPreferences=function(e){e&&angular.isObject(e)&&(AppRate.preferences.useLanguage=e.language||null,AppRate.preferences.displayAppName=e.appName||"",AppRate.preferences.promptAgainForEachNewVersion=e.promptForNewVersion||!0,AppRate.preferences.openStoreInApp=e.openStoreInApp||!1,AppRate.preferences.usesUntilPrompt=e.usesUntilPrompt||3,AppRate.preferences.useCustomRateDialog=e.useCustomRateDialog||!1,AppRate.preferences.storeAppURL.ios=e.iosURL||null,AppRate.preferences.storeAppURL.android=e.androidURL||null,AppRate.preferences.storeAppURL.blackberry=e.blackberryURL||null,AppRate.preferences.storeAppURL.windows8=e.windowsURL||null)},this.setCustomLocale=function(e){var n={title:"Rate %@",message:"If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",cancelButtonLabel:"No, Thanks",laterButtonLabel:"Remind Me Later",rateButtonLabel:"Rate It Now"};n=angular.extend(n,e),AppRate.preferences.customLocale=n},this.$get=["$q",function(e){return{promptForRating:function(n){var r=e.defer(),o=AppRate.promptForRating(n);return r.resolve(o),r.promise},navigateToAppStore:function(){var n=e.defer(),r=AppRate.navigateToAppStore();return n.resolve(r),n.promise},onButtonClicked:function(e){AppRate.onButtonClicked=function(n){e.call(this,n)}},onRateDialogShow:function(e){AppRate.onRateDialogShow=e()}}}]}]),angular.module("ngCordova.plugins.appVersion",[]).factory("$cordovaAppVersion",["$q",function(e){return{getAppName:function(){var n=e.defer();return cordova.getAppVersion.getAppName(function(e){n.resolve(e)}),n.promise},getPackageName:function(){var n=e.defer();return cordova.getAppVersion.getPackageName(function(e){n.resolve(e)}),n.promise},getVersionNumber:function(){var n=e.defer();return cordova.getAppVersion.getVersionNumber(function(e){n.resolve(e)}),n.promise},getVersionCode:function(){var n=e.defer();return cordova.getAppVersion.getVersionCode(function(e){n.resolve(e)}),n.promise}}}]),angular.module("ngCordova.plugins.backgroundGeolocation",[]).factory("$cordovaBackgroundGeolocation",["$q","$window",function(e,n){return{init:function(){n.navigator.geolocation.getCurrentPosition(function(e){return e})},configure:function(r){this.init();var o=e.defer();return n.plugins.backgroundGeoLocation.configure(function(e){o.notify(e),n.plugins.backgroundGeoLocation.finish()},function(e){o.reject(e)},r),this.start(),o.promise},start:function(){var r=e.defer();return n.plugins.backgroundGeoLocation.start(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},stop:function(){var r=e.defer();return n.plugins.backgroundGeoLocation.stop(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.badge",[]).factory("$cordovaBadge",["$q",function(e){return{hasPermission:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?n.resolve(!0):n.reject("You do not have permission")}),n.promise},promptForPermission:function(){return cordova.plugins.notification.badge.promptForPermission()},set:function(n,r,o){var t=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?t.resolve(cordova.plugins.notification.badge.set(n,r,o)):t.reject("You do not have permission to set Badge")}),t.promise},get:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?cordova.plugins.notification.badge.get(function(e){n.resolve(e)}):n.reject("You do not have permission to get Badge")}),n.promise},clear:function(n,r){var o=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?o.resolve(cordova.plugins.notification.badge.clear(n,r)):o.reject("You do not have permission to clear Badge")}),o.promise},increase:function(n,r,o){var t=e.defer();return this.hasPermission().then(function(){t.resolve(cordova.plugins.notification.badge.increase(n,r,o))},function(){t.reject("You do not have permission to increase Badge")}),t.promise},decrease:function(n,r,o){var t=e.defer();return this.hasPermission().then(function(){t.resolve(cordova.plugins.notification.badge.decrease(n,r,o))},function(){t.reject("You do not have permission to decrease Badge")}),t.promise},configure:function(e){return cordova.plugins.notification.badge.configure(e)}}}]),angular.module("ngCordova.plugins.barcodeScanner",[]).factory("$cordovaBarcodeScanner",["$q",function(e){return{scan:function(n){var r=e.defer();return cordova.plugins.barcodeScanner.scan(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},encode:function(n,r){var o=e.defer();return n=n||"TEXT_TYPE",cordova.plugins.barcodeScanner.encode(n,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.batteryStatus",[]).factory("$cordovaBatteryStatus",["$rootScope","$window","$timeout",function(e,n,r){var o=function(n){r(function(){e.$broadcast("$cordovaBatteryStatus:status",n)})},t=function(n){r(function(){e.$broadcast("$cordovaBatteryStatus:critical",n)})},i=function(n){r(function(){e.$broadcast("$cordovaBatteryStatus:low",n)})};return document.addEventListener("deviceready",function(){navigator.battery&&(n.addEventListener("batterystatus",o,!1),n.addEventListener("batterycritical",t,!1),n.addEventListener("batterylow",i,!1))},!1),!0}]).run(["$injector",function(e){e.get("$cordovaBatteryStatus")}]),angular.module("ngCordova.plugins.beacon",[]).factory("$cordovaBeacon",["$window","$rootScope","$timeout","$q",function(e,n,r,o){var t=null,i=null,a=null,c=null,u=null,s=null,l=null,f=null;return document.addEventListener("deviceready",function(){if(e.cordova&&e.cordova.plugins&&e.cordova.plugins.locationManager){var o=new e.cordova.plugins.locationManager.Delegate;o.didDetermineStateForRegion=function(e){r(function(){n.$broadcast("$cordovaBeacon:didDetermineStateForRegion",e)}),t&&t(e)},o.didStartMonitoringForRegion=function(e){r(function(){n.$broadcast("$cordovaBeacon:didStartMonitoringForRegion",e)}),i&&i(e)},o.didExitRegion=function(e){r(function(){n.$broadcast("$cordovaBeacon:didExitRegion",e)}),a&&a(e)},o.didEnterRegion=function(e){r(function(){n.$broadcast("$cordovaBeacon:didEnterRegion",e)}),c&&c(e)},o.didRangeBeaconsInRegion=function(e){r(function(){n.$broadcast("$cordovaBeacon:didRangeBeaconsInRegion",e)}),u&&u(e)},o.peripheralManagerDidStartAdvertising=function(e){r(function(){n.$broadcast("$cordovaBeacon:peripheralManagerDidStartAdvertising",e)}),s&&s(e)},o.peripheralManagerDidUpdateState=function(e){r(function(){n.$broadcast("$cordovaBeacon:peripheralManagerDidUpdateState",e)}),l&&l(e)},o.didChangeAuthorizationStatus=function(e){r(function(){n.$broadcast("$cordovaBeacon:didChangeAuthorizationStatus",e)}),f&&f(e)},e.cordova.plugins.locationManager.setDelegate(o)}},!1),{setCallbackDidDetermineStateForRegion:function(e){t=e},setCallbackDidStartMonitoringForRegion:function(e){i=e},setCallbackDidExitRegion:function(e){a=e},setCallbackDidEnterRegion:function(e){c=e},setCallbackDidRangeBeaconsInRegion:function(e){u=e},setCallbackPeripheralManagerDidStartAdvertising:function(e){s=e},setCallbackPeripheralManagerDidUpdateState:function(e){l=e},setCallbackDidChangeAuthorizationStatus:function(e){f=e},createBeaconRegion:function(n,r,o,t,i){return o=o||void 0,t=t||void 0,new e.cordova.plugins.locationManager.BeaconRegion(n,r,o,t,i)},isBluetoothEnabled:function(){return o.when(e.cordova.plugins.locationManager.isBluetoothEnabled())},enableBluetooth:function(){return o.when(e.cordova.plugins.locationManager.enableBluetooth())},disableBluetooth:function(){return o.when(e.cordova.plugins.locationManager.disableBluetooth())},startMonitoringForRegion:function(n){return o.when(e.cordova.plugins.locationManager.startMonitoringForRegion(n))},stopMonitoringForRegion:function(n){return o.when(e.cordova.plugins.locationManager.stopMonitoringForRegion(n))},requestStateForRegion:function(n){return o.when(e.cordova.plugins.locationManager.requestStateForRegion(n))},startRangingBeaconsInRegion:function(n){return o.when(e.cordova.plugins.locationManager.startRangingBeaconsInRegion(n))},stopRangingBeaconsInRegion:function(n){return o.when(e.cordova.plugins.locationManager.stopRangingBeaconsInRegion(n))},getAuthorizationStatus:function(){return o.when(e.cordova.plugins.locationManager.getAuthorizationStatus())},requestWhenInUseAuthorization:function(){return o.when(e.cordova.plugins.locationManager.requestWhenInUseAuthorization())},requestAlwaysAuthorization:function(){return o.when(e.cordova.plugins.locationManager.requestAlwaysAuthorization())},getMonitoredRegions:function(){return o.when(e.cordova.plugins.locationManager.getMonitoredRegions())},getRangedRegions:function(){return o.when(e.cordova.plugins.locationManager.getRangedRegions())},isRangingAvailable:function(){return o.when(e.cordova.plugins.locationManager.isRangingAvailable())},isMonitoringAvailableForClass:function(n){return o.when(e.cordova.plugins.locationManager.isMonitoringAvailableForClass(n))},startAdvertising:function(n,r){return o.when(e.cordova.plugins.locationManager.startAdvertising(n,r))},stopAdvertising:function(){return o.when(e.cordova.plugins.locationManager.stopAdvertising())},isAdvertisingAvailable:function(){return o.when(e.cordova.plugins.locationManager.isAdvertisingAvailable())},isAdvertising:function(){return o.when(e.cordova.plugins.locationManager.isAdvertising())},disableDebugLogs:function(){return o.when(e.cordova.plugins.locationManager.disableDebugLogs())},enableDebugNotifications:function(){return o.when(e.cordova.plugins.locationManager.enableDebugNotifications())},disableDebugNotifications:function(){return o.when(e.cordova.plugins.locationManager.disableDebugNotifications())},enableDebugLogs:function(){return o.when(e.cordova.plugins.locationManager.enableDebugLogs())},appendToDeviceLog:function(n){return o.when(e.cordova.plugins.locationManager.appendToDeviceLog(n))}}}]),angular.module("ngCordova.plugins.ble",[]).factory("$cordovaBLE",["$q","$timeout","$log",function(e,n,r){return{scan:function(r,o){var t=e.defer();return ble.startScan(r,function(e){t.notify(e)},function(e){t.reject(e)}),n(function(){ble.stopScan(function(){t.resolve()},function(e){t.reject(e)})},1e3*o),t.promise},startScan:function(e,n,r){return ble.startScan(e,n,r)},stopScan:function(){var n=e.defer();return ble.stopScan(function(){n.resolve()},function(e){n.reject(e)}),n.promise},connect:function(n){var r=e.defer();return ble.connect(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},disconnect:function(n){var r=e.defer();return ble.disconnect(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},read:function(n,r,o){var t=e.defer();return ble.read(n,r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},write:function(n,r,o,t){var i=e.defer();return ble.write(n,r,o,t,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},writeWithoutResponse:function(n,r,o,t){var i=e.defer();return ble.writeWithoutResponse(n,r,o,t,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},writeCommand:function(e,n,o,t){return r.warning("writeCommand is deprecated, use writeWithoutResponse"),this.writeWithoutResponse(e,n,o,t)},startNotification:function(e,n,r,o,t){return ble.startNotification(e,n,r,o,t)},stopNotification:function(n,r,o){var t=e.defer();return ble.stopNotification(n,r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},isConnected:function(n){var r=e.defer();return ble.isConnected(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},enable:function(){var n=e.defer();return ble.enable(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},isEnabled:function(){var n=e.defer();return ble.isEnabled(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.bluetoothSerial",[]).factory("$cordovaBluetoothSerial",["$q","$window",function(e,n){return{connect:function(r){var o=e.defer(),t=e.defer(),i=!1;return n.bluetoothSerial.connect(r,function(){i=!0,o.resolve(t)},function(e){i===!1&&t.reject(e),o.reject(e)}),o.promise},connectInsecure:function(r){var o=e.defer();return n.bluetoothSerial.connectInsecure(r,function(){o.resolve()},function(e){o.reject(e)}),o.promise},disconnect:function(){var r=e.defer();return n.bluetoothSerial.disconnect(function(){r.resolve()},function(e){r.reject(e)}),r.promise},list:function(){var r=e.defer();return n.bluetoothSerial.list(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},discoverUnpaired:function(){var r=e.defer();return n.bluetoothSerial.discoverUnpaired(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setDeviceDiscoveredListener:function(){var r=e.defer();return n.bluetoothSerial.setDeviceDiscoveredListener(function(e){r.notify(e)}),r.promise},clearDeviceDiscoveredListener:function(){n.bluetoothSerial.clearDeviceDiscoveredListener()},showBluetoothSettings:function(){var r=e.defer();return n.bluetoothSerial.showBluetoothSettings(function(){r.resolve()},function(e){r.reject(e)}),r.promise},isEnabled:function(){var r=e.defer();return n.bluetoothSerial.isEnabled(function(){r.resolve()},function(){r.reject()}),r.promise},enable:function(){var r=e.defer();return n.bluetoothSerial.enable(function(){r.resolve()},function(){r.reject()}),r.promise},isConnected:function(){var r=e.defer();return n.bluetoothSerial.isConnected(function(){r.resolve()},function(){r.reject()}),r.promise},available:function(){var r=e.defer();return n.bluetoothSerial.available(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},read:function(){var r=e.defer();return n.bluetoothSerial.read(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},readUntil:function(r){var o=e.defer();return n.bluetoothSerial.readUntil(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},write:function(r){var o=e.defer();return n.bluetoothSerial.write(r,function(){o.resolve()},function(e){o.reject(e)}),o.promise},subscribe:function(r){var o=e.defer();return n.bluetoothSerial.subscribe(r,function(e){o.notify(e)},function(e){o.reject(e)}),o.promise},subscribeRawData:function(){var r=e.defer();return n.bluetoothSerial.subscribeRawData(function(e){r.notify(e)},function(e){r.reject(e)}),r.promise},unsubscribe:function(){var r=e.defer();return n.bluetoothSerial.unsubscribe(function(){r.resolve()},function(e){r.reject(e)}),r.promise},unsubscribeRawData:function(){var r=e.defer();return n.bluetoothSerial.unsubscribeRawData(function(){r.resolve()},function(e){r.reject(e)}),r.promise},clear:function(){var r=e.defer();return n.bluetoothSerial.clear(function(){r.resolve()},function(e){r.reject(e)}),r.promise},readRSSI:function(){var r=e.defer();return n.bluetoothSerial.readRSSI(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.brightness",[]).factory("$cordovaBrightness",["$q","$window",function(e,n){return{get:function(){var r=e.defer();return n.cordova?n.cordova.plugins.brightness.getBrightness(function(e){r.resolve(e)},function(e){r.reject(e)}):r.reject("Not supported without cordova.js"),r.promise},set:function(r){var o=e.defer();return n.cordova?n.cordova.plugins.brightness.setBrightness(r,function(e){o.resolve(e)},function(e){o.reject(e)}):o.reject("Not supported without cordova.js"),o.promise},setKeepScreenOn:function(r){var o=e.defer();return n.cordova?n.cordova.plugins.brightness.setKeepScreenOn(r,function(e){o.resolve(e)},function(e){o.reject(e)}):o.reject("Not supported without cordova.js"),o.promise}}}]),angular.module("ngCordova.plugins.calendar",[]).factory("$cordovaCalendar",["$q","$window",function(e,n){return{createCalendar:function(r){var o=e.defer(),t=n.plugins.calendar.getCreateCalendarOptions();return"string"==typeof r?t.calendarName=r:t=angular.extend(t,r),n.plugins.calendar.createCalendar(t,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},deleteCalendar:function(r){var o=e.defer();return n.plugins.calendar.deleteCalendar(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},createEvent:function(r){var o=e.defer(),t={title:null,location:null,notes:null,startDate:null,endDate:null};return t=angular.extend(t,r),n.plugins.calendar.createEvent(t.title,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},createEventWithOptions:function(r){var o=e.defer(),t=[],i=window.plugins.calendar.getCalendarOptions(),a={title:null,location:null,notes:null,startDate:null,endDate:null};t=Object.keys(a);for(var c in r)-1===t.indexOf(c)?i[c]=r[c]:a[c]=r[c];return n.plugins.calendar.createEventWithOptions(a.title,a.location,a.notes,new Date(a.startDate),new Date(a.endDate),i,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},createEventInteractively:function(r){var o=e.defer(),t={title:null,location:null,notes:null,startDate:null,endDate:null};return t=angular.extend(t,r),n.plugins.calendar.createEventInteractively(t.title,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},createEventInNamedCalendar:function(r){var o=e.defer(),t={title:null,location:null,notes:null,startDate:null,endDate:null,calendarName:null};return t=angular.extend(t,r),n.plugins.calendar.createEventInNamedCalendar(t.title,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),t.calendarName,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},findEvent:function(r){var o=e.defer(),t={title:null,location:null,notes:null,startDate:null,endDate:null};return t=angular.extend(t,r),n.plugins.calendar.findEvent(t.title,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},listEventsInRange:function(r,o){var t=e.defer();return n.plugins.calendar.listEventsInRange(r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},listCalendars:function(){var r=e.defer();return n.plugins.calendar.listCalendars(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},findAllEventsInNamedCalendar:function(r){var o=e.defer();return n.plugins.calendar.findAllEventsInNamedCalendar(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},modifyEvent:function(r){var o=e.defer(),t={title:null,location:null,notes:null,startDate:null,endDate:null,newTitle:null,newLocation:null,newNotes:null,newStartDate:null,newEndDate:null};return t=angular.extend(t,r),n.plugins.calendar.modifyEvent(t.title,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),t.newTitle,t.newLocation,t.newNotes,new Date(t.newStartDate),new Date(t.newEndDate),function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},deleteEvent:function(r){var o=e.defer(),t={newTitle:null,location:null,notes:null,startDate:null,endDate:null};return t=angular.extend(t,r),n.plugins.calendar.deleteEvent(t.newTitle,t.location,t.notes,new Date(t.startDate),new Date(t.endDate),function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.camera",[]).factory("$cordovaCamera",["$q",function(e){return{getPicture:function(n){var r=e.defer();return navigator.camera?(navigator.camera.getPicture(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise):(r.resolve(null),r.promise)},cleanup:function(){var n=e.defer();return navigator.camera.cleanup(function(){n.resolve()},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.capture",[]).factory("$cordovaCapture",["$q",function(e){return{captureAudio:function(n){var r=e.defer();return navigator.device.capture?(navigator.device.capture.captureAudio(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise):(r.resolve(null),r.promise)},captureImage:function(n){var r=e.defer();return navigator.device.capture?(navigator.device.capture.captureImage(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise):(r.resolve(null),r.promise)},captureVideo:function(n){var r=e.defer();return navigator.device.capture?(navigator.device.capture.captureVideo(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise):(r.resolve(null),r.promise)}}}]),angular.module("ngCordova.plugins.cardIO",[]).provider("$cordovaNgCardIO",[function(){var e=["card_type","redacted_card_number","card_number","expiry_month","expiry_year","short_expiry_year","cvv","zip"],n={expiry:!0,cvv:!0,zip:!1,suppressManual:!1,suppressConfirm:!1,hideLogo:!0};this.setCardIOResponseFields=function(n){n&&angular.isArray(n)&&(e=n)},this.setScanerConfig=function(e){e&&angular.isObject(e)&&(n.expiry=e.expiry||!0,n.cvv=e.cvv||!0,n.zip=e.zip||!1,n.suppressManual=e.suppressManual||!1,n.suppressConfirm=e.suppressConfirm||!1,n.hideLogo=e.hideLogo||!0)},this.$get=["$q",function(r){return{scanCard:function(){var o=r.defer();return CardIO.scan(n,function(n){if(null===n)o.reject(null);else{for(var r={},t=0,i=e.length;i>t;t++){var a=e[t];"short_expiry_year"===a?r[a]=String(n.expiry_year).substr(2,2)||"":r[a]=n[a]||""}o.resolve(r)}},function(){o.reject(null)}),o.promise}}}]}]),angular.module("ngCordova.plugins.clipboard",[]).factory("$cordovaClipboard",["$q","$window",function(e,n){return{copy:function(r){var o=e.defer();return n.cordova.plugins.clipboard.copy(r,function(){o.resolve()},function(){o.reject()}),o.promise},paste:function(){var r=e.defer();return n.cordova.plugins.clipboard.paste(function(e){r.resolve(e)},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.contacts",[]).factory("$cordovaContacts",["$q",function(e){return{save:function(n){var r=e.defer(),o=navigator.contacts.create(n);return o.save(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},remove:function(n){var r=e.defer(),o=navigator.contacts.create(n);return o.remove(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},clone:function(e){var n=navigator.contacts.create(e);return n.clone(e)},find:function(n){var r=e.defer(),o=n.fields||["id","displayName"];return delete n.fields,0===Object.keys(n).length?navigator.contacts.find(o,function(e){r.resolve(e)},function(e){r.reject(e)}):navigator.contacts.find(o,function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},pickContact:function(){var n=e.defer();return navigator.contacts.pickContact(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.datePicker",[]).factory("$cordovaDatePicker",["$window","$q",function(e,n){return{show:function(r){var o=n.defer();return r=r||{date:new Date,mode:"date"},e.datePicker.show(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.device",[]).factory("$cordovaDevice",[function(){return{getDevice:function(){return device},getCordova:function(){return device.cordova},getModel:function(){return device.model},getName:function(){return device.name},getPlatform:function(){return device.platform},getUUID:function(){return device.uuid},getVersion:function(){return device.version},getManufacturer:function(){return device.manufacturer}}}]),angular.module("ngCordova.plugins.deviceMotion",[]).factory("$cordovaDeviceMotion",["$q",function(e){return{getCurrentAcceleration:function(){var n=e.defer();return angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.getCurrentAcceleration)?(n.reject("Device do not support watchAcceleration"),n.promise):(navigator.accelerometer.getCurrentAcceleration(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise)},watchAcceleration:function(n){var r=e.defer();if(angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.watchAcceleration))return r.reject("Device do not support watchAcceleration"),r.promise;var o=navigator.accelerometer.watchAcceleration(function(e){r.notify(e)},function(e){r.reject(e)},n);return r.promise.cancel=function(){navigator.accelerometer.clearWatch(o)},r.promise.clearWatch=function(e){navigator.accelerometer.clearWatch(e||o)},r.promise.watchID=o,r.promise},clearWatch:function(e){return navigator.accelerometer.clearWatch(e)}}}]),angular.module("ngCordova.plugins.deviceOrientation",[]).factory("$cordovaDeviceOrientation",["$q",function(e){var n={frequency:3e3};return{getCurrentHeading:function(){var n=e.defer();return navigator.compass?(navigator.compass.getCurrentHeading(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise):(n.reject("No compass on Device"),n.promise)},watchHeading:function(r){var o=e.defer();if(!navigator.compass)return o.reject("No compass on Device"),o.promise;var t=angular.extend(n,r),i=navigator.compass.watchHeading(function(e){o.notify(e)},function(e){o.reject(e)},t);return o.promise.cancel=function(){navigator.compass.clearWatch(i)},o.promise.clearWatch=function(e){navigator.compass.clearWatch(e||i)},o.promise.watchID=i,o.promise},clearWatch:function(e){return navigator.compass.clearWatch(e)}}}]),angular.module("ngCordova.plugins.dialogs",[]).factory("$cordovaDialogs",["$q","$window",function(e,n){return{alert:function(r,o,t){var i=e.defer();return n.navigator.notification?navigator.notification.alert(r,function(){i.resolve()},o,t):(n.alert(r),i.resolve()),i.promise},confirm:function(r,o,t){var i=e.defer();return n.navigator.notification?navigator.notification.confirm(r,function(e){i.resolve(e)},o,t):n.confirm(r)?i.resolve(1):i.resolve(2),i.promise},prompt:function(r,o,t,i){var a=e.defer();if(n.navigator.notification)navigator.notification.prompt(r,function(e){a.resolve(e)},o,t,i);else{var c=n.prompt(r,i);null!==c?a.resolve({input1:c,buttonIndex:1}):a.resolve({input1:c,buttonIndex:2})}return a.promise},beep:function(e){return navigator.notification.beep(e)},activityStart:function(n,r){var o=e.defer();return"android"===cordova.platformId?(navigator.notification.activityStart(r,n),o.resolve()):o.reject(n,r),o.promise},activityStop:function(){var n=e.defer();return"android"===cordova.platformId?(navigator.notification.activityStop(),n.resolve()):n.reject(),n.promise},progressStart:function(n,r){var o=e.defer();return"android"===cordova.platformId?(navigator.notification.progressStart(r,n),o.resolve()):o.reject(n,r),o.promise},progressStop:function(){var n=e.defer();return"android"===cordova.platformId?(navigator.notification.progressStop(),n.resolve()):n.reject(),n.promise},progressValue:function(n){var r=e.defer();return"android"===cordova.platformId?(navigator.notification.progressValue(n),r.resolve()):r.reject(n),r.promise}}}]),angular.module("ngCordova.plugins.emailComposer",[]).factory("$cordovaEmailComposer",["$q",function(e){return{isAvailable:function(){var n=e.defer();return cordova.plugins.email.isAvailable(function(e){e?n.resolve():n.reject()}),n.promise},open:function(n){var r=e.defer();return cordova.plugins.email.open(n,function(){r.reject()}),r.promise},addAlias:function(e,n){cordova.plugins.email.addAlias(e,n)}}}]),angular.module("ngCordova.plugins.facebook",[]).provider("$cordovaFacebook",[function(){this.browserInit=function(e,n){this.appID=e,this.appVersion=n||"v2.0",facebookConnectPlugin.browserInit(this.appID,this.appVersion)},this.$get=["$q",function(e){return{login:function(n){var r=e.defer();return facebookConnectPlugin.login(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showDialog:function(n){var r=e.defer();return facebookConnectPlugin.showDialog(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},api:function(n,r){var o=e.defer();return facebookConnectPlugin.api(n,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},getAccessToken:function(){var n=e.defer();return facebookConnectPlugin.getAccessToken(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLoginStatus:function(){var n=e.defer();return facebookConnectPlugin.getLoginStatus(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},logout:function(){var n=e.defer();return facebookConnectPlugin.logout(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]}]),angular.module("ngCordova.plugins.facebookAds",[]).factory("$cordovaFacebookAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.FacebookAds.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.FacebookAds.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.FacebookAds.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.FacebookAds.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.FacebookAds.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.FacebookAds.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.FacebookAds.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.FacebookAds.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.file",[]).constant("$cordovaFileError",{1:"NOT_FOUND_ERR",2:"SECURITY_ERR",3:"ABORT_ERR",4:"NOT_READABLE_ERR",5:"ENCODING_ERR",6:"NO_MODIFICATION_ALLOWED_ERR",7:"INVALID_STATE_ERR",8:"SYNTAX_ERR",9:"INVALID_MODIFICATION_ERR",10:"QUOTA_EXCEEDED_ERR",11:"TYPE_MISMATCH_ERR",12:"PATH_EXISTS_ERR"}).provider("$cordovaFile",[function(){this.$get=["$q","$window","$cordovaFileError",function(e,n,r){return{getFreeDiskSpace:function(){var n=e.defer();return cordova.exec(function(e){n.resolve(e)},function(e){n.reject(e)},"File","getFreeDiskSpace",[]),n.promise},checkDir:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("directory cannot start with /");try{var a=o+t;n.resolveLocalFileSystemURL(a,function(e){e.isDirectory===!0?i.resolve(e):i.reject({code:13,message:"input is not a directory"})},function(e){e.message=r[e.code],i.reject(e)})}catch(c){c.message=r[c.code],i.reject(c)}return i.promise},checkFile:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("directory cannot start with /");try{var a=o+t;n.resolveLocalFileSystemURL(a,function(e){e.isFile===!0?i.resolve(e):i.reject({code:13,message:"input is not a file"})},function(e){e.message=r[e.code],i.reject(e)})}catch(c){c.message=r[c.code],i.reject(c)}return i.promise},createDir:function(o,t,i){var a=e.defer();/^\//.test(t)&&a.reject("directory cannot start with /"),
	i=i?!1:!0;var c={create:!0,exclusive:i};try{n.resolveLocalFileSystemURL(o,function(e){e.getDirectory(t,c,function(e){a.resolve(e)},function(e){e.message=r[e.code],a.reject(e)})},function(e){e.message=r[e.code],a.reject(e)})}catch(u){u.message=r[u.code],a.reject(u)}return a.promise},createFile:function(o,t,i){var a=e.defer();/^\//.test(t)&&a.reject("file-name cannot start with /"),i=i?!1:!0;var c={create:!0,exclusive:i};try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,c,function(e){a.resolve(e)},function(e){e.message=r[e.code],a.reject(e)})},function(e){e.message=r[e.code],a.reject(e)})}catch(u){u.message=r[u.code],a.reject(u)}return a.promise},removeDir:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getDirectory(t,{create:!1},function(e){e.remove(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},removeFile:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.remove(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},removeRecursively:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getDirectory(t,{create:!1},function(e){e.removeRecursively(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},writeFile:function(o,t,i,a){var c=e.defer();/^\//.test(t)&&c.reject("file-name cannot start with /"),a=a?!1:!0;var u={create:!0,exclusive:a};try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,u,function(e){e.createWriter(function(e){u.append===!0&&e.seek(e.length),u.truncate&&e.truncate(u.truncate),e.onwriteend=function(e){this.error?c.reject(this.error):c.resolve(e)},e.write(i),c.promise.abort=function(){e.abort()}})},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})}catch(s){s.message=r[s.code],c.reject(s)}return c.promise},writeExistingFile:function(o,t,i){var a=e.defer();/^\//.test(t)&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.createWriter(function(e){e.seek(e.length),e.onwriteend=function(e){this.error?a.reject(this.error):a.resolve(e)},e.write(i),a.promise.abort=function(){e.abort()}})},function(e){e.message=r[e.code],a.reject(e)})},function(e){e.message=r[e.code],a.reject(e)})}catch(c){c.message=r[c.code],a.reject(c)}return a.promise},readAsText:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsText(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},readAsDataURL:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsDataURL(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},readAsBinaryString:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsBinaryString(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},readAsArrayBuffer:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsArrayBuffer(e)})},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(a){a.message=r[a.code],i.reject(a)}return i.promise},moveFile:function(r,o,t,i){var a=e.defer();i=i||o,(/^\//.test(o)||/^\//.test(i))&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){n.resolveLocalFileSystemURL(t,function(n){e.moveTo(n,i,function(e){a.resolve(e)},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})}catch(c){a.reject(c)}return a.promise},moveDir:function(r,o,t,i){var a=e.defer();i=i||o,(/^\//.test(o)||/^\//.test(i))&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getDirectory(o,{create:!1},function(e){n.resolveLocalFileSystemURL(t,function(n){e.moveTo(n,i,function(e){a.resolve(e)},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})}catch(c){a.reject(c)}return a.promise},copyDir:function(o,t,i,a){var c=e.defer();a=a||t,(/^\//.test(t)||/^\//.test(a))&&c.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getDirectory(t,{create:!1,exclusive:!1},function(e){n.resolveLocalFileSystemURL(i,function(n){e.copyTo(n,a,function(e){c.resolve(e)},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})}catch(u){u.message=r[u.code],c.reject(u)}return c.promise},copyFile:function(o,t,i,a){var c=e.defer();a=a||t,/^\//.test(t)&&c.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(o,function(e){e.getFile(t,{create:!1,exclusive:!1},function(e){n.resolveLocalFileSystemURL(i,function(n){e.copyTo(n,a,function(e){c.resolve(e)},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})},function(e){e.message=r[e.code],c.reject(e)})}catch(u){u.message=r[u.code],c.reject(u)}return c.promise},readFileMetadata:function(o,t){var i=e.defer();/^\//.test(t)&&i.reject("directory cannot start with /");try{var a=o+t;n.resolveLocalFileSystemURL(a,function(e){e.file(function(e){i.resolve(e)},function(e){e.message=r[e.code],i.reject(e)})},function(e){e.message=r[e.code],i.reject(e)})}catch(c){c.message=r[c.code],i.reject(c)}return i.promise}}}]}]),angular.module("ngCordova.plugins.fileOpener2",[]).factory("$cordovaFileOpener2",["$q",function(e){return{open:function(n,r){var o=e.defer();return cordova.plugins.fileOpener2.open(n,r,{error:function(e){o.reject(e)},success:function(){o.resolve()}}),o.promise},uninstall:function(n){var r=e.defer();return cordova.plugins.fileOpener2.uninstall(n,{error:function(e){r.reject(e)},success:function(){r.resolve()}}),r.promise},appIsInstalled:function(n){var r=e.defer();return cordova.plugins.fileOpener2.appIsInstalled(n,{success:function(e){r.resolve(e)}}),r.promise}}}]),angular.module("ngCordova.plugins.fileTransfer",[]).factory("$cordovaFileTransfer",["$q","$timeout",function(e,n){return{download:function(r,o,t,i){var a=e.defer(),c=new FileTransfer,u=t&&t.encodeURI===!1?r:encodeURI(r);return t&&void 0!==t.timeout&&null!==t.timeout&&(n(function(){c.abort()},t.timeout),t.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.download(u,o,a.resolve,a.reject,i,t),a.promise},upload:function(r,o,t,i){var a=e.defer(),c=new FileTransfer,u=t&&t.encodeURI===!1?r:encodeURI(r);return t&&void 0!==t.timeout&&null!==t.timeout&&(n(function(){c.abort()},t.timeout),t.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.upload(o,u,a.resolve,a.reject,t,i),a.promise}}}]),angular.module("ngCordova.plugins.flashlight",[]).factory("$cordovaFlashlight",["$q","$window",function(e,n){return{available:function(){var r=e.defer();return n.plugins.flashlight.available(function(e){r.resolve(e)}),r.promise},switchOn:function(){var r=e.defer();return n.plugins.flashlight.switchOn(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},switchOff:function(){var r=e.defer();return n.plugins.flashlight.switchOff(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},toggle:function(){var r=e.defer();return n.plugins.flashlight.toggle(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.flurryAds",[]).factory("$cordovaFlurryAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.FlurryAds.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.FlurryAds.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.FlurryAds.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.FlurryAds.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.FlurryAds.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.FlurryAds.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.FlurryAds.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.FlurryAds.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.ga",[]).factory("$cordovaGA",["$q","$window",function(e,n){return{init:function(r,o){var t=e.defer();return o=o>=0?o:10,n.plugins.gaPlugin.init(function(e){t.resolve(e)},function(e){t.reject(e)},r,o),t.promise},trackEvent:function(r,o,t,i,a,c){var u=e.defer();return n.plugins.gaPlugin.trackEvent(function(e){u.resolve(e)},function(e){u.reject(e)},t,i,a,c),u.promise},trackPage:function(r,o,t){var i=e.defer();return n.plugins.gaPlugin.trackPage(function(e){i.resolve(e)},function(e){i.reject(e)},t),i.promise},setVariable:function(r,o,t,i){var a=e.defer();return n.plugins.gaPlugin.setVariable(function(e){a.resolve(e)},function(e){a.reject(e)},t,i),a.promise},exit:function(){var r=e.defer();return n.plugins.gaPlugin.exit(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.geolocation",[]).factory("$cordovaGeolocation",["$q",function(e){return{getCurrentPosition:function(n){var r=e.defer();return navigator.geolocation.getCurrentPosition(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},watchPosition:function(n){var r=e.defer(),o=navigator.geolocation.watchPosition(function(e){r.notify(e)},function(e){r.reject(e)},n);return r.promise.cancel=function(){navigator.geolocation.clearWatch(o)},r.promise.clearWatch=function(e){navigator.geolocation.clearWatch(e||o)},r.promise.watchID=o,r.promise},clearWatch:function(e){return navigator.geolocation.clearWatch(e)}}}]),angular.module("ngCordova.plugins.globalization",[]).factory("$cordovaGlobalization",["$q",function(e){return{getPreferredLanguage:function(){var n=e.defer();return navigator.globalization.getPreferredLanguage(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLocaleName:function(){var n=e.defer();return navigator.globalization.getLocaleName(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getFirstDayOfWeek:function(){var n=e.defer();return navigator.globalization.getFirstDayOfWeek(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},dateToString:function(n,r){var o=e.defer();return navigator.globalization.dateToString(n,function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise},stringToDate:function(n,r){var o=e.defer();return navigator.globalization.stringToDate(n,function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise},getDatePattern:function(n){var r=e.defer();return navigator.globalization.getDatePattern(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},getDateNames:function(n){var r=e.defer();return navigator.globalization.getDateNames(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},isDayLightSavingsTime:function(n){var r=e.defer();return navigator.globalization.isDayLightSavingsTime(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},numberToString:function(n,r){var o=e.defer();return navigator.globalization.numberToString(n,function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise},stringToNumber:function(n,r){var o=e.defer();return navigator.globalization.stringToNumber(n,function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise},getNumberPattern:function(n){var r=e.defer();return navigator.globalization.getNumberPattern(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},getCurrencyPattern:function(n){var r=e.defer();return navigator.globalization.getCurrencyPattern(n,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.googleAds",[]).factory("$cordovaGoogleAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.AdMob.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.AdMob.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.AdMob.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.AdMob.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.AdMob.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.AdMob.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.AdMob.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.AdMob.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.googleAnalytics",[]).factory("$cordovaGoogleAnalytics",["$q","$window",function(e,n){return{startTrackerWithId:function(r){var o=e.defer();return n.analytics.startTrackerWithId(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},setUserId:function(r){var o=e.defer();return n.analytics.setUserId(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},debugMode:function(){var r=e.defer();return n.analytics.debugMode(function(e){r.resolve(e)},function(){r.reject()}),r.promise},trackView:function(r){var o=e.defer();return n.analytics.trackView(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},addCustomDimension:function(r,o){var t=e.defer();return n.analytics.addCustomDimension(r,o,function(){t.resolve()},function(e){t.reject(e)}),t.promise},trackEvent:function(r,o,t,i){var a=e.defer();return n.analytics.trackEvent(r,o,t,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},trackException:function(r,o){var t=e.defer();return n.analytics.trackException(r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},trackTiming:function(r,o,t,i){var a=e.defer();return n.analytics.trackTiming(r,o,t,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},addTransaction:function(r,o,t,i,a,c){var u=e.defer();return n.analytics.addTransaction(r,o,t,i,a,c,function(e){u.resolve(e)},function(e){u.reject(e)}),u.promise},addTransactionItem:function(r,o,t,i,a,c,u){var s=e.defer();return n.analytics.addTransactionItem(r,o,t,i,a,c,u,function(e){s.resolve(e)},function(e){s.reject(e)}),s.promise}}}]),angular.module("ngCordova.plugins.googleMap",[]).factory("$cordovaGoogleMap",["$q","$window",function(e,n){var r=null;return{getMap:function(o){var t=e.defer();if(n.plugin.google.maps){var i=document.getElementById("map_canvas");r=n.plugin.google.maps.Map.getMap(o),r.setDiv(i),t.resolve(r)}else t.reject(null);return t.promise},isMapLoaded:function(){return!!r},addMarker:function(n){var o=e.defer();return r.addMarker(n,function(e){o.resolve(e)}),o.promise},getMapTypeIds:function(){return n.plugin.google.maps.mapTypeId},setVisible:function(n){var o=e.defer();return r.setVisible(n),o.promise},cleanup:function(){r=null}}}]),angular.module("ngCordova.plugins.googlePlayGame",[]).factory("$cordovaGooglePlayGame",["$q",function(e){return{auth:function(){var n=e.defer();return googleplaygame.auth(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},signout:function(){var n=e.defer();return googleplaygame.signout(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},isSignedIn:function(){var n=e.defer();return googleplaygame.isSignedIn(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},showPlayer:function(){var n=e.defer();return googleplaygame.showPlayer(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},submitScore:function(n){var r=e.defer();return googleplaygame.submitScore(n,function(e){return r.resolve(e)},function(e){return r.reject(e)}),r.promise},showAllLeaderboards:function(){var n=e.defer();return googleplaygame.showAllLeaderboards(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},showLeaderboard:function(n){var r=e.defer();return googleplaygame.showLeaderboard(n,function(e){return r.resolve(e)},function(e){return r.reject(e)}),r.promise},unlockAchievement:function(n){var r=e.defer();return googleplaygame.unlockAchievement(n,function(e){return r.resolve(e)},function(e){return r.reject(e)}),r.promise},incrementAchievement:function(n){var r=e.defer();return googleplaygame.incrementAchievement(n,function(e){return r.resolve(e)},function(e){return r.reject(e)}),r.promise},showAchievements:function(){var n=e.defer();return googleplaygame.showAchievements(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.googlePlus",[]).factory("$cordovaGooglePlus",["$q","$window",function(e,n){return{login:function(r){var o=e.defer();return void 0===r&&(r={}),n.plugins.googleplus.login({iOSApiKey:r},function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},silentLogin:function(r){var o=e.defer();return void 0===r&&(r={}),n.plugins.googleplus.trySilentLogin({iOSApiKey:r},function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},logout:function(){var r=e.defer();n.plugins.googleplus.logout(function(e){r.resolve(e)})},disconnect:function(){var r=e.defer();n.plugins.googleplus.disconnect(function(e){r.resolve(e)})},isAvailable:function(){var r=e.defer();return n.plugins.googleplus.isAvailable(function(e){e?r.resolve(e):r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.healthKit",[]).factory("$cordovaHealthKit",["$q","$window",function(e,n){return{isAvailable:function(){var r=e.defer();return n.plugins.healthkit.available(function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},checkAuthStatus:function(r){var o=e.defer();return r=r||"HKQuantityTypeIdentifierHeight",n.plugins.healthkit.checkAuthStatus({type:r},function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},requestAuthorization:function(r,o){var t=e.defer();return r=r||["HKCharacteristicTypeIdentifierDateOfBirth","HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight"],o=o||["HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight","HKQuantityTypeIdentifierDistanceCycling"],n.plugins.healthkit.requestAuthorization({readTypes:r,writeTypes:o},function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},readDateOfBirth:function(){var r=e.defer();return n.plugins.healthkit.readDateOfBirth(function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},readGender:function(){var r=e.defer();return n.plugins.healthkit.readGender(function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},saveWeight:function(r,o,t){var i=e.defer();return n.plugins.healthkit.saveWeight({unit:o||"lb",amount:r,date:t||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readWeight:function(r){var o=e.defer();return n.plugins.healthkit.readWeight({unit:r||"lb"},function(e){o.resolve(e)},function(e){o.resolve(e)}),o.promise},saveHeight:function(r,o,t){var i=e.defer();return n.plugins.healthkit.saveHeight({unit:o||"in",amount:r,date:t||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readHeight:function(r){var o=e.defer();return n.plugins.healthkit.readHeight({unit:r||"in"},function(e){o.resolve(e)},function(e){o.resolve(e)}),o.promise},findWorkouts:function(){var r=e.defer();return n.plugins.healthkit.findWorkouts({},function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},saveWorkout:function(r){var o=e.defer();return n.plugins.healthkit.saveWorkout(r,function(e){o.resolve(e)},function(e){o.resolve(e)}),o.promise},querySampleType:function(r){var o=e.defer();return n.plugins.healthkit.querySampleType(r,function(e){o.resolve(e)},function(e){o.resolve(e)}),o.promise}}}]),angular.module("ngCordova.plugins.httpd",[]).factory("$cordovaHttpd",["$q",function(e){return{startServer:function(n){var r=e.defer();return cordova.plugins.CorHttpd.startServer(n,function(){r.resolve()},function(){r.reject()}),r.promise},stopServer:function(){var n=e.defer();return cordova.plugins.CorHttpd.stopServer(function(){n.resolve()},function(){n.reject()}),n.promise},getURL:function(){var n=e.defer();return cordova.plugins.CorHttpd.getURL(function(e){n.resolve(e)},function(){n.reject()}),n.promise},getLocalPath:function(){var n=e.defer();return cordova.plugins.CorHttpd.getLocalPath(function(e){n.resolve(e)},function(){n.reject()}),n.promise}}}]),angular.module("ngCordova.plugins.iAd",[]).factory("$cordovaiAd",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.iAd.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.iAd.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.iAd.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.iAd.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.iAd.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.iAd.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.iAd.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.iAd.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.imagePicker",[]).factory("$cordovaImagePicker",["$q","$window",function(e,n){return{getPictures:function(r){var o=e.defer();return n.imagePicker.getPictures(function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise}}}]),angular.module("ngCordova.plugins.inAppBrowser",[]).provider("$cordovaInAppBrowser",[function(){var e,n=this.defaultOptions={};this.setDefaultOptions=function(e){n=angular.extend(n,e)},this.$get=["$rootScope","$q","$window","$timeout",function(r,o,t,i){return{open:function(a,c,u){var s=o.defer();if(u&&!angular.isObject(u))return s.reject("options must be an object"),s.promise;var l=angular.extend({},n,u),f=[];angular.forEach(l,function(e,n){f.push(n+"="+e)});var d=f.join();return e=t.open(a,c,d),e.addEventListener("loadstart",function(e){i(function(){r.$broadcast("$cordovaInAppBrowser:loadstart",e)})},!1),e.addEventListener("loadstop",function(e){s.resolve(e),i(function(){r.$broadcast("$cordovaInAppBrowser:loadstop",e)})},!1),e.addEventListener("loaderror",function(e){s.reject(e),i(function(){r.$broadcast("$cordovaInAppBrowser:loaderror",e)})},!1),e.addEventListener("exit",function(e){i(function(){r.$broadcast("$cordovaInAppBrowser:exit",e)})},!1),s.promise},close:function(){e.close(),e=null},show:function(){e.show()},executeScript:function(n){var r=o.defer();return e.executeScript(n,function(e){r.resolve(e)}),r.promise},insertCSS:function(n){var r=o.defer();return e.insertCSS(n,function(e){r.resolve(e)}),r.promise}}}]}]),angular.module("ngCordova.plugins.insomnia",[]).factory("$cordovaInsomnia",["$window",function(e){return{keepAwake:function(){return e.plugins.insomnia.keepAwake()},allowSleepAgain:function(){return e.plugins.insomnia.allowSleepAgain()}}}]),angular.module("ngCordova.plugins.instagram",[]).factory("$cordovaInstagram",["$q",function(e){return{share:function(n){var r=e.defer();return window.Instagram?(Instagram.share(n.image,n.caption,function(e){e?r.reject(e):r.resolve(!0)}),r.promise):(console.error("Tried to call Instagram.share but the Instagram plugin isn't installed!"),r.resolve(null),r.promise)},isInstalled:function(){var n=e.defer();return window.Instagram?(Instagram.isInstalled(function(e,r){e?n.reject(e):n.resolve(r)}),n.promise):(console.error("Tried to call Instagram.isInstalled but the Instagram plugin isn't installed!"),n.resolve(null),n.promise)}}}]),angular.module("ngCordova.plugins.keyboard",[]).factory("$cordovaKeyboard",["$rootScope",function(e){var n=function(){e.$evalAsync(function(){e.$broadcast("$cordovaKeyboard:show")})},r=function(){e.$evalAsync(function(){e.$broadcast("$cordovaKeyboard:hide")})};return document.addEventListener("deviceready",function(){cordova.plugins.Keyboard&&(window.addEventListener("native.keyboardshow",n,!1),window.addEventListener("native.keyboardhide",r,!1))}),{hideAccessoryBar:function(e){return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(e)},close:function(){return cordova.plugins.Keyboard.close()},show:function(){return cordova.plugins.Keyboard.show()},disableScroll:function(e){return cordova.plugins.Keyboard.disableScroll(e)},isVisible:function(){return cordova.plugins.Keyboard.isVisible},clearShowWatch:function(){document.removeEventListener("native.keyboardshow",n),e.$$listeners["$cordovaKeyboard:show"]=[]},clearHideWatch:function(){document.removeEventListener("native.keyboardhide",r),e.$$listeners["$cordovaKeyboard:hide"]=[]}}}]),angular.module("ngCordova.plugins.keychain",[]).factory("$cordovaKeychain",["$q",function(e){return{getForKey:function(n,r){var o=e.defer(),t=new Keychain;return t.getForKey(o.resolve,o.reject,n,r),o.promise},setForKey:function(n,r,o){var t=e.defer(),i=new Keychain;return i.setForKey(t.resolve,t.reject,n,r,o),t.promise},removeForKey:function(n,r){var o=e.defer(),t=new Keychain;return t.removeForKey(o.resolve,o.reject,n,r),o.promise}}}]),angular.module("ngCordova.plugins.launchNavigator",[]).factory("$cordovaLaunchNavigator",["$q",function(e){return{navigate:function(n,r,o){var t=e.defer();return launchnavigator.navigate(n,r,function(){t.resolve()},function(e){t.reject(e)},o),t.promise}}}]),angular.module("ngCordova.plugins.localNotification",[]).factory("$cordovaLocalNotification",["$q","$window","$rootScope","$timeout",function(e,n,r,o){return document.addEventListener("deviceready",function(){n.cordova&&n.cordova.plugins&&n.cordova.plugins.notification&&n.cordova.plugins.notification.local&&(n.cordova.plugins.notification.local.on("schedule",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:schedule",e,n)})}),n.cordova.plugins.notification.local.on("trigger",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:trigger",e,n)})}),n.cordova.plugins.notification.local.on("update",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:update",e,n)})}),n.cordova.plugins.notification.local.on("clear",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:clear",e,n)})}),n.cordova.plugins.notification.local.on("clearall",function(e){o(function(){r.$broadcast("$cordovaLocalNotification:clearall",e)})}),n.cordova.plugins.notification.local.on("cancel",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:cancel",e,n)})}),n.cordova.plugins.notification.local.on("cancelall",function(e){o(function(){r.$broadcast("$cordovaLocalNotification:cancelall",e)})}),n.cordova.plugins.notification.local.on("click",function(e,n){o(function(){r.$broadcast("$cordovaLocalNotification:click",e,n)})}))},!1),{schedule:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.schedule(r,function(e){t.resolve(e)},o),t.promise},add:function(r,o){console.warn('Deprecated: use "schedule" instead.');var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.schedule(r,function(e){t.resolve(e)},o),t.promise},update:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.update(r,function(e){t.resolve(e)},o),t.promise},clear:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.clear(r,function(e){t.resolve(e)},o),t.promise},clearAll:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.clearAll(function(e){o.resolve(e)},r),o.promise},cancel:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.cancel(r,function(e){t.resolve(e)},o),t.promise},cancelAll:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.cancelAll(function(e){o.resolve(e)},r),o.promise},isPresent:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.isPresent(r,function(e){t.resolve(e)},o),t.promise},isScheduled:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.isScheduled(r,function(e){t.resolve(e)},o),t.promise},isTriggered:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.isTriggered(r,function(e){t.resolve(e)},o),t.promise},hasPermission:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.hasPermission(function(e){e?o.resolve(e):o.reject(e)},r),o.promise},registerPermission:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.registerPermission(function(e){e?o.resolve(e):o.reject(e)},r),o.promise},promptForPermission:function(r){console.warn('Deprecated: use "registerPermission" instead.');var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.registerPermission(function(e){
	e?o.resolve(e):o.reject(e)},r),o.promise},getAllIds:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getAllIds(function(e){o.resolve(e)},r),o.promise},getIds:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getIds(function(e){o.resolve(e)},r),o.promise},getScheduledIds:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getScheduledIds(function(e){o.resolve(e)},r),o.promise},getTriggeredIds:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getTriggeredIds(function(e){o.resolve(e)},r),o.promise},get:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.get(r,function(e){t.resolve(e)},o),t.promise},getAll:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getAll(function(e){o.resolve(e)},r),o.promise},getScheduled:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.getScheduled(r,function(e){t.resolve(e)},o),t.promise},getAllScheduled:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getAllScheduled(function(e){o.resolve(e)},r),o.promise},getTriggered:function(r,o){var t=e.defer();return o=o||null,n.cordova.plugins.notification.local.getTriggered(r,function(e){t.resolve(e)},o),t.promise},getAllTriggered:function(r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getAllTriggered(function(e){o.resolve(e)},r),o.promise},getDefaults:function(){return n.cordova.plugins.notification.local.getDefaults()},setDefaults:function(e){n.cordova.plugins.notification.local.setDefaults(e)}}}]),angular.module("ngCordova.plugins.mMediaAds",[]).factory("$cordovaMMediaAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.mMedia.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.mMedia.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.mMedia.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.mMedia.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.mMedia.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.mMedia.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.mMedia.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.mMedia.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.media",[]).service("NewMedia",["$q","$interval",function(e,n){function r(e){angular.isDefined(s)||(s=n(function(){0>d&&(d=e.getDuration(),a&&d>0&&a.notify({duration:d})),e.getCurrentPosition(function(e){e>-1&&(f=e)},function(e){console.log("Error getting pos="+e)}),a&&a.notify({position:f})},1e3))}function o(){angular.isDefined(s)&&(n.cancel(s),s=void 0)}function t(){f=-1,d=-1}function i(e){this.media=new Media(e,function(e){o(),t(),a.resolve(e)},function(e){o(),t(),a.reject(e)},function(e){l=e,a.notify({status:l})})}var a,c,u,s,l=null,f=-1,d=-1;return i.prototype.play=function(n){return a=e.defer(),"object"!=typeof n&&(n={}),this.media.play(n),r(this.media),a.promise},i.prototype.pause=function(){o(),this.media.pause()},i.prototype.stop=function(){this.media.stop()},i.prototype.release=function(){this.media.release(),this.media=void 0},i.prototype.seekTo=function(e){this.media.seekTo(e)},i.prototype.setVolume=function(e){this.media.setVolume(e)},i.prototype.startRecord=function(){this.media.startRecord()},i.prototype.stopRecord=function(){this.media.stopRecord()},i.prototype.currentTime=function(){return c=e.defer(),this.media.getCurrentPosition(function(e){c.resolve(e)}),c.promise},i.prototype.getDuration=function(){return u=e.defer(),this.media.getDuration(function(e){u.resolve(e)}),u.promise},i}]).factory("$cordovaMedia",["NewMedia",function(e){return{newMedia:function(n){return new e(n)}}}]),angular.module("ngCordova.plugins.mobfoxAds",[]).factory("$cordovaMobFoxAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.MobFox.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.MobFox.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.MobFox.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.MobFox.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.MobFox.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.MobFox.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.MobFox.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.MobFox.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins",["ngCordova.plugins.actionSheet","ngCordova.plugins.adMob","ngCordova.plugins.appAvailability","ngCordova.plugins.appRate","ngCordova.plugins.appVersion","ngCordova.plugins.backgroundGeolocation","ngCordova.plugins.badge","ngCordova.plugins.barcodeScanner","ngCordova.plugins.batteryStatus","ngCordova.plugins.beacon","ngCordova.plugins.ble","ngCordova.plugins.bluetoothSerial","ngCordova.plugins.brightness","ngCordova.plugins.calendar","ngCordova.plugins.camera","ngCordova.plugins.capture","ngCordova.plugins.clipboard","ngCordova.plugins.contacts","ngCordova.plugins.datePicker","ngCordova.plugins.device","ngCordova.plugins.deviceMotion","ngCordova.plugins.deviceOrientation","ngCordova.plugins.dialogs","ngCordova.plugins.emailComposer","ngCordova.plugins.facebook","ngCordova.plugins.facebookAds","ngCordova.plugins.file","ngCordova.plugins.fileTransfer","ngCordova.plugins.fileOpener2","ngCordova.plugins.flashlight","ngCordova.plugins.flurryAds","ngCordova.plugins.ga","ngCordova.plugins.geolocation","ngCordova.plugins.globalization","ngCordova.plugins.googleAds","ngCordova.plugins.googleAnalytics","ngCordova.plugins.googleMap","ngCordova.plugins.googlePlayGame","ngCordova.plugins.googlePlus","ngCordova.plugins.healthKit","ngCordova.plugins.httpd","ngCordova.plugins.iAd","ngCordova.plugins.imagePicker","ngCordova.plugins.inAppBrowser","ngCordova.plugins.instagram","ngCordova.plugins.keyboard","ngCordova.plugins.keychain","ngCordova.plugins.launchNavigator","ngCordova.plugins.localNotification","ngCordova.plugins.media","ngCordova.plugins.mMediaAds","ngCordova.plugins.mobfoxAds","ngCordova.plugins.mopubAds","ngCordova.plugins.nativeAudio","ngCordova.plugins.network","ngCordova.plugins.pinDialog","ngCordova.plugins.preferences","ngCordova.plugins.printer","ngCordova.plugins.progressIndicator","ngCordova.plugins.push","ngCordova.plugins.push_v5","ngCordova.plugins.sms","ngCordova.plugins.socialSharing","ngCordova.plugins.spinnerDialog","ngCordova.plugins.splashscreen","ngCordova.plugins.sqlite","ngCordova.plugins.statusbar","ngCordova.plugins.toast","ngCordova.plugins.touchid","ngCordova.plugins.vibration","ngCordova.plugins.videoCapturePlus","ngCordova.plugins.zip","ngCordova.plugins.insomnia"]),angular.module("ngCordova.plugins.mopubAds",[]).factory("$cordovaMoPubAds",["$q","$window",function(e,n){return{setOptions:function(r){var o=e.defer();return n.MoPub.setOptions(r,function(){o.resolve()},function(){o.reject()}),o.promise},createBanner:function(r){var o=e.defer();return n.MoPub.createBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},removeBanner:function(){var r=e.defer();return n.MoPub.removeBanner(function(){r.resolve()},function(){r.reject()}),r.promise},showBanner:function(r){var o=e.defer();return n.MoPub.showBanner(r,function(){o.resolve()},function(){o.reject()}),o.promise},showBannerAtXY:function(r,o){var t=e.defer();return n.MoPub.showBannerAtXY(r,o,function(){t.resolve()},function(){t.reject()}),t.promise},hideBanner:function(){var r=e.defer();return n.MoPub.hideBanner(function(){r.resolve()},function(){r.reject()}),r.promise},prepareInterstitial:function(r){var o=e.defer();return n.MoPub.prepareInterstitial(r,function(){o.resolve()},function(){o.reject()}),o.promise},showInterstitial:function(){var r=e.defer();return n.MoPub.showInterstitial(function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.nativeAudio",[]).factory("$cordovaNativeAudio",["$q","$window",function(e,n){return{preloadSimple:function(r,o){var t=e.defer();return n.plugins.NativeAudio.preloadSimple(r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},preloadComplex:function(r,o,t,i,a){var c=e.defer();return n.plugins.NativeAudio.preloadComplex(r,o,t,i,a,function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise},play:function(r,o){var t=e.defer();return n.plugins.NativeAudio.play(r,function(e){t.resolve(e)},function(e){t.reject(e)},o),t.promise},stop:function(r){var o=e.defer();return n.plugins.NativeAudio.stop(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},loop:function(r){var o=e.defer();return n.plugins.NativeAudio.loop(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},unload:function(r){var o=e.defer();return n.plugins.NativeAudio.unload(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},setVolumeForComplexAsset:function(r,o){var t=e.defer();return n.plugins.NativeAudio.setVolumeForComplexAsset(r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.network",[]).factory("$cordovaNetwork",["$rootScope","$timeout",function(e,n){var r=function(){var r=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:offline",r)})},o=function(){var r=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:online",r)})};return document.addEventListener("deviceready",function(){navigator.connection&&(document.addEventListener("offline",r,!1),document.addEventListener("online",o,!1))}),{getNetwork:function(){return navigator.connection.type},isOnline:function(){var e=navigator.connection.type;return e!==Connection.UNKNOWN&&e!==Connection.NONE},isOffline:function(){var e=navigator.connection.type;return e===Connection.UNKNOWN||e===Connection.NONE},clearOfflineWatch:function(){document.removeEventListener("offline",r),e.$$listeners["$cordovaNetwork:offline"]=[]},clearOnlineWatch:function(){document.removeEventListener("online",o),e.$$listeners["$cordovaNetwork:online"]=[]}}}]).run(["$injector",function(e){e.get("$cordovaNetwork")}]),angular.module("ngCordova.plugins.pinDialog",[]).factory("$cordovaPinDialog",["$q","$window",function(e,n){return{prompt:function(r,o,t){var i=e.defer();return n.plugins.pinDialog.prompt(r,function(e){i.resolve(e)},o,t),i.promise}}}]),angular.module("ngCordova.plugins.preferences",[]).factory("$cordovaPreferences",["$window","$q",function(e,n){return{pluginNotEnabledMessage:"Plugin not enabled",decoratePromise:function(e){e.success=function(n){return e.then(n),e},e.error=function(n){return e.then(null,n),e}},store:function(r,o,t){function i(e){c.resolve(e)}function a(e){c.reject(new Error(e))}var c=n.defer(),u=c.promise;if(e.plugins){var s;s=3===arguments.length?e.plugins.appPreferences.store(t,r,o):e.plugins.appPreferences.store(r,o),s.then(i,a)}else c.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(u),u},fetch:function(r,o){function t(e){a.resolve(e)}function i(e){a.reject(new Error(e))}var a=n.defer(),c=a.promise;if(e.plugins){var u;u=2===arguments.length?e.plugins.appPreferences.fetch(o,r):e.plugins.appPreferences.fetch(r),u.then(t,i)}else a.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(c),c},remove:function(r,o){function t(e){a.resolve(e)}function i(e){a.reject(new Error(e))}var a=n.defer(),c=a.promise;if(e.plugins){var u;u=2===arguments.length?e.plugins.appPreferences.remove(o,r):e.plugins.appPreferences.remove(r),u.then(t,i)}else a.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(c),c},show:function(){function r(e){t.resolve(e)}function o(e){t.reject(new Error(e))}var t=n.defer(),i=t.promise;return e.plugins?e.plugins.appPreferences.show().then(r,o):t.reject(new Error(this.pluginNotEnabledMessage)),this.decoratePromise(i),i}}}]),angular.module("ngCordova.plugins.printer",[]).factory("$cordovaPrinter",["$q","$window",function(e,n){return{isAvailable:function(){var r=e.defer();return n.plugin.printer.isAvailable(function(e){r.resolve(e)}),r.promise},print:function(r,o){var t=e.defer();return n.plugin.printer.print(r,o,function(){t.resolve()}),t.promise}}}]),angular.module("ngCordova.plugins.progressIndicator",[]).factory("$cordovaProgress",[function(){return{show:function(e){var n=e||"Please wait...";return ProgressIndicator.show(n)},showSimple:function(e){var n=e||!1;return ProgressIndicator.showSimple(n)},showSimpleWithLabel:function(e,n){var r=e||!1,o=n||"Loading...";return ProgressIndicator.showSimpleWithLabel(r,o)},showSimpleWithLabelDetail:function(e,n,r){var o=e||!1,t=n||"Loading...",i=r||"Please wait";return ProgressIndicator.showSimpleWithLabelDetail(o,t,i)},showDeterminate:function(e,n){var r=e||!1,o=n||5e4;return ProgressIndicator.showDeterminate(r,o)},showDeterminateWithLabel:function(e,n,r){var o=e||!1,t=n||5e4,i=r||"Loading...";return ProgressIndicator.showDeterminateWithLabel(o,t,i)},showAnnular:function(e,n){var r=e||!1,o=n||5e4;return ProgressIndicator.showAnnular(r,o)},showAnnularWithLabel:function(e,n,r){var o=e||!1,t=n||5e4,i=r||"Loading...";return ProgressIndicator.showAnnularWithLabel(o,t,i)},showBar:function(e,n){var r=e||!1,o=n||5e4;return ProgressIndicator.showBar(r,o)},showBarWithLabel:function(e,n,r){var o=e||!1,t=n||5e4,i=r||"Loading...";return ProgressIndicator.showBarWithLabel(o,t,i)},showSuccess:function(e,n){var r=e||!1,o=n||"Success";return ProgressIndicator.showSuccess(r,o)},showText:function(e,n,r){var o=e||!1,t=n||"Warning",i=r||"center";return ProgressIndicator.showText(o,t,i)},hide:function(){return ProgressIndicator.hide()}}}]),angular.module("ngCordova.plugins.push",[]).factory("$cordovaPush",["$q","$window","$rootScope","$timeout",function(e,n,r,o){return{onNotification:function(e){o(function(){r.$broadcast("$cordovaPush:notificationReceived",e)})},register:function(r){var o,t=e.defer();return void 0!==r&&void 0===r.ecb&&(o=null===document.querySelector("[ng-app]")?"document.body":"document.querySelector('[ng-app]')",r.ecb="angular.element("+o+").injector().get('$cordovaPush').onNotification"),n.plugins.pushNotification.register(function(e){t.resolve(e)},function(e){t.reject(e)},r),t.promise},unregister:function(r){var o=e.defer();return n.plugins.pushNotification.unregister(function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise},setBadgeNumber:function(r){var o=e.defer();return n.plugins.pushNotification.setApplicationIconBadgeNumber(function(e){o.resolve(e)},function(e){o.reject(e)},r),o.promise}}}]),angular.module("ngCordova.plugins.push_v5",[]).factory("$cordovaPushV5",["$q","$rootScope","$timeout",function(e,n,r){var o;return{initialize:function(n){var r=e.defer();return o=PushNotification.init(n),r.resolve(o),r.promise},onNotification:function(){r(function(){o.on("notification",function(e){n.$emit("$cordovaPushV5:notificationReceived",e)})})},onError:function(){r(function(){o.on("error",function(e){n.$emit("$cordovaPushV5:errorOccurred",e)})})},register:function(){var n=e.defer();return void 0===o?n.reject(new Error("init must be called before any other operation")):o.on("registration",function(e){n.resolve(e.registrationId)}),n.promise},unregister:function(){var n=e.defer();return void 0===o?n.reject(new Error("init must be called before any other operation")):o.unregister(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getBadgeNumber:function(){var n=e.defer();return void 0===o?n.reject(new Error("init must be called before any other operation")):o.getApplicationIconBadgeNumber(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},setBadgeNumber:function(n){var r=e.defer();return void 0===o?r.reject(new Error("init must be called before any other operation")):o.setApplicationIconBadgeNumber(function(e){r.resolve(e)},function(e){r.reject(e)},n),r.promise},finish:function(){var n=e.defer();return void 0===o?n.reject(new Error("init must be called before any other operation")):o.finish(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.screenshot",[]).factory("$cordovaScreenshot",["$q",function(e){return{captureToFile:function(n){var r=n||{},o=r.extension||"jpg",t=r.quality||"100",i=e.defer();return navigator.screenshot?(navigator.screenshot.save(function(e,n){e?i.reject(e):i.resolve(n.filePath)},o,t,r.filename),i.promise):(i.resolve(null),i.promise)},captureToUri:function(n){var r=n||{},o=r.extension||"jpg",t=r.quality||"100",i=e.defer();return navigator.screenshot?(navigator.screenshot.URI(function(e,n){e?i.reject(e):i.resolve(n.URI)},o,t,r.filename),i.promise):(i.resolve(null),i.promise)}}}]),angular.module("ngCordova.plugins.sms",[]).factory("$cordovaSms",["$q",function(e){return{send:function(n,r,o){var t=e.defer();return sms.send(n,r,o,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.socialSharing",[]).factory("$cordovaSocialSharing",["$q","$window",function(e,n){return{share:function(r,o,t,i){var a=e.defer();return o=o||null,t=t||null,i=i||null,n.plugins.socialsharing.share(r,o,t,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaTwitter:function(r,o,t){var i=e.defer();return o=o||null,t=t||null,n.plugins.socialsharing.shareViaTwitter(r,o,t,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaWhatsApp:function(r,o,t){var i=e.defer();return o=o||null,t=t||null,n.plugins.socialsharing.shareViaWhatsApp(r,o,t,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebook:function(r,o,t){var i=e.defer();return r=r||null,o=o||null,t=t||null,n.plugins.socialsharing.shareViaFacebook(r,o,t,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebookWithPasteMessageHint:function(r,o,t,i){var a=e.defer();return o=o||null,t=t||null,n.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(r,o,t,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaSMS:function(r,o){var t=e.defer();return n.plugins.socialsharing.shareViaSMS(r,o,function(){t.resolve(!0)},function(){t.reject(!1)}),t.promise},shareViaEmail:function(r,o,t,i,a,c){var u=e.defer();return t=t||null,i=i||null,a=a||null,c=c||null,n.plugins.socialsharing.shareViaEmail(r,o,t,i,a,c,function(){u.resolve(!0)},function(){u.reject(!1)}),u.promise},shareVia:function(r,o,t,i,a){var c=e.defer();return o=o||null,t=t||null,i=i||null,a=a||null,n.plugins.socialsharing.shareVia(r,o,t,i,a,function(){c.resolve(!0)},function(){c.reject(!1)}),c.promise},canShareViaEmail:function(){var r=e.defer();return n.plugins.socialsharing.canShareViaEmail(function(){r.resolve(!0)},function(){r.reject(!1)}),r.promise},canShareVia:function(r,o,t,i,a){var c=e.defer();return n.plugins.socialsharing.canShareVia(r,o,t,i,a,function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise},available:function(){var n=e.defer();return window.plugins.socialsharing.available(function(e){e?n.resolve():n.reject()}),n.promise}}}]),angular.module("ngCordova.plugins.spinnerDialog",[]).factory("$cordovaSpinnerDialog",["$window",function(e){return{show:function(n,r,o){return o=o||!1,e.plugins.spinnerDialog.show(n,r,o)},hide:function(){return e.plugins.spinnerDialog.hide()}}}]),angular.module("ngCordova.plugins.splashscreen",[]).factory("$cordovaSplashscreen",[function(){return{hide:function(){return navigator.splashscreen.hide()},show:function(){return navigator.splashscreen.show()}}}]),angular.module("ngCordova.plugins.sqlite",[]).factory("$cordovaSQLite",["$q","$window",function(e,n){return{openDB:function(e,r){return angular.isObject(e)&&!angular.isString(e)?("undefined"!=typeof r&&(e.bgType=r),n.sqlitePlugin.openDatabase(e)):n.sqlitePlugin.openDatabase({name:e,bgType:r})},execute:function(n,r,o){var t=e.defer();return n.transaction(function(e){e.executeSql(r,o,function(e,n){t.resolve(n)},function(e,n){t.reject(n)})}),t.promise},insertCollection:function(n,r,o){var t=e.defer(),i=o.slice(0);return n.transaction(function(e){!function n(){var o=i.splice(0,1)[0];try{e.executeSql(r,o,function(e,r){0===i.length?t.resolve(r):n()},function(e,n){t.reject(n)})}catch(a){t.reject(a)}}()}),t.promise},nestedExecute:function(n,r,o,t,i){var a=e.defer();return n.transaction(function(e){e.executeSql(r,t,function(e,n){a.resolve(n),e.executeSql(o,i,function(e,n){a.resolve(n)})})},function(e,n){a.reject(n)}),a.promise},deleteDB:function(r){var o=e.defer();return n.sqlitePlugin.deleteDatabase(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.statusbar",[]).factory("$cordovaStatusbar",[function(){return{overlaysWebView:function(e){return StatusBar.overlaysWebView(!!e)},STYLES:{DEFAULT:0,LIGHT_CONTENT:1,BLACK_TRANSLUCENT:2,BLACK_OPAQUE:3},style:function(e){switch(e){case 0:return StatusBar.styleDefault();case 1:return StatusBar.styleLightContent();case 2:return StatusBar.styleBlackTranslucent();case 3:return StatusBar.styleBlackOpaque();default:return StatusBar.styleDefault()}},styleColor:function(e){return StatusBar.backgroundColorByName(e)},styleHex:function(e){return StatusBar.backgroundColorByHexString(e)},hide:function(){return StatusBar.hide()},show:function(){return StatusBar.show()},isVisible:function(){return StatusBar.isVisible}}}]),angular.module("ngCordova.plugins.toast",[]).factory("$cordovaToast",["$q","$window",function(e,n){return{showShortTop:function(r){var o=e.defer();return n.plugins.toast.showShortTop(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},showShortCenter:function(r){var o=e.defer();return n.plugins.toast.showShortCenter(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},showShortBottom:function(r){var o=e.defer();return n.plugins.toast.showShortBottom(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},showLongTop:function(r){var o=e.defer();return n.plugins.toast.showLongTop(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},showLongCenter:function(r){var o=e.defer();return n.plugins.toast.showLongCenter(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},showLongBottom:function(r){var o=e.defer();return n.plugins.toast.showLongBottom(r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},show:function(r,o,t){var i=e.defer();return n.plugins.toast.show(r,o,t,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},hide:function(){var r=e.defer();try{n.plugins.toast.hide(),r.resolve()}catch(o){r.reject(o&&o.message)}return r.promise}}}]),angular.module("ngCordova.plugins.touchid",[]).factory("$cordovaTouchID",["$q",function(e){return{checkSupport:function(){var n=e.defer();return window.cordova?touchid.checkSupport(function(e){n.resolve(e)},function(e){n.reject(e)}):n.reject("Not supported without cordova.js"),n.promise},authenticate:function(n){var r=e.defer();return window.cordova?touchid.authenticate(function(e){r.resolve(e)},function(e){r.reject(e)},n):r.reject("Not supported without cordova.js"),r.promise}}}]),angular.module("ngCordova.plugins.upsPush",[]).factory("$cordovaUpsPush",["$q","$window","$rootScope","$timeout",function(e,n,r,o){return{register:function(t){var i=e.defer();return n.push.register(function(e){o(function(){r.$broadcast("$cordovaUpsPush:notificationReceived",e)})},function(){i.resolve()},function(e){i.reject(e)},t),i.promise},unregister:function(r){var o=e.defer();return n.push.unregister(function(){o.resolve()},function(e){o.reject(e)},r),o.promise},setBadgeNumber:function(r){var o=e.defer();return n.push.setApplicationIconBadgeNumber(function(){o.resolve()},r),o.promise}}}]),angular.module("ngCordova.plugins.vibration",[]).factory("$cordovaVibration",[function(){return{vibrate:function(e){return navigator.notification.vibrate(e)},vibrateWithPattern:function(e,n){return navigator.notification.vibrateWithPattern(e,n)},cancelVibration:function(){return navigator.notification.cancelVibration()}}}]),angular.module("ngCordova.plugins.videoCapturePlus",[]).provider("$cordovaVideoCapturePlus",[function(){var e={};this.setLimit=function(n){e.limit=n},this.setMaxDuration=function(n){e.duration=n},this.setHighQuality=function(n){e.highquality=n},this.useFrontCamera=function(n){e.frontcamera=n},this.setPortraitOverlay=function(n){e.portraitOverlay=n},this.setLandscapeOverlay=function(n){e.landscapeOverlay=n},this.setOverlayText=function(n){e.overlayText=n},this.$get=["$q","$window",function(n,r){return{captureVideo:function(o){var t=n.defer();return r.plugins.videocaptureplus?(r.plugins.videocaptureplus.captureVideo(t.resolve,t.reject,angular.extend({},e,o)),t.promise):(t.resolve(null),t.promise)}}}]}]),angular.module("ngCordova.plugins.zip",[]).factory("$cordovaZip",["$q","$window",function(e,n){return{unzip:function(r,o){var t=e.defer();return n.zip.unzip(r,o,function(e){0===e?t.resolve():t.reject()},function(e){t.notify(e)}),t.promise}}}])}();

/***/ },
/* 30 */
/*!****************************************************!*\
  !*** ./www/js/lib/ng-cordova-master/src/camera.js ***!
  \****************************************************/
/***/ function(module, exports) {

	// install   :   cordova plugin add cordova-plugin-camera
	// link      :   https://github.com/apache/cordova-plugin-camera
	
	angular.module('ngCordova.plugins.camera', [])
	
	  .factory('$cordovaCamera', ['$q', function ($q) {
	
	    return {
	      getPicture: function (options) {
	        var q = $q.defer();
	
	        if (!navigator.camera) {
	          q.resolve(null);
	          return q.promise;
	        }
	
	        navigator.camera.getPicture(function (imageData) {
	          q.resolve(imageData);
	        }, function (err) {
	          q.reject(err);
	        }, options);
	
	        return q.promise;
	      },
	
	      cleanup: function () {
	        var q = $q.defer();
	
	        navigator.camera.cleanup(function () {
	          q.resolve();
	        }, function (err) {
	          q.reject(err);
	        });
	
	        return q.promise;
	      }
	    };
	  }]);


/***/ },
/* 31 */
/*!*******************************************************!*\
  !*** ./www/js/lib/ng-cordova-master/src/statusbar.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	// install   :      cordova plugin add cordova-plugin-statusbar
	// link      :      https://github.com/apache/cordova-plugin-statusbar
	
	/* globals StatusBar: true */
	angular.module('ngCordova.plugins.statusbar', [])
	
	.factory('$cordovaStatusbar', [function () {
	
	  return {
	
	    /**
	      * @param {boolean} bool
	      */
	    overlaysWebView: function (bool) {
	      return StatusBar.overlaysWebView(!!bool);
	    },
	
	    STYLES: {
	      DEFAULT: 0,
	      LIGHT_CONTENT: 1,
	      BLACK_TRANSLUCENT: 2,
	      BLACK_OPAQUE: 3
	    },
	
	    /**
	      * @param {number} style
	      */
	    style: function (style) {
	      switch (style) {
	        // Default
	        case 0:
	        return StatusBar.styleDefault();
	
	        // LightContent
	        case 1:
	        return StatusBar.styleLightContent();
	
	        // BlackTranslucent
	        case 2:
	        return StatusBar.styleBlackTranslucent();
	
	        // BlackOpaque
	        case 3:
	        return StatusBar.styleBlackOpaque();
	
	        default:
	        return StatusBar.styleDefault();
	      }
	    },
	
	    // supported names:
	    // black, darkGray, lightGray, white, gray, red, green,
	    // blue, cyan, yellow, magenta, orange, purple, brown
	    styleColor: function (color) {
	      return StatusBar.backgroundColorByName(color);
	    },
	
	    styleHex: function (colorHex) {
	      return StatusBar.backgroundColorByHexString(colorHex);
	    },
	
	    hide: function () {
	      return StatusBar.hide();
	    },
	
	    show: function () {
	      return StatusBar.show();
	    },
	
	    isVisible: function () {
	      return StatusBar.isVisible;
	    }
	  };
	}]);


/***/ },
/* 32 */
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	var cda = angular.module('cda', ['ngAnimate', 'ngCordova', 'mn']);
	document.addEventListener('deviceready', function() {
	    cda.value('TTS', TTS);
	    angular.bootstrap(document, ['cda']);
	}, false);

/***/ },
/* 33 */
/*!***************************************!*\
  !*** ./www/js/cd-common ^\.\/.*\.js$ ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-back-button.js": 34,
		"./cd-current-color-service.js": 35,
		"./cd-detect-color-service.js": 36,
		"./cd-font-color.js": 37,
		"./cd-rgb-to-hex.js": 38
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 33;


/***/ },
/* 34 */
/*!********************************************!*\
  !*** ./www/js/cd-common/cd-back-button.js ***!
  \********************************************/
/***/ function(module, exports) {

	angular.module('cda').controller('cdBackButton', ["cdUrl", "cdHistory", function (cdUrl, cdHistory) {
	    'use strict';
	    // Handle the back button
	    function onBackKeyDown() {
	        cdUrl.close();
	        cdHistory.close();
	    }
	    // device APIs are available
	    function onDeviceReady() {
	        // Register the event listener
	        document.addEventListener('backbutton', onBackKeyDown, false);
	    }
	    document.addEventListener('deviceready', onDeviceReady, false);
	}]);

/***/ },
/* 35 */
/*!******************************************************!*\
  !*** ./www/js/cd-common/cd-current-color-service.js ***!
  \******************************************************/
/***/ function(module, exports) {

	angular.module('cda').service('cdCurrentColor', function () {
	    'use strict';
	    var currentColor,
	        get = function () {
	            return currentColor;
	        },
	        set = function (color) {
	            currentColor = color;
	        };
	    return {
	        getColor: get,
	        setColor: set
	    };
	});

/***/ },
/* 36 */
/*!*****************************************************!*\
  !*** ./www/js/cd-common/cd-detect-color-service.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdDetectColor', ["clrData", function (clrData) {
	    'use strict';
	    var clsColor;
	    function hexToRGB(hex, index) {
	        var color = parseInt(hex.substring(index, index + 2), 16);
	        return color;
	    }
	    
	    function colorName(R, G, B) {
	        var minDistance = 7777, distance, red, green, blue;
	        for (var clr = 0; clr < clrData.length; clr++) { 
	            red = hexToRGB(clrData[clr][0], 0);
	            green = hexToRGB(clrData[clr][0], 2);
	            blue = hexToRGB(clrData[clr][0], 4);
	            distance = Math.pow((R - red), 2) + Math.pow((G - green), 2) + Math.pow((B - blue), 2);
	            if (distance < minDistance) {
	                minDistance = distance;
	                clsColor = clr;
	            }
	        }
	        return clrData[clsColor][1];
	    }
	    return {
	        name: colorName
	    };
	}]);

/***/ },
/* 37 */
/*!*******************************************!*\
  !*** ./www/js/cd-common/cd-font-color.js ***!
  \*******************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdFontColor', function () {
	    'use strict';
	    function brightnessIsHigh(r, g, b) {
	        return (((r * 299) + (g * 587) + (b * 114)) / 1000) > 200;
	    }
	    function get(r, g, b) {
	        if (brightnessIsHigh(r, g, b)) {
	            return 'rgb(40,40,40)';
	        } else {
	            return 'floralwhite';
	        }
	    }
	    
	    return {
	        get: get
	    };
	});

/***/ },
/* 38 */
/*!*******************************************!*\
  !*** ./www/js/cd-common/cd-rgb-to-hex.js ***!
  \*******************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdRgbToHex', function () {
	    function colorToHex(color) {
	        var colorHex = color.toString(16);
	        if (colorHex.length === 1) {
	            colorHex = "0" + colorHex;
	        }
	        return colorHex;
	    }
	
	    function rgbToHex(r, g, b) {
	        return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
	    }
	    
	    return {
	        rgbToHex: rgbToHex
	    };
	});

/***/ },
/* 39 */
/*!*************************************!*\
  !*** ./www/js/cd-data ^\.\/.*\.js$ ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-data.js": 40
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 39;


/***/ },
/* 40 */
/*!***********************************!*\
  !*** ./www/js/cd-data/cd-data.js ***!
  \***********************************/
/***/ function(module, exports) {

	angular.module('cda').value('clrData', [
	    ["000000", "Black"],
	    ["000080", "Navy Blue"],
	    ["0000C8", "Dark Blue"],
	    ["0000FF", "Blue"],
	    ["000741", "Stratos"],
	    ["001B1C", "Swamp"],
	    ["002387", "Resolution Blue"],
	    ["002900", "Deep Fir"],
	    ["002E20", "Burnham"],
	    ["002FA7", "International Klein Blue"],
	    ["003153", "Prussian Blue"],
	    ["003366", "Midnight Blue"],
	    ["003399", "Smalt"],
	    ["003532", "Deep Teal"],
	    ["003E40", "Cyprus"],
	    ["004620", "Kaitoke Green"],
	    ["0047AB", "Cobalt"],
	    ["004816", "Crusoe"],
	    ["004950", "Sherpa Blue"],
	    ["0056A7", "Endeavour"],
	    ["00581A", "Camarone"],
	    ["0066CC", "Science Blue"],
	    ["0066FF", "Blue Ribbon"],
	    ["00755E", "Tropical Rain Forest"],
	    ["0076A3", "Allports"],
	    ["007BA7", "Deep Cerulean"],
	    ["007EC7", "Lochmara"],
	    ["007FFF", "Azure Radiance"],
	    ["008080", "Teal"],
	    ["0095B6", "Bondi Blue"],
	    ["009DC4", "Pacific Blue"],
	    ["00A693", "Persian Green"],
	    ["00A86B", "Jade"],
	    ["00CC99", "Caribbean Green"],
	    ["00CCCC", "Robin's Egg Blue"],
	    ["00FF00", "Green"],
	    ["00FF7F", "Spring Green"],
	    ["00FFFF", "Cyan / Aqua"],
	    ["010D1A", "Blue Charcoal"],
	    ["011635", "Midnight"],
	    ["011D13", "Holly"],
	    ["012731", "Daintree"],
	    ["01361C", "Cardin Green"],
	    ["01371A", "County Green"],
	    ["013E62", "Astronaut Blue"],
	    ["013F6A", "Regal Blue"],
	    ["014B43", "Aqua Deep"],
	    ["015E85", "Orient"],
	    ["016162", "Blue Stone"],
	    ["016D39", "Fun Green"],
	    ["01796F", "Pine Green"],
	    ["017987", "Blue Lagoon"],
	    ["01826B", "Deep Sea"],
	    ["01A368", "Green Haze"],
	    ["022D15", "English Holly"],
	    ["02402C", "Sherwood Green"],
	    ["02478E", "Congress Blue"],
	    ["024E46", "Evening Sea"],
	    ["026395", "Bahama Blue"],
	    ["02866F", "Observatory"],
	    ["02A4D3", "Cerulean"],
	    ["03163C", "Tangaroa"],
	    ["032B52", "Green Vogue"],
	    ["036A6E", "Mosque"],
	    ["041004", "Midnight Moss"],
	    ["041322", "Black Pearl"],
	    ["042E4C", "Blue Whale"],
	    ["044022", "Zuccini"],
	    ["044259", "Teal Blue"],
	    ["051040", "Deep Cove"],
	    ["051657", "Gulf Blue"],
	    ["055989", "Venice Blue"],
	    ["056F57", "Watercourse"],
	    ["062A78", "Catalina Blue"],
	    ["063537", "Tiber"],
	    ["069B81", "Gossamer"],
	    ["06A189", "Niagara"],
	    ["073A50", "Tarawera"],
	    ["080110", "Jaguar"],
	    ["081910", "Black Bean"],
	    ["082567", "Deep Sapphire"],
	    ["088370", "Elf Green"],
	    ["08E8DE", "Bright Turquoise"],
	    ["092256", "Downriver"],
	    ["09230F", "Palm Green"],
	    ["09255D", "Madison"],
	    ["093624", "Bottle Green"],
	    ["095859", "Deep Sea Green"],
	    ["097F4B", "Salem"],
	    ["0A001C", "Black Russian"],
	    ["0A480D", "Dark Fern"],
	    ["0A6906", "Japanese Laurel"],
	    ["0A6F75", "Atoll"],
	    ["0B0B0B", "Cod Gray"],
	    ["0B0F08", "Marshland"],
	    ["0B1107", "Gordons Green"],
	    ["0B1304", "Black Forest"],
	    ["0B6207", "San Felix"],
	    ["0BDA51", "Malachite"],
	    ["0C0B1D", "Ebony"],
	    ["0C0D0F", "Woodsmoke"],
	    ["0C1911", "Racing Green"],
	    ["0C7A79", "Surfie Green"],
	    ["0C8990", "Blue Chill"],
	    ["0D0332", "Black Rock"],
	    ["0D1117", "Bunker"],
	    ["0D1C19", "Aztec"],
	    ["0D2E1C", "Bush"],
	    ["0E0E18", "Cinder"],
	    ["0E2A30", "Firefly"],
	    ["0F2D9E", "Torea Bay"],
	    ["10121D", "Vulcan"],
	    ["101405", "Green Waterloo"],
	    ["105852", "Eden"],
	    ["110C6C", "Arapawa"],
	    ["120A8F", "Ultramarine"],
	    ["123447", "Elephant"],
	    ["126B40", "Jewel"],
	    ["130000", "Diesel"],
	    ["130A06", "Asphalt"],
	    ["13264D", "Blue Zodiac"],
	    ["134F19", "Parsley"],
	    ["140600", "Nero"],
	    ["1450AA", "Tory Blue"],
	    ["151F4C", "Bunting"],
	    ["1560BD", "Denim"],
	    ["15736B", "Genoa"],
	    ["161928", "Mirage"],
	    ["161D10", "Hunter Green"],
	    ["162A40", "Big Stone"],
	    ["163222", "Celtic"],
	    ["16322C", "Timber Green"],
	    ["163531", "Gable Green"],
	    ["171F04", "Pine Tree"],
	    ["175579", "Chathams Blue"],
	    ["182D09", "Deep Forest Green"],
	    ["18587A", "Blumine"],
	    ["19330E", "Palm Leaf"],
	    ["193751", "Nile Blue"],
	    ["1959A8", "Fun Blue"],
	    ["1A1A68", "Lucky Point"],
	    ["1AB385", "Mountain Meadow"],
	    ["1B0245", "Tolopea"],
	    ["1B1035", "Haiti"],
	    ["1B127B", "Deep Koamaru"],
	    ["1B1404", "Acadia"],
	    ["1B2F11", "Seaweed"],
	    ["1B3162", "Biscay"],
	    ["1B659D", "Matisse"],
	    ["1C1208", "Crowshead"],
	    ["1C1E13", "Rangoon Green"],
	    ["1C39BB", "Persian Blue"],
	    ["1C402E", "Everglade"],
	    ["1C7C7D", "Elm"],
	    ["1D6142", "Green Pea"],
	    ["1E0F04", "Creole"],
	    ["1E1609", "Karaka"],
	    ["1E1708", "El Paso"],
	    ["1E385B", "Cello"],
	    ["1E433C", "Te Papa Green"],
	    ["1E90FF", "Dodger Blue"],
	    ["1E9AB0", "Eastern Blue"],
	    ["1F120F", "Night Rider"],
	    ["1FC2C2", "Java"],
	    ["20208D", "Jacksons Purple"],
	    ["202E54", "Cloud Burst"],
	    ["204852", "Blue Dianne"],
	    ["211A0E", "Eternity"],
	    ["220878", "Deep Blue"],
	    ["228B22", "Forest Green"],
	    ["233418", "Mallard"],
	    ["240A40", "Violet"],
	    ["240C02", "Kilamanjaro"],
	    ["242A1D", "Log Cabin"],
	    ["242E16", "Black Olive"],
	    ["24500F", "Green House"],
	    ["251607", "Graphite"],
	    ["251706", "Cannon Black"],
	    ["251F4F", "Port Gore"],
	    ["25272C", "Shark"],
	    ["25311C", "Green Kelp"],
	    ["2596D1", "Curious Blue"],
	    ["260368", "Paua"],
	    ["26056A", "Paris M"],
	    ["261105", "Wood Bark"],
	    ["261414", "Gondola"],
	    ["262335", "Steel Gray"],
	    ["26283B", "Ebony Clay"],
	    ["273A81", "Bay of Many"],
	    ["27504B", "Plantation"],
	    ["278A5B", "Eucalyptus"],
	    ["281E15", "Oil"],
	    ["283A77", "Astronaut"],
	    ["286ACD", "Mariner"],
	    ["290C5E", "Violent Violet"],
	    ["292130", "Bastille"],
	    ["292319", "Zeus"],
	    ["292937", "Charade"],
	    ["297B9A", "Jelly Bean"],
	    ["29AB87", "Jungle Green"],
	    ["2A0359", "Cherry Pie"],
	    ["2A140E", "Coffee Bean"],
	    ["2A2630", "Baltic Sea"],
	    ["2A380B", "Turtle Green"],
	    ["2A52BE", "Cerulean Blue"],
	    ["2B0202", "Sepia Black"],
	    ["2B194F", "Valhalla"],
	    ["2B3228", "Heavy Metal"],
	    ["2C0E8C", "Blue Gem"],
	    ["2C1632", "Revolver"],
	    ["2C2133", "Bleached Cedar"],
	    ["2C8C84", "Lochinvar"],
	    ["2D2510", "Mikado"],
	    ["2D383A", "Outer Space"],
	    ["2D569B", "St Tropaz"],
	    ["2E0329", "Jacaranda"],
	    ["2E1905", "Jacko Bean"],
	    ["2E3222", "Rangitoto"],
	    ["2E3F62", "Rhino"],
	    ["2E8B57", "Sea Green"],
	    ["2EBFD4", "Scooter"],
	    ["2F270E", "Onion"],
	    ["2F3CB3", "Governor Bay"],
	    ["2F519E", "Sapphire"],
	    ["2F5A57", "Spectra"],
	    ["2F6168", "Casal"],
	    ["300529", "Melanzane"],
	    ["301F1E", "Cocoa Brown"],
	    ["302A0F", "Woodrush"],
	    ["304B6A", "San Juan"],
	    ["30D5C8", "Turquoise"],
	    ["311C17", "Eclipse"],
	    ["314459", "Pickled Bluewood"],
	    ["315BA1", "Azure"],
	    ["31728D", "Calypso"],
	    ["317D82", "Paradiso"],
	    ["32127A", "Persian Indigo"],
	    ["32293A", "Blackcurrant"],
	    ["323232", "Mine Shaft"],
	    ["325D52", "Stromboli"],
	    ["327C14", "Bilbao"],
	    ["327DA0", "Astral"],
	    ["33036B", "Christalle"],
	    ["33292F", "Thunder"],
	    ["33CC99", "Shamrock"],
	    ["341515", "Tamarind"],
	    ["350036", "Mardi Gras"],
	    ["350E42", "Valentino"],
	    ["350E57", "Jagger"],
	    ["353542", "Tuna"],
	    ["354E8C", "Chambray"],
	    ["363050", "Martinique"],
	    ["363534", "Tuatara"],
	    ["363C0D", "Waiouru"],
	    ["36747D", "Ming"],
	    ["368716", "La Palma"],
	    ["370202", "Chocolate"],
	    ["371D09", "Clinker"],
	    ["37290E", "Brown Tumbleweed"],
	    ["373021", "Birch"],
	    ["377475", "Oracle"],
	    ["380474", "Blue Diamond"],
	    ["381A51", "Grape"],
	    ["383533", "Dune"],
	    ["384555", "Oxford Blue"],
	    ["384910", "Clover"],
	    ["394851", "Limed Spruce"],
	    ["396413", "Dell"],
	    ["3A0020", "Toledo"],
	    ["3A2010", "Sambuca"],
	    ["3A2A6A", "Jacarta"],
	    ["3A686C", "William"],
	    ["3A6A47", "Killarney"],
	    ["3AB09E", "Keppel"],
	    ["3B000B", "Temptress"],
	    ["3B0910", "Aubergine"],
	    ["3B1F1F", "Jon"],
	    ["3B2820", "Treehouse"],
	    ["3B7A57", "Amazon"],
	    ["3B91B4", "Boston Blue"],
	    ["3C0878", "Windsor"],
	    ["3C1206", "Rebel"],
	    ["3C1F76", "Meteorite"],
	    ["3C2005", "Dark Ebony"],
	    ["3C3910", "Camouflage"],
	    ["3C4151", "Bright Gray"],
	    ["3C4443", "Cape Cod"],
	    ["3C493A", "Lunar Green"],
	    ["3D0C02", "Bean  "],
	    ["3D2B1F", "Bistre"],
	    ["3D7D52", "Goblin"],
	    ["3E0480", "Kingfisher Daisy"],
	    ["3E1C14", "Cedar"],
	    ["3E2B23", "English Walnut"],
	    ["3E2C1C", "Black Marlin"],
	    ["3E3A44", "Ship Gray"],
	    ["3EABBF", "Pelorous"],
	    ["3F2109", "Bronze"],
	    ["3F2500", "Cola"],
	    ["3F3002", "Madras"],
	    ["3F307F", "Minsk"],
	    ["3F4C3A", "Cabbage Pont"],
	    ["3F583B", "Tom Thumb"],
	    ["3F5D53", "Mineral Green"],
	    ["3FC1AA", "Puerto Rico"],
	    ["3FFF00", "Harlequin"],
	    ["401801", "Brown Pod"],
	    ["40291D", "Cork"],
	    ["403B38", "Masala"],
	    ["403D19", "Thatch Green"],
	    ["405169", "Fiord"],
	    ["40826D", "Viridian"],
	    ["40A860", "Chateau Green"],
	    ["410056", "Ripe Plum"],
	    ["411F10", "Paco"],
	    ["412010", "Deep Oak"],
	    ["413C37", "Merlin"],
	    ["414257", "Gun Powder"],
	    ["414C7D", "East Bay"],
	    ["4169E1", "Royal Blue"],
	    ["41AA78", "Ocean Green"],
	    ["420303", "Burnt Maroon"],
	    ["423921", "Lisbon Brown"],
	    ["427977", "Faded Jade"],
	    ["431560", "Scarlet Gum"],
	    ["433120", "Iroko"],
	    ["433E37", "Armadillo"],
	    ["434C59", "River Bed"],
	    ["436A0D", "Green Leaf"],
	    ["44012D", "Barossa"],
	    ["441D00", "Morocco Brown"],
	    ["444954", "Mako"],
	    ["454936", "Kelp"],
	    ["456CAC", "San Marino"],
	    ["45B1E8", "Picton Blue"],
	    ["460B41", "Loulou"],
	    ["462425", "Crater Brown"],
	    ["465945", "Gray Asparagus"],
	    ["4682B4", "Steel Blue"],
	    ["480404", "Rustic Red"],
	    ["480607", "Bulgarian Rose"],
	    ["480656", "Clairvoyant"],
	    ["481C1C", "Cocoa Bean"],
	    ["483131", "Woody Brown"],
	    ["483C32", "Taupe"],
	    ["49170C", "Van Cleef"],
	    ["492615", "Brown Derby"],
	    ["49371B", "Metallic Bronze"],
	    ["495400", "Verdun Green"],
	    ["496679", "Blue Bayoux"],
	    ["497183", "Bismark"],
	    ["4A2A04", "Bracken"],
	    ["4A3004", "Deep Bronze"],
	    ["4A3C30", "Mondo"],
	    ["4A4244", "Tundora"],
	    ["4A444B", "Gravel"],
	    ["4A4E5A", "Trout"],
	    ["4B0082", "Pigment Indigo"],
	    ["4B5D52", "Nandor"],
	    ["4C3024", "Saddle"],
	    ["4C4F56", "Abbey"],
	    ["4D0135", "Blackberry"],
	    ["4D0A18", "Cab Sav"],
	    ["4D1E01", "Indian Tan"],
	    ["4D282D", "Cowboy"],
	    ["4D282E", "Livid Brown"],
	    ["4D3833", "Rock"],
	    ["4D3D14", "Punga"],
	    ["4D400F", "Bronzetone"],
	    ["4D5328", "Woodland"],
	    ["4E0606", "Mahogany"],
	    ["4E2A5A", "Bossanova"],
	    ["4E3B41", "Matterhorn"],
	    ["4E420C", "Bronze Olive"],
	    ["4E4562", "Mulled Wine"],
	    ["4E6649", "Axolotl"],
	    ["4E7F9E", "Wedgewood"],
	    ["4EABD1", "Shakespeare"],
	    ["4F1C70", "Honey Flower"],
	    ["4F2398", "Daisy Bush"],
	    ["4F69C6", "Indigo"],
	    ["4F7942", "Fern Green"],
	    ["4F9D5D", "Fruit Salad"],
	    ["4FA83D", "Apple"],
	    ["504351", "Mortar"],
	    ["507096", "Kashmir Blue"],
	    ["507672", "Cutty Sark"],
	    ["50C878", "Emerald"],
	    ["514649", "Emperor"],
	    ["516E3D", "Chalet Green"],
	    ["517C66", "Como"],
	    ["51808F", "Smalt Blue"],
	    ["52001F", "Castro"],
	    ["520C17", "Maroon Oak"],
	    ["523C94", "Gigas"],
	    ["533455", "Voodoo"],
	    ["534491", "Victoria"],
	    ["53824B", "Hippie Green"],
	    ["541012", "Heath"],
	    ["544333", "Judge Gray"],
	    ["54534D", "Fuscous Gray"],
	    ["549019", "Vida Loca"],
	    ["55280C", "Cioccolato"],
	    ["555B10", "Saratoga"],
	    ["556D56", "Finlandia"],
	    ["5590D9", "Havelock Blue"],
	    ["56B4BE", "Fountain Blue"],
	    ["578363", "Spring Leaves"],
	    ["583401", "Saddle Brown"],
	    ["585562", "Scarpa Flow"],
	    ["587156", "Cactus"],
	    ["589AAF", "Hippie Blue"],
	    ["591D35", "Wine Berry"],
	    ["592804", "Brown Bramble"],
	    ["593737", "Congo Brown"],
	    ["594433", "Millbrook"],
	    ["5A6E9C", "Waikawa Gray"],
	    ["5A87A0", "Horizon"],
	    ["5B3013", "Jambalaya"],
	    ["5C0120", "Bordeaux"],
	    ["5C0536", "Mulberry Wood"],
	    ["5C2E01", "Carnaby Tan"],
	    ["5C5D75", "Comet"],
	    ["5D1E0F", "Redwood"],
	    ["5D4C51", "Don Juan"],
	    ["5D5C58", "Chicago"],
	    ["5D5E37", "Verdigris"],
	    ["5D7747", "Dingley"],
	    ["5DA19F", "Breaker Bay"],
	    ["5E483E", "Kabul"],
	    ["5E5D3B", "Hemlock"],
	    ["5F3D26", "Irish Coffee"],
	    ["5F5F6E", "Mid Gray"],
	    ["5F6672", "Shuttle Gray"],
	    ["5FA777", "Aqua Forest"],
	    ["5FB3AC", "Tradewind"],
	    ["604913", "Horses Neck"],
	    ["605B73", "Smoky"],
	    ["606E68", "Corduroy"],
	    ["6093D1", "Danube"],
	    ["612718", "Espresso"],
	    ["614051", "Eggplant"],
	    ["615D30", "Costa Del Sol"],
	    ["61845F", "Glade Green"],
	    ["622F30", "Buccaneer"],
	    ["623F2D", "Quincy"],
	    ["624E9A", "Butterfly Bush"],
	    ["625119", "West Coast"],
	    ["626649", "Finch"],
	    ["639A8F", "Patina"],
	    ["63B76C", "Fern"],
	    ["6456B7", "Blue Violet"],
	    ["646077", "Dolphin"],
	    ["646463", "Storm Dust"],
	    ["646A54", "Siam"],
	    ["646E75", "Nevada"],
	    ["6495ED", "Cornflower Blue"],
	    ["64CCDB", "Viking"],
	    ["65000B", "Rosewood"],
	    ["651A14", "Cherrywood"],
	    ["652DC1", "Purple Heart"],
	    ["657220", "Fern Frond"],
	    ["65745D", "Willow Grove"],
	    ["65869F", "Hoki"],
	    ["660045", "Pompadour"],
	    ["660099", "Purple"],
	    ["66023C", "Tyrian Purple"],
	    ["661010", "Dark Tan"],
	    ["66B58F", "Silver Tree"],
	    ["66FF00", "Bright Green"],
	    ["66FF66", "Screamin' Green"],
	    ["67032D", "Black Rose"],
	    ["675FA6", "Scampi"],
	    ["676662", "Ironside Gray"],
	    ["678975", "Viridian Green"],
	    ["67A712", "Christi"],
	    ["683600", "Nutmeg Wood Finish"],
	    ["685558", "Zambezi"],
	    ["685E6E", "Salt Box"],
	    ["692545", "Tawny Port"],
	    ["692D54", "Finn"],
	    ["695F62", "Scorpion"],
	    ["697E9A", "Lynch"],
	    ["6A442E", "Spice"],
	    ["6A5D1B", "Himalaya"],
	    ["6A6051", "Soya Bean"],
	    ["6B2A14", "Hairy Heath"],
	    ["6B3FA0", "Royal Purple"],
	    ["6B4E31", "Shingle Fawn"],
	    ["6B5755", "Dorado"],
	    ["6B8BA2", "Bermuda Gray"],
	    ["6B8E23", "Olive Drab"],
	    ["6C3082", "Eminence"],
	    ["6CDAE7", "Turquoise Blue"],
	    ["6D0101", "Lonestar"],
	    ["6D5E54", "Pine Cone"],
	    ["6D6C6C", "Dove Gray"],
	    ["6D9292", "Juniper"],
	    ["6D92A1", "Gothic"],
	    ["6E0902", "Red Oxide"],
	    ["6E1D14", "Moccaccino"],
	    ["6E4826", "Pickled Bean"],
	    ["6E4B26", "Dallas"],
	    ["6E6D57", "Kokoda"],
	    ["6E7783", "Pale Sky"],
	    ["6F440C", "Cafe Royale"],
	    ["6F6A61", "Flint"],
	    ["6F8E63", "Highland"],
	    ["6F9D02", "Limeade"],
	    ["6FD0C5", "Downy"],
	    ["701C1C", "Persian Plum"],
	    ["704214", "Sepia"],
	    ["704A07", "Antique Bronze"],
	    ["704F50", "Ferra"],
	    ["706555", "Coffee"],
	    ["708090", "Slate Gray"],
	    ["711A00", "Cedar Wood Finish"],
	    ["71291D", "Metallic Copper"],
	    ["714693", "Affair"],
	    ["714AB2", "Studio"],
	    ["715D47", "Tobacco Brown"],
	    ["716338", "Yellow Metal"],
	    ["716B56", "Peat"],
	    ["716E10", "Olivetone"],
	    ["717486", "Storm Gray"],
	    ["718080", "Sirocco"],
	    ["71D9E2", "Aquamarine Blue"],
	    ["72010F", "Venetian Red"],
	    ["724A2F", "Old Copper"],
	    ["726D4E", "Go Ben"],
	    ["727B89", "Raven"],
	    ["731E8F", "Seance"],
	    ["734A12", "Raw Umber"],
	    ["736C9F", "Kimberly"],
	    ["736D58", "Crocodile"],
	    ["737829", "Crete"],
	    ["738678", "Xanadu"],
	    ["74640D", "Spicy Mustard"],
	    ["747D63", "Limed Ash"],
	    ["747D83", "Rolling Stone"],
	    ["748881", "Blue Smoke"],
	    ["749378", "Laurel"],
	    ["74C365", "Mantis"],
	    ["755A57", "Russett"],
	    ["7563A8", "Deluge"],
	    ["76395D", "Cosmic"],
	    ["7666C6", "Blue Marguerite"],
	    ["76BD17", "Lima"],
	    ["76D7EA", "Sky Blue"],
	    ["770F05", "Dark Burgundy"],
	    ["771F1F", "Crown of Thorns"],
	    ["773F1A", "Walnut"],
	    ["776F61", "Pablo"],
	    ["778120", "Pacifika"],
	    ["779E86", "Oxley"],
	    ["77DD77", "Pastel Green"],
	    ["780109", "Japanese Maple"],
	    ["782D19", "Mocha"],
	    ["782F16", "Peanut"],
	    ["78866B", "Camouflage Green"],
	    ["788A25", "Wasabi"],
	    ["788BBA", "Ship Cove"],
	    ["78A39C", "Sea Nymph"],
	    ["795D4C", "Roman Coffee"],
	    ["796878", "Old Lavender"],
	    ["796989", "Rum"],
	    ["796A78", "Fedora"],
	    ["796D62", "Sandstone"],
	    ["79DEEC", "Spray"],
	    ["7A013A", "Siren"],
	    ["7A58C1", "Fuchsia Blue"],
	    ["7A7A7A", "Boulder"],
	    ["7A89B8", "Wild Blue Yonder"],
	    ["7AC488", "De York"],
	    ["7B3801", "Red Beech"],
	    ["7B3F00", "Cinnamon"],
	    ["7B6608", "Yukon Gold"],
	    ["7B7874", "Tapa"],
	    ["7B7C94", "Waterloo "],
	    ["7B8265", "Flax Smoke"],
	    ["7B9F80", "Amulet"],
	    ["7BA05B", "Asparagus"],
	    ["7C1C05", "Kenyan Copper"],
	    ["7C7631", "Pesto"],
	    ["7C778A", "Topaz"],
	    ["7C7B7A", "Concord"],
	    ["7C7B82", "Jumbo"],
	    ["7C881A", "Trendy Green"],
	    ["7CA1A6", "Gumbo"],
	    ["7CB0A1", "Acapulco"],
	    ["7CB7BB", "Neptune"],
	    ["7D2C14", "Pueblo"],
	    ["7DA98D", "Bay Leaf"],
	    ["7DC8F7", "Malibu"],
	    ["7DD8C6", "Bermuda"],
	    ["7E3A15", "Copper Canyon"],
	    ["7F1734", "Claret"],
	    ["7F3A02", "Peru Tan"],
	    ["7F626D", "Falcon"],
	    ["7F7589", "Mobster"],
	    ["7F76D3", "Moody Blue"],
	    ["7FFF00", "Chartreuse"],
	    ["7FFFD4", "Aquamarine"],
	    ["800000", "Maroon"],
	    ["800B47", "Rose Bud Cherry"],
	    ["801818", "Falu Red"],
	    ["80341F", "Red Robin"],
	    ["803790", "Vivid Violet"],
	    ["80461B", "Russet"],
	    ["807E79", "Friar Gray"],
	    ["808000", "Olive"],
	    ["808080", "Gray"],
	    ["80B3AE", "Gulf Stream"],
	    ["80B3C4", "Glacier"],
	    ["80CCEA", "Seagull"],
	    ["81422C", "Nutmeg"],
	    ["816E71", "Spicy Pink"],
	    ["817377", "Empress"],
	    ["819885", "Spanish Green"],
	    ["826F65", "Sand Dune"],
	    ["828685", "Gunsmoke"],
	    ["828F72", "Battleship Gray"],
	    ["831923", "Merlot"],
	    ["837050", "Shadow"],
	    ["83AA5D", "Chelsea Cucumber"],
	    ["83D0C6", "Monte Carlo"],
	    ["843179", "Plum"],
	    ["84A0A0", "Granny Smith"],
	    ["8581D9", "Chetwode Blue"],
	    ["858470", "Bandicoot"],
	    ["859FAF", "Bali Hai"],
	    ["85C4CC", "Half Baked"],
	    ["860111", "Red Devil"],
	    ["863C3C", "Lotus"],
	    ["86483C", "Ironstone"],
	    ["864D1E", "Bull Shot"],
	    ["86560A", "Rusty Nail"],
	    ["868974", "Bitter"],
	    ["86949F", "Regent Gray"],
	    ["871550", "Disco"],
	    ["87756E", "Americano"],
	    ["877C7B", "Hurricane"],
	    ["878D91", "Oslo Gray"],
	    ["87AB39", "Sushi"],
	    ["885342", "Spicy Mix"],
	    ["886221", "Kumera"],
	    ["888387", "Suva Gray"],
	    ["888D65", "Avocado"],
	    ["893456", "Camelot"],
	    ["893843", "Solid Pink"],
	    ["894367", "Cannon Pink"],
	    ["897D6D", "Makara"],
	    ["8A3324", "Burnt Umber"],
	    ["8A73D6", "True V"],
	    ["8A8360", "Clay Creek"],
	    ["8A8389", "Monsoon"],
	    ["8A8F8A", "Stack"],
	    ["8AB9F1", "Jordy Blue"],
	    ["8B00FF", "Electric Violet"],
	    ["8B0723", "Monarch"],
	    ["8B6B0B", "Corn Harvest"],
	    ["8B8470", "Olive Haze"],
	    ["8B847E", "Schooner"],
	    ["8B8680", "Natural Gray"],
	    ["8B9C90", "Mantle"],
	    ["8B9FEE", "Portage"],
	    ["8BA690", "Envy"],
	    ["8BA9A5", "Cascade"],
	    ["8BE6D8", "Riptide"],
	    ["8C055E", "Cardinal Pink"],
	    ["8C472F", "Mule Fawn"],
	    ["8C5738", "Potters Clay"],
	    ["8C6495", "Trendy Pink"],
	    ["8D0226", "Paprika"],
	    ["8D3D38", "Sanguine Brown"],
	    ["8D3F3F", "Tosca"],
	    ["8D7662", "Cement"],
	    ["8D8974", "Granite Green"],
	    ["8D90A1", "Manatee"],
	    ["8DA8CC", "Polo Blue"],
	    ["8E0000", "Red Berry"],
	    ["8E4D1E", "Rope"],
	    ["8E6F70", "Opium"],
	    ["8E775E", "Domino"],
	    ["8E8190", "Mamba"],
	    ["8EABC1", "Nepal"],
	    ["8F021C", "Pohutukawa"],
	    ["8F3E33", "El Salva"],
	    ["8F4B0E", "Korma"],
	    ["8F8176", "Squirrel"],
	    ["8FD6B4", "Vista Blue"],
	    ["900020", "Burgundy"],
	    ["901E1E", "Old Brick"],
	    ["907874", "Hemp"],
	    ["907B71", "Almond Frost"],
	    ["908D39", "Sycamore"],
	    ["92000A", "Sangria"],
	    ["924321", "Cumin"],
	    ["926F5B", "Beaver"],
	    ["928573", "Stonewall"],
	    ["928590", "Venus"],
	    ["9370DB", "Medium Purple"],
	    ["93CCEA", "Cornflower"],
	    ["93DFB8", "Algae Green"],
	    ["944747", "Copper Rust"],
	    ["948771", "Arrowtown"],
	    ["950015", "Scarlett"],
	    ["956387", "Strikemaster"],
	    ["959396", "Mountain Mist"],
	    ["960018", "Carmine"],
	    ["964B00", "Brown"],
	    ["967059", "Leather"],
	    ["9678B6", "Purple Mountain's Majesty"],
	    ["967BB6", "Lavender Purple"],
	    ["96A8A1", "Pewter"],
	    ["96BBAB", "Summer Green"],
	    ["97605D", "Au Chico"],
	    ["9771B5", "Wisteria"],
	    ["97CD2D", "Atlantis"],
	    ["983D61", "Vin Rouge"],
	    ["9874D3", "Lilac Bush"],
	    ["98777B", "Bazaar"],
	    ["98811B", "Hacienda"],
	    ["988D77", "Pale Oyster"],
	    ["98FF98", "Mint Green"],
	    ["990066", "Fresh Eggplant"],
	    ["991199", "Violet Eggplant"],
	    ["991613", "Tamarillo"],
	    ["991B07", "Totem Pole"],
	    ["996666", "Copper Rose"],
	    ["9966CC", "Amethyst"],
	    ["997A8D", "Mountbatten Pink"],
	    ["9999CC", "Blue Bell"],
	    ["9A3820", "Prairie Sand"],
	    ["9A6E61", "Toast"],
	    ["9A9577", "Gurkha"],
	    ["9AB973", "Olivine"],
	    ["9AC2B8", "Shadow Green"],
	    ["9B4703", "Oregon"],
	    ["9B9E8F", "Lemon Grass"],
	    ["9C3336", "Stiletto"],
	    ["9D5616", "Hawaiian Tan"],
	    ["9DACB7", "Gull Gray"],
	    ["9DC209", "Pistachio"],
	    ["9DE093", "Granny Smith Apple"],
	    ["9DE5FF", "Anakiwa"],
	    ["9E5302", "Chelsea Gem"],
	    ["9E5B40", "Sepia Skin"],
	    ["9EA587", "Sage"],
	    ["9EA91F", "Citron"],
	    ["9EB1CD", "Rock Blue"],
	    ["9EDEE0", "Morning Glory"],
	    ["9F381D", "Cognac"],
	    ["9F821C", "Reef Gold"],
	    ["9F9F9C", "Star Dust"],
	    ["9FA0B1", "Santas Gray"],
	    ["9FD7D3", "Sinbad"],
	    ["9FDD8C", "Feijoa"],
	    ["A02712", "Tabasco"],
	    ["A1750D", "Buttered Rum"],
	    ["A1ADB5", "Hit Gray"],
	    ["A1C50A", "Citrus"],
	    ["A1DAD7", "Aqua Island"],
	    ["A1E9DE", "Water Leaf"],
	    ["A2006D", "Flirt"],
	    ["A23B6C", "Rouge"],
	    ["A26645", "Cape Palliser"],
	    ["A2AAB3", "Gray Chateau"],
	    ["A2AEAB", "Edward"],
	    ["A3807B", "Pharlap"],
	    ["A397B4", "Amethyst Smoke"],
	    ["A3E3ED", "Blizzard Blue"],
	    ["A4A49D", "Delta"],
	    ["A4A6D3", "Wistful"],
	    ["A4AF6E", "Green Smoke"],
	    ["A50B5E", "Jazzberry Jam"],
	    ["A59B91", "Zorba"],
	    ["A5CB0C", "Bahia"],
	    ["A62F20", "Roof Terracotta"],
	    ["A65529", "Paarl"],
	    ["A68B5B", "Barley Corn"],
	    ["A69279", "Donkey Brown"],
	    ["A6A29A", "Dawn"],
	    ["A72525", "Mexican Red"],
	    ["A7882C", "Luxor Gold"],
	    ["A85307", "Rich Gold"],
	    ["A86515", "Reno Sand"],
	    ["A86B6B", "Coral Tree"],
	    ["A8989B", "Dusty Gray"],
	    ["A899E6", "Dull Lavender"],
	    ["A8A589", "Tallow"],
	    ["A8AE9C", "Bud"],
	    ["A8AF8E", "Locust"],
	    ["A8BD9F", "Norway"],
	    ["A8E3BD", "Chinook"],
	    ["A9A491", "Gray Olive"],
	    ["A9ACB6", "Aluminium"],
	    ["A9B2C3", "Cadet Blue"],
	    ["A9B497", "Schist"],
	    ["A9BDBF", "Tower Gray"],
	    ["A9BEF2", "Perano"],
	    ["A9C6C2", "Opal"],
	    ["AA375A", "Night Shadz"],
	    ["AA4203", "Fire"],
	    ["AA8B5B", "Muesli"],
	    ["AA8D6F", "Sandal"],
	    ["AAA5A9", "Shady Lady"],
	    ["AAA9CD", "Logan"],
	    ["AAABB7", "Spun Pearl"],
	    ["AAD6E6", "Regent St Blue"],
	    ["AAF0D1", "Magic Mint"],
	    ["AB0563", "Lipstick"],
	    ["AB3472", "Royal Heath"],
	    ["AB917A", "Sandrift"],
	    ["ABA0D9", "Cold Purple"],
	    ["ABA196", "Bronco"],
	    ["AC8A56", "Limed Oak"],
	    ["AC91CE", "East Side"],
	    ["AC9E22", "Lemon Ginger"],
	    ["ACA494", "Napa"],
	    ["ACA586", "Hillary"],
	    ["ACA59F", "Cloudy"],
	    ["ACACAC", "Silver Chalice"],
	    ["ACB78E", "Swamp Green"],
	    ["ACCBB1", "Spring Rain"],
	    ["ACDD4D", "Conifer"],
	    ["ACE1AF", "Celadon"],
	    ["AD781B", "Mandalay"],
	    ["ADBED1", "Casper"],
	    ["ADDFAD", "Moss Green"],
	    ["ADE6C4", "Padua"],
	    ["ADFF2F", "Green Yellow"],
	    ["AE4560", "Hippie Pink"],
	    ["AE6020", "Desert"],
	    ["AE809E", "Bouquet"],
	    ["AF4035", "Medium Carmine"],
	    ["AF4D43", "Apple Blossom"],
	    ["AF593E", "Brown Rust"],
	    ["AF8751", "Driftwood"],
	    ["AF8F2C", "Alpine"],
	    ["AF9F1C", "Lucky"],
	    ["AFA09E", "Martini"],
	    ["AFB1B8", "Bombay"],
	    ["AFBDD9", "Pigeon Post"],
	    ["B04C6A", "Cadillac"],
	    ["B05D54", "Matrix"],
	    ["B05E81", "Tapestry"],
	    ["B06608", "Mai Tai"],
	    ["B09A95", "Del Rio"],
	    ["B0E0E6", "Powder Blue"],
	    ["B0E313", "Inch Worm"],
	    ["B10000", "Bright Red"],
	    ["B14A0B", "Vesuvius"],
	    ["B1610B", "Pumpkin Skin"],
	    ["B16D52", "Santa Fe"],
	    ["B19461", "Teak"],
	    ["B1E2C1", "Fringy Flower"],
	    ["B1F4E7", "Ice Cold"],
	    ["B20931", "Shiraz"],
	    ["B2A1EA", "Biloba Flower"],
	    ["B32D29", "Tall Poppy"],
	    ["B35213", "Fiery Orange"],
	    ["B38007", "Hot Toddy"],
	    ["B3AF95", "Taupe Gray"],
	    ["B3C110", "La Rioja"],
	    ["B43332", "Well Read"],
	    ["B44668", "Blush"],
	    ["B4CFD3", "Jungle Mist"],
	    ["B57281", "Turkish Rose"],
	    ["B57EDC", "Lavender"],
	    ["B5A27F", "Mongoose"],
	    ["B5B35C", "Olive Green"],
	    ["B5D2CE", "Jet Stream"],
	    ["B5ECDF", "Cruise"],
	    ["B6316C", "Hibiscus"],
	    ["B69D98", "Thatch"],
	    ["B6B095", "Heathered Gray"],
	    ["B6BAA4", "Eagle"],
	    ["B6D1EA", "Spindle"],
	    ["B6D3BF", "Gum Leaf"],
	    ["B7410E", "Rust"],
	    ["B78E5C", "Muddy Waters"],
	    ["B7A214", "Sahara"],
	    ["B7A458", "Husk"],
	    ["B7B1B1", "Nobel"],
	    ["B7C3D0", "Heather"],
	    ["B7F0BE", "Madang"],
	    ["B81104", "Milano Red"],
	    ["B87333", "Copper"],
	    ["B8B56A", "Gimblet"],
	    ["B8C1B1", "Green Spring"],
	    ["B8C25D", "Celery"],
	    ["B8E0F9", "Sail"],
	    ["B94E48", "Chestnut"],
	    ["B95140", "Crail"],
	    ["B98D28", "Marigold"],
	    ["B9C46A", "Wild Willow"],
	    ["B9C8AC", "Rainee"],
	    ["BA0101", "Guardsman Red"],
	    ["BA450C", "Rock Spray"],
	    ["BA6F1E", "Bourbon"],
	    ["BA7F03", "Pirate Gold"],
	    ["BAB1A2", "Nomad"],
	    ["BAC7C9", "Submarine"],
	    ["BAEEF9", "Charlotte"],
	    ["BB3385", "Medium Red Violet"],
	    ["BB8983", "Brandy Rose"],
	    ["BBD009", "Rio Grande"],
	    ["BBD7C1", "Surf"],
	    ["BCC9C2", "Powder Ash"],
	    ["BD5E2E", "Tuscany"],
	    ["BD978E", "Quicksand"],
	    ["BDB1A8", "Silk"],
	    ["BDB2A1", "Malta"],
	    ["BDB3C7", "Chatelle"],
	    ["BDBBD7", "Lavender Gray"],
	    ["BDBDC6", "French Gray"],
	    ["BDC8B3", "Clay Ash"],
	    ["BDC9CE", "Loblolly"],
	    ["BDEDFD", "French Pass"],
	    ["BEA6C3", "London Hue"],
	    ["BEB5B7", "Pink Swan"],
	    ["BEDE0D", "Fuego"],
	    ["BF5500", "Rose of Sharon"],
	    ["BFB8B0", "Tide"],
	    ["BFBED8", "Blue Haze"],
	    ["BFC1C2", "Silver Sand"],
	    ["BFC921", "Key Lime Pie"],
	    ["BFDBE2", "Ziggurat"],
	    ["BFFF00", "Lime"],
	    ["C02B18", "Thunderbird"],
	    ["C04737", "Mojo"],
	    ["C08081", "Old Rose"],
	    ["C0C0C0", "Silver"],
	    ["C0D3B9", "Pale Leaf"],
	    ["C0D8B6", "Pixie Green"],
	    ["C1440E", "Tia Maria"],
	    ["C154C1", "Fuchsia Pink"],
	    ["C1A004", "Buddha Gold"],
	    ["C1B7A4", "Bison Hide"],
	    ["C1BAB0", "Tea"],
	    ["C1BECD", "Gray Suit"],
	    ["C1D7B0", "Sprout"],
	    ["C1F07C", "Sulu"],
	    ["C26B03", "Indochine"],
	    ["C2955D", "Twine"],
	    ["C2BDB6", "Cotton Seed"],
	    ["C2CAC4", "Pumice"],
	    ["C2E8E5", "Jagged Ice"],
	    ["C32148", "Maroon Flush"],
	    ["C3B091", "Indian Khaki"],
	    ["C3BFC1", "Pale Slate"],
	    ["C3C3BD", "Gray Nickel"],
	    ["C3CDE6", "Periwinkle Gray"],
	    ["C3D1D1", "Tiara"],
	    ["C3DDF9", "Tropical Blue"],
	    ["C41E3A", "Cardinal"],
	    ["C45655", "Fuzzy Wuzzy Brown"],
	    ["C45719", "Orange Roughy"],
	    ["C4C4BC", "Mist Gray"],
	    ["C4D0B0", "Coriander"],
	    ["C4F4EB", "Mint Tulip"],
	    ["C54B8C", "Mulberry"],
	    ["C59922", "Nugget"],
	    ["C5994B", "Tussock"],
	    ["C5DBCA", "Sea Mist"],
	    ["C5E17A", "Yellow Green"],
	    ["C62D42", "Brick Red"],
	    ["C6726B", "Contessa"],
	    ["C69191", "Oriental Pink"],
	    ["C6A84B", "Roti"],
	    ["C6C3B5", "Ash"],
	    ["C6C8BD", "Kangaroo"],
	    ["C6E610", "Las Palmas"],
	    ["C7031E", "Monza"],
	    ["C71585", "Red Violet"],
	    ["C7BCA2", "Coral Reef"],
	    ["C7C1FF", "Melrose"],
	    ["C7C4BF", "Cloud"],
	    ["C7C9D5", "Ghost"],
	    ["C7CD90", "Pine Glade"],
	    ["C7DDE5", "Botticelli"],
	    ["C88A65", "Antique Brass"],
	    ["C8A2C8", "Lilac"],
	    ["C8A528", "Hokey Pokey"],
	    ["C8AABF", "Lily"],
	    ["C8B568", "Laser"],
	    ["C8E3D7", "Edgewater"],
	    ["C96323", "Piper"],
	    ["C99415", "Pizza"],
	    ["C9A0DC", "Light Wisteria"],
	    ["C9B29B", "Rodeo Dust"],
	    ["C9B35B", "Sundance"],
	    ["C9B93B", "Earls Green"],
	    ["C9C0BB", "Silver Rust"],
	    ["C9D9D2", "Conch"],
	    ["C9FFA2", "Reef"],
	    ["C9FFE5", "Aero Blue"],
	    ["CA3435", "Flush Mahogany"],
	    ["CABB48", "Turmeric"],
	    ["CADCD4", "Paris White"],
	    ["CAE00D", "Bitter Lemon"],
	    ["CAE6DA", "Skeptic"],
	    ["CB8FA9", "Viola"],
	    ["CBCAB6", "Foggy Gray"],
	    ["CBD3B0", "Green Mist"],
	    ["CBDBD6", "Nebula"],
	    ["CC3333", "Persian Red"],
	    ["CC5500", "Burnt Orange"],
	    ["CC7722", "Ochre"],
	    ["CC8899", "Puce"],
	    ["CCCAA8", "Thistle Green"],
	    ["CCCCFF", "Periwinkle"],
	    ["CCFF00", "Electric Lime"],
	    ["CD5700", "Tenn"],
	    ["CD5C5C", "Chestnut Rose"],
	    ["CD8429", "Brandy Punch"],
	    ["CDF4FF", "Onahau"],
	    ["CEB98F", "Sorrell Brown"],
	    ["CEBABA", "Cold Turkey"],
	    ["CEC291", "Yuma"],
	    ["CEC7A7", "Chino"],
	    ["CFA39D", "Eunry"],
	    ["CFB53B", "Old Gold"],
	    ["CFDCCF", "Tasman"],
	    ["CFE5D2", "Surf Crest"],
	    ["CFF9F3", "Humming Bird"],
	    ["CFFAF4", "Scandal"],
	    ["D05F04", "Red Stage"],
	    ["D06DA1", "Hopbush"],
	    ["D07D12", "Meteor"],
	    ["D0BEF8", "Perfume"],
	    ["D0C0E5", "Prelude"],
	    ["D0F0C0", "Tea Green"],
	    ["D18F1B", "Geebung"],
	    ["D1BEA8", "Vanilla"],
	    ["D1C6B4", "Soft Amber"],
	    ["D1D2CA", "Celeste"],
	    ["D1D2DD", "Mischka"],
	    ["D1E231", "Pear"],
	    ["D2691E", "Hot Cinnamon"],
	    ["D27D46", "Raw Sienna"],
	    ["D29EAA", "Careys Pink"],
	    ["D2B48C", "Tan"],
	    ["D2DA97", "Deco"],
	    ["D2F6DE", "Blue Romance"],
	    ["D2F8B0", "Gossip"],
	    ["D3CBBA", "Sisal"],
	    ["D3CDC5", "Swirl"],
	    ["D47494", "Charm"],
	    ["D4B6AF", "Clam Shell"],
	    ["D4BF8D", "Straw"],
	    ["D4C4A8", "Akaroa"],
	    ["D4CD16", "Bird Flower"],
	    ["D4D7D9", "Iron"],
	    ["D4DFE2", "Geyser"],
	    ["D4E2FC", "Hawkes Blue"],
	    ["D54600", "Grenadier"],
	    ["D591A4", "Can Can"],
	    ["D59A6F", "Whiskey"],
	    ["D5D195", "Winter Hazel"],
	    ["D5F6E3", "Granny Apple"],
	    ["D69188", "My Pink"],
	    ["D6C562", "Tacha"],
	    ["D6CEF6", "Moon Raker"],
	    ["D6D6D1", "Quill Gray"],
	    ["D6FFDB", "Snowy Mint"],
	    ["D7837F", "New York Pink"],
	    ["D7C498", "Pavlova"],
	    ["D7D0FF", "Fog"],
	    ["D84437", "Valencia"],
	    ["D87C63", "Japonica"],
	    ["D8BFD8", "Thistle"],
	    ["D8C2D5", "Maverick"],
	    ["D8FCFA", "Foam"],
	    ["D94972", "Cabaret"],
	    ["D99376", "Burning Sand"],
	    ["D9B99B", "Cameo"],
	    ["D9D6CF", "Timberwolf"],
	    ["D9DCC1", "Tana"],
	    ["D9E4F5", "Link Water"],
	    ["D9F7FF", "Mabel"],
	    ["DA3287", "Cerise"],
	    ["DA5B38", "Flame Pea"],
	    ["DA6304", "Bamboo"],
	    ["DA6A41", "Red Damask"],
	    ["DA70D6", "Orchid"],
	    ["DA8A67", "Copperfield"],
	    ["DAA520", "Golden Grass"],
	    ["DAECD6", "Zanah"],
	    ["DAF4F0", "Iceberg"],
	    ["DAFAFF", "Oyster Bay"],
	    ["DB5079", "Cranberry"],
	    ["DB9690", "Petite Orchid"],
	    ["DB995E", "Di Serria"],
	    ["DBDBDB", "Alto"],
	    ["DBFFF8", "Frosted Mint"],
	    ["DC143C", "Crimson"],
	    ["DC4333", "Punch"],
	    ["DCB20C", "Galliano"],
	    ["DCB4BC", "Blossom"],
	    ["DCD747", "Wattle"],
	    ["DCD9D2", "Westar"],
	    ["DCDDCC", "Moon Mist"],
	    ["DCEDB4", "Caper"],
	    ["DCF0EA", "Swans Down"],
	    ["DDD6D5", "Swiss Coffee"],
	    ["DDF9F1", "White Ice"],
	    ["DE3163", "Cerise Red"],
	    ["DE6360", "Roman"],
	    ["DEA681", "Tumbleweed"],
	    ["DEBA13", "Gold Tips"],
	    ["DEC196", "Brandy"],
	    ["DECBC6", "Wafer"],
	    ["DED4A4", "Sapling"],
	    ["DED717", "Barberry"],
	    ["DEE5C0", "Beryl Green"],
	    ["DEF5FF", "Pattens Blue"],
	    ["DF73FF", "Heliotrope"],
	    ["DFBE6F", "Apache"],
	    ["DFCD6F", "Chenin"],
	    ["DFCFDB", "Lola"],
	    ["DFECDA", "Willow Brook"],
	    ["DFFF00", "Chartreuse Yellow"],
	    ["E0B0FF", "Mauve"],
	    ["E0B646", "Anzac"],
	    ["E0B974", "Harvest Gold"],
	    ["E0C095", "Calico"],
	    ["E0FFFF", "Baby Blue"],
	    ["E16865", "Sunglo"],
	    ["E1BC64", "Equator"],
	    ["E1C0C8", "Pink Flare"],
	    ["E1E6D6", "Periglacial Blue"],
	    ["E1EAD4", "Kidnapper"],
	    ["E1F6E8", "Tara"],
	    ["E25465", "Mandy"],
	    ["E2725B", "Terracotta"],
	    ["E28913", "Golden Bell"],
	    ["E292C0", "Shocking"],
	    ["E29418", "Dixie"],
	    ["E29CD2", "Light Orchid"],
	    ["E2D8ED", "Snuff"],
	    ["E2EBED", "Mystic"],
	    ["E2F3EC", "Apple Green"],
	    ["E30B5C", "Razzmatazz"],
	    ["E32636", "Alizarin Crimson"],
	    ["E34234", "Cinnabar"],
	    ["E3BEBE", "Cavern Pink"],
	    ["E3F5E1", "Peppermint"],
	    ["E3F988", "Mindaro"],
	    ["E47698", "Deep Blush"],
	    ["E49B0F", "Gamboge"],
	    ["E4C2D5", "Melanie"],
	    ["E4CFDE", "Twilight"],
	    ["E4D1C0", "Bone"],
	    ["E4D422", "Sunflower"],
	    ["E4D5B7", "Grain Brown"],
	    ["E4D69B", "Zombie"],
	    ["E4F6E7", "Frostee"],
	    ["E4FFD1", "Snow Flurry"],
	    ["E52B50", "Amaranth"],
	    ["E5841B", "Zest"],
	    ["E5CCC9", "Dust Storm"],
	    ["E5D7BD", "Stark White"],
	    ["E5D8AF", "Hampton"],
	    ["E5E0E1", "Bon Jour"],
	    ["E5E5E5", "Mercury"],
	    ["E5F9F6", "Polar"],
	    ["E64E03", "Trinidad"],
	    ["E6BE8A", "Gold Sand"],
	    ["E6BEA5", "Cashmere"],
	    ["E6D7B9", "Double Spanish White"],
	    ["E6E4D4", "Satin Linen"],
	    ["E6F2EA", "Harp"],
	    ["E6F8F3", "Off Green"],
	    ["E6FFE9", "Hint of Green"],
	    ["E6FFFF", "Tranquil"],
	    ["E77200", "Mango Tango"],
	    ["E7730A", "Christine"],
	    ["E79F8C", "Tonys Pink"],
	    ["E79FC4", "Kobi"],
	    ["E7BCB4", "Rose Fog"],
	    ["E7BF05", "Corn"],
	    ["E7CD8C", "Putty"],
	    ["E7ECE6", "Gray Nurse"],
	    ["E7F8FF", "Lily White"],
	    ["E7FEFF", "Bubbles"],
	    ["E89928", "Fire Bush"],
	    ["E8B9B3", "Shilo"],
	    ["E8E0D5", "Pearl Bush"],
	    ["E8EBE0", "Green White"],
	    ["E8F1D4", "Chrome White"],
	    ["E8F2EB", "Gin"],
	    ["E8F5F2", "Aqua Squeeze"],
	    ["E96E00", "Clementine"],
	    ["E97451", "Burnt Sienna"],
	    ["E97C07", "Tahiti Gold"],
	    ["E9CECD", "Oyster Pink"],
	    ["E9D75A", "Confetti"],
	    ["E9E3E3", "Ebb"],
	    ["E9F8ED", "Ottoman"],
	    ["E9FFFD", "Clear Day"],
	    ["EA88A8", "Carissma"],
	    ["EAAE69", "Porsche"],
	    ["EAB33B", "Tulip Tree"],
	    ["EAC674", "Rob Roy"],
	    ["EADAB8", "Raffia"],
	    ["EAE8D4", "White Rock"],
	    ["EAF6EE", "Panache"],
	    ["EAF6FF", "Solitude"],
	    ["EAF9F5", "Aqua Spring"],
	    ["EAFFFE", "Dew"],
	    ["EB9373", "Apricot"],
	    ["EBC2AF", "Zinnwaldite"],
	    ["ECA927", "Fuel Yellow"],
	    ["ECC54E", "Ronchi"],
	    ["ECC7EE", "French Lilac"],
	    ["ECCDB9", "Just Right"],
	    ["ECE090", "Wild Rice"],
	    ["ECEBBD", "Fall Green"],
	    ["ECEBCE", "Aths Special"],
	    ["ECF245", "Starship"],
	    ["ED0A3F", "Red Ribbon"],
	    ["ED7A1C", "Tango"],
	    ["ED9121", "Carrot Orange"],
	    ["ED989E", "Sea Pink"],
	    ["EDB381", "Tacao"],
	    ["EDC9AF", "Desert Sand"],
	    ["EDCDAB", "Pancho"],
	    ["EDDCB1", "Chamois"],
	    ["EDEA99", "Primrose"],
	    ["EDF5DD", "Frost"],
	    ["EDF5F5", "Aqua Haze"],
	    ["EDF6FF", "Zumthor"],
	    ["EDF9F1", "Narvik"],
	    ["EDFC84", "Honeysuckle"],
	    ["EE82EE", "Lavender Magenta"],
	    ["EEC1BE", "Beauty Bush"],
	    ["EED794", "Chalky"],
	    ["EED9C4", "Almond"],
	    ["EEDC82", "Flax"],
	    ["EEDEDA", "Bizarre"],
	    ["EEE3AD", "Double Colonial White"],
	    ["EEEEE8", "Cararra"],
	    ["EEEF78", "Manz"],
	    ["EEF0C8", "Tahuna Sands"],
	    ["EEF0F3", "Athens Gray"],
	    ["EEF3C3", "Tusk"],
	    ["EEF4DE", "Loafer"],
	    ["EEF6F7", "Catskill White"],
	    ["EEFDFF", "Twilight Blue"],
	    ["EEFF9A", "Jonquil"],
	    ["EEFFE2", "Rice Flower"],
	    ["EF863F", "Jaffa"],
	    ["EFEFEF", "Gallery"],
	    ["EFF2F3", "Porcelain"],
	    ["F091A9", "Mauvelous"],
	    ["F0D52D", "Golden Dream"],
	    ["F0DB7D", "Golden Sand"],
	    ["F0DC82", "Buff"],
	    ["F0E2EC", "Prim"],
	    ["F0E68C", "Khaki"],
	    ["F0EEFD", "Selago"],
	    ["F0EEFF", "Titan White"],
	    ["F0F8FF", "Alice Blue"],
	    ["F0FCEA", "Feta"],
	    ["F18200", "Gold Drop"],
	    ["F19BAB", "Wewak"],
	    ["F1E788", "Sahara Sand"],
	    ["F1E9D2", "Parchment"],
	    ["F1E9FF", "Blue Chalk"],
	    ["F1EEC1", "Mint Julep"],
	    ["F1F1F1", "Seashell"],
	    ["F1F7F2", "Saltpan"],
	    ["F1FFAD", "Tidal"],
	    ["F1FFC8", "Chiffon"],
	    ["F2552A", "Flamingo"],
	    ["F28500", "Tangerine"],
	    ["F2C3B2", "Mandys Pink"],
	    ["F2F2F2", "Concrete"],
	    ["F2FAFA", "Black Squeeze"],
	    ["F34723", "Pomegranate"],
	    ["F3AD16", "Buttercup"],
	    ["F3D69D", "New Orleans"],
	    ["F3D9DF", "Vanilla Ice"],
	    ["F3E7BB", "Sidecar"],
	    ["F3E9E5", "Dawn Pink"],
	    ["F3EDCF", "Wheatfield"],
	    ["F3FB62", "Canary"],
	    ["F3FBD4", "Orinoco"],
	    ["F3FFD8", "Carla"],
	    ["F400A1", "Hollywood Cerise"],
	    ["F4A460", "Sandy brown"],
	    ["F4C430", "Saffron"],
	    ["F4D81C", "Ripe Lemon"],
	    ["F4EBD3", "Janna"],
	    ["F4F2EE", "Pampas"],
	    ["F4F4F4", "Wild Sand"],
	    ["F4F8FF", "Zircon"],
	    ["F57584", "Froly"],
	    ["F5C85C", "Cream Can"],
	    ["F5C999", "Manhattan"],
	    ["F5D5A0", "Maize"],
	    ["F5DEB3", "Wheat"],
	    ["F5E7A2", "Sandwisp"],
	    ["F5E7E2", "Pot Pourri"],
	    ["F5E9D3", "Albescent White"],
	    ["F5EDEF", "Soft Peach"],
	    ["F5F3E5", "Ecru White"],
	    ["F5F5DC", "Beige"],
	    ["F5FB3D", "Golden Fizz"],
	    ["F5FFBE", "Australian Mint"],
	    ["F64A8A", "French Rose"],
	    ["F653A6", "Brilliant Rose"],
	    ["F6A4C9", "Illusion"],
	    ["F6F0E6", "Merino"],
	    ["F6F7F7", "Black Haze"],
	    ["F6FFDC", "Spring Sun"],
	    ["F7468A", "Violet Red"],
	    ["F77703", "Chilean Fire"],
	    ["F77FBE", "Persian Pink"],
	    ["F7B668", "Rajah"],
	    ["F7C8DA", "Azalea"],
	    ["F7DBE6", "We Peep"],
	    ["F7F2E1", "Quarter Spanish White"],
	    ["F7F5FA", "Whisper"],
	    ["F7FAF7", "Snow Drift"],
	    ["F8B853", "Casablanca"],
	    ["F8C3DF", "Chantilly"],
	    ["F8D9E9", "Cherub"],
	    ["F8DB9D", "Marzipan"],
	    ["F8DD5C", "Energy Yellow"],
	    ["F8E4BF", "Givry"],
	    ["F8F0E8", "White Linen"],
	    ["F8F4FF", "Magnolia"],
	    ["F8F6F1", "Spring Wood"],
	    ["F8F7DC", "Coconut Cream"],
	    ["F8F7FC", "White Lilac"],
	    ["F8F8F7", "Desert Storm"],
	    ["F8F99C", "Texas"],
	    ["F8FACD", "Corn Field"],
	    ["F8FDD3", "Mimosa"],
	    ["F95A61", "Carnation"],
	    ["F9BF58", "Saffron Mango"],
	    ["F9E0ED", "Carousel Pink"],
	    ["F9E4BC", "Dairy Cream"],
	    ["F9E663", "Portica"],
	    ["F9EAF3", "Amour"],
	    ["F9F8E4", "Rum Swizzle"],
	    ["F9FF8B", "Dolly"],
	    ["F9FFF6", "Sugar Cane"],
	    ["FA7814", "Ecstasy"],
	    ["FA9D5A", "Tan Hide"],
	    ["FAD3A2", "Corvette"],
	    ["FADFAD", "Peach Yellow"],
	    ["FAE600", "Turbo"],
	    ["FAEAB9", "Astra"],
	    ["FAECCC", "Champagne"],
	    ["FAF0E6", "Linen"],
	    ["FAF3F0", "Fantasy"],
	    ["FAF7D6", "Citrine White"],
	    ["FAFAFA", "Alabaster"],
	    ["FAFDE4", "Hint of Yellow"],
	    ["FAFFA4", "Milan"],
	    ["FB607F", "Brink Pink"],
	    ["FB8989", "Geraldine"],
	    ["FBA0E3", "Lavender Rose"],
	    ["FBA129", "Sea Buckthorn"],
	    ["FBAC13", "Sun"],
	    ["FBAED2", "Lavender Pink"],
	    ["FBB2A3", "Rose Bud"],
	    ["FBBEDA", "Cupid"],
	    ["FBCCE7", "Classic Rose"],
	    ["FBCEB1", "Apricot Peach"],
	    ["FBE7B2", "Banana Mania"],
	    ["FBE870", "Marigold Yellow"],
	    ["FBE96C", "Festival"],
	    ["FBEA8C", "Sweet Corn"],
	    ["FBEC5D", "Candy Corn"],
	    ["FBF9F9", "Hint of Red"],
	    ["FBFFBA", "Shalimar"],
	    ["FC0FC0", "Shocking Pink"],
	    ["FC80A5", "Tickle Me Pink"],
	    ["FC9C1D", "Tree Poppy"],
	    ["FCC01E", "Lightning Yellow"],
	    ["FCD667", "Goldenrod"],
	    ["FCD917", "Candlelight"],
	    ["FCDA98", "Cherokee"],
	    ["FCF4D0", "Double Pearl Lusta"],
	    ["FCF4DC", "Pearl Lusta"],
	    ["FCF8F7", "Vista White"],
	    ["FCFBF3", "Bianca"],
	    ["FCFEDA", "Moon Glow"],
	    ["FCFFE7", "China Ivory"],
	    ["FCFFF9", "Ceramic"],
	    ["FD0E35", "Torch Red"],
	    ["FD5B78", "Wild Watermelon"],
	    ["FD7B33", "Crusta"],
	    ["FD7C07", "Sorbus"],
	    ["FD9FA2", "Sweet Pink"],
	    ["FDD5B1", "Light Apricot"],
	    ["FDD7E4", "Pig Pink"],
	    ["FDE1DC", "Cinderella"],
	    ["FDE295", "Golden Glow"],
	    ["FDE910", "Lemon"],
	    ["FDF5E6", "Old Lace"],
	    ["FDF6D3", "Half Colonial White"],
	    ["FDF7AD", "Drover"],
	    ["FDFEB8", "Pale Prim"],
	    ["FDFFD5", "Cumulus"],
	    ["FE28A2", "Persian Rose"],
	    ["FE4C40", "Sunset Orange"],
	    ["FE6F5E", "Bittersweet"],
	    ["FE9D04", "California"],
	    ["FEA904", "Yellow Sea"],
	    ["FEBAAD", "Melon"],
	    ["FED33C", "Bright Sun"],
	    ["FED85D", "Dandelion"],
	    ["FEDB8D", "Salomie"],
	    ["FEE5AC", "Cape Honey"],
	    ["FEEBF3", "Remy"],
	    ["FEEFCE", "Oasis"],
	    ["FEF0EC", "Bridesmaid"],
	    ["FEF2C7", "Beeswax"],
	    ["FEF3D8", "Bleach White"],
	    ["FEF4CC", "Pipi"],
	    ["FEF4DB", "Half Spanish White"],
	    ["FEF4F8", "Wisp Pink"],
	    ["FEF5F1", "Provincial Pink"],
	    ["FEF7DE", "Half Dutch White"],
	    ["FEF8E2", "Solitaire"],
	    ["FEF8FF", "White Pointer"],
	    ["FEF9E3", "Off Yellow"],
	    ["FEFCED", "Orange White"],
	    ["FF0000", "Red"],
	    ["FF007F", "Rose"],
	    ["FF00CC", "Purple Pizzazz"],
	    ["FF00FF", "Magenta / Fuchsia"],
	    ["FF2400", "Scarlet"],
	    ["FF3399", "Wild Strawberry"],
	    ["FF33CC", "Razzle Dazzle Rose"],
	    ["FF355E", "Radical Red"],
	    ["FF3F34", "Red Orange"],
	    ["FF4040", "Coral Red"],
	    ["FF4D00", "Vermilion"],
	    ["FF4F00", "International Orange"],
	    ["FF6037", "Outrageous Orange"],
	    ["FF6600", "Blaze Orange"],
	    ["FF66FF", "Pink Flamingo"],
	    ["FF681F", "Orange"],
	    ["FF69B4", "Hot Pink"],
	    ["FF6B53", "Persimmon"],
	    ["FF6FFF", "Blush Pink"],
	    ["FF7034", "Burning Orange"],
	    ["FF7518", "Pumpkin"],
	    ["FF7D07", "Flamenco"],
	    ["FF7F00", "Flush Orange"],
	    ["FF7F50", "Coral"],
	    ["FF8C69", "Salmon"],
	    ["FF9000", "Pizazz"],
	    ["FF910F", "West Side"],
	    ["FF91A4", "Pink Salmon"],
	    ["FF9933", "Neon Carrot"],
	    ["FF9966", "Atomic Tangerine"],
	    ["FF9980", "Vivid Tangerine"],
	    ["FF9E2C", "Sunshade"],
	    ["FFA000", "Orange Peel"],
	    ["FFA194", "Mona Lisa"],
	    ["FFA500", "Web Orange"],
	    ["FFA6C9", "Carnation Pink"],
	    ["FFAB81", "Hit Pink"],
	    ["FFAE42", "Yellow Orange"],
	    ["FFB0AC", "Cornflower Lilac"],
	    ["FFB1B3", "Sundown"],
	    ["FFB31F", "My Sin"],
	    ["FFB555", "Texas Rose"],
	    ["FFB7D5", "Cotton Candy"],
	    ["FFB97B", "Macaroni and Cheese"],
	    ["FFBA00", "Selective Yellow"],
	    ["FFBD5F", "Koromiko"],
	    ["FFBF00", "Amber"],
	    ["FFC0A8", "Wax Flower"],
	    ["FFC0CB", "Pink"],
	    ["FFC3C0", "Your Pink"],
	    ["FFC901", "Supernova"],
	    ["FFCBA4", "Flesh"],
	    ["FFCC33", "Sunglow"],
	    ["FFCC5C", "Golden Tainoi"],
	    ["FFCC99", "Peach Orange"],
	    ["FFCD8C", "Chardonnay"],
	    ["FFD1DC", "Pastel Pink"],
	    ["FFD2B7", "Romantic"],
	    ["FFD38C", "Grandis"],
	    ["FFD700", "Gold"],
	    ["FFD800", "School bus Yellow"],
	    ["FFD8D9", "Cosmos"],
	    ["FFDB58", "Mustard"],
	    ["FFDCD6", "Peach Schnapps"],
	    ["FFDDAF", "Caramel"],
	    ["FFDDCD", "Tuft Bush"],
	    ["FFDDCF", "Watusi"],
	    ["FFDDF4", "Pink Lace"],
	    ["FFDEAD", "Navajo White"],
	    ["FFDEB3", "Frangipani"],
	    ["FFE1DF", "Pippin"],
	    ["FFE1F2", "Pale Rose"],
	    ["FFE2C5", "Negroni"],
	    ["FFE5A0", "Cream Brulee"],
	    ["FFE5B4", "Peach"],
	    ["FFE6C7", "Tequila"],
	    ["FFE772", "Kournikova"],
	    ["FFEAC8", "Sandy Beach"],
	    ["FFEAD4", "Karry"],
	    ["FFEC13", "Broom"],
	    ["FFEDBC", "Colonial White"],
	    ["FFEED8", "Derby"],
	    ["FFEFA1", "Vis Vis"],
	    ["FFEFC1", "Egg White"],
	    ["FFEFD5", "Papaya Whip"],
	    ["FFEFEC", "Fair Pink"],
	    ["FFF0DB", "Peach Cream"],
	    ["FFF0F5", "Lavender blush"],
	    ["FFF14F", "Gorse"],
	    ["FFF1B5", "Buttermilk"],
	    ["FFF1D8", "Pink Lady"],
	    ["FFF1EE", "Forget Me Not"],
	    ["FFF1F9", "Tutu"],
	    ["FFF39D", "Picasso"],
	    ["FFF3F1", "Chardon"],
	    ["FFF46E", "Paris Daisy"],
	    ["FFF4CE", "Barley White"],
	    ["FFF4DD", "Egg Sour"],
	    ["FFF4E0", "Sazerac"],
	    ["FFF4E8", "Serenade"],
	    ["FFF4F3", "Chablis"],
	    ["FFF5EE", "Seashell Peach"],
	    ["FFF5F3", "Sauvignon"],
	    ["FFF6D4", "Milk Punch"],
	    ["FFF6DF", "Varden"],
	    ["FFF6F5", "Rose White"],
	    ["FFF8D1", "Baja White"],
	    ["FFF9E2", "Gin Fizz"],
	    ["FFF9E6", "Early Dawn"],
	    ["FFFACD", "Lemon Chiffon"],
	    ["FFFAF4", "Bridal Heath"],
	    ["FFFBDC", "Scotch Mist"],
	    ["FFFBF9", "Soapstone"],
	    ["FFFC99", "Witch Haze"],
	    ["FFFCEA", "Buttery White"],
	    ["FFFCEE", "Island Spice"],
	    ["FFFDD0", "Cream"],
	    ["FFFDE6", "Chilean Heath"],
	    ["FFFDE8", "Travertine"],
	    ["FFFDF3", "Orchid White"],
	    ["FFFDF4", "Quarter Pearl Lusta"],
	    ["FFFEE1", "Half and Half"],
	    ["FFFEEC", "Apricot White"],
	    ["FFFEF0", "Rice Cake"],
	    ["FFFEF6", "Black White"],
	    ["FFFEFD", "Romance"],
	    ["FFFF00", "Yellow"],
	    ["FFFF66", "Laser Lemon"],
	    ["FFFF99", "Pale Canary"],
	    ["FFFFB4", "Portafino"],
	    ["FFFFF0", "Ivory"],
	    ["FFFFFF", "White"]
	]);

/***/ },
/* 41 */
/*!*************************************!*\
  !*** ./www/js/cd-head ^\.\/.*\.js$ ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-head-controller.js": 42,
		"./cd-head-directives.js": 43,
		"./directives/cd-browse-buttons-directive.js": 44,
		"./directives/cd-donate-button-directive.js": 45,
		"./directives/cd-history-button-directive.js": 46,
		"./directives/cd-title-directive.js": 47
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 41;


/***/ },
/* 42 */
/*!**********************************************!*\
  !*** ./www/js/cd-head/cd-head-controller.js ***!
  \**********************************************/
/***/ function(module, exports) {

	
	cdHeadCtrl.$inject = ["cdHistory", "cdCurrentColor", "cdImageSource"];function cdHeadCtrl(cdHistory, cdCurrentColor, cdImageSource) {
	    this.historyButton = cdHistory.button;
	    this.color = cdCurrentColor.getColor;
	    this.next = cdImageSource.next;
	    this.prev = cdImageSource.prev;
	    this.getPrevButtonState = cdImageSource.getPrevButtonState;
	    this.getNextButtonState = cdImageSource.getNextButtonState;
	}
	angular.module('cda').controller('cdHeadCtrl', cdHeadCtrl);

/***/ },
/* 43 */
/*!**********************************************!*\
  !*** ./www/js/cd-head/cd-head-directives.js ***!
  \**********************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdHead', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        controller: 'cdHeadCtrl',
	        controllerAs: 'head',
	        templateUrl: 'js/cd-head/templates/cd-head-template.html'
	    };
	});

/***/ },
/* 44 */
/*!******************************************************************!*\
  !*** ./www/js/cd-head/directives/cd-browse-buttons-directive.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdBrowseButtons', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-head/templates/cd-browse-buttons-template.html'
	    };
	});

/***/ },
/* 45 */
/*!*****************************************************************!*\
  !*** ./www/js/cd-head/directives/cd-donate-button-directive.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdDonateButton', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-head/templates/cd-donate-button-template.html'
	    };
	});

/***/ },
/* 46 */
/*!******************************************************************!*\
  !*** ./www/js/cd-head/directives/cd-history-button-directive.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdHistoryButton', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-head/templates/cd-history-button-template.html'
	    };
	});


/***/ },
/* 47 */
/*!*********************************************************!*\
  !*** ./www/js/cd-head/directives/cd-title-directive.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdTitle', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-head/templates/cd-title-template.html'
	    };
	});

/***/ },
/* 48 */
/*!***************************************!*\
  !*** ./www/js/cd-footer ^\.\/.*\.js$ ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-buttons/cd-buttons-directive.js": 49,
		"./cd-buttons/cd-open-image-service.js": 50,
		"./cd-buttons/cd-tts-service.js": 51,
		"./cd-buttons/cd-url-service.js": 52,
		"./cd-buttons/cd-zoom-service.js": 53,
		"./cd-color-name/cd-color-name-directive.js": 54,
		"./cd-footer-controller.js": 55,
		"./cd-footer-directive.js": 56,
		"./cd-url-box/cd-url-box-directive.js": 57
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 48;


/***/ },
/* 49 */
/*!*************************************************************!*\
  !*** ./www/js/cd-footer/cd-buttons/cd-buttons-directive.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdButtons', function () {
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-footer/cd-buttons/templates/cd-buttons-template.html'
	    };
	});

/***/ },
/* 50 */
/*!**************************************************************!*\
  !*** ./www/js/cd-footer/cd-buttons/cd-open-image-service.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdOpenImage', ["$cordovaCamera", "cdImageSource", function ($cordovaCamera, cdImageSource) {
	    'use strict';
	    var DATA_URL = 0,
	        options = {
	            quality: 77,
	            destinationType: DATA_URL,
	            correctOrientation: true
	        };
	    function openImage(source) {
	        options.sourceType = source;
	        $cordovaCamera.getPicture(options).then(function (imageData) {
	            cdImageSource.add("data:image/jpeg;base64," + imageData);
	        }, function (err) {
	            // error
	        });
	    }
	
	    return {
	        openImage: openImage
	    };
	}]);

/***/ },
/* 51 */
/*!*******************************************************!*\
  !*** ./www/js/cd-footer/cd-buttons/cd-tts-service.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdTTS', ["TTS", function (TTS) {
	    'use strict';
	    function speakColor(colorName) {
	        TTS.speak({
	            text: colorName,
	            local: 'en-GB',
	            rate: 0.8
	        }, function () {
	            console.log('tts has spoken');
	        }, function (reason) {
	            console.log(reason);
	        });
	    }
	    
	    return {
	        speakColor: speakColor
	    };
	}]);

/***/ },
/* 52 */
/*!*******************************************************!*\
  !*** ./www/js/cd-footer/cd-buttons/cd-url-service.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdUrl', ["cdImageSource", function (cdImageSource) {
	    'use strict';
	    var urlBoxOpen = false;
	    function checkURL(url) {
	        return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
	    }
	    
	    function urlHandle() {
	        urlBoxOpen = true;
	    }
	    function closeUrl() {
	        urlBoxOpen = false;
	    }
	    function confirmUrl(url) {
	        if (url) {
	            if (checkURL(url) && url !== "") {
	                cdImageSource.add(url);
	            } else {
	                window.alert("Not an image URL!");
	            }
	        }
	        closeUrl();
	    }
	    function getUrlBoxState() {
	        if (urlBoxOpen) {
	            return 'open-url';
	        }
	        return 'close-url';
	    }
	    return {
	        confirm: confirmUrl,
	        getUrlBoxState: getUrlBoxState,
	        openBox: urlHandle,
	        close: closeUrl
	    };
	}]);

/***/ },
/* 53 */
/*!********************************************************!*\
  !*** ./www/js/cd-footer/cd-buttons/cd-zoom-service.js ***!
  \********************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdZoom', function () {
	    'use strict';
	    var zoomOutEnabled = true,
	        zoomInEnabled = true,
	        zoomLevel = 100,
	        zoomOffset = 25;
	    
	    function zoomInHandle() {
	        if (zoomLevel < 250) {
	            zoomLevel += zoomOffset;
	            zoomOutEnabled = true;
	        }
	        if (zoomLevel === 250) {
	            zoomInEnabled = false;
	        }
	    }
	    function zoomOutHandle() {
	        if (zoomLevel > 50) {
	            zoomLevel -= zoomOffset;
	            zoomInEnabled = true;
	        }
	        if (zoomLevel === 50) {
	            zoomOutEnabled = false;
	        }
	    }
	    function zoomInState() {
	        if (zoomInEnabled) {
	            return 'enabled';
	        }
	        return 'disabled';
	    }
	    function zoomOutState() {
	        if (zoomOutEnabled) {
	            return 'enabled';
	        }
	        return 'disabled';
	    }
	    function getZoomLevel() {
	        return zoomLevel + '%';
	    }
	    
	    return {
	        zoomIn: zoomInHandle,
	        zoomOut: zoomOutHandle,
	        zoomInState: zoomInState,
	        zoomOutState: zoomOutState,
	        getZoomLevel: getZoomLevel
	    };
	});

/***/ },
/* 54 */
/*!*******************************************************************!*\
  !*** ./www/js/cd-footer/cd-color-name/cd-color-name-directive.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	'use strict';
	angular.module('cda').directive('cdColorName', function () {
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-footer/cd-color-name/cd-color-name-template.html'
	    };
	});


/***/ },
/* 55 */
/*!**************************************************!*\
  !*** ./www/js/cd-footer/cd-footer-controller.js ***!
  \**************************************************/
/***/ function(module, exports) {

	
	cdFooterCtrl.$inject = ["cdCurrentColor", "cdZoom", "cdUrl", "cdOpenImage", "cdTTS"];function cdFooterCtrl(cdCurrentColor, cdZoom, cdUrl, cdOpenImage, cdTTS) {
	    this.color = cdCurrentColor.getColor;
	    this.zoomIn = cdZoom.zoomIn;
	    this.zoomOut = cdZoom.zoomOut;
	    this.zoomInState = cdZoom.zoomInState;
	    this.zoomOutState = cdZoom.zoomOutState;
	    this.openBox = cdUrl.openBox;
	    this.confirm = cdUrl.confirm;
	    this.urlBoxState = cdUrl.getUrlBoxState;
	    this.openImage = cdOpenImage.openImage;
	    this.speak = cdTTS.speakColor;
	}
	angular.module('cda').controller('cdFooterCtrl', cdFooterCtrl);

/***/ },
/* 56 */
/*!*************************************************!*\
  !*** ./www/js/cd-footer/cd-footer-directive.js ***!
  \*************************************************/
/***/ function(module, exports) {

	
	angular.module('cda').directive('cdFooter', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        controller: 'cdFooterCtrl',
	        controllerAs: 'footer',
	        templateUrl: 'js/cd-footer/cd-footer-template.html'
	    };
	});

/***/ },
/* 57 */
/*!*************************************************************!*\
  !*** ./www/js/cd-footer/cd-url-box/cd-url-box-directive.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdUrlBox', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-footer/cd-url-box/cd-url-box-template.html'
	    };
	});

/***/ },
/* 58 */
/*!****************************************!*\
  !*** ./www/js/cd-history ^\.\/.*\.js$ ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-color-sample-directive.js": 59,
		"./cd-history-controller.js": 60,
		"./cd-history-directive.js": 61,
		"./cd-history-reverse-filter.js": 62,
		"./cd-history-service.js": 63
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 58;


/***/ },
/* 59 */
/*!********************************************************!*\
  !*** ./www/js/cd-history/cd-color-sample-directive.js ***!
  \********************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdColorSample', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        templateUrl: 'js/cd-history/templates/cd-color-sample-template.html',
	        scope: {
	            color: '='
	        }
	    };
	});


/***/ },
/* 60 */
/*!****************************************************!*\
  !*** ./www/js/cd-history/cd-history-controller.js ***!
  \****************************************************/
/***/ function(module, exports) {

	
	cdHistoryCtrl.$inject = ["cdHistory"];function cdHistoryCtrl(cdHistory) {
	    'use strict';
	    this.history = cdHistory.history();
	    this.historyIsOpened = cdHistory.historyIsOpened;
	    this.delOne = cdHistory.remove;
	    this.delAll = cdHistory.removeAll;
	    this.reverse = true;
	}
	angular.module('cda').controller('cdHistoryCtrl', cdHistoryCtrl);

/***/ },
/* 61 */
/*!***************************************************!*\
  !*** ./www/js/cd-history/cd-history-directive.js ***!
  \***************************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdHistoryBox', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        controller:'cdHistoryCtrl',
	        controllerAs: 'history',
	        templateUrl: 'js/cd-history/templates/cd-history-template.html',
	        scope: {
	            color: '='
	        }
	    };
	});

/***/ },
/* 62 */
/*!********************************************************!*\
  !*** ./www/js/cd-history/cd-history-reverse-filter.js ***!
  \********************************************************/
/***/ function(module, exports) {

	angular.module('cda').filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

/***/ },
/* 63 */
/*!*************************************************!*\
  !*** ./www/js/cd-history/cd-history-service.js ***!
  \*************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdHistory', function () {
	    'use strict';
	    var colorHistory = [],
	        open = false,
	        closeHistory = function () {
	            open = false;
	        },
	        historyButton = function () {
	            open = !open;
	        },
	        indexOfColor = function (colorSample) {
	            for (var i = 0; i < colorHistory.length; i++) {
	                if (colorSample.style.color === colorHistory[i].style.color) {
	                    return i;
	                }
	            }
	            return -1;
	        },
	        add = function (colorSample) {
	            var index = indexOfColor(colorSample);
	            if (index >= 0) {
	                var color = colorHistory.splice(index, 1)[0];
	                colorHistory.push(color);
	            } else {
	                colorHistory.push(colorSample);
	            }
	        },
	        remove = function () {
	            colorHistory.pop();
	        },
	        removeAll = function () {
	            var len = colorHistory.length;
	            for (var i = 0; i < len; i++) {
	                remove();
	            }
	        },
	        getColorHistory = function () {
	            return colorHistory;
	        },
	        isOpen = function () {
	            if (open) {
	                return 'open-history'
	            }
	            return 'close-history';
	        };
	    return {
	        button: historyButton,
	        add: add,
	        remove: remove,
	        removeAll: removeAll,
	        history: getColorHistory,
	        close: closeHistory,
	        historyIsOpened: isOpen
	    };
	});

/***/ },
/* 64 */
/*!**************************************!*\
  !*** ./www/js/cd-image ^\.\/.*\.js$ ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cd-image-controller.js": 65,
		"./cd-image-directive.js": 66,
		"./cd-image-source-service.js": 67,
		"./cd-image-touch-service.js": 68
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 64;


/***/ },
/* 65 */
/*!************************************************!*\
  !*** ./www/js/cd-image/cd-image-controller.js ***!
  \************************************************/
/***/ function(module, exports) {

	
	cdImageCtrl.$inject = ["cdTouch", "cdImageSource", "cdZoom"];function cdImageCtrl(cdTouch, cdImageSource, cdZoom) {
	    'use strict';
	    this.touchHandler = cdTouch.handle;
	    this.src = cdImageSource.getSources;
	    this.currentSrc = cdImageSource.getCurrent;
	    this.width = cdZoom.getZoomLevel;
	}
	angular.module('cda').controller('cdImageCtrl', cdImageCtrl);

/***/ },
/* 66 */
/*!***********************************************!*\
  !*** ./www/js/cd-image/cd-image-directive.js ***!
  \***********************************************/
/***/ function(module, exports) {

	angular.module('cda').directive('cdImage', function () {
	    'use strict';
	    return {
	        restrict: 'E',
	        controller: 'cdImageCtrl',
	        controllerAs: 'image',
	        templateUrl: 'js/cd-image/cd-image-template.html'
	    };
	});

/***/ },
/* 67 */
/*!****************************************************!*\
  !*** ./www/js/cd-image/cd-image-source-service.js ***!
  \****************************************************/
/***/ function(module, exports) {

	angular.module('cda').factory('cdImageSource', function () {
	    'use strict';
	    var sources = ['img/portrait.png'],
	        current = 0;
	    function add(src) {
	        if (sources.indexOf(src) < 0) {
	            sources.push(src);
	        }
	        current = sources.indexOf(src);
	    }
	    function getSources() {
	        return sources;
	    }
	    function getCurrent() {
	        return current;
	    }
	    function next() {
	        if (current < sources.length - 1) {
	            current += 1;
	        }
	        if (current === sources.length - 1) {
	        }
	    }
	    function prev() {
	        if (current > 0) {
	            current -= 1;
	        }
	        if (current === 0) {
	        }
	    }
	    function getNextButtonState() {
	        if (current === sources.length -1) {
	            return 'disabled';
	        }
	        return 'enabled';
	    }
	    function getPrevButtonState() {
	        if (current === 0) {
	            return 'disabled';
	        }
	        return 'enabled';
	    }
	    return {
	        add: add,
	        getSources: getSources,
	        getCurrent: getCurrent,
	        next: next,
	        prev: prev,
	        getNextButtonState: getNextButtonState,
	        getPrevButtonState: getPrevButtonState
	    };
	});

/***/ },
/* 68 */
/*!***************************************************!*\
  !*** ./www/js/cd-image/cd-image-touch-service.js ***!
  \***************************************************/
/***/ function(module, exports) {

	
	cdTouch.$inject = ["cdHistory", "cdDetectColor", "cdCurrentColor", "$cordovaStatusbar", "cdRgbToHex", "cdFontColor"];function cdTouch(cdHistory, cdDetectColor, cdCurrentColor, $cordovaStatusbar, cdRgbToHex, cdFontColor) {
	    'use strict';
	    var image = document.getElementById('image'),
	        touchHandler = function (e) {
	            var pColor,
	                imageBounds = image.getBoundingClientRect(),
	                xCord = e.coords.start.x,
	                yCord = e.coords.start.y,
	                canvas = document.createElement('canvas'),
	                ctx = canvas.getContext('2d');
	            canvas.width = image.width;
	            canvas.height = image.height + imageBounds.top; // draw it in the same spot
	            ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);
	
	            pColor = ctx.getImageData(xCord - imageBounds.left, yCord, 1, 1).data;
	            if (pColor[3] !== 0) {
	                var rgb = 'rgb(' + pColor[0] + ', ' + pColor[1] + ', ' + pColor[2] + ')',
	                    color = {
	                        r: pColor[0],
	                        g: pColor[1],
	                        b: pColor[2],
	                        name: cdDetectColor.name(pColor[0], pColor[1], pColor[2]),
	                        style: {
	                            color: rgb,
	                            font: cdFontColor.get(pColor[0], pColor[1], pColor[2])
	                        }
	                    };
	                cdHistory.add(color);
	                cdCurrentColor.setColor(color);
	                
	                $cordovaStatusbar.styleHex(cdRgbToHex.rgbToHex((color.r - 30 < 0) ? 0 : color.r - 30,
	                                                                (color.g - 30 < 0) ? 0 : color.g - 30,
	                                                                (color.b - 30 < 0) ? 0 : color.b - 30));
	            }
	        };
	
	    return {
	        handle: touchHandler
	    };
	}
	angular.module('cda').factory('cdTouch', cdTouch);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map