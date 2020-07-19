const notes = ['note 1', 'note 2', 'note 3'];

// console.log(notes.pop());
// notes.push('my new note');

// console.log(notes.shift());
// notes.unshift('my first note');

// notes.splice(1, 0, 'note 4', 'note 5');
// notes.splice(1, 1, 'note 5');

notes[2] = 'this is now new note 3';

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes.length);
console.log(notes);

// counting... 1

for (let count = 0; count <= 2; count++) {
  console.log(count);
}

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}
