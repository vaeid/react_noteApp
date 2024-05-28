export default function NoteList({ notes, onDelete, onComplete, sortBy }) {
  let sortedNotes = notes;
  if (sortBy === 'completed') {
    sortedNotes = [...sortedNotes].sort((a, b) => a.completed - b.completed);
  }
  if (sortBy === 'earliest') {
    sortedNotes = [...sortedNotes].sort((a, b) => a.id - b.id);
  }
  if (sortBy === 'latest') {
    sortedNotes = [...sortedNotes].sort((a, b) => b.id - a.id);
  }
  console.log(notes);
  return (
    <div className='note-list'>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelete, onComplete }) {
  return (
    <div className={`note-item ${note.completed ? 'completed' : ''}`}>
      <div className='note-item__header'>
        <div>
          <p className='title'> {note.title}</p>
          <p className='desc'> {note.desc}</p>
        </div>
        <div className='actions'>
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type='checkbox' checked={note.completed} value={note.id} id={note.id} onChange={onComplete} />
        </div>
      </div>
      <div className='note-item__footer'>{new Date(note.createdAt).toLocaleDateString()}</div>
    </div>
  );
}
