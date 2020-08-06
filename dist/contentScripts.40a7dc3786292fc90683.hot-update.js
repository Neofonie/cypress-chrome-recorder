webpackHotUpdate("contentScripts",{

/***/ "./contentScripts/index.js":
/*!*********************************!*\
  !*** ./contentScripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ \"./contentScripts/index.styl\");\n/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/statics */ \"./helper/statics.js\");\n\n\nchrome.runtime.onMessage.addListener(function (msg, sender) {\n  if (msg == _helper_statics__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Actions.SIDEBAR_TOGGLE) {\n    toggle();\n  }\n});\nvar clickedEl = null;\ndocument.addEventListener(\"contextmenu\", function (event) {\n  clickedEl = event.target;\n}, true);\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n  console.dir(request);\n  console.dir(sender);\n  console.dir(sendResponse);\n  console.dir(clickedEl);\n\n  if (request.greeting == \"hello\") {\n    sendResponse({\n      value: clickedEl.value\n    });\n  }\n});\nvar iframe = document.createElement('iframe');\niframe.style.background = \"green\";\niframe.style.height = \"100%\";\niframe.style.width = \"0px\";\niframe.style.position = \"fixed\";\niframe.style.top = \"0px\";\niframe.style.right = \"-50px\";\niframe.style.zIndex = \"9000000000000000000\";\niframe.style[\"boxShadow\"] = \"rgb(0 0 0 / 59%) -2px 0px 10px 4px\";\niframe.frameBorder = \"none\";\niframe.src = chrome.extension.getURL(\"/popup.html\");\ndocument.body.appendChild(iframe);\n\nfunction toggle() {\n  if (iframe.style.width == \"0px\") {\n    iframe.style.width = \"400px\";\n  } else {\n    iframe.style.width = \"0px\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50U2NyaXB0cy9pbmRleC5qcz83ZWZjIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInN0YXRpY3MiLCJBY3Rpb25zIiwiU0lERUJBUl9UT0dHTEUiLCJ0b2dnbGUiLCJjbGlja2VkRWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlcXVlc3QiLCJzZW5kUmVzcG9uc2UiLCJjb25zb2xlIiwiZGlyIiwiZ3JlZXRpbmciLCJ2YWx1ZSIsImlmcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJmcmFtZUJvcmRlciIsInNyYyIsImV4dGVuc2lvbiIsImdldFVSTCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDeEQsTUFBSUQsR0FBRyxJQUFJRSx1REFBTyxDQUFDQyxPQUFSLENBQWdCQyxjQUEzQixFQUEyQztBQUN2Q0MsVUFBTTtBQUNUO0FBQ0osQ0FKRDtBQU1BLElBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDLFVBQVNDLEtBQVQsRUFBZTtBQUNwREgsV0FBUyxHQUFHRyxLQUFLLENBQUNDLE1BQWxCO0FBQ0gsQ0FGRCxFQUVHLElBRkg7QUFLQWQsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQVVZLE9BQVYsRUFBbUJWLE1BQW5CLEVBQTJCVyxZQUEzQixFQUF5QztBQUMxRUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFDQVksU0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFNBQVo7O0FBRUEsTUFBSUssT0FBTyxDQUFDSSxRQUFSLElBQW9CLE9BQXhCLEVBQWlDO0FBQzdCSCxnQkFBWSxDQUFDO0FBQUNJLFdBQUssRUFBRVYsU0FBUyxDQUFDVTtBQUFsQixLQUFELENBQVo7QUFDSDtBQUNKLENBVEQ7QUFXQSxJQUFJQyxNQUFNLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxVQUFiLEdBQTBCLE9BQTFCO0FBQ0FILE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRSxNQUFiLEdBQXNCLE1BQXRCO0FBQ0FKLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxLQUFiLEdBQXFCLEtBQXJCO0FBQ0FMLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSSxRQUFiLEdBQXdCLE9BQXhCO0FBQ0FOLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSyxHQUFiLEdBQW1CLEtBQW5CO0FBQ0FQLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTSxLQUFiLEdBQXFCLE9BQXJCO0FBQ0FSLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTyxNQUFiLEdBQXNCLHFCQUF0QjtBQUNBVCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxXQUFiLElBQTRCLG9DQUE1QjtBQUNBRixNQUFNLENBQUNVLFdBQVAsR0FBcUIsTUFBckI7QUFDQVYsTUFBTSxDQUFDVyxHQUFQLEdBQWFoQyxNQUFNLENBQUNpQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixhQUF4QixDQUFiO0FBRUF2QixRQUFRLENBQUN3QixJQUFULENBQWNDLFdBQWQsQ0FBMEJmLE1BQTFCOztBQUVBLFNBQVNaLE1BQVQsR0FBa0I7QUFDZCxNQUFJWSxNQUFNLENBQUNFLEtBQVAsQ0FBYUcsS0FBYixJQUFzQixLQUExQixFQUFpQztBQUM3QkwsVUFBTSxDQUFDRSxLQUFQLENBQWFHLEtBQWIsR0FBcUIsT0FBckI7QUFDSCxHQUZELE1BR0s7QUFDREwsVUFBTSxDQUFDRSxLQUFQLENBQWFHLEtBQWIsR0FBcUIsS0FBckI7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vY29udGVudFNjcmlwdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguc3R5bCdcblxuaW1wb3J0IHN0YXRpY3MgZnJvbSAnLi4vaGVscGVyL3N0YXRpY3MnXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnLCBzZW5kZXIpIHtcbiAgICBpZiAobXNnID09IHN0YXRpY3MuQWN0aW9ucy5TSURFQkFSX1RPR0dMRSkge1xuICAgICAgICB0b2dnbGUoKTtcbiAgICB9XG59KVxuXG52YXIgY2xpY2tlZEVsID0gbnVsbDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBjbGlja2VkRWwgPSBldmVudC50YXJnZXQ7XG59LCB0cnVlKTtcblxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5kaXIocmVxdWVzdCk7XG4gICAgY29uc29sZS5kaXIoc2VuZGVyKTtcbiAgICBjb25zb2xlLmRpcihzZW5kUmVzcG9uc2UpO1xuICAgIGNvbnNvbGUuZGlyKGNsaWNrZWRFbCk7XG5cbiAgICBpZiAocmVxdWVzdC5ncmVldGluZyA9PSBcImhlbGxvXCIpIHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt2YWx1ZTogY2xpY2tlZEVsLnZhbHVlfSk7XG4gICAgfVxufSk7XG5cbnZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbmlmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJncmVlblwiO1xuaWZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuaWZyYW1lLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcbmlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbmlmcmFtZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuaWZyYW1lLnN0eWxlLnJpZ2h0ID0gXCItNTBweFwiO1xuaWZyYW1lLnN0eWxlLnpJbmRleCA9IFwiOTAwMDAwMDAwMDAwMDAwMDAwMFwiO1xuaWZyYW1lLnN0eWxlW1wiYm94U2hhZG93XCJdID0gXCJyZ2IoMCAwIDAgLyA1OSUpIC0ycHggMHB4IDEwcHggNHB4XCI7XG5pZnJhbWUuZnJhbWVCb3JkZXIgPSBcIm5vbmVcIjtcbmlmcmFtZS5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcIi9wb3B1cC5odG1sXCIpXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGlmIChpZnJhbWUuc3R5bGUud2lkdGggPT0gXCIwcHhcIikge1xuICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSBcIjQwMHB4XCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contentScripts/index.js\n");

/***/ })

})