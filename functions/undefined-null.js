// undefined for variables

let name;

name = 'mutasem';

if (name === undefined) {
  console.log('please provide a name');
} else {
  console.log(name);
}

// undefined for function arguments
// undefined as function return default value

let square = function (num) {
  console.log(num);
};

let result = square();
console.log(result);

// null as assigned value

let age = 27;
age = null;

console.log(age);
