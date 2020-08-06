import statics from '../helper/statics'

class RecordsManager {
    constructor() {
        console.log("RecordsManager construct");
        this._ctxMenuId = 'neoCypressCtx';
    }

    init() {
        console.log("RecordsManager init");

        chrome.browserAction.onClicked.addListener(function (tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: statics.Actions.SIDEBAR_TOGGLE,
                tab: tab
            });
        });

        this._createContextMenu();
    }

    _createContextMenu() {
        let _ref = this;

        console.log("RecordsManager _createContextMenu");
        chrome.contextMenus.removeAll();
        chrome.contextMenus.create({
            id: this._ctxMenuId,
            title: 'Cypress Recorder',
            contexts: ['all'],
        });

        // for (const [key, value] of Object.entries(this._ctnMenuOptions)) {
        //     console.log(`${key}: ${value}`);
        // }

        this._handler = this._contextHandler.bind(this);
        chrome.contextMenus.onClicked.addListener(this._handler);
    }

    _contextHandler(info, tab) {
        console.dir(info);
        if (info.menuItemId !== undefined) {
            switch (info.menuItemId) {
                case (this._ctxMenuId):
                    console.log("ctx in option");
                    // call select element handler
                    this._handleSelectElement();
                    break
            }
        }
    }

    _handleSelectElement() {
        console.log("ctx in _handleSelectElement");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: statics.Actions.CTX.INSPECT } );
        });
    }
}

console.debug('RecordsManager initialized');
window.recordsManager = new RecordsManager();
window.recordsManager.init();