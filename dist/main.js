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

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst clearContent = () => {\n    const content = document.getElementById('content');\n    if (content) {\n        while (content.firstChild) {\n            content.removeChild(content.firstChild);\n        }\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/clearContent.js?");

/***/ }),

/***/ "./src/createNewProject.js":
/*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nclass Project {\n    constructor(title, description, dueDate, priority, counter) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.counter = counter;\n    }\n\n    createProject() {\n        // creating a form element\n        const projectForm = document.createElement('form');\n        projectForm.classList.add('project-form');\n\n        // creating the input elements for the form\n        const projectNameInput = document.createElement('input');\n        projectNameInput.setAttribute('type', 'text');\n        projectNameInput.setAttribute('placeholder', 'Enter project name');\n        projectNameInput.setAttribute('required', 'true');\n\n        // add description, due date, priority and counter\n\n        // creating the submit button\n        const submitButton = document.createElement('button');\n        submitButton.setAttribute('type', 'submit');\n        submitButton.innerText = 'Create Project';\n\n        projectForm.addEventListener('submit', (event) => {\n            event.preventDefault();\n\n            // retrive the project name from the input field\n            const projectName = projectNameInput.value;\n\n            // create project DOM element and append it to the projects page\n            const projectElement = document.createElement('div');\n            projectElement.innerText = `Project: ${projectName}`;\n\n            const projectsPage = document.getElementById('content');\n            projectsPage.appendChild(projectElement);\n\n            projectForm.reset();\n        });\n\n        projectForm.appendChild(projectNameInput);\n        projectForm.appendChild(submitButton);\n\n        // return the form so it can be used externally\n        return projectForm;\n    }\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/createNewProject.js?");

/***/ }),

/***/ "./src/createWelcomePage.js":
/*!**********************************!*\
  !*** ./src/createWelcomePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsPage */ \"./src/projectsPage.js\");\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n\n\n\n\nconst createWelcomePage = () => {\n    //get DOM element like body or content div\n    const content = document.getElementById('content');\n    const welcomePageBody = document.createElement('div');\n    welcomePageBody.classList.add('welcome-page-body');\n    welcomePageBody.innerText = 'Welcome!';\n    \n\n    const button = document.createElement('button');\n    button.innerText = 'Projects Page';\n    // add event listner to button\n    button.addEventListener('click', () => {\n        \n        console.log('hello');\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_projectsPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }) \n\n    \n\n\n    // appending\n    welcomePageBody.appendChild(button);\n    content.appendChild(welcomePageBody);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWelcomePage);\n\n\n//in the future, we want this welcome page to persist for a few seconds\n//before transitioning to the our list of projects\n//right now, lets just add a button that we can click that will take us to the projects page \n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/createWelcomePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n// the point of entry for the webpack thing \n// revise how exactly this works\n\n\n\n\nconsole.log('8==D~' )\n\n;(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createWelcomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWelcomePage */ \"./src/createWelcomePage.js\");\n\n\nfunction initialLoad() {\n    (0,_createWelcomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/loadPage.js?");

/***/ }),

/***/ "./src/projectsPage.js":
/*!*****************************!*\
  !*** ./src/projectsPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar */ \"./src/toolbar.js\");\n\n\n\nconst createProjectsPage = () => {\n    const content = document.getElementById('content');\n    const projectsPageBody = document.createElement('div');\n    projectsPageBody.classList.add('projects-page-body');\n    projectsPageBody.textContent = 'This is the projects page!';\n\n    const toolBar = (0,_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    projectsPageBody.appendChild(toolBar);\n    content.appendChild(projectsPageBody);\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectsPage);\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/projectsPage.js?");

/***/ }),

/***/ "./src/toolbar.js":
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject */ \"./src/createNewProject.js\");\n\n\n\n\nconst createToolBar = () => {\n    const toolBar = document.createElement('div');\n    toolBar.classList.add('toolbar');\n    \n    const button = document.createElement('button');\n    button.innerHTML = 'Create New Project';\n\n    // keep track of the created form\n    let projectForm;\n\n    button.addEventListener('click', () => {\n        console.log('Button clicked');\n\n        const project = new _createNewProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        projectForm = project.createProject();\n\n        const content = document.getElementById('content');\n        content.appendChild(projectForm);\n\n    });\n    \n    toolBar.appendChild(button);\n\n    const content = document.getElementById('content');\n    content.appendChild(toolBar);\n    \n    return toolBar;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToolBar);\n\n//# sourceURL=webpack://harmony-of-chores-a-soft-list-do-sonata/./src/toolbar.js?");

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