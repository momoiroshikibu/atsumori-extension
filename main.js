chrome.webNavigation.onCompleted.addListener((e) => {
    chrome.tabs.executeScript(e.tabId, {
        file: './scripts/show-atsumori.js'
    });
});
