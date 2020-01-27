var seconds, interval;
timer = new Timer();

document.getElementById("play_button").onclick = function() {
    var minutes = document.getElementById("timer_range").value;
    timer.play(minutes);
    document.getElementById("timer_range").disabled = true;
    document.getElementById("play_button").style = "display: none;";
    document.getElementById("stop_button").style = "display: inline;";
}

document.getElementById("stop_button").onclick = function() {
    timer.stop(interval);
    document.getElementById("timer_range").disabled = false;
    document.getElementById("timer_text").innerHTML = document.getElementById("timer_range").value + " min";
    document.getElementById("play_button").style = "display: inline;";
    document.getElementById("stop_button").style = "display: none;";
}

document.getElementById("stop_button").onclick = function() {
    timer.stop(interval);
    document.getElementById("timer_range").disabled = false;
    document.getElementById("timer_text").innerHTML = document.getElementById("timer_range").value + " min";
    document.getElementById("play_button").style = "display: inline;";
    document.getElementById("stop_button").style = "display: none;";
}

document.getElementById("timer_range").oninput = function() {
    var x = document.getElementById("timer_range").value;
    document.getElementById("timer_text").innerHTML = x + " min";
}

document.getElementById("add_button").onclick = function() {
    alert("add_button clicked");
}

