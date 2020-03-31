class ToDo {
    constructor() {
        this.data = [];
    }

    // create new fresh todo list with 1 item
    create(){
        let newData = new TodoItem("New to-do", "add description here");
        this.data.push(newData);

        let dataAsString = JSON.stringify(this.data);
        localStorage.setItem("todo", dataAsString);

        console.log(`Todo list created with first item id is ` + newData.id);
    }

    // add new todo item into existing list
    add(title, description){
        // get data from memory
        let data = localStorage.getItem("todo");
        this.data = JSON.parse(data);

        // push data to the list
        let newData = new TodoItem(title, description);
        this.data.push(newData);

        // convert data type from object to string
        let dataAsString = JSON.stringify(this.data);
        localStorage.setItem("todo", dataAsString);

        console.log(newData.id + ` has been added to the list`);
    }

    edit(id, title, description){

    }

    find(id){
        // find the index in localstorage
        let data = localStorage.getItem("todo");
        this.data = JSON.parse(data);

        for(var i=0; i < this.data.length; i++){
            if (this.data[i].id == id) {
                console.log(this.data[i].id);
                return this.data[i];
            }
        }

        return null;
    }
    
    check(id){
        this.data = JSON.parse(localStorage.getItem('todo'));
        for(var i=0; i < this.data.length; i++){
            if (this.data[i].id == id) {
                this.data[i].isCompleted = true;
                console.log(id + " completed !");
                localStorage.setItem('todo', JSON.stringify(this.data));
                return true;
            }
        }
        return false;
    }

    delete(id){
        this.data = JSON.parse(localStorage.getItem('todo'));
        console.log(this.data)
        for(var i=0; i < this.data.length; i++){
            if (this.data[i].id == id) {
                this.data.splice(i, 1);
                console.log(id + " remove successfully");
                localStorage.setItem('todo', JSON.stringify(this.data));
                return true;
            }
        }
        return false;
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
        this.id = this.generateID();
        this.title = title;
        this.description = description;
        this.estimation = 25; //default
        this.isSelected = false;
        this.isCompleted = false;
    }
    
    // Algorithm to generate GUID below are Jeff Ward's answer in
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
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