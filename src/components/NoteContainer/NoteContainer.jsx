import React from "react";
import Note from "../Notes/Note.jsx";
import "./NoteContainer.css";

export default function NoteContainer() {
  return (
    <div className="note-container">
      <h3>Notes</h3>
      <div className="note-container_notes custom-scroll">
        <Note
          note={{
            text: "Whatever",
            time: "4:32PM",
            color: "cyan",
          }}
        />
        <Note
          note={{
            text: "Whatever",
            time: "4:32PM",
            color: "cyan",
          }}
        />
        <Note
          note={{
            text: "Whatever",
            time: "4:32PM",
            color: "cyan",
          }}
        />
        <Note
          note={{
            text: "Whatever",
            time: "4:32PM",
            color: "cyan",
          }}
        />
        <Note
        note={{
          text: "Whatever",
          time: "4:32PM",
          color: "cyan",
        }}
      />
      <Note
      note={{
        text: "Whatever",
        time: "4:32PM",
        color: "cyan",
      }}
    />
    <Note
    note={{
      text: "Whatever",
      time: "4:32PM",
      color: "cyan",
    }}
  />
      </div>
    </div>
  );
}
