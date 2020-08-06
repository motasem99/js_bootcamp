// const myAge = 21;
// const massage = myAge >= 18 ? 'you can vote' : 'you can not vote';
// console.log(massage);

const myAge = 21;
const showPage = () => {
  return 'showing the page';
};
const showErrorPage = () => {
  return 'showing the error page';
};
const message = myAge >= 18 ? showPage() : showErrorPage();
console.log(message);

const team = ['mutasem', 'ahmed'];
console.log(
  team.length <= 4 ? `team size ${team.length}` : 'too many people on your team'
);
