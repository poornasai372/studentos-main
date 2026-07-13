import { useState } from "react";
import { deleteNote, updateNote } from "../services/notesService";

function NoteCard({ note }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: note.title,
    subject: note.subject,
    content: note.content,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateNote(note.id, formData);

      alert("Note Updated Successfully");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Failed to update note");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this note?")) return;

    try {
      await deleteNote(note.id);

      alert("Note Deleted");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  if (editing) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          Edit Note
        </h2>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <textarea
          rows="8"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <div className="flex gap-3 mt-5">

          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={() => setEditing(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        {note.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {note.subject}
      </p>

      <p className="mt-4 whitespace-pre-wrap">
        {note.content}
      </p>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => setEditing(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default NoteCard;