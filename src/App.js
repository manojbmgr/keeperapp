import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
const App = () => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const addNote = (newNote) => setNotes([...notes, newNote]);
    const deleteNote = (index) => setNotes(notes.filter((_, i) => i !== index));
    return (
        <div className="container-fluid">
            <Header />
            <AddNote onAdd={addNote} />
            <div className="row mt-4">
                {notes.map((note, index) => (
                    <Note key={index} {...note} onDelete={() => deleteNote(index)} />
                ))}
            </div>
            <Footer />
        </div>
    );
};
export default App;
