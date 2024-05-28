import Message from './Message';

export default function NoteStatus({ notes }) {
  const all = notes.length;
  const completed = notes.filter((note) => note.completed).length;
  const open = all - completed;
  if (all) {
    return (
      <ul className='note-status'>
        <li className=''>
          All <span>{all}</span>
        </li>
        <li className=''>
          Completed <span>{completed}</span>
        </li>
        <li className=''>
          Open <span>{open}</span>
        </li>
      </ul>
    );
  }

  return (
    <Message icon='ℹ️'>
      <span>No Notes has added</span>
    </Message>
  );
}
