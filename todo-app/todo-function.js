'use strict';

// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// save todos to localStorage
// savetodos

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// remove todo by id

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// render application todos based on filter
// renderTodos

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const inCompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(inCompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// get the DOM elements for an individual note
// generateTodoDOM

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  //   setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
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
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  return todoEl;
};

// get the DOM element for list summary
// generateSummaryDOM

const generateSummaryDOM = (inCompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `you have ${inCompleteTodos.length} todo left`;
  return summary;
};
