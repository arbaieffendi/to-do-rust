class TodoItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    
    create(title, description){
        return JSON.stringify(new TodoItem(title, description));
    }
}

class ToDo {
    constructor() {
        this.todoItem = new TodoItem();
    }

    toDoList = [];

    add(title, description){
        var data = localStorage.getItem("todo");
        if (data === null) data = "";
        
        this.toDoList.push(todoItem.create("Create a to-do list", "Brief Description"))
        
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