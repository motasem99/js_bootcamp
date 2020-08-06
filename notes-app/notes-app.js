'use strict';

let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited',
};

renderNotes(notes, filters);

document.querySelector('#createNote').addEventListener('click', (e) => {
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
  location.assign(`edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
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
