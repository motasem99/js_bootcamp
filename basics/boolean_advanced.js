let inAccountLocked = false;
let userRule = 'user';

if (inAccountLocked) {
  console.log('is account locked');
} else if (userRule === 'admin') {
  console.log('welcome admin');
} else {
  console.log('welcome');
}

let temp = 45;

if (temp <= 32) {
  console.log('it is freezing outside');
} else if (temp >= 22) {
  console.log('it is hot outside');
} else {
  console.log('go for it. it is pretty nice');
}
