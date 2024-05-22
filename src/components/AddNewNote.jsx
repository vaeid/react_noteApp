import React, { useState } from 'react';

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      desc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setDesc('');
    setTitle('');
    onAddNote(newNote);
  };

  return (
    <div className='add-new-note'>
      <h2>Add New Note</h2>
      <form className='note-form' onSubmit={handelSubmit}>
        <input
          type=''
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='text-field'
          placeholder='Title'
        />
        <input
          type=''
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='text-field'
          placeholder='Discription'
        />
        <button className='btn btn--primary'>Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
