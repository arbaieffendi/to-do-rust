// Initialization
var seconds, interval, minutes;
var timer = new Timer();
var todo = new ToDo();

document.getElementById("play_button").onclick = function() {
    minutes = document.getElementById("timer_range").value;
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

document.getElementById("timer_range").oninput = function() {
    var x = document.getElementById("timer_range").value;
    document.getElementById("timer_text").innerHTML = x + " min";
}

document.getElementById("add_button").onclick = function() {
    let todoData = localStorage.getItem(`todo`);
    if (todoData === null || todoData === undefined) {
        todo.create();
        loadToDoList();

        console.log("todo list initialized")
    } else {
        todo.add("New stuff to be complete", "Some description here");

        loadToDoList();

        console.log("todo added");
    }

    return;
}

function showActionMenu(id){
    document.getElementById(id).style.display = `inline`;
}

function hideActionMenu(id){
    document.getElementById(id).style.display = `none`;
}

function deleteToDoItem(id){
    let item = todo.delete(id);
    console.log(item);
    loadToDoList();
}