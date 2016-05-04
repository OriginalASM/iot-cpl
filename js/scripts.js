(new function() {
    var host = 'ws://192.168.1.51:8000'
    var ws = new WebSocket(host);
    var fanSpeed = 0;
    var fanSpeedUp = document.getElementById("fan-speed-up");
    var needle = document.getElementById("animation-speedometer-needle");
    fanSpeedUp.onclick = function(e) {
        fanSpeed = Math.min(fanSpeed + 51, 255) //  255;
        console.log(fanSpeed);
        console.log("rotate(" + (-85 + 34 * (fanSpeed / 51)) + "deg)");
        needle.style.transform = "rotate(" + (-85 + 34 * (fanSpeed / 51)) + "deg)";
        ws.send('fan '+fanSpeed);

    }
    var fanSpeedDown = document.getElementById("fan-speed-down");
    fanSpeedDown.onclick = function(e) {
        fanSpeed = Math.max(fanSpeed - 51, 0);
        console.log(fanSpeed);
        console.log("rotate(" + (-85 + 34 * (fanSpeed / 51)) + "deg)");
        needle.style.transform = "rotate(" + (-85 + 34 * (fanSpeed / 51)) + "deg)";
        ws.send('fan '+fanSpeed);

    }
    ws.onmessage = function(event) {
        console.log(event.data);
    };
    var light = document.getElementById("light-1-switch");

    light.addEventListener("change", function() {
        ws.send('light '+light.checked);
    });

    var lightIntensity = document.getElementById("lightIntensity");

    lightIntensity,addEventListener("change", function() {
    	ws.send('light '+lightIntensity.value);
    });

    var fan = document.getElementById("fan-1-switch");
    fan.addEventListener("change", function() {
        ws.send('fan '+fan.checked);
    });
})();