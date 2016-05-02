var host = 'ws://10.0.0.3:3001'
var ws = new WebSocket(host);

var fanSpeed = 0;

var fanSpeedUp = document.getElementById("fan-speed-up");
var needle = document.getElementById("animation-speedometer-needle");

fanSpeedUp.onclick = function (e) {
	fanSpeed = fanSpeed + 51;//  255;
	console.log(fanSpeed);
	console.log("rotate("+(-85 + 34*(fanSpeed/51))+"deg)");
	needle.style.transform = "rotate("+(-85 + 34*(fanSpeed/51))+"deg)"; 
}

var fanSpeedDown = document.getElementById("fan-speed-up");

fanSpeedDown.onclick = function (e) {
	fanSpeed = Math.max(fanSpeed - 51,0);
	console.log(fanSpeed);
	console.log("rotate("+(-85 + 34*(fanSpeed/51))+"deg)");
	needle.style.transform = "rotate("+(-85 + 34*(fanSpeed/51))+"deg)"; 
}

ws.onmessage = function(event) {
    console.log(event.data);
};
var forward = document.getElementById("light-1-switch");
forward.onclick = function() {
    ws.send('f');
};
var left = document.getElementById("fan-1-switch");
left.onclick = function() {
    ws.send('l');
};
