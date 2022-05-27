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

eval("var _require = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\"),\n    Character = _require.Character;\n\nwindow.Character = Character;\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  // console.log('DOM fully loaded and parsed');\n  // following code will setup a canvas with blue background\n  var canvas = document.getElementById(\"canvasEl\");\n  canvas.width = 1024;\n  canvas.height = 526;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var player = new Character(200, 20);\n  window.player = player; // player.draw(ctx);\n  // console.log(player);\n\n  var enemy = new Character(800, 20); // enemy.draw(ctx);\n  // console.log(enemy);\n  // player.animate(ctx)\n  // enemy.animate(ctx)\n\n  var animation = function animation() {\n    ctx.fillStyle = \"lightblue\";\n    ctx.fillRect(0, 0, 1024, 526);\n    player.update(ctx);\n    enemy.update(ctx); // player.draw(ctx);\n    // enemy.draw(ctx);\n\n    setTimeout(animation, 16.66);\n  };\n\n  animation();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBc0JBLG1CQUFPLENBQUMsdURBQUQsQ0FBN0I7QUFBQSxJQUFRQyxTQUFSLFlBQVFBLFNBQVI7O0FBRUFDLE1BQU0sQ0FBQ0QsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQ0MsS0FBRCxFQUFXO0VBQ25EO0VBRUE7RUFDQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0VBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQWY7RUFDQUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0VBRUEsSUFBTUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsV0FBaEI7RUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQlIsTUFBTSxDQUFDRyxLQUExQixFQUFpQ0gsTUFBTSxDQUFDSSxNQUF4QztFQUVBLElBQUlLLE1BQU0sR0FBRyxJQUFJYixTQUFKLENBQWMsR0FBZCxFQUFtQixFQUFuQixDQUFiO0VBQ0FDLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQkEsTUFBaEIsQ0FibUQsQ0FjbkQ7RUFDQTs7RUFFQSxJQUFJQyxLQUFLLEdBQUcsSUFBSWQsU0FBSixDQUFjLEdBQWQsRUFBbUIsRUFBbkIsQ0FBWixDQWpCbUQsQ0FrQm5EO0VBQ0E7RUFFQTtFQUNBOztFQUlBLElBQU1lLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07SUFDcEJOLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixXQUFoQjtJQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCO0lBQ0FDLE1BQU0sQ0FBQ0csTUFBUCxDQUFjUCxHQUFkO0lBQ0FLLEtBQUssQ0FBQ0UsTUFBTixDQUFhUCxHQUFiLEVBSm9CLENBS3BCO0lBQ0E7O0lBQ0FRLFVBQVUsQ0FBQ0YsU0FBRCxFQUFZLEtBQVosQ0FBVjtFQUNILENBUkQ7O0VBU0FBLFNBQVM7QUFHWixDQXRDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dheV9vZl90aGVfYmxhZGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENoYXJhY3RlciB9ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIik7XG5cbndpbmRvdy5DaGFyYWN0ZXIgPSBDaGFyYWN0ZXJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpO1xuXG4gICAgLy8gZm9sbG93aW5nIGNvZGUgd2lsbCBzZXR1cCBhIGNhbnZhcyB3aXRoIGJsdWUgYmFja2dyb3VuZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzRWxcIik7XG4gICAgY2FudmFzLndpZHRoID0gMTAyNDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTI2O1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKDIwMCwgMjApXG4gICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcbiAgICAvLyBwbGF5ZXIuZHJhdyhjdHgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcik7XG5cbiAgICBsZXQgZW5lbXkgPSBuZXcgQ2hhcmFjdGVyKDgwMCwgMjApXG4gICAgLy8gZW5lbXkuZHJhdyhjdHgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVuZW15KTtcblxuICAgIC8vIHBsYXllci5hbmltYXRlKGN0eClcbiAgICAvLyBlbmVteS5hbmltYXRlKGN0eClcblxuXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTAyNCwgNTI2KTtcbiAgICAgICAgcGxheWVyLnVwZGF0ZShjdHgpO1xuICAgICAgICBlbmVteS51cGRhdGUoY3R4KTtcbiAgICAgICAgLy8gcGxheWVyLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gZW5lbXkuZHJhdyhjdHgpO1xuICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGlvbiwgMTYuNjYpO1xuICAgIH1cbiAgICBhbmltYXRpb24oKTtcblxuICAgIFxufSk7XG5cbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2hhcmFjdGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiZW5lbXkiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": function() { return /* binding */ Character; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar GRAVITY = 2;\nvar Character = /*#__PURE__*/function () {\n  function Character(posX, posY) {\n    var velX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    var velY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    _classCallCheck(this, Character);\n\n    this.posX = posX;\n    this.posY = posY;\n    this.velX = velX;\n    this.velY = velY;\n    this.handleClick();\n  }\n\n  _createClass(Character, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.posX, this.posY, 50, 150);\n    }\n  }, {\n    key: \"update\",\n    value: function update(ctx) {\n      this.posX += this.velX;\n      this.posY += this.velY;\n\n      if (!(this.posY >= 376)) {\n        this.velY = GRAVITY;\n      } else {\n        this.velY = 0;\n      }\n\n      this.draw(ctx);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      var _this = this;\n\n      window.addEventListener(\"keydown\", function (e) {\n        if (e.key === \"w\") {\n          _this.posY -= 50;\n        } else if (e.key === \"a\") {\n          _this.posX -= 50;\n        } else if (e.key === \"d\") {\n          _this.posX += 50;\n        } else if (e.key === \"s\") {\n          _this.velY += 50;\n        }\n      });\n    }\n  }]);\n\n  return Character;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxDQUFoQjtBQUNPLElBQU1DLFNBQWI7RUFDSSxtQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBNEM7SUFBQSxJQUFwQkMsSUFBb0IsdUVBQWIsQ0FBYTtJQUFBLElBQVZDLElBQVUsdUVBQUgsQ0FBRzs7SUFBQTs7SUFDeEMsS0FBS0gsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsV0FBTDtFQUNIOztFQVBMO0lBQUE7SUFBQSxPQVNJLGNBQUtDLEdBQUwsRUFBVTtNQUNOQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7TUFDQUQsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBS1AsSUFBbEIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUMsRUFBbkMsRUFBdUMsR0FBdkM7SUFDSDtFQVpMO0lBQUE7SUFBQSxPQWNJLGdCQUFPSSxHQUFQLEVBQVk7TUFDUixLQUFLTCxJQUFMLElBQWEsS0FBS0UsSUFBbEI7TUFDQSxLQUFLRCxJQUFMLElBQWEsS0FBS0UsSUFBbEI7O01BRUEsSUFBSSxFQUFFLEtBQUtGLElBQUwsSUFBYSxHQUFmLENBQUosRUFBeUI7UUFDckIsS0FBS0UsSUFBTCxHQUFZTCxPQUFaO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsS0FBS0ssSUFBTCxHQUFZLENBQVo7TUFDSDs7TUFFRCxLQUFLSyxJQUFMLENBQVVILEdBQVY7SUFDSDtFQXpCTDtJQUFBO0lBQUEsT0EyQkksdUJBQWM7TUFBQTs7TUFDVkksTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxDQUFELEVBQU87UUFDdEMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtVQUNmLEtBQUksQ0FBQ1gsSUFBTCxJQUFhLEVBQWI7UUFDSCxDQUZELE1BRU8sSUFBSVUsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtVQUN0QixLQUFJLENBQUNaLElBQUwsSUFBYSxFQUFiO1FBQ0gsQ0FGTSxNQUVBLElBQUlXLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEdBQWQsRUFBbUI7VUFDdEIsS0FBSSxDQUFDWixJQUFMLElBQWEsRUFBYjtRQUNILENBRk0sTUFFQSxJQUFJVyxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFkLEVBQW1CO1VBQ3RCLEtBQUksQ0FBQ1QsSUFBTCxJQUFhLEVBQWI7UUFDSDtNQUNKLENBVkQ7SUFXSDtFQXZDTDs7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5X29mX3RoZV9ibGFkZS8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdSQVZJVFkgPSAyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCB2ZWxYID0gMCwgdmVsWSA9IDApIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWFxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZXG4gICAgICAgIHRoaXMudmVsWCA9IHZlbFhcbiAgICAgICAgdGhpcy52ZWxZID0gdmVsWVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKClcbiAgICB9IFxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NYLCB0aGlzLnBvc1ksIDUwLCAxNTApXG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYXG4gICAgICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFlcbiAgICBcbiAgICAgICAgaWYgKCEodGhpcy5wb3NZID49IDM3NikpIHtcbiAgICAgICAgICAgIHRoaXMudmVsWSA9IEdSQVZJVFlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsWSA9IDBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwid1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NZIC09IDUwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1ggLT0gNTBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NYICs9IDUwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcInNcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsWSArPSA1MFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIkdSQVZJVFkiLCJDaGFyYWN0ZXIiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwiaGFuZGxlQ2xpY2siLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

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