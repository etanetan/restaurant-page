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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\n\n(0,_load_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nconst loadPage = (() => {\n  let content = document.getElementById(\"content\");\n  content.style.cssText += \"font-family: Varela Round, sans-serif;\";\n  // div to hold the navbar main text and links\n  let navbar = document.createElement(\"div\");\n  navbar.style.cssText +=\n    \"display: flex; align-items: center; justify-content: space-between; padding-left: 10vw; padding-right: 10vw; background-color: white;\";\n  // navbar text for restaurant name\n  let navbarText = document.createElement(\"h1\");\n  navbarText.innerHTML = \"Papa's Pizzeria\";\n  navbarText.style.cssText += \"color: red;\";\n  // div to house navbar links on right side\n  let navbarLinks = document.createElement(\"div\");\n  navbarLinks.style.cssText +=\n    \"display: flex; align-items: center; justify-content: space-between; gap: 3rem; color: black;\";\n  // first link for home page\n  let home = document.createElement(\"p\");\n  home.innerHTML = \"Home\";\n  // second link for menu\n  let menu = document.createElement(\"p\");\n  menu.innerHTML = \"Menu\";\n  // third link for contact page\n  let contact = document.createElement(\"p\");\n  contact.innerHTML = \"Contact Us\";\n\n  // append navbar links to navbar link div\n  navbarLinks.append(home, menu, contact);\n  // append main text and links to whole navbar\n  navbar.append(navbarText, navbarLinks);\n\n  // add homepage image, copy, and meny button\n  // hero to house all hero information\n  let hero = document.createElement(\"div\");\n\n  hero.style.cssText +=\n    \"display: flex; flex-direction: column; justify-content: center; align-items: center; padding-top: 30vh; background-image: url('../images/pizzaImage.jpg'); position: relative;\";\n\n  // overlay for image\n  let overlay = document.createElement(\"div\");\n  overlay.style.cssText +=\n    \"position: absolute; background-color: rgba(226, 226, 226, 0.5); top: 0; left: 0; width: 100%; height: 100%;\";\n  // header to display info\n  let heroHeader = document.createElement(\"h1\");\n  heroHeader.style.cssText +=\n    \"position: relative; z-index: 1; font-size: 4rem; color: black;\";\n  heroHeader.innerHTML = \"Come Down To Papa's Pizzeria!\";\n  // text below hero header\n  let heroText = document.createElement(\"p\");\n  heroText.style.cssText +=\n    \"position: relative; z-index: 1; font-size: 2rem; color: red;\";\n  heroText.innerHTML = \"We have great food at an affordable price.\";\n  // button to lead to menu page\n  let heroButton = document.createElement(\"button\");\n  heroButton.style.cssText +=\n    \"position: relative; z-index: 1;width: 5rem; font-size: 1rem; white-space: nowrap; color: white; background-color: red; border: none; border-radius: 1rem; padding-left: 1rem; padding-right: 1rem;font-family: Varela Round, sans-serif;\";\n  heroButton.innerHTML = \"Order Now\";\n\n  hero.append(overlay, heroHeader, heroText, heroButton);\n\n  content.append(navbar, hero);\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;