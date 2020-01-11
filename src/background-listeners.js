let webListener = (details) => {
    dolog(`Tab ${details.tabId} (${details.documentUrl}) WebRequest : ${details.url}`); 
}

let tabUpdated = (tabId, changeInfo, tabInfo) => {
    if (changeInfo.status && changeInfo.status === 'complete')
        dolog(`Tab ${tabId} (${tabInfo.url}) is complete`);
    else {
        const info = JSON.stringify(changeInfo);
        dolog(`Tab ${tabId} (${tabInfo.url}) changed : ${info}`);
    } 
}

let tabCreated = (tab) => {
    dolog(`Tab ${tab.tabId} (${tab.url}) created`);
}      


// Add listeners
function addListeners() {
    browser.webRequest.onBeforeRequest.addListener(
        webListener,
        {urls: ["<all_urls>"]}
      );

    // Tab creation
    browser.tabs.onCreated.addListener(tabCreated);

    // Tab update
    browser.tabs.onUpdated.addListener(tabUpdated, {urls: ["<all_urls>"],
            properties : ["status","title"]});
}

// Remove Listeners
function removeListeners() {
    browser.webRequest.onBeforeRequest.removeListener(webListener);
    browser.tabs.onCreated.removeListener(tabCreated);
    browser.tabs.onUpdated.removeListener(tabUpdated);
}

function dolog(content) {
    console.log(content);
    browser.runtime.sendMessage({"event" : "ba-log", content});
}