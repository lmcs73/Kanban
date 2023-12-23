function addTask() {
    var taskName = document.getElementById('taskName').value;
    if (!taskName) {
        alert("Por favor, insira um nome para a tarefa.");
        return;
    }

    var taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerText = taskName;

    var todoColumn = document.querySelector('.kanban-column.todo');
    todoColumn.appendChild(taskCard);

    document.getElementById('taskName').value = ''; // Limpar o campo após adicionar
}

document.addEventListener('DOMContentLoaded', () => {
    // Lógica inicializada após o carregamento do documento
});