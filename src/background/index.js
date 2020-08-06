import statics from '../helper/statics'

class RecordsManager {
    constructor() {
        console.log("RecordsManager construct");
    }

    init() {
        console.log("RecordsManager init");

        chrome.browserAction.onClicked.addListener(function (tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: statics.ACTIONS.SIDEBAR_TOGGLE,
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
            id: statics.ACTIONS.CTX.ROOT_ID,
            title: 'Cypress Recorder',
            contexts: ['all'],
        });

        chrome.contextMenus.create({
            id: statics.ACTIONS.CTX.ROOT_ID + statics.ACTIONS.CTX.OPTIONS.ADD_TO_RECORD,
            title: 'Add to record',
            parentId: statics.ACTIONS.CTX.ROOT_ID,
            contexts: ['all']
        })

        chrome.contextMenus.create({
            id: statics.ACTIONS.CTX.ROOT_ID + statics.ACTIONS.CTX.OPTIONS.DOWNLOAD_SPEC,
            title: 'Download dummy Spec',
            parentId: statics.ACTIONS.CTX.ROOT_ID,
            contexts: ['all']
        })

        this._handler = this._contextHandler.bind(this);
        chrome.contextMenus.onClicked.addListener(this._handler);
    }

    _contextHandler(info, tab) {
        console.dir(info);
        if (info.menuItemId !== undefined) {
            switch (info.menuItemId) {
                case (statics.ACTIONS.CTX.ROOT_ID + statics.ACTIONS.CTX.OPTIONS.ADD_TO_RECORD):
                    console.log("ctx in option add to record");
                    // call select element handler
                    this._handleSelectElement();
                    break
                case (statics.ACTIONS.CTX.ROOT_ID + statics.ACTIONS.CTX.OPTIONS.DOWNLOAD_SPEC):
                    console.log("ctx in option download");
                    this._handleDownloadSpec();
                    break
            }
        }
    }

    _handleDownloadSpec() {
        let _ref = this;
        console.log("ctx in _handleDownloadSpec");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: statics.ACTIONS.CTX.OPTIONS.DOWNLOAD_SPEC });
        });
    }

    _handleSelectElement() {
        let _ref = this;
        console.log("ctx in _handleSelectElement");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: statics.ACTIONS.CTX.OPTIONS.ADD_TO_RECORD });
        });
    }
}

console.debug('RecordsManager initialized');
window.recordsManager = new RecordsManager();
window.recordsManager.init();