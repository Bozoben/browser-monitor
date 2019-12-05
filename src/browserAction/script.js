let running = false;
browser.storage.local.get('running').then( data => {
    running = data.running;
    document.getElementById('startStop').innerHTML = running ? "Stop" : "Start";
});


document.getElementById('openMe').addEventListener('click', (e) => {
    openPanel();
    return false;
})

document.getElementById('startStop').addEventListener('click', (e) => {
    running = !running;
    browser.runtime.sendMessage({"event" : running ? "start" : "stop"});
    document.getElementById('startStop').innerHTML = running ? "Stop" : "Start";
    browser.storage.local.set({running});
    return false;
})

var createData = {
    type: "detached_panel",
    url: "panel.html",
    width: 250,
    height: 100
  };

function openPanel() {
    //window.alert("Hey boy");
    var creating = browser.windows.create(createData);
}
 
