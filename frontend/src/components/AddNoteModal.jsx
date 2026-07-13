import { useState } from "react";
import { addNote } from "../services/notesService";

function AddNoteModal() {
  const [note, setNote] = useState({
    title: "",
    subject: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addNote(note);

      alert("Note Added Successfully");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Failed to add note");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Add Note
      </h2>

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <input
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <textarea
        name="content"
        rows="8"
        placeholder="Write your notes..."
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-4"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
      >
        Save Note
      </button>

    </div>
  );
}

export default AddNoteModal;