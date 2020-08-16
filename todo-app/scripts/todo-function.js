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
  const todoEl = document.querySelector('#todos');
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const inCompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = '';
  todoEl.appendChild(generateSummaryDOM(inCompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEL = document.createElement('p');
    messageEL.classList.add('empty-message');
    messageEL.textContent = 'no to-dos to show';
    todoEl.appendChild(messageEL);
  }
};

// get the DOM elements for an individual note
// generateTodoDOM

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  //   setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  //    setup the todo text
  todoText.textContent = todo.text;
  containerEl.appendChild(todoText);

  // setup container
  todoEl.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl);

  //    setup a remove button
  removeButton.textContent = 'remove';
  removeButton.classList.add('button', 'button--text');
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
  const plural = inCompleteTodos.length === 1 ? '' : 's';
  summary.classList.add('list-title');
  summary.textContent = `you have ${inCompleteTodos.length} todo${plural} left`;
  return summary;
};
