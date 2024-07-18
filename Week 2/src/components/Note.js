import React from 'react';

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <h5>{note.title}</h5>
      <p>{note.content}</p>
      <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
      <button className="btn btn-primary" onClick={() => onEdit(note)}>Edit</button>
    </div>
  );
};

export default Note;
