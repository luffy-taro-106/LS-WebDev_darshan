import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Toggle from "./components/Toggle";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./keep_2020q4_48dp.png";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setNoteToEdit(null);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="header">
        <Navbar expand="lg" >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <img
              src={logo}
              alt="logo"
              width="30"
              height="30"
              className="imge"
            />
            <Navbar.Brand href="#home">Keep</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Reminders</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="container">
        <NoteForm
          addNote={addNote}
          editNote={editNote}
          noteToEdit={noteToEdit}
        />
        <NoteList notes={notes} onDelete={deleteNote} onEdit={setNoteToEdit} />
      </div>
    </div>
  );
} 

export default App;
