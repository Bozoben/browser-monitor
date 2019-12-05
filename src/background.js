// Put all the javascript code here, that you want to execute in background.



function start() {
    console.log("Start Logging !");
    addListeners();
}

function stop() {
    console.log("Stop Logging !");
    removeListeners();
}


// Add listeners
function addListeners() {
    console.log("Add Listeners");
    browser.webRequest.onBeforeRequest.addListener(
        webListener,
        {urls: ["<all_urls>"]}
      );
}

// Remove Listeners
function removeListeners() {
    console.log("Remove Listeners");
    browser.webRequest.onBeforeRequest.removeListener(webListener);
}

// Messages
function messageListener(message) {
    let event = message.event;
    switch (event) {
        case 'start':
            start();
            break;
        case 'stop':
            stop();
            break;
        default:
            console.warn("Unknown event :", event);
    }
}

browser.runtime.onMessage.addListener(messageListener);