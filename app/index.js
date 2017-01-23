navigator.getBattery().then(function(battery) {

    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }

    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', function() {
        updateChargeInfo();
    });

    function updateChargeInfo() {
        console.log("Battery charging? " +
            (battery.charging ? "Yes" : "No"));
    }

    battery.addEventListener('levelchange', function() {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        console.log("Battery level: " + battery.level * 100 + "%");
        let widthLevel = battery.level * 100 * 2;
        widthLevel = Math.round(widthLevel);
        let leftLevel = -1 * (200 - widthLevel);

        document.getElementById("batt").style.width = widthLevel.toString() + "px";
        document.getElementById("batt").style.left = leftLevel.toString() + "px";

        console.log(widthLevel.toString() + "px");
        console.log(leftLevel.toString() + "px");

        document.getElementById("battext").innerText = battery.level * 100 + "%"
    }

    battery.addEventListener('chargingtimechange', function() {
        updateChargingInfo();
    });

    function updateChargingInfo() {
        console.log("Battery charging time: " +
            battery.chargingTime + " seconds");
    }

    battery.addEventListener('dischargingtimechange', function() {
        updateDischargingInfo();
    });

    function updateDischargingInfo() {
        console.log("Battery discharging time: " +
            battery.dischargingTime + " seconds");
    }

});

console.log("hello");