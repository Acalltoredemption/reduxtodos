import React, { ChangeEvent } from 'react';
import './NewNoteInput.css'

interface NewNoteInputProps {
    addNote(note:string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
    const [note, setNote] = React.useState("");

    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }
    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }
    return(
        <div className="inputdiv">
        <input className="noteinput" value={note} onChange={updateNote} type="text" name="note" placeholder="Note" />
        <button className="submitbtns" onClick={onAddNoteClick}>Add Note</button>
        </div>
    )
}