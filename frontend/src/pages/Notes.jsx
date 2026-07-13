import { useEffect, useState } from "react";
import { getNotes } from "../services/notesService";
import NoteCard from "../components/NoteCard";
import AddNoteModal from "../components/AddNoteModal";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const loadNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-6">
        📝 Notes
      </h1>

      <input
        type="text"
        placeholder="🔍 Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-2xl border mb-8"
      />

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-5">

          {filteredNotes.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              No Notes Found
            </div>
          ) : (
            filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
              />
            ))
          )}

        </div>

        <AddNoteModal />

      </div>

    </div>
  );
}

export default Notes;