// display todo item in the localstorage to the view
function loadToDoList(){
    console.log("todo reload");

    let todoItems = JSON.parse(localStorage.getItem('todo'));

    if (todoItems !== null) {
        // clear the list
        document.getElementById("todolist").innerHTML = "";
        
        // update the display todo list
        todoItems.forEach((item) => {
            document.getElementById("todolist").innerHTML += `
            <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">`+ item.title +`</h6>
                    <small class="text-muted">`+ item.description +`</small>
                </div>
                <span class="text-muted">12 min</span>
            </li>
            `;
        });
    }

}