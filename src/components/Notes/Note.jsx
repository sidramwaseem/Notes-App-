import React from "react";
import deleteIcon from "../../assets/delete-icon.png"
import "./Note.css";

function Note(props) {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note_footer">
        <p>{props.note.time}</p>
        <img src={deleteIcon} alt="delete-icon"/>
      </div>
    </div>
  );
}

export default Note;
