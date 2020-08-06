import statics from '../helper/statics'

export default class UiController {
    constructor() {
        console.log("UiController init");
        let _iframe = document.createElement('iframe');
        _iframe.style.height = "100%";
        _iframe.style.width = "0px";
        _iframe.style.position = "fixed";
        _iframe.style.top = "0px";
        _iframe.style.right = "-50px";
        _iframe.style.zIndex = "9000000000000000000";
        _iframe.style["boxShadow"] = "rgb(0 0 0 / 59%) -2px 0px 10px 4px";
        _iframe.frameBorder = "none";
        _iframe.src = chrome.runtime.getURL("sidebar.html");

        this._iframe = _iframe;
        this._sidebarState = statics.STATES.SIDEBAR.CLOSED;
        this._inspectedElement = null;
    }

    init() {
        document.body.appendChild(this._iframe);
        this._listener();
    }

    _listener() {
        let _ref = this;

        document.addEventListener("contextmenu", function (event) {
            _ref._inspectedElement = event.target;
        }, true);

        chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
            switch (msg.action) {
                case statics.ACTIONS.SIDEBAR_TOGGLE:
                    _ref._toggleSidebar();
                    break
                case statics.ACTIONS.CTX.OPTIONS.ADD_TO_RECORD:
                    console.dir(_ref._inspectedElement);
                    break
            }
        })
    }

    _toggleSidebar() {
        if (this._sidebarState === statics.STATES.SIDEBAR.CLOSED) {
            this._iframe.style.width = "400px";
            this._sidebarState = statics.STATES.SIDEBAR.OPEN;
        } else {
            this._iframe.style.width = "0px";
            this._sidebarState = statics.STATES.SIDEBAR.CLOSED;
        }
    }
}