let temp = 150;

if (temp >= 65 && temp <= 90) {
  console.log('it is pretty nice outside');
} else if (temp <= 0 || temp >= 120) {
  console.log('do not go outside');
} else {
  console.log('eh. do what you want');
}

let isGuestOneVegan = true;

let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('offer up vegan dishes');
} else if (isGuestOneVega || isGuestTwoVegan) {
  console.log('make sure to offer up some vegan dishes');
} else {
  console.log('offer up anything on the menu');
}
