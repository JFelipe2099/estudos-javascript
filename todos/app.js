const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

// --------------- FUNCTIONS ---------------

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>`;

    list.innerHTML += html;
};

// --------------- EVENTS ---------------

// add todo
addForm.addEventListener('submit', event => {
    event.preventDefault();
    // trim faz o mesmo que strip no python, remove os espaços a esquera e a rireita
    const todo = addForm.add.value.trim();

    if (todo.length){
        generateTemplate(todo);
        // reset é um método que passamos para formulários, onde resetamos os inputsm neste caso, nós só temos o de texto
        addForm.reset();
    }
});

// delete todo
list.addEventListener('click', event => {
    if (event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(list.children)
    .filter(todo => {
        // !true === false; !false === true
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach(todo => todo.classList.add('filtered'));  

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));  
};

// search todo
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
});