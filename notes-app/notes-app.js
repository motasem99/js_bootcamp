const notes = getSavedNotes();
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
  notes.push({
    id: uuidv4(),
    title: '',
    body: '',
  });
  savedNotes(notes);
  renderNotes(notes, filters);
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
