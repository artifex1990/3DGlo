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

/***/ "./modules/hello.js":
/*!**************************!*\
  !*** ./modules/hello.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst helloModule = () => {\r\n  // eslint-disable-next-line max-len\r\n  const capitalizeFirstLetter = (string) => (string ? string[0].toUpperCase() + string.slice(1) : string);\r\n  const getDayPeriod = () => new Intl.DateTimeFormat('ru', { dayPeriod: 'narrow' }).format(new Date());\r\n  const getTodayName = () => new Intl.DateTimeFormat('ru', { weekday: 'long' }).format(new Date());\r\n  const getCurrentTime = () => new Intl.DateTimeFormat('en', { timeStyle: 'medium' }).format(new Date());\r\n  const getStillDayOfNewYear = () => Math.floor((new Date(`1 january ${+new Date().getFullYear() + 1}`) - new Date()) / 1000 / 60 / 60 / 24);\r\n  const declinationOfDays = (days) => {\r\n    const dayCondition = days % 10;\r\n    if (dayCondition === 1) return 'день';\r\n    if (dayCondition > 1 && dayCondition < 5) return 'дня';\r\n\r\n    return 'дней';\r\n  };\r\n\r\n  const printDates = () => {\r\n    const dayPeriod = getDayPeriod();\r\n    const stillDayOfNewYear = getStillDayOfNewYear();\r\n    const greetingMessage = {\r\n      утра: 'Доброе утро',\r\n      дня: 'Добрый день',\r\n      вечера: 'Добрый вечер',\r\n      ночи: 'Доброй ночи',\r\n    };\r\n\r\n    const timeOfDay = document.getElementById('time-of-day');\r\n    const toDay = document.getElementById('today');\r\n    const currentTime = document.getElementById('current-time');\r\n    const stillUntilNewYear = document.getElementById('still-until-new-year');\r\n    timeOfDay.textContent = greetingMessage[dayPeriod];\r\n    toDay.textContent = `Сегодня: ${capitalizeFirstLetter(getTodayName())}`;\r\n    currentTime.textContent = `Текущее время: ${getCurrentTime()}`;\r\n    stillUntilNewYear.textContent = `До нового года осталось ${stillDayOfNewYear} ${declinationOfDays(stillDayOfNewYear)}`;\r\n\r\n    setTimeout(printDates, 1000);\r\n  };\r\n\r\n  printDates();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloModule);\r\n\n\n//# sourceURL=webpack:///./modules/hello.js?");

/***/ }),

/***/ "./task6.js":
/*!******************!*\
  !*** ./task6.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hello */ \"./modules/hello.js\");\n\r\n\r\n(0,_modules_hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./task6.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./task6.js");
/******/ 	
/******/ })()
;