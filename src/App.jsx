import React from "react";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}
