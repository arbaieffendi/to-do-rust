class TodoItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    status;
    
    create(title, description){
        return JSON.stringify(new TodoItem(title, description));
    }
}

class ToDo {
    constructor() {
        this.todoItem = new TodoItem();
    }

    build(){
        document.getElementById("todolist").innerHTML = `
        <li draggable="true" class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">Create a to-do list</h6>
                <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">12 min</span>
        </li>
        `
    }

    add(title, description){
        // var data = localStorage.getItem("todo");
        // if (data === null) data = "";
        
        this.toDoList.push(todoItem.create(title, description))
        
        localStorage.setItem("todo", this.toDoList);
    }

    check(){
        throw "Not Implemented Yet";
    }

    uncheck(){
        throw "Not Implemented Yet";
    }

    delete(){
        throw "Not Implemented Yet";
    }

    clear(){
        throw "Not Implemented Yet";
    }

    export(){
        throw "Not Implemented Yet";
    }

}

todoItem = new TodoItem();