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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = (() => {\n  let content = document.getElementById(\"content\");\n  // div to hold the navbar main text and links\n  let navbar = document.createElement(\"div\");\n  navbar.classList.add(\"navbar\");\n\n  // navbar text for restaurant name\n  let navbarLeftText = document.createElement(\"h1\");\n  navbarLeftText.innerHTML = \"Papa's Pizzeria\";\n  navbarLeftText.classList.add(\"navLeftText\");\n\n  // div to house navbar links on right side\n  let navbarLinks = document.createElement(\"div\");\n  navbarLinks.classList.add(\"navbarLinks\");\n\n  // first link for home page\n  let home = document.createElement(\"p\");\n  home.classList.add(\"navbarLink\");\n  home.id = \"homeTab\";\n  home.innerHTML = \"Home\";\n\n  // second link for menu\n  let menu = document.createElement(\"p\");\n  menu.classList.add(\"navbarLink\");\n  menu.id = \"menuTab\";\n  menu.innerHTML = \"Menu\";\n\n  // third link for contact page\n  let contact = document.createElement(\"p\");\n  contact.classList.add(\"navbarLink\");\n  contact.id = \"contactTab\";\n  contact.innerHTML = \"Contact Us\";\n\n  // append navbar links to navbar link div\n  navbarLinks.append(home, menu, contact);\n  // append main text and links to whole navbar\n  navbar.append(navbarLeftText, navbarLinks);\n\n  // add homepage image, copy, and menu button\n  // hero to house all hero information\n  let hero = document.createElement(\"div\");\n  hero.id = \"heroPage\";\n  hero.classList.add(\"hero\");\n\n  // overlay for image\n  let overlay = document.createElement(\"div\");\n  overlay.classList.add(\"overlay\");\n\n  // header to display info\n  let heroHeader = document.createElement(\"p\");\n  heroHeader.classList.add(\"heroText\", \"heroHeader\");\n  heroHeader.innerHTML = \"Come Down To Papa's Pizzeria!\";\n\n  // text below hero header\n  let heroText = document.createElement(\"p\");\n  heroText.classList.add(\"heroText\");\n  heroText.innerHTML = \"We have great food at an affordable price.\";\n\n  // button to go to menu\n  let heroButton = document.createElement(\"button\");\n  heroButton.classList.add(\"heroText\", \"heroButton\");\n  heroButton.innerHTML = \"Order Now\";\n  // go to menu when clicked\n\n  heroButton.addEventListener(\"click\", function () {\n    hero.classList.add(\"hide\");\n    // add functionality to display menu page\n  });\n\n  hero.append(overlay, heroHeader, heroText, heroButton);\n\n  content.append(navbar, hero);\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n// function\nfunction tabSwitch(pageClicked) {\n  // gather variables for each page\n  let hero = document.getElementById(\"heroPage\");\n  if (pageClicked == \"homeTab\") {\n    hero.style.display = \"flex\";\n    hero.classList.remove(\"hide\");\n  } else if (pageClicked == \"menuTab\") {\n    hero.style.display = \"none\";\n  } else {\n    hero.style.display = \"none\";\n  }\n}\n\ndocument.querySelectorAll(\".navbarLink\").forEach((link) =>\n  link.addEventListener(\"click\", function () {\n    tabSwitch(link.id);\n  })\n);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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