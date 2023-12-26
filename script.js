let columnCount = 3; // Inicialmente, temos três colunas

function addColumn() {
    columnCount++;
    const newColumn = document.createElement('div');
    newColumn.className = 'kanban-column';
    newColumn.id = 'column' + columnCount;
    newColumn.innerHTML = `
        <div class="column-header">
            <span contenteditable="true">Nova Coluna</span>
            <button onclick="renameColumn('${newColumn.id}')">Renomear</button>
            <button onclick="deleteColumn('${newColumn.id}')">X</button>
        </div>
    `;
    document.getElementById('kanbanBoard').appendChild(newColumn);
}
newColumn.setAttribute('draggable', 'true');
newColumn.addEventListener('dragstart', handleDragStart);


function handleDragStart(e) {
e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDragOver(e) {
e.preventDefault(); // Necessário para permitir soltar
}

function handleDrop(e) {
e.preventDefault();
const id = e.dataTransfer.getData('text/plain');
const draggableElement = document.getElementById(id);
const dropzone = e.target.closest('.kanban-column');
if (dropzone && draggableElement !== dropzone) {
    dropzone.parentNode.insertBefore(draggableElement, dropzone.nextSibling);
}
}

document.addEventListener('DOMContentLoaded', () => {
const columns = document.querySelectorAll('.kanban-column');
columns.forEach(column => {
    column.setAttribute('draggable', 'true');
    column.addEventListener('dragstart', handleDragStart);
});

const board = document.getElementById('kanbanBoard');
board.addEventListener('dragover', handleDragOver);
board.addEventListener('drop', handleDrop);
});

function renameColumn(columnId) {
    // A lógica de renomeação pode ser ajustada conforme necessário
}

function deleteColumn(columnId) {
    if (columnCount > 2) {
        const column = document.getElementById(columnId);
        column.parentNode.removeChild(column);
        columnCount--;
    } else {
        alert('Deve haver pelo menos duas colunas.');
    }
}

// Implementar lógica de arrastar e soltar colunas