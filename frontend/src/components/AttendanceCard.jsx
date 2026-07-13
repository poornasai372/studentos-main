import { deleteAttendance } from "../services/attendanceService";

function AttendanceCard({ item }) {
  const percentage =
    item.total_classes === 0
      ? 0
      : Math.round((item.attended_classes / item.total_classes) * 100);

  const handleDelete = async () => {
    if (!window.confirm("Delete this subject?")) return;

    try {
      await deleteAttendance(item.id);
      alert("Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        {item.subject}
      </h2>

      <p className="mt-3">
        Total Classes: {item.total_classes}
      </p>

      <p>
        Attended: {item.attended_classes}
      </p>

      <h3 className="mt-4 text-3xl font-bold">
        {percentage}%
      </h3>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-3">

        <div
          className={`h-3 rounded-full ${
            percentage >= 75
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <button
        onClick={handleDelete}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
      >
        Delete
      </button>

    </div>
  );
}

export default AttendanceCard;