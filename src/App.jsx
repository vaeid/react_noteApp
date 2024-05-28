import React, { useState } from 'react';
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';
export default function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  const handelDelete = (id) => {
    setNotes((pNotes) => pNotes.filter((note) => note.id !== id));
  };
  const handelAddNote = (newNote) => {
    setNotes((pNotes) => [...pNotes, newNote]);
  };
  const handelCompleteNote = (e) => {
    setNotes((pNotes) =>
      pNotes.map((note) => (note.id == Number(e.target.value) ? { ...note, completed: !note.completed } : note))
    );
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
