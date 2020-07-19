const notes = [
  {
    title: 'my next trip',
    body: 'i would like to go to spain',
  },
  {
    title: 'habits to work on',
    body: 'exercise, eating a bit better',
  },
  {
    title: 'office modification',
    body: 'get a new seat',
  },
];

// console.log(notes.pop());
// notes.push('my new note');

// console.log(notes.shift());
// notes.unshift('my first note');

// notes.splice(1, 0, 'note 4', 'note 5');
// notes.splice(1, 1, 'note 5');

////////

// notes[2] = 'this is now new note 3';

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// counting... 1

// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count]);
// }

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title === noteTitle;
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.includes(query.toLowerCase());
    const isBodyMatch = note.body.includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, 'work'));
// const findNote = function (note, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//       return note.title === noteTitle;
//     });
//     return notes[index];
//   };

const note = findNote(notes, 'office modification');
console.log(note);

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === 'habits to work on';
// });
// console.log(index);
