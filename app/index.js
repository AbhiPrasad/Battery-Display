var battery = navigator.getBattery();

if (battery) {
    //battery API supported

    console.log("battery level: ", Math.floor(battery.level * 100) + "%");

    console.log("device is ", (battery.charging ? "charging" : "discharging"));

    console.log("hello");

    document.getElementById('bat1').innerText = "hello";
}

console.log("hello");

document.getElementById("OK").textContent = 'hello';