import { useEffect, useState } from "react";
import AddClassModal from "../components/AddClassModal";
import TimetableCard from "../components/TimetableCard";
import { getTimetable } from "../services/timetableService";

function Timetable() {
  const [classes, setClasses] = useState([]);

  const loadClasses = async () => {
    try {
      const res = await getTimetable();

      // Handles both API response formats
      if (Array.isArray(res.data)) {
        setClasses(res.data);
      } else if (res.data.data) {
        setClasses(res.data.data);
      } else {
        setClasses([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadClasses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">📅 Timetable</h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-5">
          {classes.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-500">
              No classes added yet.
            </div>
          ) : (
            classes.map((item) => (
              <TimetableCard
                key={item.id}
                item={item}
              />
            ))
          )}
        </div>

        <AddClassModal onClassAdded={loadClasses} />

      </div>
    </div>
  );
}

export default Timetable;