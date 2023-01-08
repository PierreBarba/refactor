import {localStorageSave} from "./localStorageHelpers.js"
class ToDoList {
    constructor(task){
        this.list = [];
        this.task = task;
    }

    saveTask(taskSave){
        localStorageSave(taskSave,this.list)
    }

    // getTask();

    // deleteTask();
}

pullrequest

let newlist = new ToDoList();
newlist.saveTask({name:"pierre"});
