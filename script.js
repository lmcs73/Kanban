function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

let taskIdCounter = 0;
function addTask() {
    var taskName = document.getElementById('taskName').value;
    if (!taskName) {
        alert("Por favor, insira um nome para a tarefa.");
        return;
    }

    var taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerText = taskName;
    taskCard.setAttribute("id", "task" + taskIdCounter++);
    taskCard.setAttribute("draggable", "true");
    taskCard.setAttribute("ondragstart", "drag(event)");

    var selectedUser = document.getElementById('userSelection').value;
    if (selectedUser) {
        taskCard.classList.add('assigned');
        taskCard.setAttribute('data-user', selectedUser);
    }

    var todoColumn = document.querySelector('.kanban-column.todo');
    todoColumn.appendChild(taskCard);

    document.getElementById('taskName').value = ''; // Limpar o campo após adicionar
}

document.addEventListener('DOMContentLoaded', () => {
    var columns = document.querySelectorAll('.kanban-column');
    columns.forEach(column => {
        column.addEventListener('dragover', allowDrop);
        column.addEventListener('drop', drop);
    });
});