let webTypes = [
    "beacon",
    "csp_report",
    "font",
    "image",
    "imageset",
    "main_frame",
    "media",
    "object",
    "object_subrequest",
    "ping",
    "script",
    "speculative",
    "stylesheet",
    "sub_frame",
    "web_manifest",
    "websocket",
    "xbl",
    "xml_dtd",
    "xmlhttprequest",
    "xslt",
    "other"
];

webTypes.forEach((webtype, index) => {
    let label= document.createElement("label");
    let description = document.createTextNode(webtype);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "webtype";
    checkbox.value = webtype;
    label.appendChild(checkbox);
    label.appendChild(description); 
    let span = document.createElement("span");
    span.className = "half";
    span.appendChild(label);
    document.getElementById('types_div').appendChild(span);
});


document.getElementById('update').addEventListener('click', (e) => {
    let result = [];
    document.getElementsByName("webtype").forEach(e => {
        if (e.checked)
            result.push(e.value);
    })
    window.opener.getElementById("webtype").value=result.join(',');
    window.close();
})

document.getElementById('cancel').addEventListener('click', (e) => {
    window.close();
})
