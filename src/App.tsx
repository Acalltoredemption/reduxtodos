import React from 'react';
import { NewNoteInput } from './NewNoteInput';
import {useSelector, useDispatch} from 'react-redux';
import {NotesState} from './notesReducer';
import {addNote} from './actions';
import './App.css';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
  const dispatch = useDispatch()

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
  return (
    <>
    <NewNoteInput addNote={onAddNote} />
    <div className="notelist-card">
    <ul>
      <h2>Notes</h2>
      {notes.map((note) => {
       return <li className="noteitem-style" key={note}>{note}</li>
      })} 
    </ul>
    </div>
    </>
  );
}

export default App;
