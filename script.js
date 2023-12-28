function moveAddButtonToEnd() {
    let kanbanBoard = document.getElementById('kanbanBoard');
    let addButton = document.querySelector('.add-column-btn');
    kanbanBoard.appendChild(addButton);
}

function deleteColumn(columnId) {
    let column = document.getElementById(columnId);
    let confirmDeletion = confirm("Tem certeza que deseja excluir esta coluna?");
    if (confirmDeletion) {
        column.parentNode.removeChild(column);
        moveAddButtonToEnd();
    }
}

function addColumn() {
    let kanbanBoard = document.getElementById('kanbanBoard');
    if (kanbanBoard.children.length >= 7) {
        alert("Limite máximo de 7 colunas atingido.");
        return;
    }
    let newColumnId = `column${kanbanBoard.children.length}`;
    let newColumn = document.createElement('div');
    newColumn.className = 'kanban-column';
    newColumn.id = newColumnId;
    newColumn.innerHTML = `
        <div class="column-header">
            <span contenteditable="true">Nova Coluna</span>
            <button onclick="renameColumn('${newColumnId}')">Renomear</button>
            <button onclick="deleteColumn('${newColumnId}')">X</button>
        </div>
        <!-- Tarefas aqui -->
    `;
    kanbanBoard.appendChild(newColumn);
    moveAddButtonToEnd();
    initDragAndDrop();
}
function addRow(columnId) {
    let column = document.getElementById(columnId);
    let newRow = document.createElement('div');
    newRow.className = 'kanban-row';
    newRow.innerHTML = `
        <span contenteditable="true">Nova Linha</span>
    `;
    let addButton = column.querySelector('.add-row-btn');
    column.insertBefore(newRow, addButton);
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('kanbanBoard').children.length < 2) {
        addColumn();
    }
    initDragAndDrop();
});
