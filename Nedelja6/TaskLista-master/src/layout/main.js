import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo } from "../utilities/todo-service";
import { addToDo } from "../utilities/todo-service";
import { deleteToDo } from "../utilities/todo-service";
import { LogIn } from "../components/login";

class Main {
    constructor() {
        let logIn = new LogIn();
        let inputForm=new InputForm();
        let taskList=new TaskList();

        this.node=document.createElement('main');
        this.node.appendChild(logIn.getNode());
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick( () => {
            let text=inputForm.txtTitle.value;
            text=text.trim();

            if(text=='')return;
            
            addToDo(logIn.username, text).then(data => {
                if (data.success == 'true'){
                    let task=new Task(text);
                    task.setBtnDeleteClickEvent(()=>{
                        deleteToDo(logIn.username, task.title).then(data => {console.log(data)});
                        task.deleteItem(); 
                    });
                    taskList.addTask(task);
                }
            
            });

        //});

        });
        
        logIn.addNewUser(()=>{

        taskList.emptyList()

        getToDo(logIn.username).then(data => {
            let items = data.items;
            items.forEach(item => {
                let task = new Task(item.title);
                task.setBtnDeleteClickEvent( () => {
                    deleteToDo(logIn.username, task.title).then(data => {console.log(data)});
                    task.deleteItem();
                });
                taskList.addTask(task);
            })
        })
        }
        )

    }
    
    
    
    getNode() {
        return this.node;
    }

}

export{
    Main
}