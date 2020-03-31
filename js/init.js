// display todo item in the localstorage to the view
function loadToDoList(){
    console.log("Todo list successfully loaded !");

    let todoItems = JSON.parse(localStorage.getItem('todo'));

    if (todoItems !== null) {
        // clear the list
        document.getElementById("todolist").innerHTML = "";
        
        // update the display todo list
        todoItems.forEach((item) => {
            
            if ( !item.isCompleted ) {
                document.getElementById("todolist").innerHTML += `
                <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed"
                    onmouseover="showActionMenu('action`+ item.id +`')" onmouseout="hideActionMenu('action`+ item.id +`')">
                    <div id="`+ item.id +`">
                        <h6 class="my-0" contentEditable="true">`+ item.title +`</h6>
                        <small class="text-muted" contentEditable="true">`+ item.estimation +`</small>
                        <small class="text-muted"> min</small> &#183; 
                        <small class="text-muted" contentEditable="true">`+ item.description +`</small>
                    </div>
                    <div id="action`+ item.id +`" style="display: none;">
                        <button type="button" class="btn btn-outline-success btn-circle" onclick="checkToDoItem('`+ item.id +`')"><i class="fas fa-check"></i></button>
                        <button type="button" class="btn btn-outline-danger btn-circle" onclick="deleteToDoItem('`+ item.id +`')"><i class="fas fa-trash"></i></button>
                    </div>
                </li>
                `;
            }else {
                document.getElementById("todolist").innerHTML += `
                <li draggable="true" class="list-group-item d-flex justify-content-between bg-light"
                    onmouseover="showActionMenu('action`+ item.id +`')" onmouseout="hideActionMenu('action`+ item.id +`')">
                    <div id="`+ item.id +`" class="text-success">
                        <small class="chip"> completed </small>
                        <h6 class="my-0">`+ item.title +`</h6>
                        <small class="text-success">`+ item.estimation +`</small>
                        <small class="text-success"> min</small> &#183; 
                        <small class="text-muted">`+ item.description +`</small>
                    </div>
                    <div id="action`+ item.id +`" style="display: none;">
                        <button type="button" class="btn btn-outline-warning btn-circle" onclick="checkToDoItem('`+ item.id +`')"><i class="fas fa-times"></i></button>
                        <button type="button" class="btn btn-outline-danger btn-circle" onclick="deleteToDoItem('`+ item.id +`')"><i class="fas fa-trash"></i></button>
                    </div>
                </li>
                `;
            }

        });
    }

}