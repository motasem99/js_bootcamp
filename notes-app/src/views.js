import moment from 'moment';
import { getFilters } from './filters';
import { sortNotes, getNotes } from './notes';

// generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p');

  // setup the the note title text

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'unnamed note';
  }
  textEl.classList.add('list-item__title');
  noteEl.appendChild(textEl);

  // setup the link
  noteEl.setAttribute('href', `edit.html#${note.id}`);
  noteEl.classList.add('list-item');

  // setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle');
  noteEl.appendChild(statusEl);

  return noteEl;
};

// render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes');
  const filters = getFilters();
  const notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'no notes to show';
    emptyMessage.classList.add('empty-message');
    notesEl.appendChild(emptyMessage);
  }
};

const initializeEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title');
  const bodyElement = document.querySelector('#note-body');
  const dateElement = document.querySelector('#last-edited');
  const notes = getNotes();
  const note = notes.find((note) => note.id === noteId);

  if (!note) {
    location.assign('/notes-app/index.html');
  }

  titleElement.value = note.title;
  bodyElement.value = note.body;
  dateElement.textContent = generateLastEdited(note.updated_at);
};

// generate the last edited message
const generateLastEdited = (timestamp) => {
  return `last edited ${moment(timestamp).fromNow()}`;
};

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage };
