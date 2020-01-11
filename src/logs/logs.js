function messageListener(message) {
    let event = message.event;
    switch (event) {
        case 'ba-log':
            if (!message.content)
                break;
            let div = document.createElement("div");
            let span = document.createElement("span");
            span.innerHTML = formatTime(new Date()) + ' ';
            let spanText = document.createElement("span");
            spanText.innerHTML = message.content;
            div.appendChild(span);
            div.appendChild(spanText);
            document.getElementById('logContent').appendChild(div);
            break;
    }
}

function padMs(n) {
    return n<10 ? '00'+n : (n < 100) ? '0' + n : n;
}

function formatTime(d) {
    return d.toLocaleTimeString() + ':' + padMs(d.getMilliseconds())
}

browser.runtime.onMessage.addListener(messageListener);

document.getElementById('clear').addEventListener('click', (e) => {
    document.getElementById('logContent').innerHTML=null;    
});