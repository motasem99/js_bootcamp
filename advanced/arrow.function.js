const square = (num) => num * num;

const squareLong = (num) => {
  return num * num;
};

console.log(square(3));

const people = [
  { name: 'mutasem', age: 21 },
  { name: 'ahmed', age: 31 },
  { name: 'imad', age: 22 },
];

// const under30 = people.filter(function (person) {
//   return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const person = people.find((person) => person.age === 22);
console.log(person.name);
