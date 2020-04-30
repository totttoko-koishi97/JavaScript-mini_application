"use strict"


{
    let timer = document.getElementById("timer");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let reset = document.getElementById("reset");
    let start = document.getElementById("start");

    let startTime;
    let timeleft;
    let timeToCountDown =0;
    let timerID;
    let isRunnning = false;



    function updateTimer(t) {
        let d = new Date(t);
        let m = d.getMinutes();
        let s = d.getSeconds();
        let ms = d.getMilliseconds();
        m = ("0" + m).slice(-2);
        s = ("0" + s).slice(-2);
        ms = ("00" + ms).slice(-3);
        let timer_string = m + ":" + s + ":" + ms;
        timer.textContent = timer_string;
        document.title = timer_string;

    }


    function countDown() {
        timerID=setTimeout(function () {

            timeleft = timeToCountDown - (Date.now() - startTime);
            if (timeleft < 0) {
                isRunnning = false;
                start.textContent = "start";
                clearTimeout(timerID);
                timeleft = 0;
                timeToCountDown = 0;
                updateTimer(timeleft);
                return;
            }
            updateTimer(timeleft);
            countDown();

        }, 10);
    }

    start.addEventListener("click", function () {
        if (isRunnning === false) {
            isRunnning = true;
            start.textContent = "stop";
            startTime = Date.now();
            countDown();
        }
        else {
                isRunnning = false;
            start.textContent = "start";
            timeToCountDown = timeleft;
            clearTimeout(timerID);
        }

    });

    min.addEventListener("click", function () {
        if (isRunnning === false) {
            timeToCountDown += 60 * 1000;
            if (timeToCountDown > 60 * 60 * 1000) {
                timeToCountDown = 0;
            }
            updateTimer(timeToCountDown);
        }
    });

    sec.addEventListener("click", function () {
        if (isRunnning === false) {
            timeToCountDown += 1000;
            if (timeToCountDown > 60 * 60 * 1000) {
                timeToCountDown = 0;
            }
            updateTimer(timeToCountDown);
        }
    });

    reset.addEventListener("click", function () {
        timeToCountDown = 0;
        updateTimer(timeToCountDown);

    });

}