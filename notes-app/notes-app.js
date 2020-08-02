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
  sortBy: 'byEdited',
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
  const timeStamp = moment().valueOf();
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp,
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
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment();
// now.add(1, 'week').subtract(20, 'days');
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());
// const nowTimeStamp = now.valueOf();
// console.log(moment(nowTimeStamp).toString());

// const birthday = moment();
// birthday.year(1999).month(3).day(27);
// console.log(birthday.format('MMM D ,YYYY'));

/////////////////////////////////

// 1. add createdAt and updatedAt to the new notes (store timestamp)
// 2. update updatedAt when someOne edits a title or body
// 3. delete all old notes before testing
