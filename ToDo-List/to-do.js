let todos = JSON.parse(localStorage.getItem('todos')) || [];

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = `list-group-item ${todo.completed ? 'completed' : ''}`;
        todoItem.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div>
                <button class="btn btn-sm btn-warning edit-btn" data-index="${index}">Düzenle</button>
                <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Sil</button>
            </div>
        `;

        todoItem.querySelector('.todo-text').addEventListener('click', () => {
            toggleComplete(index);
        });

        todoItem.querySelector('.edit-btn').addEventListener('click', () => {
            enableEditMode(todoItem, index);
        });

        todoList.appendChild(todoItem);
    });
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function enableEditMode(todoItem, index) {
    const textSpan = todoItem.querySelector('.todo-text');
    const currentText = textSpan.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'edit-input';
    textSpan.replaceWith(input);
    input.focus();

    input.addEventListener('blur', () => {
        disableEditMode(input, textSpan, index, false);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            disableEditMode(input, textSpan, index, true);
        } else if (e.key === 'Escape') {
            disableEditMode(input, textSpan, index, false);
        }
    });
}

function disableEditMode(input, textSpan, index, save) {
    if (save) {
        const newText = input.value.trim();
        if (newText) {
            todos[index].text = newText;
            saveTodos();
        }
    }
    renderTodos();
}

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }
});

renderTodos();
