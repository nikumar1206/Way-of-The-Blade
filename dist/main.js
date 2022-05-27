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

eval("var _require = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\"),\n    Character = _require.Character; // window.Character = Character\n\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  // following code will setup a canvas with a blue background\n  var canvas = document.getElementById(\"canvasEl\");\n  canvas.width = 1024;\n  canvas.height = 526;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var KEYS = {\n    //\n    w: {\n      pressed: false\n    },\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    },\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    }\n  };\n  var player1 = new Character([100, 200], [0, 0], \"player1\");\n  var player2 = new Character([900, 200], [0, 0], \"player2\");\n  window.addEventListener(\"keydown\", function (e) {\n    var char = e.key;\n\n    if (char in KEYS) {\n      KEYS[char].pressed = true;\n    }\n  });\n  window.addEventListener(\"keyup\", function (e) {\n    var char = e.key;\n\n    if (char in KEYS) {\n      KEYS[char].pressed = false;\n    }\n\n    if (e.key === \"a\") {\n      player1.velX = 0;\n    } else if (e.key === \"d\") {\n      player1.velX = 0;\n    } // stop\n\n\n    if (e.key === \"ArrowLeft\") {\n      player2.velX = 0;\n    } else if (e.key === \"ArrowRight\") {\n      player2.velX = 0;\n    }\n  });\n\n  var animate = function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.fillStyle = \"lightblue\";\n    ctx.fillRect(0, 0, 1024, 526); //re-renders background\n\n    player1.move(ctx);\n    player2.move(ctx); //allows movement for players\n    // key inputs for player 1\n\n    if (KEYS.w.pressed) {\n      player1.velY = -14;\n    }\n\n    if (KEYS.a.pressed) {\n      player1.velX = -25;\n    }\n\n    if (KEYS.d.pressed) {\n      player1.velX = 25;\n    } // key inputs for player 2\n\n\n    if (KEYS.ArrowUp.pressed) {\n      player2.velY = -14;\n    }\n\n    if (KEYS.ArrowLeft.pressed) {\n      player2.velX = -25;\n    }\n\n    if (KEYS.ArrowRight.pressed) {\n      player2.velX = 25;\n    }\n  };\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFQLENBQTZCRCxPQUE3QjtJQUVBbEIsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLFdBQWhCO0lBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekIsRUFKa0IsQ0FJYTs7SUFFL0JTLE9BQU8sQ0FBQ1EsSUFBUixDQUFhcEIsR0FBYjtJQUNBYSxPQUFPLENBQUNPLElBQVIsQ0FBYXBCLEdBQWIsRUFQa0IsQ0FPQztJQUVuQjs7SUFDQSxJQUFJSSxJQUFJLENBQUNDLENBQUwsQ0FBT0MsT0FBWCxFQUFvQjtNQUNoQk0sT0FBTyxDQUFDUyxJQUFSLEdBQWUsQ0FBQyxFQUFoQjtJQUNIOztJQUNELElBQUlqQixJQUFJLENBQUNHLENBQUwsQ0FBT0QsT0FBWCxFQUFvQjtNQUNoQk0sT0FBTyxDQUFDSyxJQUFSLEdBQWUsQ0FBQyxFQUFoQjtJQUNIOztJQUNELElBQUliLElBQUksQ0FBQ0ksQ0FBTCxDQUFPRixPQUFYLEVBQW9CO01BQ2hCTSxPQUFPLENBQUNLLElBQVIsR0FBZSxFQUFmO0lBQ0gsQ0FsQmlCLENBb0JsQjs7O0lBQ0EsSUFBSWIsSUFBSSxDQUFDSyxPQUFMLENBQWFILE9BQWpCLEVBQTBCO01BQ3RCTyxPQUFPLENBQUNRLElBQVIsR0FBZSxDQUFDLEVBQWhCO0lBQ0g7O0lBQ0QsSUFBSWpCLElBQUksQ0FBQ08sU0FBTCxDQUFlTCxPQUFuQixFQUE0QjtNQUN4Qk8sT0FBTyxDQUFDSSxJQUFSLEdBQWUsQ0FBQyxFQUFoQjtJQUNIOztJQUNELElBQUliLElBQUksQ0FBQ00sVUFBTCxDQUFnQkosT0FBcEIsRUFBNkI7TUFDekJPLE9BQU8sQ0FBQ0ksSUFBUixHQUFlLEVBQWY7SUFDSDtFQUVKLENBL0JEOztFQWdDQUMsT0FBTztBQUNWLENBL0ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5X29mX3RoZV9ibGFkZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2hhcmFjdGVyIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiKTtcblxuLy8gd2luZG93LkNoYXJhY3RlciA9IENoYXJhY3Rlclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblxuICAgIC8vIGZvbGxvd2luZyBjb2RlIHdpbGwgc2V0dXAgYSBjYW52YXMgd2l0aCBhIGJsdWUgYmFja2dyb3VuZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzRWxcIik7XG4gICAgY2FudmFzLndpZHRoID0gMTAyNDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTI2O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRibHVlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgY29uc3QgS0VZUyA9IHsgLy9cbiAgICAgICAgdzoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgYToge1xuICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGQ6IHtcbiAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBBcnJvd1VwOiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBBcnJvd1JpZ2h0OiB7XG4gICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dMZWZ0OiB7XG4gICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcGxheWVyMSA9IG5ldyBDaGFyYWN0ZXIoWzEwMCwgMjAwXSwgWzAsMF0sIFwicGxheWVyMVwiKSBcbiAgICAgIGxldCBwbGF5ZXIyID0gbmV3IENoYXJhY3RlcihbOTAwLCAyMDBdLCBbMCwwXSwgXCJwbGF5ZXIyXCIpXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgIGxldCBjaGFyID0gZS5rZXlcbiAgICAgICAgICBpZiAoY2hhciBpbiBLRVlTKSB7XG4gICAgICAgICAgICBLRVlTW2NoYXJdLnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgfSBcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGNoYXIgPSBlLmtleVxuICAgIFxuICAgICAgICBpZiAoY2hhciBpbiBLRVlTKSB7XG4gICAgICAgICAgICBLRVlTW2NoYXJdLnByZXNzZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIHBsYXllcjEudmVsWCA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICAgICAgICAgIHBsYXllcjEudmVsWCA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3BcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICBwbGF5ZXIyLnZlbFggPSAwXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICBwbGF5ZXIyLnZlbFggPSAwXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgIFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMjQsIDUyNik7IC8vcmUtcmVuZGVycyBiYWNrZ3JvdW5kXG5cbiAgICAgICAgcGxheWVyMS5tb3ZlKGN0eCk7XG4gICAgICAgIHBsYXllcjIubW92ZShjdHgpOyAvL2FsbG93cyBtb3ZlbWVudCBmb3IgcGxheWVyc1xuXG4gICAgICAgIC8vIGtleSBpbnB1dHMgZm9yIHBsYXllciAxXG4gICAgICAgIGlmIChLRVlTLncucHJlc3NlZCkge1xuICAgICAgICAgICAgcGxheWVyMS52ZWxZID0gLTE0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEtFWVMuYS5wcmVzc2VkKSB7XG4gICAgICAgICAgICBwbGF5ZXIxLnZlbFggPSAtMjVcbiAgICAgICAgfVxuICAgICAgICBpZiAoS0VZUy5kLnByZXNzZWQpIHtcbiAgICAgICAgICAgIHBsYXllcjEudmVsWCA9IDI1XG4gICAgICAgIH1cblxuICAgICAgICAvLyBrZXkgaW5wdXRzIGZvciBwbGF5ZXIgMlxuICAgICAgICBpZiAoS0VZUy5BcnJvd1VwLnByZXNzZWQpIHtcbiAgICAgICAgICAgIHBsYXllcjIudmVsWSA9IC0xNFxuICAgICAgICB9XG4gICAgICAgIGlmIChLRVlTLkFycm93TGVmdC5wcmVzc2VkKSB7XG4gICAgICAgICAgICBwbGF5ZXIyLnZlbFggPSAtMjVcbiAgICAgICAgfVxuICAgICAgICBpZiAoS0VZUy5BcnJvd1JpZ2h0LnByZXNzZWQpIHtcbiAgICAgICAgICAgIHBsYXllcjIudmVsWCA9IDI1XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhbmltYXRlKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2hhcmFjdGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiS0VZUyIsInciLCJwcmVzc2VkIiwiYSIsImQiLCJBcnJvd1VwIiwiQXJyb3dSaWdodCIsIkFycm93TGVmdCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiZSIsImNoYXIiLCJrZXkiLCJ2ZWxYIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiLCJ2ZWxZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": function() { return /* binding */ Character; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar GRAVITY = 0.5;\nvar Character = /*#__PURE__*/function () {\n  function Character(pos, vel, type) {\n    _classCallCheck(this, Character);\n\n    this.posX = pos[0]; // sets up position for characters\n\n    this.posY = pos[1];\n    this.velX = vel[0]; // sets up velocity for characters\n\n    this.velY = vel[1];\n    this.type = type; // identifies whether player 1 vs player 2\n  }\n\n  _createClass(Character, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.posX, this.posY, 25, 125);\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap() {\n      if (this.posX < 25) {\n        this.posX = 1024 - 25;\n      } else if (this.posX > 975) {\n        this.posX = 1024 - 975;\n      }\n    }\n  }, {\n    key: \"move\",\n    value: function move(ctx) {\n      if (this.posX < 50 || this.posX > 950) {\n        this.wrap();\n      }\n\n      this.posX += this.velX;\n      this.posY += this.velY;\n\n      if (this.posY >= 376) {\n        // ensures characters stay within screen\n        this.velY = 0; // will mimic gravity acceleration\n      } else {\n        this.velY += GRAVITY;\n      }\n\n      this.draw(ctx);\n    }\n  }]);\n\n  return Character;\n}();\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxHQUFoQjtBQUNPLElBQU1DLFNBQWI7RUFDSSxtQkFBWUMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0JDLElBQXRCLEVBQTRCO0lBQUE7O0lBRXhCLEtBQUtDLElBQUwsR0FBWUgsR0FBRyxDQUFDLENBQUQsQ0FBZixDQUZ3QixDQUVMOztJQUNuQixLQUFLSSxJQUFMLEdBQVlKLEdBQUcsQ0FBQyxDQUFELENBQWY7SUFFQSxLQUFLSyxJQUFMLEdBQVlKLEdBQUcsQ0FBQyxDQUFELENBQWYsQ0FMd0IsQ0FLTDs7SUFDbkIsS0FBS0ssSUFBTCxHQUFZTCxHQUFHLENBQUMsQ0FBRCxDQUFmO0lBRUEsS0FBS0MsSUFBTCxHQUFZQSxJQUFaLENBUndCLENBUVA7RUFDcEI7O0VBVkw7SUFBQTtJQUFBLE9BWUksY0FBS0ssR0FBTCxFQUFVO01BQ05BLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtNQUNBRCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFLTixJQUFsQixFQUF3QixLQUFLQyxJQUE3QixFQUFtQyxFQUFuQyxFQUF1QyxHQUF2QztJQUNIO0VBZkw7SUFBQTtJQUFBLE9BaUJJLGdCQUFPO01BQ0gsSUFBSSxLQUFLRCxJQUFMLEdBQVksRUFBaEIsRUFBb0I7UUFDaEIsS0FBS0EsSUFBTCxHQUFZLE9BQU8sRUFBbkI7TUFDSCxDQUZELE1BRU8sSUFBSSxLQUFLQSxJQUFMLEdBQVksR0FBaEIsRUFBcUI7UUFDeEIsS0FBS0EsSUFBTCxHQUFZLE9BQU8sR0FBbkI7TUFDSDtJQUNKO0VBdkJMO0lBQUE7SUFBQSxPQXdCSSxjQUFLSSxHQUFMLEVBQVU7TUFFTixJQUFLLEtBQUtKLElBQUwsR0FBWSxFQUFaLElBQWtCLEtBQUtBLElBQUwsR0FBWSxHQUFuQyxFQUF5QztRQUNyQyxLQUFLTyxJQUFMO01BRUg7O01BRUQsS0FBS1AsSUFBTCxJQUFhLEtBQUtFLElBQWxCO01BRUEsS0FBS0QsSUFBTCxJQUFhLEtBQUtFLElBQWxCOztNQUNBLElBQUksS0FBS0YsSUFBTCxJQUFhLEdBQWpCLEVBQXNCO1FBQUU7UUFDcEIsS0FBS0UsSUFBTCxHQUFZLENBQVosQ0FEa0IsQ0FDSjtNQUNqQixDQUZELE1BRU87UUFDSCxLQUFLQSxJQUFMLElBQWFSLE9BQWI7TUFDSDs7TUFFRCxLQUFLYSxJQUFMLENBQVVKLEdBQVY7SUFDSDtFQXpDTDs7RUFBQTtBQUFBO0FBMENDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5X29mX3RoZV9ibGFkZS8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdSQVZJVFkgPSAwLjVcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdmVsLCB0eXBlKSB7XG5cbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWzBdIC8vIHNldHMgdXAgcG9zaXRpb24gZm9yIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWzFdXG5cbiAgICAgICAgdGhpcy52ZWxYID0gdmVsWzBdIC8vIHNldHMgdXAgdmVsb2NpdHkgZm9yIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy52ZWxZID0gdmVsWzFdXG5cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZSAvLyBpZGVudGlmaWVzIHdoZXRoZXIgcGxheWVyIDEgdnMgcGxheWVyIDJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1gsIHRoaXMucG9zWSwgMjUsIDEyNSlcbiAgICB9XG5cbiAgICB3cmFwKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NYIDwgMjUpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWCA9IDEwMjQgLSAyNVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zWCA+IDk3NSkge1xuICAgICAgICAgICAgdGhpcy5wb3NYID0gMTAyNCAtIDk3NVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoY3R4KSB7XG5cbiAgICAgICAgaWYgKCh0aGlzLnBvc1ggPCA1MCB8fCB0aGlzLnBvc1ggPiA5NTApKSB7XG4gICAgICAgICAgICB0aGlzLndyYXAoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NZICs9IHRoaXMudmVsWVxuICAgICAgICBpZiAodGhpcy5wb3NZID49IDM3NikgeyAvLyBlbnN1cmVzIGNoYXJhY3RlcnMgc3RheSB3aXRoaW4gc2NyZWVuXG4gICAgICAgICAgICB0aGlzLnZlbFkgPSAwIC8vIHdpbGwgbWltaWMgZ3Jhdml0eSBhY2NlbGVyYXRpb25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsWSArPSBHUkFWSVRZXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJHUkFWSVRZIiwiQ2hhcmFjdGVyIiwicG9zIiwidmVsIiwidHlwZSIsInBvc1giLCJwb3NZIiwidmVsWCIsInZlbFkiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndyYXAiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

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