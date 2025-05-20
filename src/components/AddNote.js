import React, { useState } from "react";
function AddNote({ onAdd }) {
    const [note, setNote] = useState({ title: "", content: "" });
    const [error, setError] = useState("");
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    }
    function submitNote(event) {
        event.preventDefault();
        if (!note.title || !note.content) {
            setError("Both fields are required!");
            return;
        }
        setError("");
        onAdd(note);
        setNote({ title: "", content: "" });
    }
    return (
        <form className="container mt-3 d-flex flex-column align-items-center" onSubmit={submitNote}>
            <div className="card shadow-sm p-3 mb-3 w-50">
                {error && <p className="text-danger">{error}</p>}
                <input
                    className="form-control mb-2 rounded-pill"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="form-control mb-2 rounded"
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    onChange={handleChange}
                    required
                />
                <div className="text-end">
                    <button className="btn btn-warning rounded-pill px-3" type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}
export default AddNote;
