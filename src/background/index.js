import statics from '../helper/statics'

class RecordsManager {
    constructor() {
        console.log("RecordsManager construct");
        this._ctxMenuId = 'neoCypressCtx';
        // this._ctnMenuOptions = {
        //     SELECT_ELEMENT: 'SELECT_ELEMENT'
        // }
        this._sidebarState = statics.States.Sidebar.CLOSED;
        this._hanlder = null;
    }

    init() {
        console.log("RecordsManager init");
        this._createContextMenu();
    }

    _createContextMenu() {
        let _ref = this;

        console.log("RecordsManager _createContextMenu");
        chrome.contextMenus.removeAll();
        chrome.contextMenus.create({
            id: this._ctxMenuId,
            title: 'STM Context',
            contexts: ['all'],
        });

        // for (const [key, value] of Object.entries(this._ctnMenuOptions)) {
        //     console.log(`${key}: ${value}`);
        // }

        this._handler = this._contextHandler.bind(this);
        chrome.contextMenus.onClicked.addListener(this._handler);
        chrome.browserAction.onClicked.addListener(function (tab) {
            _ref._toggleSidebar(tab, _ref._sidebarState === statics.States.Sidebar.CLOSED);
        });
    }

    _contextHandler(info, tab) {
        if (info.menuItemId !== undefined) {
            switch (info.menuItemId) {
                case (this._ctxMenuId):
                    // call select element handler
                    this._toggleSidebar(tab);
                    break
            }
        }
    }

    _handleSelectElement() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello", infoPara: info }, function (response) {
                this._toggleSidebar(tabs[0]);
                elt.value = response.value;
            });
        });
    }

    _toggleSidebar(tab, shouldBeOpen = true) {
        if ((shouldBeOpen && (this._sidebarState === statics.States.Sidebar.CLOSED)) ||
            (!shouldBeOpen && (this._sidebarState === statics.States.Sidebar.OPEN))) {
            this._sidebarState = shouldBeOpen ? statics.States.Sidebar.OPEN : statics.States.Sidebar.CLOSED;
            chrome.tabs.sendMessage(tab.id, statics.Actions.SIDEBAR_TOGGLE);
        }
    }
}

console.debug('RecordsManager initialized');
window.recordsManager = new RecordsManager();
window.recordsManager.init();