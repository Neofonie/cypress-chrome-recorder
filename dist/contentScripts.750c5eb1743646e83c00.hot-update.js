webpackHotUpdate("contentScripts",{

/***/ "./contentScripts/Record.js":
/*!**********************************!*\
  !*** ./contentScripts/Record.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Record; });\n/* harmony import */ var _helper_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/statics */ \"./helper/statics.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Record = /*#__PURE__*/function () {\n  function Record() {\n    _classCallCheck(this, Record);\n\n    console.log(\"Record construct\");\n  }\n\n  _createClass(Record, [{\n    key: \"init\",\n    value: function init() {\n      console.log(\"Record init\");\n\n      var _ref = this;\n\n      chrome.runtime.onMessage.addListener(function (msg, sender) {\n        alert('conten listener');\n\n        if (msg == _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Actions.SIDEBAR_TOGGLE) {\n          alert('conten listener: ' + msg);\n          toggle();\n        }\n      });\n      this._clickedEl = null;\n      document.addEventListener(\"contextmenu\", function (event) {\n        this._clickedEl = event.target;\n      }, true);\n      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n        console.dir(request);\n        console.dir(sender);\n        console.dir(sendResponse);\n        console.dir(this._clickedEl);\n\n        if (request.greeting == \"hello\") {\n          sendResponse({\n            value: this._clickedEl.value\n          });\n        }\n      });\n      this._iframe = document.createElement('iframe');\n      this._iframe.style.background = \"green\";\n      this._iframe.style.height = \"100%\";\n      this._iframe.style.width = \"0px\";\n      this._iframe.style.position = \"fixed\";\n      this._iframe.style.top = \"0px\";\n      this._iframe.style.right = \"-50px\";\n      this._iframe.style.zIndex = \"9000000000000000000\";\n      this._iframe.style[\"boxShadow\"] = \"rgb(0 0 0 / 59%) -2px 0px 10px 4px\";\n      this._iframe.frameBorder = \"none\";\n      this._iframe.src = chrome.extension.getURL(\"popup.html\");\n      document.body.appendChild(this._iframe);\n    }\n  }, {\n    key: \"_sidebarToddle\",\n    value: function _sidebarToddle() {\n      if (this._iframe.style.width == \"0px\") {\n        this._iframe.style.width = \"400px\";\n      } else {\n        this._iframe.style.width = \"0px\";\n      }\n    }\n  }]);\n\n  return Record;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50U2NyaXB0cy9SZWNvcmQuanM/NTMwMSJdLCJuYW1lcyI6WyJSZWNvcmQiLCJjb25zb2xlIiwibG9nIiwiX3JlZiIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsImFsZXJ0Iiwic3RhdGljcyIsIkFjdGlvbnMiLCJTSURFQkFSX1RPR0dMRSIsInRvZ2dsZSIsIl9jbGlja2VkRWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlcXVlc3QiLCJzZW5kUmVzcG9uc2UiLCJkaXIiLCJncmVldGluZyIsInZhbHVlIiwiX2lmcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJmcmFtZUJvcmRlciIsInNyYyIsImV4dGVuc2lvbiIsImdldFVSTCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxNO0FBQ2pCLG9CQUFjO0FBQUE7O0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0g7Ozs7MkJBRU07QUFDSEQsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjs7QUFFQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQUMsWUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQVVDLEdBQVYsRUFBZUMsTUFBZixFQUF1QjtBQUN4REMsYUFBSyxDQUFDLGlCQUFELENBQUw7O0FBQ0EsWUFBSUYsR0FBRyxJQUFJRyx1REFBTyxDQUFDQyxPQUFSLENBQWdCQyxjQUEzQixFQUEyQztBQUN2Q0gsZUFBSyxDQUFDLHNCQUFzQkYsR0FBdkIsQ0FBTDtBQUNBTSxnQkFBTTtBQUNUO0FBQ0osT0FORDtBQVFBLFdBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFFQUMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RELGFBQUtILFVBQUwsR0FBa0JHLEtBQUssQ0FBQ0MsTUFBeEI7QUFDSCxPQUZELEVBRUcsSUFGSDtBQUtBZixZQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkMsV0FBekIsQ0FBcUMsVUFBVWEsT0FBVixFQUFtQlgsTUFBbkIsRUFBMkJZLFlBQTNCLEVBQXlDO0FBQzFFcEIsZUFBTyxDQUFDcUIsR0FBUixDQUFZRixPQUFaO0FBQ0FuQixlQUFPLENBQUNxQixHQUFSLENBQVliLE1BQVo7QUFDQVIsZUFBTyxDQUFDcUIsR0FBUixDQUFZRCxZQUFaO0FBQ0FwQixlQUFPLENBQUNxQixHQUFSLENBQVksS0FBS1AsVUFBakI7O0FBRUEsWUFBSUssT0FBTyxDQUFDRyxRQUFSLElBQW9CLE9BQXhCLEVBQWlDO0FBQzdCRixzQkFBWSxDQUFDO0FBQUVHLGlCQUFLLEVBQUUsS0FBS1QsVUFBTCxDQUFnQlM7QUFBekIsV0FBRCxDQUFaO0FBQ0g7QUFDSixPQVREO0FBV0EsV0FBS0MsT0FBTCxHQUFlVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFdBQUtELE9BQUwsQ0FBYUUsS0FBYixDQUFtQkMsVUFBbkIsR0FBZ0MsT0FBaEM7QUFDQSxXQUFLSCxPQUFMLENBQWFFLEtBQWIsQ0FBbUJFLE1BQW5CLEdBQTRCLE1BQTVCO0FBQ0EsV0FBS0osT0FBTCxDQUFhRSxLQUFiLENBQW1CRyxLQUFuQixHQUEyQixLQUEzQjtBQUNBLFdBQUtMLE9BQUwsQ0FBYUUsS0FBYixDQUFtQkksUUFBbkIsR0FBOEIsT0FBOUI7QUFDQSxXQUFLTixPQUFMLENBQWFFLEtBQWIsQ0FBbUJLLEdBQW5CLEdBQXlCLEtBQXpCO0FBQ0EsV0FBS1AsT0FBTCxDQUFhRSxLQUFiLENBQW1CTSxLQUFuQixHQUEyQixPQUEzQjtBQUNBLFdBQUtSLE9BQUwsQ0FBYUUsS0FBYixDQUFtQk8sTUFBbkIsR0FBNEIscUJBQTVCO0FBQ0EsV0FBS1QsT0FBTCxDQUFhRSxLQUFiLENBQW1CLFdBQW5CLElBQWtDLG9DQUFsQztBQUNBLFdBQUtGLE9BQUwsQ0FBYVUsV0FBYixHQUEyQixNQUEzQjtBQUNBLFdBQUtWLE9BQUwsQ0FBYVcsR0FBYixHQUFtQmhDLE1BQU0sQ0FBQ2lDLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFlBQXhCLENBQW5CO0FBRUF0QixjQUFRLENBQUN1QixJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS2YsT0FBL0I7QUFDSDs7O3FDQUVnQjtBQUNiLFVBQUksS0FBS0EsT0FBTCxDQUFhRSxLQUFiLENBQW1CRyxLQUFuQixJQUE0QixLQUFoQyxFQUF1QztBQUNuQyxhQUFLTCxPQUFMLENBQWFFLEtBQWIsQ0FBbUJHLEtBQW5CLEdBQTJCLE9BQTNCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS0wsT0FBTCxDQUFhRSxLQUFiLENBQW1CRyxLQUFuQixHQUEyQixLQUEzQjtBQUNIO0FBQ0oiLCJmaWxlIjoiLi9jb250ZW50U2NyaXB0cy9SZWNvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGljcyBmcm9tICcuLi9oZWxwZXIvc3RhdGljcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmQgY29uc3RydWN0XCIpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkIGluaXRcIik7XG5cbiAgICAgICAgbGV0IF9yZWYgPSB0aGlzO1xuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnLCBzZW5kZXIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdjb250ZW4gbGlzdGVuZXInKTtcbiAgICAgICAgICAgIGlmIChtc2cgPT0gc3RhdGljcy5BY3Rpb25zLlNJREVCQVJfVE9HR0xFKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NvbnRlbiBsaXN0ZW5lcjogJyArIG1zZyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5fY2xpY2tlZEVsID0gbnVsbDtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja2VkRWwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIH0sIHRydWUpO1xuXG5cbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5kaXIocmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihzZW5kZXIpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIoc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuX2NsaWNrZWRFbCk7XG5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmdyZWV0aW5nID09IFwiaGVsbG9cIikge1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHZhbHVlOiB0aGlzLl9jbGlja2VkRWwudmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2lmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JlZW5cIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUucmlnaHQgPSBcIi01MHB4XCI7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS56SW5kZXggPSBcIjkwMDAwMDAwMDAwMDAwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlW1wiYm94U2hhZG93XCJdID0gXCJyZ2IoMCAwIDAgLyA1OSUpIC0ycHggMHB4IDEwcHggNHB4XCI7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5mcmFtZUJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3JjID0gY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJwb3B1cC5odG1sXCIpXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9pZnJhbWUpO1xuICAgIH1cblxuICAgIF9zaWRlYmFyVG9kZGxlKCkge1xuICAgICAgICBpZiAodGhpcy5faWZyYW1lLnN0eWxlLndpZHRoID09IFwiMHB4XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS53aWR0aCA9IFwiNDAwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contentScripts/Record.js\n");

/***/ })

})