webpackHotUpdate("contentScripts",{

/***/ "./contentScripts/Record.js":
/*!**********************************!*\
  !*** ./contentScripts/Record.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Record; });\n/* harmony import */ var _helper_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/statics */ \"./helper/statics.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Record = /*#__PURE__*/function () {\n  function Record() {\n    _classCallCheck(this, Record);\n\n    console.log(\"Record construct\");\n  }\n\n  _createClass(Record, [{\n    key: \"init\",\n    value: function init() {\n      console.log(\"Record init\");\n      chrome.runtime.onMessage.addListener(function (msg, sender) {\n        alert('conten listener');\n\n        if (msg == _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Actions.SIDEBAR_TOGGLE) {\n          alert('conten listener: ' + msg);\n          toggle();\n        }\n      });\n      this._clickedEl = null;\n      document.addEventListener(\"contextmenu\", function (event) {\n        this._clickedEl = event.target;\n      }, true);\n      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n        console.dir(request);\n        console.dir(sender);\n        console.dir(sendResponse);\n        console.dir(this._clickedEl);\n\n        if (request.greeting == \"hello\") {\n          sendResponse({\n            value: this._clickedEl.value\n          });\n        }\n      });\n      this._iframe = document.createElement('iframe');\n      this._iframe.style.background = \"green\";\n      this._iframe.style.height = \"100%\";\n      this._iframe.style.width = \"0px\";\n      this._iframe.style.position = \"fixed\";\n      this._iframe.style.top = \"0px\";\n      this._iframe.style.right = \"-50px\";\n      this._iframe.style.zIndex = \"9000000000000000000\";\n      this._iframe.style[\"boxShadow\"] = \"rgb(0 0 0 / 59%) -2px 0px 10px 4px\";\n      this._iframe.frameBorder = \"none\";\n      this._iframe.src = chrome.extension.getURL(\"/popup.html\");\n      document.body.appendChild(this._iframe);\n    }\n  }, {\n    key: \"_sidebarToddle\",\n    value: function _sidebarToddle() {\n      if (this._iframe.style.width == \"0px\") {\n        this._iframe.style.width = \"400px\";\n      } else {\n        this._iframe.style.width = \"0px\";\n      }\n    }\n  }]);\n\n  return Record;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50U2NyaXB0cy9SZWNvcmQuanM/NTMwMSJdLCJuYW1lcyI6WyJSZWNvcmQiLCJjb25zb2xlIiwibG9nIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwiYWxlcnQiLCJzdGF0aWNzIiwiQWN0aW9ucyIsIlNJREVCQVJfVE9HR0xFIiwidG9nZ2xlIiwiX2NsaWNrZWRFbCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicmVxdWVzdCIsInNlbmRSZXNwb25zZSIsImRpciIsImdyZWV0aW5nIiwidmFsdWUiLCJfaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImZyYW1lQm9yZGVyIiwic3JjIiwiZXh0ZW5zaW9uIiwiZ2V0VVJMIiwiYm9keSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7SUFFc0JBLE07QUFDbEIsb0JBQWM7QUFBQTs7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSDs7OzsyQkFFTTtBQUNIRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBRUFDLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDeERDLGFBQUssQ0FBQyxpQkFBRCxDQUFMOztBQUNBLFlBQUlGLEdBQUcsSUFBSUcsdURBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsY0FBM0IsRUFBMkM7QUFDdkNILGVBQUssQ0FBQyxzQkFBc0JGLEdBQXZCLENBQUw7QUFDQU0sZ0JBQU07QUFDVDtBQUNKLE9BTkQ7QUFRQSxXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBRUFDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUMsVUFBVUMsS0FBVixFQUFpQjtBQUN0RCxhQUFLSCxVQUFMLEdBQWtCRyxLQUFLLENBQUNDLE1BQXhCO0FBQ0gsT0FGRCxFQUVHLElBRkg7QUFLQWYsWUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQVVhLE9BQVYsRUFBbUJYLE1BQW5CLEVBQTJCWSxZQUEzQixFQUF5QztBQUMxRW5CLGVBQU8sQ0FBQ29CLEdBQVIsQ0FBWUYsT0FBWjtBQUNBbEIsZUFBTyxDQUFDb0IsR0FBUixDQUFZYixNQUFaO0FBQ0FQLGVBQU8sQ0FBQ29CLEdBQVIsQ0FBWUQsWUFBWjtBQUNBbkIsZUFBTyxDQUFDb0IsR0FBUixDQUFZLEtBQUtQLFVBQWpCOztBQUVBLFlBQUlLLE9BQU8sQ0FBQ0csUUFBUixJQUFvQixPQUF4QixFQUFpQztBQUM3QkYsc0JBQVksQ0FBQztBQUFFRyxpQkFBSyxFQUFFLEtBQUtULFVBQUwsQ0FBZ0JTO0FBQXpCLFdBQUQsQ0FBWjtBQUNIO0FBQ0osT0FURDtBQVdBLFdBQUtDLE9BQUwsR0FBZVQsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxXQUFLRCxPQUFMLENBQWFFLEtBQWIsQ0FBbUJDLFVBQW5CLEdBQWdDLE9BQWhDO0FBQ0EsV0FBS0gsT0FBTCxDQUFhRSxLQUFiLENBQW1CRSxNQUFuQixHQUE0QixNQUE1QjtBQUNBLFdBQUtKLE9BQUwsQ0FBYUUsS0FBYixDQUFtQkcsS0FBbkIsR0FBMkIsS0FBM0I7QUFDQSxXQUFLTCxPQUFMLENBQWFFLEtBQWIsQ0FBbUJJLFFBQW5CLEdBQThCLE9BQTlCO0FBQ0EsV0FBS04sT0FBTCxDQUFhRSxLQUFiLENBQW1CSyxHQUFuQixHQUF5QixLQUF6QjtBQUNBLFdBQUtQLE9BQUwsQ0FBYUUsS0FBYixDQUFtQk0sS0FBbkIsR0FBMkIsT0FBM0I7QUFDQSxXQUFLUixPQUFMLENBQWFFLEtBQWIsQ0FBbUJPLE1BQW5CLEdBQTRCLHFCQUE1QjtBQUNBLFdBQUtULE9BQUwsQ0FBYUUsS0FBYixDQUFtQixXQUFuQixJQUFrQyxvQ0FBbEM7QUFDQSxXQUFLRixPQUFMLENBQWFVLFdBQWIsR0FBMkIsTUFBM0I7QUFDQSxXQUFLVixPQUFMLENBQWFXLEdBQWIsR0FBbUJoQyxNQUFNLENBQUNpQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixhQUF4QixDQUFuQjtBQUVBdEIsY0FBUSxDQUFDdUIsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtmLE9BQS9CO0FBQ0g7OztxQ0FFaUI7QUFDZCxVQUFJLEtBQUtBLE9BQUwsQ0FBYUUsS0FBYixDQUFtQkcsS0FBbkIsSUFBNEIsS0FBaEMsRUFBdUM7QUFDbkMsYUFBS0wsT0FBTCxDQUFhRSxLQUFiLENBQW1CRyxLQUFuQixHQUEyQixPQUEzQjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtMLE9BQUwsQ0FBYUUsS0FBYixDQUFtQkcsS0FBbkIsR0FBMkIsS0FBM0I7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vY29udGVudFNjcmlwdHMvUmVjb3JkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRpY3MgZnJvbSAnLi4vaGVscGVyL3N0YXRpY3MnXG5cbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyBSZWNvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZCBjb25zdHJ1Y3RcIik7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmQgaW5pdFwiKTtcblxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZywgc2VuZGVyKSB7XG4gICAgICAgICAgICBhbGVydCgnY29udGVuIGxpc3RlbmVyJyk7XG4gICAgICAgICAgICBpZiAobXNnID09IHN0YXRpY3MuQWN0aW9ucy5TSURFQkFSX1RPR0dMRSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjb250ZW4gbGlzdGVuZXI6ICcgKyBtc2cpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuX2NsaWNrZWRFbCA9IG51bGw7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tlZEVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB9LCB0cnVlKTtcblxuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcXVlc3QpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIoc2VuZGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLl9jbGlja2VkRWwpO1xuXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5ncmVldGluZyA9PSBcImhlbGxvXCIpIHtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyB2YWx1ZTogdGhpcy5fY2xpY2tlZEVsLnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCI7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnN0eWxlLnJpZ2h0ID0gXCItNTBweFwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuc3R5bGUuekluZGV4ID0gXCI5MDAwMDAwMDAwMDAwMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZVtcImJveFNoYWRvd1wiXSA9IFwicmdiKDAgMCAwIC8gNTklKSAtMnB4IDBweCAxMHB4IDRweFwiO1xuICAgICAgICB0aGlzLl9pZnJhbWUuZnJhbWVCb3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5faWZyYW1lLnNyYyA9IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiL3BvcHVwLmh0bWxcIilcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2lmcmFtZSk7XG4gICAgfVxuXG4gICAgX3NpZGViYXJUb2RkbGUgKCkge1xuICAgICAgICBpZiAodGhpcy5faWZyYW1lLnN0eWxlLndpZHRoID09IFwiMHB4XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS53aWR0aCA9IFwiNDAwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contentScripts/Record.js\n");

/***/ })

})