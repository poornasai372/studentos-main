import { useState } from "react";
import { addAttendance } from "../services/attendanceService";

function AddAttendanceModal() {
  const [formData, setFormData] = useState({
    subject: "",
    total_classes: "",
    classes_attended: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const total = Number(formData.total_classes);
      const attended = Number(formData.classes_attended);

      const percentage =
        total > 0 ? Number(((attended / total) * 100).toFixed(2)) : 0;

      await addAttendance({
        subject: formData.subject,
        total_classes: total,
        classes_attended: attended,
        percentage,
      });

      alert("Attendance Added Successfully");

      window.location.reload();
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to Add Attendance");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-5">
        Add Attendance
      </h2>

      <input
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <input
        type="number"
        name="total_classes"
        placeholder="Total Classes"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-3"
      />

      <input
        type="number"
        name="classes_attended"
        placeholder="Attended Classes"
        onChange={handleChange}
        className="w-full border rounded-xl p-3 mb-5"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
      >
        Save
      </button>
    </div>
  );
}

export default AddAttendanceModal;