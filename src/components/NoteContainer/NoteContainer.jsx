import React from "react";
import Note from "../Notes/Note.jsx";
import "./NoteContainer.css";

export default function NoteContainer(props) {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverseArray(props.notes);

  return (
    <div className="note-container">
      <h3>My Notes</h3>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => <Note key={item.id} note={item}
          deleteNote={props.deleteNote} 
          updateText={props.updateText} />)
        ) : (
          <h3 className="note-container_noNotes-text">No Notes present</h3>
        )}
      </div>
    </div>
  );
}
