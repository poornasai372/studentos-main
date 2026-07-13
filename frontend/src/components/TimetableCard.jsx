import { useState } from "react";
import { deleteClass, updateClass } from "../services/timetableService";

function TimetableCard({ item }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    subject: item.subject,
    faculty: item.faculty,
    room: item.room,
    day: item.day,
    start_time: item.start_time,
    end_time: item.end_time,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateClass(item.id, formData);

      alert("Class Updated");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this class?")) return;

    try {
      await deleteClass(item.id);

      alert("Class Deleted");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  if (editing) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-4">
          Edit Class
        </h2>

        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="room"
          value={formData.room}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="start_time"
          value={formData.start_time}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-3"
        />

        <input
          name="end_time"
          value={formData.end_time}
          onChange={handleChange}
          className="w-full border rounded-xl p-5"
        />

        <div className="flex gap-3 mt-5">

          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={() => setEditing(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-xl"
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
        {item.subject}
      </h2>

      <p className="mt-3">👨‍🏫 {item.faculty}</p>

      <p>🏫 {item.room}</p>

      <p>📅 {item.day}</p>

      <p>
        ⏰ {item.start_time} - {item.end_time}
      </p>

      <div className="flex gap-3 mt-5">

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

export default TimetableCard;