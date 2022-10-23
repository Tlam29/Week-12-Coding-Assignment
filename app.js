
let myTodoList = ["Exercise", "Shower", "Break Time"];

function createTask(){
    let task = document.getElementById('add-task').value;
    myTodoList.push(task);
    readAllTasks();
}
function readAllTasks(){
    let data = ''
    for(var i=0; i<myTodoList.length; i++){
        data += '<tr>';
        data += '<td>' + myTodoList[i] + '</td>';
        data += '<td><button onclick=UpdateTask(' +i+ ')>Update</button></td>';
        data += '<td><button onclick=deleteTask('+i+')>Delete</button></td>';
        data += '<tr';
    }
    document.getElementById("counter").innerHTML = myTodoList.length + " Tasks";
document.getElementById('mytodo-tasks').innerHTML = data;
readAllTasks();
}
function updateTask(item){
    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('update-task').value = myTodoList[item];
    document.getElementById('updateForm').onsubmit = function(){
        let task = document.getElementById('update-task').value;
        myTodoList.splice(item,1,task.trim());

        readAllTasks();
        closeInput();
    }
}
function deleteTask(item){
    myTodoList.splice(item,1);
    readAllTasks();
}
function closeInput(){
    document.getElementById('updateForm').style.display = 'none';
}