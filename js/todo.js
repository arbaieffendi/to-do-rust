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
        this.id = this.generateID()
        this.title = title;
        this.description = description;
    }

    generateID(){
        var u='',m='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',i=0,rb=Math.random()*0xffffffff|0;
        while(i++<36) {
            var c=m[i-1],r=rb&0xf,v=c=='x'?r:(r&0x3|0x8);
            u+=(c=='-'||c=='4')?c:v.toString(16);rb=i%8==0?Math.random()*0xffffffff|0:rb>>4
        }
        return u
    }
}

todoItem = new TodoItem();