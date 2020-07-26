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

// get the DOM elements for an individual note
// generateTodoDOM

const generateTodoDOM = function (todo) {
  const p = document.createElement('p');
  p.textContent = todo.text;
  return p;
};

// get the DOM element for list summary
// generateSummaryDOM

const generateSummaryDOM = function (inCompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `you have ${inCompleteTodos.length} todo left`;

  return summary;
};
