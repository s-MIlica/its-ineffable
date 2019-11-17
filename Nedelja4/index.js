//Dušanov kod

const addTaskButton=document.querySelector('#btn-add');
const taskListContainer=document.querySelector('#tasks-container');
const textBoxTitle = document.querySelector('#txt-title');
const removeAllBttn = document.querySelector('#btn-remove-all');
const InvertBtn = document.querySelector('#btn-invert');
console.log(taskListContainer);
console.log(addTaskButton);

console.log('----');

console.log(addTaskButton.parentElement);
console.log(addTaskButton.parentNode);

console.log('----');


addTaskButton.addEventListener('click',btnAddClick);
textBoxTitle.addEventListener('keydown', txtKeyUp);
function btnAddClick(e){
    console.log(e);
    console.log(e.target);

    addIteam();

}

function txtKeyUp(e) {
    console.log(e);
    if (e.keyCode == 13) {
        addIteam();
    }
}


function addIteam() {
    
    let txtBox=document.querySelector('#txt-title');
    console.log(txtBox);    
   
    let text=txtBox.value;
    if(text==""){
        alert('Task Title can not be empty!');
        return;
    }

    console.log(text);

    let itemContainer=document.createElement("div");
    console.log(itemContainer);
    itemContainer.className='task-item';
    
    let itemText=document.createElement('p');
    itemText.innerHTML=text;
    itemText.className='task-title';
    console.log(itemText);

    let checkContainer=document.createElement('div');
    checkContainer.className='task-check';
    
    let removeBtn=document.createElement('button');
    removeBtn.className='task-remove-btn';
    removeBtn.addEventListener('click',removeTask);
    removeBtn.innerHTML='X';

    let chkDone=document.createElement('input');
    chkDone.type='checkbox';
    chkDone.className='chk-state';
    chkDone.value='done';
    chkDone.addEventListener('change',handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);

    checkContainer.children[0];

    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);

    taskListContainer.appendChild(itemContainer);

    txtBox.value = '';

}


function removeTask(e){
    console.log(e);
    console.log(e.target);
    if (!confirm('Are you sure?')) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement.parentElement;
    console.log(divToRemove);
    divToRemove.remove();
}

function handleCheckChange(e){
    console.log(e);
    let chkBox = e.target;

    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[0].style.textDecoration = 'line-through';
    } 
    else {
        itemContainer.children[0].style.textDecoration = 'none';

    }
}


removeAllBttn.addEventListener('click', removeAllSelected);

function removeAllSelected(e) {
   console.log(e.target);

    let checkDone = document.querySelectorAll('.chk-state')
    let taskItem = document.querySelectorAll('.task-item');
    console.log(taskItem);

    for (let i = 0; i < checkDone.length; i++) {
        if (checkDone[i].checked) {
            taskItem[i].remove();
        }
    }
}

InvertBtn.addEventListener('click', InvertChecked);

function InvertChecked (e) {
    console.log(e)
  
    let checkDone = document.querySelectorAll('.chk-state')
    let taskItem = document.querySelectorAll('.task-item');
    let taskTitle = document.querySelectorAll('.task-title');
    console.log(taskItem);

    for (let i = 0; i < checkDone.length; i++) {
        if (checkDone[i].checked) {
            checkDone[i].checked = false;
            taskTitle[i].style.textDecoration = 'none';
        } else {
            checkDone[i].checked = true;  
            taskTitle[i].style.textDecoration = 'line-through';
        }
    }
}