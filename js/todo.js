class ToDo {
    constructor() {
        this.data = [];
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

    // create new fresh todo list
    create(){
        this.data.push(new TodoItem("New to-do", "add description here"));

        let dataAsString = JSON.stringify(this.data);
        localStorage.setItem("todo", dataAsString);

        console.log(`Todo list created`);
    }

    // add new todo item into existing list
    add(title, description){
        let data = localStorage.getItem("todo");
        
        this.data = JSON.parse(data);
        this.data.push(new TodoItem(title, description));

        let dataAsString = JSON.stringify(this.data);
        localStorage.setItem("todo", dataAsString);

        console.log(data + ` has been added to the list`);
    }

    edit(id, title, description){

    }
    
    complete(){
        throw "Not Implemented Yet";
    }

    uncomplete(){
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

class TodoItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

todoItem = new TodoItem();