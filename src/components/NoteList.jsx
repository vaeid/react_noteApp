import React from 'react';

export default function NoteList({ notes, onDelete }) {
  console.log(notes);
  return (
    <div className='note-list'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelete }) {
  return (
    <div className='note-item'>
      <div className='note-item__header'>
        <div>
          <p className='title'> {note.title}</p>
          <p className='desc'> {note.desc}</p>
        </div>
        <div className='actions'>
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type='checkbox' name='' id='' />
        </div>
      </div>
      <div className='note-item__footer'>{new Date(note.createdAt).toLocaleDateString()}</div>
    </div>
  );
}
