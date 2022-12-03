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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactTab\": () => (/* binding */ createContactTab)\n/* harmony export */ });\nfunction createContactTab(parent) {\n  const headline = document.createElement(\"h1\");\n  headline.innerText = \"Contact Us\";\n  parent.appendChild(headline);\n\n  const address = document.createElement(\"p\");\n  address.innerText = \"123 Main Street, Anytown USA\";\n  parent.appendChild(address);\n\n  const phone = document.createElement(\"p\");\n  phone.innerText = \"123-456-7890\";\n  parent.appendChild(phone);\n\n  const email = document.createElement(\"p\");\n  email.innerText = \"contact@ourrestaurant.com\";\n  parent.appendChild(email);\n\n  // Clear the content of the page before adding the Contact tab content\n  parent.innerHTML = \"\";\n  parent.appendChild(headline);\n  parent.appendChild(address);\n  parent.appendChild(phone);\n  parent.appendChild(email);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomepage\": () => (/* binding */ createHomepage)\n/* harmony export */ });\nfunction createHomepage(parent) {\n  const nav = document.createElement(\"nav\");\n\n  const contactTab = document.createElement(\"a\");\n  contactTab.innerText = \"Contact\";\n  contactTab.id = \"contact-tab\";\n  nav.appendChild(contactTab);\n\n  const menuTab = document.createElement(\"a\");\n  menuTab.innerText = \"Menu\";\n  menuTab.id = \"menu-tab\";\n  nav.appendChild(menuTab);\n\n  const headline = document.createElement(\"h1\");\n  headline.innerText = \"Welcome to Our Restaurant\";\n  parent.appendChild(headline);\n\n  const image = document.createElement(\"img\");\n  image.src = \"https://source.unsplash.com/1600x900/?restaurant\";\n  parent.appendChild(image);\n\n  const copy = document.createElement(\"p\");\n  copy.innerText =\n    \"We are a family-owned restaurant specializing in homemade Italian cuisine. We use only the freshest ingredients and our recipes have been passed down for generations. Come visit us and taste the difference for yourself!\";\n  parent.appendChild(copy);\n\n  // Clear the content of the page before adding the homepage content\n  parent.innerHTML = \"\";\n  parent.appendChild(nav);\n  parent.appendChild(headline);\n  parent.appendChild(image);\n  parent.appendChild(copy);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n// Get a reference to the page content\nconst content = document.getElementById(\"content\");\n\n// Generate the homepage on page load\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)(content);\n});\n\n// Switch to the Contact page when clicked\nconst contactTab = document.getElementById(\"contact-tab\");\ncontactTab.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.createContactTab)(content);\n});\n\n// Switch to the Menu page when clicked\nconst menuTab = document.getElementById(\"menu-tab\");\nmenuTab.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuTab)(content);\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuTab\": () => (/* binding */ createMenuTab)\n/* harmony export */ });\nfunction createMenuTab(parent) {\n  const headline = document.createElement(\"h1\");\n  headline.innerText = \"Our Menu\";\n  parent.appendChild(headline);\n\n  const appetizers = document.createElement(\"h2\");\n  appetizers.innerText = \"Appetizers\";\n  parent.appendChild(appetizers);\n\n  const appetizersList = document.createElement(\"ul\");\n  parent.appendChild(appetizersList);\n\n  const appetizersItems = [\"Mozzarella sticks\", \"Bruschetta\", \"Fried calamari\"];\n  appetizersItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.innerText = item;\n    appetizersList.appendChild(li);\n  });\n\n  const entrees = document.createElement(\"h2\");\n  entrees.innerText = \"Entrees\";\n  parent.appendChild(entrees);\n\n  const entreesList = document.createElement(\"ul\");\n  parent.appendChild(entreesList);\n\n  const entreesItems = [\n    \"Spaghetti Bolognese\",\n    \"Chicken Parmesan\",\n    \"Grilled salmon\",\n  ];\n  entreesItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.innerText = item;\n    entreesList.appendChild(li);\n  });\n\n  // Clear the content of the page before adding the Menu tab content\n  parent.innerHTML = \"\";\n  parent.appendChild(headline);\n  parent.appendChild(appetizers);\n  parent.appendChild(appetizersList);\n  parent.appendChild(entrees);\n  parent.appendChild(entreesList);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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