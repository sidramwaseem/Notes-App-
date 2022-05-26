import React from "react";
import deleteIcon from "../../assets/delete-icon.png"
import "./Note.css";

function Note(props) {

  const formatDate = (value) =>{
    if(!value) return ""

    const date = new Date(value);
    const monthNames=['', 'January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let hrs = date.getHours();
    let amPm = hrs>12?"PM":"AM";
    hrs = hrs?hrs:"12";
    hrs = hrs>12?hrs=24-hrs:hrs;

    let min = date.getMinutes();

    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    
  }

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note_footer">
        <p>{props.note.time}</p>
        <img src={deleteIcon} alt="delete-icon" onClick={()=>props.deleteNote(props.note.id)}/>
      </div>
    </div>
  );
}

export default Note;
