let logTabData = {
    index:0,
    url: "logs/logs.html",
  };
let logTab = browser.tabs.create(logTabData);

// Yeeeah
function start() {
    addListeners();
}

function stop() {
    removeListeners();
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


// init options
let options = {
    tabs : {
        urls : ["*://*"],
        properties : ["status","title"]
    },
    webRequests : {
        urls: ["https://*"],
        types: ["xmlhttprequest"]
    }
};

browser.storage.local.set({options});
browser.storage.local.set({running : false});

browser.storage.local.get().then(data => {
    console.log("Storage", data);
})

browser.runtime.onMessage.addListener(messageListener);