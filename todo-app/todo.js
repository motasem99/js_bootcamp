const todo = [
  {
    text: 'order cat food',
    completed: true,
  },
  {
    text: 'clean kitchen',
    completed: false,
  },
  {
    text: 'buy food',
    completed: true,
  },
  {
    text: 'do work',
    completed: false,
  },
  {
    text: 'exercise',
    completed: true,
  },
];

const inCompleteTodos = todo.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `you have ${inCompleteTodos.length} todo left`;
document.querySelector('body').appendChild(summary);

todo.forEach(function (todo) {
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('body').appendChild(p);
});

/////////////////////

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function (p) {
//   if (p.textContent.includes('the')) {
//     p.remove();
//   }
// });

// listen for new todo creation

document.querySelector('#add-todo').addEventListener('click', function (e) {
  e.target.textContent = 'was clicked babe';
  const addH1 = document.createElement('h1');
  addH1.textContent = 'this is h1';
  document.querySelector('body').appendChild(addH1);
});

document
  .querySelector('#add-todo-text')
  .addEventListener('input', function (e) {
    console.log(e.target.value);
  });
