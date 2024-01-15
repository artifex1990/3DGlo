/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./modules/regular.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('13 january 2024 01:01:00');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  // eslint-disable-next-line no-shadow\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n  const serviceBlock = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  const animationScroll = (a) => {\r\n    const element = document.querySelector(a.getAttribute('href'));\r\n    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\r\n  };\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  closeBtn.addEventListener('click', handleMenu);\r\n  serviceBlock.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    animationScroll(event.target.parentElement);\r\n  });\r\n\r\n  menuItems.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      animationScroll(event.target);\r\n      handleMenu();\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  // eslint-disable-next-line no-shadow\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = document.querySelector('.popup-close');\r\n  let opacity = 0;\r\n  const animationOpacity = () => {\r\n    const idAnimation = requestAnimationFrame(animationOpacity);\r\n\r\n    if (modal.style.opacity < 1) {\r\n      modal.style.opacity = opacity;\r\n      opacity += 0.02;\r\n    } else {\r\n      cancelAnimationFrame(idAnimation);\r\n    }\r\n  };\r\n\r\n  buttons.forEach((button) => button.addEventListener('click', () => {\r\n    modal.style.display = 'block';\r\n    if (document.body.clientWidth > 767) {\r\n      opacity = 0;\r\n      modal.style.opacity = 0;\r\n      animationOpacity();\r\n    }\r\n  }));\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = '';\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regular.js":
/*!****************************!*\
  !*** ./modules/regular.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regular = () => {\r\n  const calculateInputs = document.querySelectorAll('input.calc-item[type=text]');\r\n  const textInputs = document.querySelectorAll('form input[type=text]');\r\n  const emailInputs = document.querySelectorAll('form input[type=email]');\r\n  const phoneInputs = document.querySelectorAll('form input[type=tel]');\r\n  const messageTextarea = document.getElementById('form2-message');\r\n\r\n  const commonCondition = (event) => {\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/\\s+/g, ' ');\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/[-]+/g, '-');\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/^[\\s-]+|[\\s-]+$|[\\s]+(?=[\\s-])/g, '');\r\n  };\r\n\r\n  const name = (event) => {\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/[^а-яА-Я-\\s]/gi, '');\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/( |^)[а-яА-Я]/gi, (str) => str.toUpperCase());\r\n    commonCondition(event);\r\n  };\r\n  // eslint-disable-next-line no-param-reassign, no-useless-escape\r\n  const email = (event) => {\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/[^a-zA-Z0-9-@_.!~*]/gi, '');\r\n    commonCondition(event);\r\n  };\r\n  // eslint-disable-next-line no-param-reassign\r\n  const phone = (event) => {\r\n    // eslint-disable-next-line no-param-reassign\r\n    event.target.value = event.target.value.replace(/[^\\d()-]/g, '');\r\n    commonCondition(event);\r\n  };\r\n  // eslint-disable-next-line no-param-reassign\r\n  const numbers = (event) => { event.target.value = event.target.value.replace(/[\\D]/g, ''); };\r\n\r\n  textInputs.forEach((input) => input.addEventListener('blur', name));\r\n  emailInputs.forEach((input) => input.addEventListener('blur', email));\r\n  phoneInputs.forEach((input) => input.addEventListener('blur', phone));\r\n  calculateInputs.forEach((input) => input.addEventListener('blur', numbers));\r\n  messageTextarea.addEventListener('blur', name);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regular);\r\n\n\n//# sourceURL=webpack:///./modules/regular.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelector('.service-header-tab');\n    const tabsContent = document.querySelectorAll('.service-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.classList.contains('service-header-tab')) {\n            tabs.forEach((tab, index) => {\n                if (tab === e.target) {\n                    tab.classList.add('active');\n                } else {\n                    tab.classList.remove('active');\n                }\n            });\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timerModule = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const zeroForwardModify = (time) => (time < 10 ? `0${time}` : time);\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNew = new Date().getTime();\r\n    const dateRemaining = (dateStop - dateNew) / 1000;\r\n    const hours = Math.floor(dateRemaining / 60 / 60);\r\n    const minutes = Math.floor(dateRemaining / 60) % 60;\r\n    const seconds = Math.floor(dateRemaining % 60);\r\n\r\n    return {\r\n      dateRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const timeRemaining = getTimeRemaining();\r\n\r\n    if (timeRemaining.dateRemaining > 0) {\r\n      timerHours.textContent = zeroForwardModify(timeRemaining.hours);\r\n      timerMinutes.textContent = zeroForwardModify(timeRemaining.minutes);\r\n      timerSeconds.textContent = zeroForwardModify(timeRemaining.seconds);\r\n\r\n      setTimeout(updateClock, 1000);\r\n    }\r\n  };\r\n\r\n  updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerModule);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;