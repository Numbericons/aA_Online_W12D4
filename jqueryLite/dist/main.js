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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(array) {\n        this.array = array;\n    }\n    \n    html(string) {\n        if (string) {\n            this.array.forEach ( (node) => {\n                node.innerHTML = string;\n            })\n        } else {\n            return this.array[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.array.forEach ( (node) => {\n            node.innerHTML = \"\";\n        })\n    }\n\n    append(arg) {\n        switch (typeof arg) {\n        case \"string\":\n            this.array.forEach ( (node) => {\n                node.innerHTML += string;\n            })\n        case \"DOMNodeCollection\":\n            arg.array.forEach ( (argNode) => {\n                this.array.forEach( (thisNode) => {\n                    thisNode.appendChild(argNode);\n                    // thisNode.html += collectionNode.html;\n                })\n            })\n        default:\n            this.array.forEach( (thisNode) => {\n                thisNode.appendChild(arg);\n                    // thisNode.html += collectionNode.html;\n            })\n        }\n\n        // domnode.array to domnode.array\n        // \n    }\n\n    addClass (klass) {\n        this.array.forEach( (thisNode) => {\n            thisNode.classList.add(`${klass}`);   //could pass in klass just as a string\n            // d.className += \" otherclass\";\n        })\n    }\n\n    removeClass(klass) {\n        this.array.forEach( (thisNode) => {\n            thisNode.classList.remove(`${klass}`);\n                // thisNode.html += collectionNode.html;\n        })\n    }\n\n    attr(attribute,value = null) {\n        if (value) {\n            this.array.forEach( (node) => {\n                node.setAttribute(attribute, value);\n            })\n            return this.array;\n        } else {\n            return this.array[0].getAttribute(attribute);\n        }\n    }\n\n    children() {\n        let childrenArr = [];\n        this.array.forEach( (thisNode) => {\n            // const thisNodeChildren = thisNode.children;\n            childrenArr = childrenArr.concat(Array.from(thisNode.children)); //seperate out thisNode.children\n        })\n        return new DOMNodeCollection(childrenArr);\n    }\n\n    parent() {\n        let parentArr = [];\n        this.array.forEach( (thisNode) => {\n            // const thisNodeChildren = thisNode.children;\n            const thisNodeParent = thisNode.parentNode;\n            if (!parentArr.includes(thisNodeParent)) {\n                parentArr.push(thisNodeParent); //parentElement ? to exclude non-elements\n                // parentArr = parentArr.concat([thisNodeParent]); //parentElement ? to exclude non-elements\n            // } else {\n            }\n        })\n        return new DOMNodeCollection(parentArr);\n    }\n\n    find(selector) {\n        let descendantsArr = [];\n        this.array.forEach( (thisNode) => {\n            let descendants = thisNode.querySelectorAll(selector);\n            descendantsArr = descendantsArr.concat(Array.from(descendants));\n        })\n        return new DOMNodeCollection(descendantsArr);\n    }\n\n    remove() {\n        this.array.forEach( (thisNode) => {\n            thisNode.remove();\n        })\n    }\n\n    on(event, callback) {\n        this.array.forEach( (thisNode) => {\n            thisNode.addEventListener(event, callback);\n            thisNode.callback = callback;\n        })\n    }\n\n    off(event) {\n        this.array.forEach( (thisNode) => {\n            thisNode.removeEventListener(event, thisNode.callback);\n        })\n        // target.removeEventListener(type, listener, option1, option2,);\n        // target.removeEventListener(type, listener[, useCapture]);\n\n        // document.addEventListener('click', myfunction, false);\n    }\n}\n\n// empty() will remove all the contents of the selection.\n// remove() will remove the selection and its contents.\n// Consider:\n\n/* <div>\n    <p><strong>foo</strong></p>\n</div>\n\n$('p').empty();  // --> \"<div><p></p></div>\" */\n\n// whereas,\n// $('p').remove(); // --> \"<div></div>\"\n\n// var c = document.body.children;\n// var c = document.body.childNodes;\n// document.getElementsByTagName(\"H1\")[0].setAttribute(\"class\", \"democlass\");\n\n//.setAttribute(\"class\", \"democlass\");\n\n// var h1 = document.getElementsByTagName(\"H1\")[0];   // Get the first <h1> element in the document\n// var att = document.createAttribute(\"class\");       // Create a \"class\" attribute\n// att.value = \"democlass\";                           // Set the value of the class attribute\n// h1.setAttributeNode(att);                          // Add the class attribute to <h1>\n\n\n// var node = document.createElement(\"LI\");                 // Create a <li> node\n// var textnode = document.createTextNode(\"Water\");         // Create a text node\n// node.appendChild(textnode);                              // Append the text to <li>\n// document.getElementById(\"myList\").appendChild(node);     // Append <li> to <ul> with id=\"myList\"\n\n\nmodule.exports = DOMNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//require files\nconst DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nconst functionQueue = [];\nlet ready = false;\n\nwindow.$l = (arg) => {\n  switch (typeof arg) {\n    case \"function\":\n        return enqueueFunctionsReady(arg);\n    case \"string\":\n        const nodeList = document.querySelectorAll(arg);\n        const nodeArr = Array.from(nodeList);\n        return new DomNodeCollection(nodeArr);\n    case \"object\":\n      if (arg instanceof HTMLElement) {\n        return new DomNodeCollection([arg]);\n      }\n  }\n};\n\nenqueueFunctionsReady = (func) => {\n  if (!ready) {\n    functionQueue.push(func);\n  } else {\n    func();\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  ready = true;\n  functionQueue.forEach(func => func());\n});\n\n\nwindow.$l( () => {console.log($l('div'))} );\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });