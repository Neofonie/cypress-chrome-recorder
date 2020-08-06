import statics from '../helper/statics'

export default class Record {
    constructor() {
        console.log("Record construct");
    }

    init() {
        console.log("Record init");

        let _ref = this;

        chrome.runtime.onMessage.addListener(function (msg, sender) {
            if (msg == statics.Actions.SIDEBAR_TOGGLE) {
                _ref._sidebarToddle();
            }
        })

        this._clickedEl = null;

        document.addEventListener("contextmenu", function (event) {
            this._clickedEl = event.target;
        }, true);


        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            console.dir(request);
            console.dir(sender);
            console.dir(sendResponse);
            console.dir(this._clickedEl);

            if (request.greeting == "hello") {
                sendResponse({ value: this._clickedEl.value });
            }
        });

        this._iframe = document.createElement('iframe');
        this._iframe.style.background = "green";
        this._iframe.style.height = "100%";
        this._iframe.style.width = "0px";
        this._iframe.style.position = "fixed";
        this._iframe.style.top = "0px";
        this._iframe.style.right = "-50px";
        this._iframe.style.zIndex = "9000000000000000000";
        this._iframe.style["boxShadow"] = "rgb(0 0 0 / 59%) -2px 0px 10px 4px";
        this._iframe.frameBorder = "none";
        this._iframe.src = chrome.extension.getURL("popup.html")

        document.body.appendChild(this._iframe);
    }

    _sidebarToddle() {
        if (this._iframe.style.width == "0px") {
            this._iframe.style.width = "400px";
        }
        else {
            this._iframe.style.width = "0px";
        }
    }
}