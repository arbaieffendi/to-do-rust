function showActionMenu(id){
    console.log(id);
    document.getElementById(id).style.display = `inline`;
}

function hideActionMenu(id){
    console.log(id);
    document.getElementById(id).style.display = `none`;
}

// display todo item in the localstorage to the view
function loadToDoList(){
    console.log("todo reload");

    let todoItems = JSON.parse(localStorage.getItem('todo'));

    if (todoItems !== null) {
        // clear the list
        document.getElementById("todolist").innerHTML = "";
        
        // update the display todo list
        todoItems.forEach((item) => {

            document.getElementById("todolist").innerHTML +=
            `
            <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed"
                onmouseover="showActionMenu('action`+ item.id +`')" onmouseout="hideActionMenu('action`+ item.id +`')">
                <div id="`+ item.id +`">
                    <h6 class="my-0" contentEditable="true">`+ item.title +`</h6>
                    <small class="text-muted" contentEditable="true">`+ item.estimation +` min</small> &#183; 
                    <small class="text-muted" contentEditable="true">`+ item.description +`</small>
                </div>
                <div id="action`+ item.id +`" style="display: none;">
                    <button type="button" id="complete_button" class="btn btn-outline-success btn-circle"><i class="fas fa-check"></i></button>
                    <button type="button" id="complete_button" class="btn btn-outline-danger btn-circle"><i class="fas fa-trash"></i></button>
                </div>
            </li>
            `;

        });
    }

}