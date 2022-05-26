/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\"),\n    Character = _require.Character;\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  // console.log('DOM fully loaded and parsed');\n  // following code will setup a canvas with blue background\n  var canvas = document.getElementById(\"canvasEl\");\n  canvas.width = 1024;\n  canvas.height = 526;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var player = new Character(200, 20); // player.draw(ctx);\n  // console.log(player);\n\n  var enemy = new Character(800, 20); // enemy.draw(ctx);\n  // console.log(enemy);\n\n  player.animate(ctx);\n  enemy.animate(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBc0JBLG1CQUFPLENBQUMsdURBQUQsQ0FBN0I7QUFBQSxJQUFRQyxTQUFSLFlBQVFBLFNBQVI7O0FBR0FDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFVBQUNDLEtBQUQsRUFBVztFQUNuRDtFQUVBO0VBQ0EsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtFQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZSxJQUFmO0VBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQjtFQUVBLElBQU1DLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxVQUFQLENBQWtCLElBQWxCLENBQVo7RUFDQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLFdBQWhCO0VBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJSLE1BQU0sQ0FBQ0csS0FBMUIsRUFBaUNILE1BQU0sQ0FBQ0ksTUFBeEM7RUFFQSxJQUFJSyxNQUFNLEdBQUcsSUFBSWIsU0FBSixDQUFjLEdBQWQsRUFBbUIsRUFBbkIsQ0FBYixDQVptRCxDQWFuRDtFQUNBOztFQUVBLElBQUljLEtBQUssR0FBRyxJQUFJZCxTQUFKLENBQWMsR0FBZCxFQUFtQixFQUFuQixDQUFaLENBaEJtRCxDQWlCbkQ7RUFDQTs7RUFFQWEsTUFBTSxDQUFDRSxPQUFQLENBQWVOLEdBQWY7RUFDQUssS0FBSyxDQUFDQyxPQUFOLENBQWNOLEdBQWQ7QUFFSCxDQXZCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dheV9vZl90aGVfYmxhZGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENoYXJhY3RlciB9ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIik7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XG5cbiAgICAvLyBmb2xsb3dpbmcgY29kZSB3aWxsIHNldHVwIGEgY2FudmFzIHdpdGggYmx1ZSBiYWNrZ3JvdW5kXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNFbFwiKTtcbiAgICBjYW52YXMud2lkdGggPSAxMDI0O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MjY7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgbGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoMjAwLCAyMClcbiAgICAvLyBwbGF5ZXIuZHJhdyhjdHgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcik7XG5cbiAgICBsZXQgZW5lbXkgPSBuZXcgQ2hhcmFjdGVyKDgwMCwgMjApXG4gICAgLy8gZW5lbXkuZHJhdyhjdHgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVuZW15KTtcblxuICAgIHBsYXllci5hbmltYXRlKGN0eClcbiAgICBlbmVteS5hbmltYXRlKGN0eClcblxufSk7XG5cbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2hhcmFjdGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiZW5lbXkiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": function() { return /* binding */ Character; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Character = /*#__PURE__*/function () {\n  function Character(posX, posY) {\n    var velX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    var velY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;\n\n    _classCallCheck(this, Character);\n\n    this.posX = posX;\n    this.posY = posY;\n    this.velX = velX;\n    this.velY = velY;\n  }\n\n  _createClass(Character, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = \"lightblue\";\n      ctx.fillRect(0, 0, 1024, 526);\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.posX, this.posY, 50, 150);\n    }\n  }, {\n    key: \"update\",\n    value: function update(ctx) {\n      this.draw(ctx);\n      this.posX += this.velX;\n      this.posY += this.velY;\n    }\n  }, {\n    key: \"animate\",\n    value: function animate(ctx) {\n      var _this = this;\n\n      setTimeout(function () {\n        requestAnimationFrame(_this.animate.bind(_this, ctx));\n      }, 16.66);\n      this.update(ctx); // console.log(\"animate isx being called\");\n    }\n  }]);\n\n  return Character;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQWI7RUFDSSxtQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBNkM7SUFBQSxJQUFyQkMsSUFBcUIsdUVBQWQsQ0FBYztJQUFBLElBQVhDLElBQVcsdUVBQUosRUFBSTs7SUFBQTs7SUFDekMsS0FBS0gsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0VBQ0g7O0VBTkw7SUFBQTtJQUFBLE9BUUksY0FBS0MsR0FBTCxFQUFVO01BQ05BLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixXQUFoQjtNQUNBRCxHQUFHLENBQUNFLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCO01BRUFGLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtNQUNBRCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFLTixJQUFsQixFQUF3QixLQUFLQyxJQUE3QixFQUFtQyxFQUFuQyxFQUF1QyxHQUF2QztJQUNIO0VBZEw7SUFBQTtJQUFBLE9BZ0JJLGdCQUFPRyxHQUFQLEVBQVk7TUFDUixLQUFLRyxJQUFMLENBQVVILEdBQVY7TUFDQSxLQUFLSixJQUFMLElBQWEsS0FBS0UsSUFBbEI7TUFDQSxLQUFLRCxJQUFMLElBQWEsS0FBS0UsSUFBbEI7SUFDSDtFQXBCTDtJQUFBO0lBQUEsT0FzQkksaUJBQVFDLEdBQVIsRUFBYTtNQUFBOztNQUNUSSxVQUFVLENBQUMsWUFBTTtRQUNiQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixLQUFsQixFQUF3QlAsR0FBeEIsQ0FBRCxDQUFyQjtNQUNILENBRlMsRUFFUCxLQUZPLENBQVY7TUFHQSxLQUFLUSxNQUFMLENBQVlSLEdBQVosRUFKUyxDQUtUO0lBQ0g7RUE1Qkw7O0VBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dheV9vZl90aGVfYmxhZGUvLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanM/MTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCB2ZWxYID0gMCwgdmVsWSA9IDI1KSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1hcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWVxuICAgICAgICB0aGlzLnZlbFggPSB2ZWxYXG4gICAgICAgIHRoaXMudmVsWSA9IHZlbFlcbiAgICB9IFxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxMDI0LCA1MjYpO1xuICAgIFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1gsIHRoaXMucG9zWSwgNTAsIDE1MClcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYXG4gICAgICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFlcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCBjdHgpKTtcbiAgICAgICAgfSwgMTYuNjYpO1xuICAgICAgICB0aGlzLnVwZGF0ZShjdHgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW1hdGUgaXN4IGJlaW5nIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICBcbn0iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhdyIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwiYmluZCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXlfb2ZfdGhlX2JsYWRlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;