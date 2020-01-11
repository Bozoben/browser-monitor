// Cdes start/stop
let running = false;

browser.storage.local.get('running').then( data => {
    running = data.running;

    document.getElementById('startStop').value = running ? "Stop" : "Start";
    document.getElementById('running').innerHTML = running ? "running" : "stopped";
});

document.getElementById('startStop').addEventListener('click', (e) => {
    running = !running;

    document.getElementById('startStop').value = running ? "Stop" : "Start";
    document.getElementById('running').innerHTML = running ? "running" : "stopped";
    
    browser.storage.local.set({running});
    browser.runtime.sendMessage({"event" : running ? "start" : "stop"});
    return false;
})

document.getElementById('options').addEventListener('click', (e) => {
    browser.runtime.openOptionsPage();
    return false;
})




 
