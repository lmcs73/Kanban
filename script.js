function initDragAndDrop() {
    let columns = document.querySelectorAll('.kanban-column');
    columns.forEach(column => {
        column.draggable = true;
        column.addEventListener('dragstart', handleDragStart);
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDragOver(e) {
    e.preventDefault(); // Necessary to allow dropping
}

function handleDrop(e) {
    e.preventDefault();
    let draggedId = e.dataTransfer.getData('text/plain');
    let droppedOn = e.target;
    let draggedElement = document.getElementById(draggedId);

    if (droppedOn.className.includes('kanban-column')) {
        swapColumns(draggedElement, droppedOn);
    }
}

function swapColumns(dragged, target) {
    let kanbanBoard = document.getElementById('kanbanBoard');
    kanbanBoard.insertBefore(dragged, target.nextSibling);
    moveAddButtonToEnd();
}

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
