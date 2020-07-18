let name = '  mutasem kwaik ';

console.log(name.length);
console.log(name.toUpperCase());

let password = 'abc123password980';
console.log(password.includes('password'));

console.log(name.trim());

// challenge

let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes('password')) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidPassword('asdcv'));
console.log(isValidPassword('asmnkj@##$%$%^^'));
console.log(isValidPassword('asmdn@#lkwppassword'));
