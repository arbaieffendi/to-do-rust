class Timer {
    constructor(notification) {
        this.notification = new Notification();
    }

    play(minutes){
        console.log("Timer start !");

        if ( minutes < 1 ) {
            alert("Please specified in minute")
            return;
        }

        seconds = 59 || 0;

        minutes--;
        interval = setInterval(() => {
            document.getElementById('timer_text').innerHTML = minutes + ' : ' + seconds;
            seconds--;
            if (seconds < 0) {
                if (minutes == 0) {
                    clearInterval(interval);
                    notification.play();
                    alert("You've reach the finish line. Awesome ! 😎");
                    document.getElementById("timer_range").disabled = false;
                    document.getElementById("timer_text").innerHTML = document.getElementById("timer_range").value + " min";
                    document.getElementById("play_button").style = "display: inline;";
                    document.getElementById("stop_button").style = "display: none;";
                    return;
                }
                seconds = 59 || 0;
                minutes--;
            }
            console.log("Interval: " + interval);
        }, 1000);
    }

    stop(interval){
        clearInterval(interval);
        console.log("Timer stop !");
    }
}