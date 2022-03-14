// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeoffBtn = document.getElementById('takeoff');
    takeoffBtn.addEventListener("click", function() {
        let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
        // console.log(isReadyToLaunch);
        if (isReadyToLaunch) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Shuttle in flight.";
            //The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color:#0000FF");
            let shuttleHeight = document.getElementById("spaceShuttleHeight")
            shuttleHeight.innerText = "10,000 miles";
        }
    });
    // Landing button
    let landingBtn = document.getElementById('landing');
    landingBtn.addEventListener('click', function() {
        window.confirm("The shuttle is landing. Landing gear engaged.");
        //The flight status should change to "The shuttle has landed."
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";
        //The background color of the shuttle flight screen should change from blue to green.
        let shuttleFlightScreen = document.getElementById("shuttleBackground");
        shuttleFlightScreen.setAttribute("style", "background-color:#00FF00");
        //The shuttle height should go down to 0.
        let shuttleHeight = document.getElementById("spaceShuttleHeight")
        shuttleHeight.innerText = "0 miles";
    });

    //abort mission button
    let missionAbortBtn = document.getElementById('missionAbort');
    missionAbortBtn.addEventListener('click', function() {
        //A window confirm should let the user know "Confirm that you want to abort the mission." 
        window.confirm("Confirm that you want to abort the mission.");
        //The flight status should change to "Mission aborted."
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Mission aborted.";
        //The background color of the shuttle flight screen should change from blue to green.
        let shuttleFlightScreen = document.getElementById("shuttleBackground");
        shuttleFlightScreen.setAttribute("style", "background-color:#98FB98");
        //The shuttle height should go to 0.
        let shuttleHeight = document.getElementById("spaceShuttleHeight")
        shuttleHeight.innerText = "0 ";
    });

    let rocketImg = this.document.getElementById("rocket");
    let top = 0;
    let left = 0;
    //upBtn 
    let upBtn = document.getElementById('up');
    upBtn.addEventListener('click', function() {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmt = Number(shuttleHeight.innerText);
        shuttleHeightAmt += 10000;
        shuttleHeight.innerText = shuttleHeightAmt;
        top -= 10;
        document.getElementById("rocket").style.top = (top - 10) + "px";
    });

    //downBtn 
    let downBtn = document.getElementById('down');
    downBtn.addEventListener('click', function() {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmt = Number(shuttleHeight.innerText);
        shuttleHeightAmt -= 10000;
        shuttleHeight.innerText = shuttleHeightAmt;
        top += 10;
        document.getElementById("rocket").style.top = (top - 10) + "px";
    });
});