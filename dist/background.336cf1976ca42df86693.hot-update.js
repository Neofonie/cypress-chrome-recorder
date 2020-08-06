/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- */webpackHotUpdate("background",{

/***/ "./background/index.js":
/*!*****************************!*\
  !*** ./background/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/statics */ \"./helper/statics.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // chrome.browserAction.onClicked.addListener(function (tab) {\n//     chrome.tabs.sendMessage(tab.id, \"toggle\");\n// });\n// chrome.contextMenus.onClicked.addListener(function (info, tab) {\n//     //alert(\"CTX\");\n//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\n//         chrome.tabs.sendMessage(tabs[0].id, { greeting: \"hello\", infoPara: info }, function (response) {\n//             console.log(\"Farewell: \" + response.farewell);\n//             elt.value = response.value;\n//         });\n//     });\n// });\n\nvar RecordsManager = /*#__PURE__*/function () {\n  function RecordsManager() {\n    _classCallCheck(this, RecordsManager);\n\n    console.log(\"RecordsManager construct\");\n    this._ctxMenuId = 'neoCypressCtx'; // this._ctnMenuOptions = {\n    //     SELECT_ELEMENT: 'SELECT_ELEMENT'\n    // }\n\n    this._sidebarState = _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].States.Sidebar.OPEN;\n    this._hanlder = null;\n  }\n\n  _createClass(RecordsManager, [{\n    key: \"init\",\n    value: function init() {\n      console.log(\"RecordsManager init\");\n\n      this._createContextMenu();\n    }\n  }, {\n    key: \"_createContextMenu\",\n    value: function _createContextMenu() {\n      var _ref = this;\n\n      console.log(\"RecordsManager _createContextMenu\");\n      chrome.contextMenus.removeAll();\n      chrome.contextMenus.create({\n        id: this._ctxMenuId,\n        title: 'STM Context',\n        contexts: ['all']\n      }); // for (const [key, value] of Object.entries(this._ctnMenuOptions)) {\n      //     console.log(`${key}: ${value}`);\n      // }\n\n      this._handler = this._contextHandler.bind(this);\n      chrome.contextMenus.onClicked.addListener(this._handler);\n      chrome.browserAction.onClicked.addListener(function (tab) {\n        _ref._toggleSidebar(tab);\n      });\n    }\n  }, {\n    key: \"_contextHandler\",\n    value: function _contextHandler(info, tab) {\n      alert(\"RecordsManager _contextHandler\");\n\n      if (info.menuItemId !== undefined) {\n        if (this._sidebarState === _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].States.Sidebar.CLOSED) {\n          this._toggleSidebar(tab);\n        }\n\n        switch (info.menuItemId) {\n          case this._ctxMenuId:\n            // call select element handler\n            this._toggleSidebar(tab);\n\n            break;\n        }\n      }\n    }\n  }, {\n    key: \"_handleSelectElement\",\n    value: function _handleSelectElement() {\n      alert(\"RecordsManager _handleSelectElement\");\n      chrome.tabs.query({\n        active: true,\n        currentWindow: true\n      }, function (tabs) {\n        if (this._sidebarState === _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].States.Sidebar.CLOSED) {\n          this._toggleSidebar(tabs[0]);\n        }\n\n        chrome.tabs.sendMessage(tabs[0].id, {\n          greeting: \"hello\",\n          infoPara: info\n        }, function (response) {\n          elt.value = response.value;\n        });\n      });\n    }\n  }, {\n    key: \"_toggleSidebar\",\n    value: function _toggleSidebar(tab) {\n      alert('RecordsManager _toggleSidebar');\n      chrome.tabs.sendMessage(tab.id, _helper_statics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Actions.SIDEBAR_TOGGLE);\n    }\n  }]);\n\n  return RecordsManager;\n}();\n\nconsole.debug('RecordsManager initialized');\nwindow.recordsManager = new RecordsManager();\nwindow.recordsManager.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL2luZGV4LmpzPzIzYjgiXSwibmFtZXMiOlsiUmVjb3Jkc01hbmFnZXIiLCJjb25zb2xlIiwibG9nIiwiX2N0eE1lbnVJZCIsIl9zaWRlYmFyU3RhdGUiLCJzdGF0aWNzIiwiU3RhdGVzIiwiU2lkZWJhciIsIk9QRU4iLCJfaGFubGRlciIsIl9jcmVhdGVDb250ZXh0TWVudSIsIl9yZWYiLCJjaHJvbWUiLCJjb250ZXh0TWVudXMiLCJyZW1vdmVBbGwiLCJjcmVhdGUiLCJpZCIsInRpdGxlIiwiY29udGV4dHMiLCJfaGFuZGxlciIsIl9jb250ZXh0SGFuZGxlciIsImJpbmQiLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsImJyb3dzZXJBY3Rpb24iLCJ0YWIiLCJfdG9nZ2xlU2lkZWJhciIsImluZm8iLCJhbGVydCIsIm1lbnVJdGVtSWQiLCJ1bmRlZmluZWQiLCJDTE9TRUQiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwic2VuZE1lc3NhZ2UiLCJncmVldGluZyIsImluZm9QYXJhIiwicmVzcG9uc2UiLCJlbHQiLCJ2YWx1ZSIsIkFjdGlvbnMiLCJTSURFQkFSX1RPR0dMRSIsImRlYnVnIiwid2luZG93IiwicmVjb3Jkc01hbmFnZXIiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYztBQUNGLDRCQUFjO0FBQUE7O0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixlQUFsQixDQUZVLENBR1Y7QUFDQTtBQUNBOztBQUNBLFNBQUtDLGFBQUwsR0FBcUJDLHVEQUFPLENBQUNDLE1BQVIsQ0FBZUMsT0FBZixDQUF1QkMsSUFBNUM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7Ozs7MkJBRU07QUFDSFIsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7O0FBQ0EsV0FBS1Esa0JBQUw7QUFDSDs7O3lDQUVvQjtBQUNqQixVQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQVUsWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxTQUFwQjtBQUNBRixZQUFNLENBQUNDLFlBQVAsQ0FBb0JFLE1BQXBCLENBQTJCO0FBQ3ZCQyxVQUFFLEVBQUUsS0FBS2IsVUFEYztBQUV2QmMsYUFBSyxFQUFFLGFBRmdCO0FBR3ZCQyxnQkFBUSxFQUFFLENBQUMsS0FBRDtBQUhhLE9BQTNCLEVBTGlCLENBV2pCO0FBQ0E7QUFDQTs7QUFFQSxXQUFLQyxRQUFMLEdBQWdCLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQWhCO0FBQ0FULFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQlMsU0FBcEIsQ0FBOEJDLFdBQTlCLENBQTBDLEtBQUtKLFFBQS9DO0FBQ0FQLFlBQU0sQ0FBQ1ksYUFBUCxDQUFxQkYsU0FBckIsQ0FBK0JDLFdBQS9CLENBQTJDLFVBQVVFLEdBQVYsRUFBZTtBQUN0RGQsWUFBSSxDQUFDZSxjQUFMLENBQW9CRCxHQUFwQjtBQUNILE9BRkQ7QUFHSDs7O29DQUVlRSxJLEVBQU1GLEcsRUFBSztBQUN2QkcsV0FBSyxDQUFDLGdDQUFELENBQUw7O0FBRUEsVUFBSUQsSUFBSSxDQUFDRSxVQUFMLEtBQW9CQyxTQUF4QixFQUFtQztBQUMvQixZQUFJLEtBQUsxQixhQUFMLEtBQXVCQyx1REFBTyxDQUFDQyxNQUFSLENBQWVDLE9BQWYsQ0FBdUJ3QixNQUFsRCxFQUEwRDtBQUN0RCxlQUFLTCxjQUFMLENBQW9CRCxHQUFwQjtBQUNIOztBQUVELGdCQUFRRSxJQUFJLENBQUNFLFVBQWI7QUFDSSxlQUFNLEtBQUsxQixVQUFYO0FBQ0k7QUFDQSxpQkFBS3VCLGNBQUwsQ0FBb0JELEdBQXBCOztBQUNBO0FBSlI7QUFNSDtBQUNKOzs7MkNBRXNCO0FBQ25CRyxXQUFLLENBQUMscUNBQUQsQ0FBTDtBQUVBaEIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZQyxLQUFaLENBQWtCO0FBQUVDLGNBQU0sRUFBRSxJQUFWO0FBQWdCQyxxQkFBYSxFQUFFO0FBQS9CLE9BQWxCLEVBQXlELFVBQVVILElBQVYsRUFBZ0I7QUFDckUsWUFBSSxLQUFLNUIsYUFBTCxLQUF1QkMsdURBQU8sQ0FBQ0MsTUFBUixDQUFlQyxPQUFmLENBQXVCd0IsTUFBbEQsRUFBMEQ7QUFDdEQsZUFBS0wsY0FBTCxDQUFvQk0sSUFBSSxDQUFDLENBQUQsQ0FBeEI7QUFDSDs7QUFFRHBCLGNBQU0sQ0FBQ29CLElBQVAsQ0FBWUksV0FBWixDQUF3QkosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRaEIsRUFBaEMsRUFBb0M7QUFBRXFCLGtCQUFRLEVBQUUsT0FBWjtBQUFxQkMsa0JBQVEsRUFBRVg7QUFBL0IsU0FBcEMsRUFBMkUsVUFBVVksUUFBVixFQUFvQjtBQUMzRkMsYUFBRyxDQUFDQyxLQUFKLEdBQVlGLFFBQVEsQ0FBQ0UsS0FBckI7QUFDSCxTQUZEO0FBR0gsT0FSRDtBQVNIOzs7bUNBRWNoQixHLEVBQUs7QUFDaEJHLFdBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0FoQixZQUFNLENBQUNvQixJQUFQLENBQVlJLFdBQVosQ0FBd0JYLEdBQUcsQ0FBQ1QsRUFBNUIsRUFBZ0NYLHVEQUFPLENBQUNxQyxPQUFSLENBQWdCQyxjQUFoRDtBQUNIOzs7Ozs7QUFHTDFDLE9BQU8sQ0FBQzJDLEtBQVIsQ0FBYyw0QkFBZDtBQUNBQyxNQUFNLENBQUNDLGNBQVAsR0FBd0IsSUFBSTlDLGNBQUosRUFBeEI7QUFDQTZDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsSUFBdEIiLCJmaWxlIjoiLi9iYWNrZ3JvdW5kL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRpY3MgZnJvbSAnLi4vaGVscGVyL3N0YXRpY3MnXG5cbi8vIGNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiKSB7XG4vLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBcInRvZ2dsZVwiKTtcbi8vIH0pO1xuXG4vLyBjaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoaW5mbywgdGFiKSB7XG4vLyAgICAgLy9hbGVydChcIkNUWFwiKTtcblxuLy8gICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4vLyAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHsgZ3JlZXRpbmc6IFwiaGVsbG9cIiwgaW5mb1BhcmE6IGluZm8gfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhcmV3ZWxsOiBcIiArIHJlc3BvbnNlLmZhcmV3ZWxsKTtcbi8vICAgICAgICAgICAgIGVsdC52YWx1ZSA9IHJlc3BvbnNlLnZhbHVlO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH0pO1xuXG5jbGFzcyBSZWNvcmRzTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3Jkc01hbmFnZXIgY29uc3RydWN0XCIpO1xuICAgICAgICB0aGlzLl9jdHhNZW51SWQgPSAnbmVvQ3lwcmVzc0N0eCc7XG4gICAgICAgIC8vIHRoaXMuX2N0bk1lbnVPcHRpb25zID0ge1xuICAgICAgICAvLyAgICAgU0VMRUNUX0VMRU1FTlQ6ICdTRUxFQ1RfRUxFTUVOVCdcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9zaWRlYmFyU3RhdGUgPSBzdGF0aWNzLlN0YXRlcy5TaWRlYmFyLk9QRU47XG4gICAgICAgIHRoaXMuX2hhbmxkZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3Jkc01hbmFnZXIgaW5pdFwiKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ29udGV4dE1lbnUoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29udGV4dE1lbnUoKSB7XG4gICAgICAgIGxldCBfcmVmID0gdGhpcztcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZHNNYW5hZ2VyIF9jcmVhdGVDb250ZXh0TWVudVwiKTtcbiAgICAgICAgY2hyb21lLmNvbnRleHRNZW51cy5yZW1vdmVBbGwoKTtcbiAgICAgICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuX2N0eE1lbnVJZCxcbiAgICAgICAgICAgIHRpdGxlOiAnU1RNIENvbnRleHQnLFxuICAgICAgICAgICAgY29udGV4dHM6IFsnYWxsJ10sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2N0bk1lbnVPcHRpb25zKSkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLl9jb250ZXh0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBjaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0aGlzLl9oYW5kbGVyKTtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgIF9yZWYuX3RvZ2dsZVNpZGViYXIodGFiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NvbnRleHRIYW5kbGVyKGluZm8sIHRhYikge1xuICAgICAgICBhbGVydChcIlJlY29yZHNNYW5hZ2VyIF9jb250ZXh0SGFuZGxlclwiKTtcblxuICAgICAgICBpZiAoaW5mby5tZW51SXRlbUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaWRlYmFyU3RhdGUgPT09IHN0YXRpY3MuU3RhdGVzLlNpZGViYXIuQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlU2lkZWJhcih0YWIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGluZm8ubWVudUl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgKHRoaXMuX2N0eE1lbnVJZCk6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgc2VsZWN0IGVsZW1lbnQgaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVTaWRlYmFyKHRhYilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVTZWxlY3RFbGVtZW50KCkge1xuICAgICAgICBhbGVydChcIlJlY29yZHNNYW5hZ2VyIF9oYW5kbGVTZWxlY3RFbGVtZW50XCIpO1xuXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2lkZWJhclN0YXRlID09PSBzdGF0aWNzLlN0YXRlcy5TaWRlYmFyLkNMT1NFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVNpZGViYXIodGFic1swXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHsgZ3JlZXRpbmc6IFwiaGVsbG9cIiwgaW5mb1BhcmE6IGluZm8gfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZWx0LnZhbHVlID0gcmVzcG9uc2UudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZVNpZGViYXIodGFiKSB7XG4gICAgICAgIGFsZXJ0KCdSZWNvcmRzTWFuYWdlciBfdG9nZ2xlU2lkZWJhcicpO1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHN0YXRpY3MuQWN0aW9ucy5TSURFQkFSX1RPR0dMRSk7XG4gICAgfVxufVxuXG5jb25zb2xlLmRlYnVnKCdSZWNvcmRzTWFuYWdlciBpbml0aWFsaXplZCcpO1xud2luZG93LnJlY29yZHNNYW5hZ2VyID0gbmV3IFJlY29yZHNNYW5hZ2VyKCk7XG53aW5kb3cucmVjb3Jkc01hbmFnZXIuaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./background/index.js\n");

/***/ })

})