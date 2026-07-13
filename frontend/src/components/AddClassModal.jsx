import { useState } from "react";
import { addClass } from "../services/timetableService";

function AddClassModal({ onClassAdded }) {
  const [formData, setFormData] = useState({
    subject: "",
    faculty: "",
    room: "",
    day: "",
    start_time: "",
    end_time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addClass(formData);

      alert("Class added successfully!");

      // Refresh timetable
      if (onClassAdded) {
        onClassAdded();
      }

      // Clear form
      setFormData({
        subject: "",
        faculty: "",
        room: "",
        day: "",
        start_time: "",
        end_time: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add class");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-7">
      <h2 className="text-2xl font-bold mb-6">Add New Class</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="faculty"
          placeholder="Faculty"
          value={formData.faculty}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="room"
          placeholder="Room"
          value={formData.room}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="day"
          placeholder="Day"
          value={formData.day}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="start_time"
          placeholder="Start Time"
          value={formData.start_time}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="end_time"
          placeholder="End Time"
          value={formData.end_time}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700"
        >
          Save Class
        </button>
      </form>
    </div>
  );
}

export default AddClassModal;