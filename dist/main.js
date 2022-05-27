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

eval("var _require = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\"),\n    Character = _require.Character;\n\nwindow.Character = Character;\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  // console.log('DOM fully loaded and parsed');\n  // following code will setup a canvas with blue background\n  var canvas = document.getElementById(\"canvasEl\");\n  canvas.width = 1024;\n  canvas.height = 526;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var player = new Character(200, 20);\n  window.player = player; // player.draw(ctx);\n  // console.log(player);\n\n  var enemy = new Character(800, 20); // enemy.draw(ctx);\n  // console.log(enemy);\n  // player.animate(ctx)\n  // enemy.animate(ctx)\n\n  player.draw(ctx);\n  enemy.draw(ctx);\n\n  var animation = function animation() {\n    ctx.fillStyle = \"lightblue\";\n    ctx.fillRect(0, 0, 1024, 526);\n    player.update(ctx);\n    enemy.update(ctx); // player.draw(ctx);\n    // enemy.draw(ctx);\n\n    setTimeout(animation, 16.66);\n  };\n\n  animation();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBc0JBLG1CQUFPLENBQUMsdURBQUQsQ0FBN0I7QUFBQSxJQUFRQyxTQUFSLFlBQVFBLFNBQVI7O0FBRUFDLE1BQU0sQ0FBQ0QsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQ0MsS0FBRCxFQUFXO0VBQ25EO0VBRUE7RUFDQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0VBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQWY7RUFDQUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0VBRUEsSUFBTUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsV0FBaEI7RUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQlIsTUFBTSxDQUFDRyxLQUExQixFQUFpQ0gsTUFBTSxDQUFDSSxNQUF4QztFQUVBLElBQUlLLE1BQU0sR0FBRyxJQUFJYixTQUFKLENBQWMsR0FBZCxFQUFtQixFQUFuQixDQUFiO0VBQ0FDLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQkEsTUFBaEIsQ0FibUQsQ0FjbkQ7RUFDQTs7RUFFQSxJQUFJQyxLQUFLLEdBQUcsSUFBSWQsU0FBSixDQUFjLEdBQWQsRUFBbUIsRUFBbkIsQ0FBWixDQWpCbUQsQ0FrQm5EO0VBQ0E7RUFFQTtFQUNBOztFQUNBYSxNQUFNLENBQUNFLElBQVAsQ0FBWU4sR0FBWjtFQUNBSyxLQUFLLENBQUNDLElBQU4sQ0FBV04sR0FBWDs7RUFHQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0lBQ3BCUCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsV0FBaEI7SUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixJQUFuQixFQUF5QixHQUF6QjtJQUNBQyxNQUFNLENBQUNJLE1BQVAsQ0FBY1IsR0FBZDtJQUNBSyxLQUFLLENBQUNHLE1BQU4sQ0FBYVIsR0FBYixFQUpvQixDQUtwQjtJQUNBOztJQUNBUyxVQUFVLENBQUNGLFNBQUQsRUFBWSxLQUFaLENBQVY7RUFDSCxDQVJEOztFQVNBQSxTQUFTO0FBRVosQ0F0Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXlfb2ZfdGhlX2JsYWRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDaGFyYWN0ZXIgfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCIpO1xuXG53aW5kb3cuQ2hhcmFjdGVyID0gQ2hhcmFjdGVyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWQnKTtcblxuICAgIC8vIGZvbGxvd2luZyBjb2RlIHdpbGwgc2V0dXAgYSBjYW52YXMgd2l0aCBibHVlIGJhY2tncm91bmRcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc0VsXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMjQ7XG4gICAgY2FudmFzLmhlaWdodCA9IDUyNjtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRibHVlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBsZXQgcGxheWVyID0gbmV3IENoYXJhY3RlcigyMDAsIDIwKVxuICAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgLy8gcGxheWVyLmRyYXcoY3R4KTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuXG4gICAgbGV0IGVuZW15ID0gbmV3IENoYXJhY3Rlcig4MDAsIDIwKVxuICAgIC8vIGVuZW15LmRyYXcoY3R4KTtcbiAgICAvLyBjb25zb2xlLmxvZyhlbmVteSk7XG5cbiAgICAvLyBwbGF5ZXIuYW5pbWF0ZShjdHgpXG4gICAgLy8gZW5lbXkuYW5pbWF0ZShjdHgpXG4gICAgcGxheWVyLmRyYXcoY3R4KVxuICAgIGVuZW15LmRyYXcoY3R4KVxuXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTAyNCwgNTI2KTtcbiAgICAgICAgcGxheWVyLnVwZGF0ZShjdHgpO1xuICAgICAgICBlbmVteS51cGRhdGUoY3R4KTtcbiAgICAgICAgLy8gcGxheWVyLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gZW5lbXkuZHJhdyhjdHgpO1xuICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGlvbiwgMTYuNjYpO1xuICAgIH1cbiAgICBhbmltYXRpb24oKTtcbiAgICBcbn0pO1xuXG4iXSwibmFtZXMiOlsicmVxdWlyZSIsIkNoYXJhY3RlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBsYXllciIsImVuZW15IiwiZHJhdyIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": function() { return /* binding */ Character; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Character = /*#__PURE__*/function () {\n  function Character(posX, posY) {\n    var velX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    var velY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;\n\n    _classCallCheck(this, Character);\n\n    this.posX = posX;\n    this.posY = posY;\n    this.velX = velX;\n    this.velY = velY;\n  }\n\n  _createClass(Character, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      // ctx.fillStyle = \"lightblue\";\n      // ctx.fillRect(0, 0, 1024, 526);\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.posX, this.posY, 50, 150);\n    }\n  }, {\n    key: \"update\",\n    value: function update(ctx) {\n      this.draw(ctx);\n      this.posX += this.velX;\n      this.posY += this.velY;\n    } // animate(ctx) {\n    //     setTimeout(() => {\n    //         requestAnimationFrame(this.animate.bind(this, ctx));\n    //     }, 16.66);\n    //     this.update(ctx);\n    //     // console.log(\"animate isx being called\");\n    // }\n\n  }]);\n\n  return Character;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQWI7RUFDSSxtQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBNkM7SUFBQSxJQUFyQkMsSUFBcUIsdUVBQWQsQ0FBYztJQUFBLElBQVhDLElBQVcsdUVBQUosRUFBSTs7SUFBQTs7SUFDekMsS0FBS0gsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0VBQ0g7O0VBTkw7SUFBQTtJQUFBLE9BUUksY0FBS0MsR0FBTCxFQUFVO01BQ047TUFDQTtNQUVBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7TUFDQUQsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBS04sSUFBbEIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUMsRUFBbkMsRUFBdUMsR0FBdkM7SUFDSDtFQWRMO0lBQUE7SUFBQSxPQWdCSSxnQkFBT0csR0FBUCxFQUFZO01BQ1IsS0FBS0csSUFBTCxDQUFVSCxHQUFWO01BQ0EsS0FBS0osSUFBTCxJQUFhLEtBQUtFLElBQWxCO01BQ0EsS0FBS0QsSUFBTCxJQUFhLEtBQUtFLElBQWxCO0lBQ0gsQ0FwQkwsQ0FzQkk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBNUJKOztFQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXlfb2ZfdGhlX2JsYWRlLy4vc3JjL3NjcmlwdHMvY2hhcmFjdGVyLmpzPzE4MTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgdmVsWCA9IDAsIHZlbFkgPSAyNSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYXG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1lcbiAgICAgICAgdGhpcy52ZWxYID0gdmVsWFxuICAgICAgICB0aGlzLnZlbFkgPSB2ZWxZXG4gICAgfSBcblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgMTAyNCwgNTI2KTtcbiAgICBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NYLCB0aGlzLnBvc1ksIDUwLCAxNTApXG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWFxuICAgICAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZXG4gICAgfVxuXG4gICAgLy8gYW5pbWF0ZShjdHgpIHtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcywgY3R4KSk7XG4gICAgLy8gICAgIH0sIDE2LjY2KTtcbiAgICAvLyAgICAgdGhpcy51cGRhdGUoY3R4KTtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJhbmltYXRlIGlzeCBiZWluZyBjYWxsZWRcIik7XG4gICAgLy8gfVxuXG4gICAgXG59Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsInBvc1giLCJwb3NZIiwidmVsWCIsInZlbFkiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

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