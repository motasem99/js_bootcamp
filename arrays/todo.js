// const todo = [
//   'order cat food',
//   'clean kitchen',
//   'buy food',
//   'do work',
//   'drink water',
// ];

// todo.splice(2, 1);
// todo.push('lets walk');
// todo.shift();

// console.log(`you have ${todo.length} todo`);

// todo.forEach(function (item, index) {
//   const num = index + 1;
//   console.log(`${num}: ${item} `);
// });

// console.log('++++++++++++++++++++++++++++++++');

// for (let count = 0; count < todo.length; count++) {
//   const num = count + 1;
//   //   console.log(todo[count]);
//   console.log(`${num}: ${todo[count]}`);
// }

// console.log(`todo: ${todo[0]}`);
// console.log(`todo: ${todo[todo.length - 2]}`);
// console.log(`todo: ${todo[todo.length - 3]}`);
// console.log(`todo: ${todo[todo.length - 4]}`);
// console.log(`todo: ${todo[todo.length - 5]}`);

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
// 1. convert array to arry of objects -> text , complete
// 2. create function to remove a todo by text value

const deleteTodos = function (todo, todoText) {
  const index = todo.findIndex(function (todos) {
    return todos.text === todoText;
  });
  if (index > -1) {
    todo.splice(index, 1);
  }
};

// deleteTodos(todo, 'buy food');
// console.log(todo);

const getThingsTodos = function (todo) {
  return todo.filter(function (todos) {
    return todos.completed === false;
  });
};
//console.log(getThingsTodos(todo));

const sortTodo = function (todo) {
  todo.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodo(todo);
console.log(todo);
