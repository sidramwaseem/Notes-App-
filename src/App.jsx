import React from "react";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

export default function App() {

  const [notes, setNotes] = React.useState([])
  
  function addNote(color){
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now()+""+Math.floor(Math.random()*78) ,
      text:"",
      time:Date.now(),
      color:color
    })
    setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}
