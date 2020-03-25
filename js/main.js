// Initialization
var seconds, interval, minutes;
var timer = new Timer();

// var todo = JSON.parse( localStorage.getItem('todo') || null);
// console.log(todo);
// if ( todo === null ) {
//     todo = new ToDo();
//     console.log("ToDo object is created");
// }
// console.log(todo);

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
    console.log(todo);
    if (todo === null) {
        todo = new ToDo();
        todo.add("Create a to-do list using add_button", "Brief Description");

        document.getElementById("todolist").innerHTML = `
        <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">Create a to-do list</h6>
                <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">12 min</span>
        </li>
        `

        console.log("todo created")
    } else {
        todo.add("Tambah", "Brief Description");
        document.getElementById("todolist").appendChild = `
        <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">Create a to-do list</h6>
                <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">12 min</span>
        </li>
        `

        console.log("todo added");
    }

    return;
}