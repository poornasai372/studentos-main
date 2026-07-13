import { deleteAssignment } from "../services/assignmentService";

function AssignmentCard({ assignment }) {

  const handleDelete = async () => {
    if (!window.confirm("Delete this assignment?")) return;

    try {
      await deleteAssignment(assignment.id);
      alert("Assignment Deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        {assignment.title}
      </h2>

      <p className="mt-2">
        📚 {assignment.subject}
      </p>

      <p className="mt-2">
        📅 {assignment.due_date}
      </p>

      <p className="mt-2">
        🚦 {assignment.priority}
      </p>

      <p className="mt-2">
        ✅ {assignment.status}
      </p>

      <p className="mt-4">
        {assignment.description}
      </p>

      <button
        onClick={handleDelete}
        className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
      >
        Delete
      </button>

    </div>
  );
}

export default AssignmentCard;