import { useEffect, useState } from "react";
import { getAssignments } from "../services/assignmentService";
import AssignmentCard from "../components/AssignmentCard";
import AddAssignmentModal from "../components/AddAssignmentModal";

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  const loadAssignments = async () => {
    try {
      const res = await getAssignments();
      setAssignments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        📋 Assignments
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-5">

          {assignments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              No Assignments Found
            </div>
          ) : (
            assignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
              />
            ))
          )}

        </div>

        <AddAssignmentModal />

      </div>

    </div>
  );
}

export default Assignments;