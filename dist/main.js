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

eval("var _require = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\"),\n    Character = _require.Character;\n\nwindow.Character = Character;\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  // console.log('DOM fully loaded and parsed');\n  // following code will setup a canvas with blue background\n  var canvas = document.getElementById(\"canvasEl\");\n  canvas.width = 1024;\n  canvas.height = 526;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var player = new Character([200, 20], [0, 0]);\n  window.player = player; // player.draw(ctx);\n  // console.log(player);\n\n  var enemy = new Character([800, 20], [0, 0]); // enemy.draw(ctx);\n  // console.log(enemy);\n  // player.animate(ctx)\n  // enemy.animate(ctx)\n\n  var animation = function animation() {\n    ctx.fillStyle = \"lightblue\";\n    ctx.fillRect(0, 0, 1024, 526);\n    player.update(ctx);\n    enemy.update(ctx); // player.draw(ctx);\n    // enemy.draw(ctx);\n\n    setTimeout(animation, 16.66);\n    console.log(enemy.posX);\n  };\n\n  animation();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBc0JBLG1CQUFPLENBQUMsdURBQUQsQ0FBN0I7QUFBQSxJQUFRQyxTQUFSLFlBQVFBLFNBQVI7O0FBRUFDLE1BQU0sQ0FBQ0QsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQ0MsS0FBRCxFQUFXO0VBQ25EO0VBRUE7RUFDQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0VBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQWY7RUFDQUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0VBRUEsSUFBTUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsV0FBaEI7RUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQlIsTUFBTSxDQUFDRyxLQUExQixFQUFpQ0gsTUFBTSxDQUFDSSxNQUF4QztFQUVBLElBQUlLLE1BQU0sR0FBRyxJQUFJYixTQUFKLENBQWMsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUFkLEVBQXlCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBekIsQ0FBYjtFQUNBQyxNQUFNLENBQUNZLE1BQVAsR0FBZ0JBLE1BQWhCLENBYm1ELENBY25EO0VBQ0E7O0VBRUEsSUFBSUMsS0FBSyxHQUFHLElBQUlkLFNBQUosQ0FBYyxDQUFDLEdBQUQsRUFBTSxFQUFOLENBQWQsRUFBeUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUF6QixDQUFaLENBakJtRCxDQWtCbkQ7RUFDQTtFQUVBO0VBQ0E7O0VBSUEsSUFBTWUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtJQUNwQk4sR0FBRyxDQUFDRSxTQUFKLEdBQWdCLFdBQWhCO0lBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekI7SUFDQUMsTUFBTSxDQUFDRyxNQUFQLENBQWNQLEdBQWQ7SUFDQUssS0FBSyxDQUFDRSxNQUFOLENBQWFQLEdBQWIsRUFKb0IsQ0FLcEI7SUFDQTs7SUFDQVEsVUFBVSxDQUFDRixTQUFELEVBQVksS0FBWixDQUFWO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNNLElBQWxCO0VBQ0gsQ0FURDs7RUFVQUwsU0FBUztBQUdaLENBdkNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5X29mX3RoZV9ibGFkZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2hhcmFjdGVyIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiKTtcblxud2luZG93LkNoYXJhY3RlciA9IENoYXJhY3Rlclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XG5cbiAgICAvLyBmb2xsb3dpbmcgY29kZSB3aWxsIHNldHVwIGEgY2FudmFzIHdpdGggYmx1ZSBiYWNrZ3JvdW5kXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNFbFwiKTtcbiAgICBjYW52YXMud2lkdGggPSAxMDI0O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MjY7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgbGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoWzIwMCwgMjBdLCBbMCwwXSlcbiAgICB3aW5kb3cucGxheWVyID0gcGxheWVyO1xuICAgIC8vIHBsYXllci5kcmF3KGN0eCk7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyKTtcblxuICAgIGxldCBlbmVteSA9IG5ldyBDaGFyYWN0ZXIoWzgwMCwgMjBdLCBbMCwwXSlcbiAgICAvLyBlbmVteS5kcmF3KGN0eCk7XG4gICAgLy8gY29uc29sZS5sb2coZW5lbXkpO1xuXG4gICAgLy8gcGxheWVyLmFuaW1hdGUoY3R4KVxuICAgIC8vIGVuZW15LmFuaW1hdGUoY3R4KVxuXG5cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxMDI0LCA1MjYpO1xuICAgICAgICBwbGF5ZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIGVuZW15LnVwZGF0ZShjdHgpO1xuICAgICAgICAvLyBwbGF5ZXIuZHJhdyhjdHgpO1xuICAgICAgICAvLyBlbmVteS5kcmF3KGN0eCk7XG4gICAgICAgIHNldFRpbWVvdXQoYW5pbWF0aW9uLCAxNi42Nik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuZW15LnBvc1gpO1xuICAgIH1cbiAgICBhbmltYXRpb24oKTtcblxuICAgIFxufSk7XG5cbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2hhcmFjdGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiZW5lbXkiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInBvc1giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": function() { return /* binding */ Character; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar GRAVITY = 0.5;\nvar Character = /*#__PURE__*/function () {\n  function Character(pos, vel) {\n    _classCallCheck(this, Character);\n\n    this.posX = pos[0]; // sets up position for characters\n\n    this.posY = pos[1];\n    this.velX = vel[0]; // sets up velocity for characters\n\n    this.velY = vel[1];\n    this.handleClick();\n  }\n\n  _createClass(Character, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.posX, this.posY, 25, 125);\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap() {\n      if (this.posX < 25) {\n        this.posX = 1024 - 25;\n      } else if (this.posX > 975) {\n        this.posX = 1024 - 975;\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update(ctx) {\n      if (this.posX < 50 || this.posX > 950) {\n        this.wrap();\n      }\n\n      if (!(this.posY >= 376)) {\n        // ensures characters stay within screen\n        this.velY += GRAVITY; // will mimic gravity acceleration\n      } else {\n        this.velY = 0;\n      }\n\n      this.posX += this.velX;\n      this.posY += this.velY;\n      this.draw(ctx);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      var _this = this;\n\n      window.addEventListener(\"keydown\", function (e) {\n        if (e.key === \"w\") {\n          _this.velY = -50;\n        } else if (e.key === \"a\") {\n          _this.velX = -25;\n        } else if (e.key === \"d\") {\n          _this.velX = 25;\n        } else if (e.key === \"s\") {\n          _this.velY = 25;\n        }\n      });\n      window.addEventListener(\"keyup\", function (e) {\n        console.log(e);\n\n        if (e.key === \"w\") {\n          _this.velY = 0;\n        } else if (e.key === \"a\") {\n          _this.velX = 0;\n        } else if (e.key === \"d\") {\n          _this.velX = 0;\n        } else if (e.key === \"s\") {\n          _this.velY = 0;\n        }\n      });\n      var player = new Character([200, 20], [0, 0]);\n      window.player = player;\n      var enemy = new Character([800, 20], [0, 0]);\n    }\n  }]);\n\n  return Character;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SVUsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtVQUN0QixLQUFJLENBQUNYLElBQUwsR0FBWSxDQUFaO1FBQ0gsQ0FGTSxNQUVBLElBQUlVLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEdBQWQsRUFBbUI7VUFDdEIsS0FBSSxDQUFDVixJQUFMLEdBQVksQ0FBWjtRQUNIO01BQ0osQ0FYRDtNQWFBLElBQUlhLE1BQU0sR0FBRyxJQUFJbkIsU0FBSixDQUFjLENBQUMsR0FBRCxFQUFNLEVBQU4sQ0FBZCxFQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILENBQXpCLENBQWI7TUFDQWEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCQSxNQUFoQjtNQUVBLElBQUlDLEtBQUssR0FBRyxJQUFJcEIsU0FBSixDQUFjLENBQUMsR0FBRCxFQUFNLEVBQU4sQ0FBZCxFQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILENBQXpCLENBQVo7SUFDSDtFQXhFTDs7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5X29mX3RoZV9ibGFkZS8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdSQVZJVFkgPSAwLjVcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdmVsKSB7XG5cbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWzBdIC8vIHNldHMgdXAgcG9zaXRpb24gZm9yIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWzFdXG5cbiAgICAgICAgdGhpcy52ZWxYID0gdmVsWzBdIC8vIHNldHMgdXAgdmVsb2NpdHkgZm9yIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy52ZWxZID0gdmVsWzFdXG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljaygpXG4gICAgfSBcblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWCwgdGhpcy5wb3NZLCAyNSwgMTI1KVxuICAgIH1cblxuICAgIHdyYXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc1ggPCAyNSkge1xuICAgICAgICAgICAgdGhpcy5wb3NYID0gMTAyNCAtIDI1XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NYID4gOTc1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc1ggPSAxMDI0IC0gOTc1XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGN0eCkge1xuXG4gICAgICAgIGlmICgodGhpcy5wb3NYIDwgNTAgfHwgdGhpcy5wb3NYID4gOTUwKSkge1xuICAgICAgICAgICAgdGhpcy53cmFwKClcblxuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMucG9zWSA+PSAzNzYpKSB7IC8vIGVuc3VyZXMgY2hhcmFjdGVycyBzdGF5IHdpdGhpbiBzY3JlZW5cbiAgICAgICAgICAgIHRoaXMudmVsWSArPSBHUkFWSVRZIC8vIHdpbGwgbWltaWMgZ3Jhdml0eSBhY2NlbGVyYXRpb25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsWSA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zWCArPSB0aGlzLnZlbFhcbiAgICAgICAgdGhpcy5wb3NZICs9IHRoaXMudmVsWVxuICAgIFxuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwid1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxZID0gLTUwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbFggPSAtMjVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxYID0gMjVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwic1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxZID0gMjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJ3XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbFkgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbFggPSAwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsWCA9IDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwic1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxZID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKFsyMDAsIDIwXSwgWzAsMF0pXG4gICAgICAgIHdpbmRvdy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgXG4gICAgICAgIGxldCBlbmVteSA9IG5ldyBDaGFyYWN0ZXIoWzgwMCwgMjBdLCBbMCwwXSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJHUkFWSVRZIiwiQ2hhcmFjdGVyIiwicG9zIiwidmVsIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsImhhbmRsZUNsaWNrIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3cmFwIiwiZHJhdyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29uc29sZSIsImxvZyIsInBsYXllciIsImVuZW15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

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