let todos = [
  // {
  //   text: 'order cat food',
  //   completed: true,
  // },
  // {
  //   text: 'clean kitchen',
  //   completed: false,
  // },
  // {
  //   text: 'buy food',
  //   completed: true,
  // },
  // {
  //   text: 'do work',
  //   completed: false,
  // },
  // {
  //   text: 'exercise',
  //   completed: true,
  // },
];

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

// 1. setup a div contain for todos
// 2. setup filters (searchText) and wir up a new filters input to change it
// 3. create a renderTodos function to render and render the latest filtered data

const filters = {
  searchText: '',
  hideCompleted: false,
};

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

  const summary = document.createElement('h2');
  summary.textContent = `you have ${inCompleteTodos.length} todo left`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  });
};

renderTodos(todos, filters);

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function (p) {
//   if (p.textContent.includes('the')) {
//     p.remove();
//   }
// });

// listen for new todo creation

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//   e.target.textContent = 'was clicked babe';
//   const addH1 = document.createElement('h1');
//   addH1.textContent = 'this is h1';
//   document.querySelector('body').appendChild(addH1);
// });

// listen for todo text change

// document
//   .querySelector('#add-todo-text')
//   .addEventListener('input', function (e) {
//     console.log(e.target.value);
//   });
///////////////////////////
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// 1. create a form with a single input for todo text
// 2. setup an submit handler and cancel the default action
// 3. add a new item to the todos array with that text data (completed value of false)
// 4. rerender the application
// 5. clear the input field value

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });

  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

// 1. create a checkbox and and setup event listener -> "hide completed"
// 2. create new hideCompleted filter (default false)
// 3. update hideCompleted an rerender list on checkbox change
// 4. setup rerenderTodos to remove completed items

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });