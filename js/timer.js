class Timer {
    constructor() {}

    seconds = 0;
    interval;

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
                    alert("You've reach the finish line. Awesome ! 😎");
                    return;
                }
                seconds = minutes*60 || 0;
                minutes--;
            }
            console.log("Interval: " + interval);
        }, 1000);
    }

    stop(interval){
        clearInterval(interval);
    }
}