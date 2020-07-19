const todo = [
  'order cat food',
  'clean kitchen',
  'buy food',
  'do work',
  'drink water',
];

todo.splice(2, 1);
todo.push('lets walk');
todo.shift();

console.log(`you have ${todo.length} todo`);

todo.forEach(function (item, index) {
  const num = index + 1;
  console.log(`${num}: ${item} `);
});

console.log('++++++++++++++++++++++++++++++++');

for (let count = 0; count < todo.length; count++) {
  const num = count + 1;
  //   console.log(todo[count]);
  console.log(`${num}: ${todo[count]}`);
}

// console.log(`todo: ${todo[0]}`);
// console.log(`todo: ${todo[todo.length - 2]}`);
// console.log(`todo: ${todo[todo.length - 3]}`);
// console.log(`todo: ${todo[todo.length - 4]}`);
// console.log(`todo: ${todo[todo.length - 5]}`);
