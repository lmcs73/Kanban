// Lógica de navegação

document.addEventListener('DOMContentLoaded', () => {
    // Lógica após carregamento do documento
});
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