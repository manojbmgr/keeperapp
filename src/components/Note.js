import React from "react";
function Note({ title, content, onDelete }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card shadow-sm p-3 mb-3">
        <h2 className="h5">{title}</h2>
        <p className="text-muted">{content}</p>
        <button
          onClick={onDelete}
          className="btn btn-danger mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Note;
