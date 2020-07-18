let myBook = {
  title: '1985',
  author: 'mutasem kwaik',
  pageCount: 325,
};
// console.log(myBook);

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'animal form';

console.log(`${myBook.title} by ${myBook.author}`);

let info = {
  name: 'mutasem imad',
  age: 21,
  location: 'palestine',
};
console.log(`${info.name} is ${info.age} and lives in ${info.location}`);

info.age = info.age + 1;

console.log(`${info.name} is ${info.age} and lives in ${info.location}`);
