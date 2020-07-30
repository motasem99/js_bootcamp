let notes = getSavedNotes();
// [
// {
//   title: 'my next trip',
//   body: 'i would like to go to spain',
// },
// {
//   title: 'habits to work on',
//   body: 'exercise, eating a bit better',
// },
// {
//   title: 'office modification',
//   body: 'get a new seat',
// },
//];

const filters = {
  searchText: '',
};

// // check for existing saved data
// const notesJSON = localStorage.getItem('notes');
// if (notesJSON !== null) {
//   notes = JSON.parse(notesJSON);
// }

renderNotes(notes, filters);

document.querySelector('#createNote').addEventListener('click', function (e) {
  // e.target.textContent = 'the button was clicked';
  const id = uuidv4();
  notes.push({
    id: id,
    title: '',
    body: '',
  });
  savedNotes(notes);
  // renderNotes(notes, filters);
  location.assign(`edit.html#${id}`);
  // const newParagraph = document.createElement('p');
  // newParagraph.textContent = 'this is new paragraph from js';
  // document.querySelector('body').appendChild(newParagraph);
});

// document.querySelector('#removeAll').addEventListener('click', function () {
//   document.querySelectorAll('.note').forEach(function (note) {
//     note.remove();
//   });
// });

document.querySelector('#search-text').addEventListener('input', function (e) {
  // console.log(e.target.value);
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = '';
// });

// // DOM - document object model

// // query and remove
// // const p = document.querySelector('p');
// // p.remove();

// // query all and remove

// const ps = document.querySelectorAll('p');
// ps.forEach(function (p) {
//   p.textContent = '*******';
//   //console.log(p.textContent);
//   //   p.remove();
// });

// // add new element

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'this is new paragraph from js';
// document.querySelector('body').appendChild(newParagraph);

///////////////////
// document.querySelector('#for-fun').addEventListener('change', function (e) {
//   console.log(e.target.checked);
// });

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
});

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// unix epoch - january 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

//console.log(now.getTime());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`day of month: ${now.getDate()}`);
// console.log(`hour: ${now.getHours()}`);
// console.log(`minute: ${now.getMinutes()}`);
// console.log(`second: ${now.getSeconds()}`);

const dateOne = new Date('march 21 2019 12:00:00');
const dateTwo = new Date();

const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwoTimestamp) {
  console.log(dateOne.toString());
} else if (dateTwoTimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
}
