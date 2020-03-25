function initToDoList(){
    // alert("todolist onload");
    
    console.log("init todo list");
    var data = "["+localStorage.getItem('todo')+"]";
    console.log(data);
    var todoItems = JSON.parse(data);
    console.log(todoItems);

    // console.log(localStorage.getItem('todo'));
    todoItems.forEach((item) => {
        console.log(item);
        
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