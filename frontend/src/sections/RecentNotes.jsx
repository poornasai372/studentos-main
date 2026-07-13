function RecentNotes() {
  const notes = [
    "Artificial Intelligence",
    "DBMS Unit 3",
    "Computer Networks",
    "Python Programming",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        📝 Recent Notes
      </h2>

      <div className="space-y-3">

        {notes.map((note) => (

          <div
            key={note}
            className="bg-gray-100 rounded-xl p-4"
          >
            {note}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentNotes;