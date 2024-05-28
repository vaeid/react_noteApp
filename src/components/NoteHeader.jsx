export default function NoteHeader({ notes, sortBy, onSort }) {
  const all = notes.length;
  return (
    <div className='note-header'>
      <h2>My Notes ({all})</h2>
      <select name='' id='' value={sortBy} onChange={onSort}>
        <option value='latest'>sort by latest</option>
        <option value='earliest'>sort by earliest</option>
        <option value='completed'>sort by completed</option>
      </select>
    </div>
  );
}
