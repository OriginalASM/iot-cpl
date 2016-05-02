var host = 'ws://10.0.0.3:3001'
var ws = new WebSocket(host);
ws.onmessage = function(event) {
    console.log(event.data);
};
var forward = document.getElementById("forward");
forward.onclick = function() {
    ws.send('f');
};
var left = document.getElementById("left");
left.onclick = function() {
    ws.send('l');
};
var right = document.getElementById("right");
right.onclick = function() {
    ws.send('r');
};
var back = document.getElementById("back");
back.onclick = function() {
    ws.send('b');
};