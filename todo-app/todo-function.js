// fetch existing todos from localStorage
// getSavedTodos

const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// save todos to localStorage
// savetodos

const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given todo
const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// render application todos based on filter
// renderTodos

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const inCompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(inCompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// 1. setup a root div
// 2. setup and append a checkbox (set type attribute)
// some Node.setAttribute('type','checkbox')
// 3. setup and append a span (set text)
// 4. setup and append a button (set text)

// get the DOM elements for an individual note
// generateTodoDOM

const generateTodoDOM = function (todo) {
  // const p = document.createElement('p');
  // p.textContent = todo.text;
  // return p;
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  //   setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener('change', function () {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  //    setup the todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  //    setup a remove button
  removeButton.textContent = 'x';
  todoEl.appendChild(removeButton);

  removeButton.addEventListener('click', function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// get the DOM element for list summary
// generateSummaryDOM

const generateSummaryDOM = function (inCompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `you have ${inCompleteTodos.length} todo left`;

  return summary;
};
