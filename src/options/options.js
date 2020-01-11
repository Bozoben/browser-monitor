function initOptions() {
    browser.storage.local.get("options").then((data) => {
        let {tabs, webRequests} = data.options;
        if (tabs) {
            document.getElementById("tabUrls").value = tabs.urls.join(",");
            document.getElementById("tabProperties").value = tabs.properties.join(",");
        }
        if (webRequests) {
            document.getElementById("webUrls").value = webRequests.urls.join(",");
            document.getElementById("webTypes").value = webRequests.types.join(",");
        }
    })
}


function updateOptions() {
    console.log("Update options !");
    let options = {
        tabs : {
            urls : document.getElementById("tabUrls").value.split(','),
            properties : document.getElementById("tabProperties").value.split(',')
        },
        webRequests : {
            urls: document.getElementById("webUrls").value.split(','),
            types: document.getElementById("webTypes").value.split(',')
        }
    };
    browser.storage.local.set({options});
}

initOptions();
document.getElementById('updateOptions').addEventListener('click', (e) => {
    updateOptions();
    return false;
})


document.getElementById('webTypesDetail').addEventListener('click', (e) => {
    //window.open("webtypes-popup.html","here");
    browser.windows.create({
        type: "detached_panel",
        url: "webtypes.html",
        width: 500,
        height: 500
      });
    return false;
})