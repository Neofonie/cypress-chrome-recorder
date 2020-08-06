import statics from '../helper/statics'
import UiController from './UiController'

export default class Record {
    constructor() {
        this._clickedEl = null;
        this._hanlder = null;
        this._inspectedElement = null;
        this._currentSpec = null;
    }

    init() {
        this.UiController = new UiController();
        this.UiController.init();
        this._listener();
    }

    /**
     * Just placeholder. Gets reengineered
     */
    _getSpec(codeblock = '', contextName = 'Created by Cypress Recorder', itName = 'Generated IT') {
        if (this._currentSpec === null) {
            this._currentSpec = `/// <reference types="cypress" />
            context('${contextName}', () => {
                beforeEach(function () {
                    cy.viewport(1240, 600)
                })

                it('${itName}', () => {
                    VisitPage('')

                    ${codeblock}

                })
            })`;
        }

        return this._currentSpec;
    }

    _updateSpec(code) {
        this._currentSpec = this._getSpec(code);
    }

    _listener() {
        let _ref = this;

        document.addEventListener("contextmenu", function (event) {
            _ref._inspectedElement = event.target;
        }, true);

        chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
            switch (msg.action) {
                case statics.ACTIONS.CTX.OPTIONS.ADD_TO_RECORD:
                    console.dir('Record received: ' + _ref._inspectedElement);
                    break
                case statics.ACTIONS.DOWNLOAD_SPEC:
                    _ref._downloadSpec('DUMMY.spec.js', _ref._getSpec());
                    break
                case statics.ACTIONS.SPEC.GET_CURRENT:
                    sendResponse({ value: _ref._getSpec() });
                    break
            }
        })
    }

    /**
     * Just placeholder. Gets reengineered
     */
    _downloadSpec(filename, content) {
        var a = document.createElement('a');
        var blob = new Blob([content], { type: "text/plain;charset=UTF-8" });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
    }
}