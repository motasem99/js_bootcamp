let myBook = {
  title: '1985',
  author: 'george orwell',
  pageCount: 325,
};

let otherBook = {
  title: 'a people history',
  author: 'howard zin',
  pageCount: 721,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.summary);

// challenge
//

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

let temp = convertFahrenheit(74);
console.log(temp);
