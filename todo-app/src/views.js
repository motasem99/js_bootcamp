import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters } from './filters';

// render application todos based on filter
// renderTodos

const renderTodos = () => {
  const todoEl = document.querySelector('#todos');
  const { searchText, hideCompleted } = getFilters();
  const filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;

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
    renderTodos();
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
    renderTodos();
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

export { generateTodoDOM, renderTodos, generateSummaryDOM };
