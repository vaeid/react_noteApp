import React, { useState } from 'react';
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
export default function App() {
  const [notes, setNotes] = useState([]);
  const handelDelete = (id) => {
    setNotes((pNotes) => pNotes.filter((note) => note.id !== id));
  };
  const handelAddNote = (newNote) => {
    setNotes((pNotes) => [...pNotes, newNote]);
  };
  return (
    <div className='container'>
      <div className='note-header'>header</div>
      <div className='note-app'>
        <AddNewNote onAddNote={handelAddNote} />
        <div className='note-container'>
          <NoteList notes={notes} onDelete={handelDelete} />
        </div>
      </div>
    </div>
  );
}
