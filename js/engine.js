document.getElementById("play_button").onclick = function() {
    try{
        startTimer();
    } catch(err){
        alert("500 Sorry, seems there is a problem internally &#x1F927;");
    }
}

document.getElementById("add_button").onclick = function() {
    try{
        throw "Not Implemented yet";
    } catch(err){
        alert("500 Sorry, seems there is a problem internally &#x1F927;");
    }
}

//#region Timer
function startTimer(){
    var interval = document.getElementById("countDownTimer");
    var x = setInterval( function () {
    
        // Find the distance between now and the count down date
        var distance = countDownDate - interval;
    
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Finish &#x1F947; congrats !";
        }
        
    }, 1000);
}

function stopTimer(){
    throw "Not implemented yet";
}
//#endregion

//#region ToDo
function addToDo(){
    throw "Not implemented yet";
}

function checkToDo(){
    throw "Not implemented yet";
}

function uncheckToDo(){
    throw "Not implemented yet";
}

function deleteToDo(){
    throw "Not implemented yet";
}

function clearToDo(){
    throw "Not implemented yet";
}

function exportToDo(){
    throw "Not implemented yet";
}
//#endregion