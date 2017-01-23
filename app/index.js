navigator.getBattery().then(function(battery) {

    updateLevelInfo();

    battery.addEventListener('levelchange', function() {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        //  console.log("Battery level: " + battery.level * 100 + "%");
        let batLevel = Math.round(battery.level * 100);
        let widthLevel = batLevel * 2;
        let leftLevel = -1 * (200 - widthLevel);

        document.getElementById("batt").style.width = widthLevel.toString() + "px";
        document.getElementById("batt").style.left = leftLevel.toString() + "px";

        // console.log(widthLevel.toString() + "px");
        // console.log(leftLevel.toString() + "px");

        document.getElementById("battext").innerText = batLevel + "%"

        if (batLevel <= 10) {
            document.getElementById("batt").style.backgroundColor = "red";
        } else if (batLevel <= 30) {
            document.getElementById("batt").style.backgroundColor = "yellow";
        } else {
            document.getElementById("batt").style.backgroundColor = "green";
        }
    }
});