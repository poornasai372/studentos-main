import { useEffect, useState } from "react";
import { getAttendance } from "../services/attendanceService";
import AttendanceCard from "../components/AttendanceCard";
import AddAttendanceModal from "../components/AddAttendanceModal";

function Attendance() {
  const [attendance, setAttendance] = useState([]);

  const loadAttendance = async () => {
    try {
      const res = await getAttendance();
      setAttendance(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAttendance();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        📊 Attendance Tracker
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-5">

          {attendance.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              No Attendance Records
            </div>
          ) : (
            attendance.map((item) => (
              <AttendanceCard
                key={item.id}
                item={item}
              />
            ))
          )}

        </div>

        <AddAttendanceModal />

      </div>

    </div>
  );
}

export default Attendance;