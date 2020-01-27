document.getElementById("play_button").onclick = function() {
    var minutes = document.getElementById("timer_range").value;
    playTimer(minutes);
    document.getElementById("timer_range").disabled = true;
    document.getElementById("play_button").style = "display: none;";
    document.getElementById("stop_button").style = "display: inline;";
}

document.getElementById("stop_button").onclick = function() {
    stopTimer(interval);
    document.getElementById("timer_range").disabled = false;
    document.getElementById("timer").innerHTML = document.getElementById("timer_range").value + " min";
    document.getElementById("play_button").style = "display: inline;";
    document.getElementById("stop_button").style = "display: none;";
}

document.getElementById("stop_button").onclick = function() {
    stopTimer(interval);
    document.getElementById("timer_range").disabled = false;
    document.getElementById("timer").innerHTML = document.getElementById("timer_range").value + " min";
    document.getElementById("play_button").style = "display: inline;";
    document.getElementById("stop_button").style = "display: none;";
}

document.getElementById("timer_range").oninput = function() {
    var x = document.getElementById("timer_range").value;
    document.getElementById("timer").innerHTML = x + " min";
}

document.getElementById("add_button").onclick = function() {
    alert("add_button clicked");
}

var seconds = 0;
var interval;

//#region Timer
function playTimer(minutes){
    console.log("Timer start !");

    if ( minutes < 1 ) {
        alert("Please specified in minute")
        return;
    }

    seconds = 59 || 0;
    minutes--;

    interval = setInterval(() => {
        document.getElementById('timer').innerHTML = minutes + ' : ' + seconds;
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

    console.log(interval);
}

function stopTimer(interval){
    clearInterval(interval);
}
//#endregion

//#region ToDo
function addToDo(){

}

function checkToDo(){

}

function uncheckToDo(){

}

function deleteToDo(){

}

function clearToDo(){

}

function exportToDo(){
    
}
//#endregion