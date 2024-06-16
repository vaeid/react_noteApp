import React, { useReducer, useState } from 'react';
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';
function noteReducer(state, { type, payload }) {
  switch (type) {
    case 'add':
      return [...state, payload];
    case 'delete':
      return state.filter((note) => note.id !== payload);
    case 'complete':
      return state.map((note) => (note.id == Number(payload) ? { ...note, completed: !note.completed } : note));

    default:
      throw new Error('Unknown Error: ' + type);
      break;
  }
}
export default function App() {
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [sortBy, setSortBy] = useState('latest');

  const handelDelete = (id) => {
    dispatch({ type: 'delete', payload: id });
  };
  const handelAddNote = (newNote) => {
    dispatch({ type: 'add', payload: newNote });
  };
  const handelCompleteNote = (e) => {
    dispatch({ type: 'complete', payload: e.target.value });
  };

  return (
    <div className='container'>
      <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />

      <div className='note-app'>
        <AddNewNote onAddNote={handelAddNote} />
        <div className='note-container'>
          <NoteStatus notes={notes} />
          <NoteList notes={notes} sortBy={sortBy} onDelete={handelDelete} onComplete={handelCompleteNote} />
        </div>
      </div>
    </div>
  );
}
