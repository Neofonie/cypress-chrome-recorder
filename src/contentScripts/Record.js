import statics from '../helper/statics'
import UiController from './UiController'

export default class Record {
    constructor() {
        console.log("Record construct");

        this._clickedEl = null;
        this._hanlder = null;
        this._inspectedElement = null;
    }

    init() {
        console.log("Record init");

        this.UiController = new UiController();
        this.UiController.init();
        this._listener();
    }

    _listener() {
        let _ref = this;

        document.addEventListener("contextmenu", function (event) {
            _ref._inspectedElement = event.target;
        }, true);

        chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
            switch (msg.action) {
                case statics.Actions.CTX.INSPECT:
                    console.dir('Record received: ' + _ref._inspectedElement);
                    break
            }
        })
    }
}