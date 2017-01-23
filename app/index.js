navigator.getBattery().then(function(battery) {

    updateLevelInfo();

    battery.addEventListener('levelchange', function() {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        //  console.log("Battery level: " + battery.level * 100 + "%");

        let widthLevel = battery.level * 100 * 2;
        widthLevel = Math.round(widthLevel);
        let leftLevel = -1 * (200 - widthLevel);

        document.getElementById("batt").style.width = widthLevel.toString() + "px";
        document.getElementById("batt").style.left = leftLevel.toString() + "px";

        // console.log(widthLevel.toString() + "px");
        // console.log(leftLevel.toString() + "px");

        document.getElementById("battext").innerText = battery.level * 100 + "%"
    }
});