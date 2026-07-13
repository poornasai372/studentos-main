import { useState } from "react";
import { addAssignment } from "../services/assignmentService";

function AddAssignmentModal() {

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    due_date: "",
    priority: "Medium",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addAssignment(formData);

      alert("Assignment Added Successfully");

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Failed to Add Assignment");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Add Assignment
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
        name="description"
        placeholder="Description"
        rows="4"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <input
        type="date"
        name="due_date"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <select
        name="priority"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-5"
      >
        <option>Low</option>
        <option selected>Medium</option>
        <option>High</option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
      >
        Save Assignment
      </button>

    </div>
  );
}

export default AddAssignmentModal;