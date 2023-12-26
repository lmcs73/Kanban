function renameColumn(columnId) {
    // This function allows the user to rename a column by clicking the "Renomear" button.
    // The actual renaming is handled by the contenteditable attribute in the HTML.
}

function deleteColumn(columnId) {
    // This function deletes a column after confirmation.
    let column = document.getElementById(columnId);
    let confirmDeletion = confirm("Tem certeza que deseja excluir esta coluna?");
    if (confirmDeletion) {
        column.parentNode.removeChild(column);
    }
}

function addColumn() {
    // This function adds a new column to the right of the existing columns.
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
}

// Initial setup to ensure there are at least two columns
document.addEventListener('DOMContentLoaded', function() {
    let kanbanBoard = document.getElementById('kanbanBoard');
    if (kanbanBoard.children.length < 2) {
        addColumn();
    }
});
