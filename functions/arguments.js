// multiple argument

let add = function (a, b) {
  return a + b;
};

let result = add(10, 23);
console.log(result);

// default argument

let getScoreText = function (name = 'Anonymous', score = 0) {
  //   return 'name: ' + name + ' - score: ' + score;
  return `name: ${name} - Score: ${score}`;
};

// let scoreText = getScoreText('mutasem');
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// challenge

let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;

  return `A ${percent}% tip on $${total} would be $${tip}`;
};

let tip = getTip(60);
console.log(tip);

let name = 'mutasem';
let age = 21;
console.log(`hey, my name is ${name}, i am ${age} years old`);
