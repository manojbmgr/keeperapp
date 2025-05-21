import React from "react";
import { Trash } from "react-bootstrap-icons";
function Note({ title, content, onDelete }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card shadow-sm p-3 mb-3">
        <h2 className="h5">{title}</h2>
        <p className="text-muted">{content}</p>
        <div className="text-end">
          <button
            onClick={onDelete}
            className="btn mt-2"
          >
            <Trash size={30} color="red" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Note;
